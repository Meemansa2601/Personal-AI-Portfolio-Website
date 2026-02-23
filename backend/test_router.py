import asyncio
from openai import AsyncOpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = AsyncOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.getenv("OPENROUTER_API_KEY", ""),
)

async def test():
    try:
        response = await client.chat.completions.create(
            model="openrouter/free",
            messages=[{"role": "user", "content": "hi"}],
        )
        print("SUCCESS:", response.choices[0].message.content)
    except Exception as e:
        print("ERROR:", e)

asyncio.run(test())
