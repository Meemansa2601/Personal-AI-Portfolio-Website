# AI Portfolio Project

Welcome to the AI Portfolio Project! A fully responsive, modern full-stack web application featuring an integrated AI Chat Assistant powered by OpenRouter.

## Tech Stack
- **Frontend**: React, TypeScript, Vite, Tailwind CSS, Lucide React
- **Backend**: Python, FastAPI, SQLite, SQLAlchemy, OpenAI Async Client
- **AI Models**: Designed to run free models (e.g. `meta-llama/llama-3-8b-instruct:free` or `google/gemini-2.5-flash:free`) via OpenRouter.

## Folder Structure
- `/frontend`: The Vite+React frontend application.
- `/backend`: The Python API server.
- `DEPLOYMENT.md`: Instructions for hosting the platform for free.

## Getting Started

### 1. Setup Backend
```bash
cd backend
python -m venv venv
# On Windows: venv\Scripts\activate
# On Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
```

Create a `.env` file in the `/backend` folder and add your OpenRouter API Key:
```env
OPENROUTER_API_KEY=your_key_here
```

Start the FastAPI server:
```bash
uvicorn main:app --reload --port 8000
```

### 2. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` to see the magic happen! The frontend calls the backend API at `http://localhost:8000/api/chat`.
