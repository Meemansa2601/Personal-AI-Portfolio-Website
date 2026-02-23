import os
from openai import AsyncOpenAI
from dotenv import load_dotenv

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY", "")

# We use the free meta-llama model or gemini-flash per user requirement
MODEL = "openrouter/free"

client = AsyncOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)

SYSTEM_PROMPT = """You are an AI assistant representing Meemansa Gautam on her portfolio website. 
Your goal is to answer questions about her resume, skills, experience, and projects practically, professionally, and concisely.
Here is some context about Meemansa:
- Education: Bachelor of Technology in Computer Engineering at Cummins College of Engineering for Women, Nagpur (Aug'23-July'27), CGPA: 8.1.
- Experience: Web Development Intern at CodSoft (Feb-Mar 2025).
- Projects: EMR Data Processing System (Ongoing at Mahatme Eye Hospital), Weather App (React + API), Library Management System (C++).
- Skills: Java, C++, Python, JavaScript, React, Node.js, SQL, MongoDB. Learning Generative AI.
- Positions of Responsibility: Secretary-CSI (2025-2026), IEEE Member & Volunteer (2024-2025).
- Tone: Friendly, professional, and helpful. 
Respond using Markdown format. If you don't know the exact details, smoothly answer in a generic positive way highlighting her skills."""

async def get_ai_response(history: list, new_message: str) -> str:
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    
    # Add history
    for msg in history:
        messages.append({"role": msg.role, "content": msg.content})
    
    messages.append({"role": "user", "content": new_message})

    try:
        response = await client.chat.completions.create(
            model=MODEL,
            messages=messages,
        )
        return response.choices[0].message.content or "No response generated."
    except Exception as e:
        print(f"Error calling OpenRouter: {e}")
        return "Sorry, I am having trouble connecting to my AI brain right now. Please try again later!"
