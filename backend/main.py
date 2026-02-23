from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

import models
import schemas
from database import engine, get_db
from chat_engine import get_ai_response

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="AI Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Portfolio API"}

@app.post("/api/chat", response_model=schemas.ChatMessageResponse)
async def chat(request: schemas.ChatRequest, db: Session = Depends(get_db)):
    # Save user message to DB
    user_message = models.ChatMessage(
        session_id=request.session_id,
        role="user",
        content=request.message,
    )
    db.add(user_message)
    db.commit()
    db.refresh(user_message)

    # Get history for context
    history = db.query(models.ChatMessage).filter(
        models.ChatMessage.session_id == request.session_id
    ).order_by(models.ChatMessage.created_at.asc()).all()

    # Exclude the current current message we just added
    history_for_ai = history[:-1] 

    # Call AI Engine
    ai_response_content = await get_ai_response(history_for_ai, request.message)

    # Save AI response to DB
    ai_message = models.ChatMessage(
        session_id=request.session_id,
        role="assistant",
        content=ai_response_content,
    )
    db.add(ai_message)
    db.commit()
    db.refresh(ai_message)

    return ai_message

@app.get("/api/chat/history/{session_id}", response_model=List[schemas.ChatMessageResponse])
def get_chat_history(session_id: str, db: Session = Depends(get_db)):
    history = db.query(models.ChatMessage).filter(
        models.ChatMessage.session_id == session_id
    ).order_by(models.ChatMessage.created_at.asc()).all()
    return history
