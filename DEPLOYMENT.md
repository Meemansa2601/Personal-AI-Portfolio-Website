# Deployment Guide

This guide details how to deploy your AI portfolio to the world for free, using Vercel (or Cloudflare) for the frontend and Render for the backend.

## 1. Hosting the Backend on Render
Render.com offers a generous free tier for webservices which is perfect for FastAPI.

1. Push your repository to GitHub.
2. Sign in to [Render](https://render.com).
3. Click "New" -> "Web Service".
4. Connect your GitHub repository.
5. In the configuration:
   - **Name**: ai-portfolio-backend
   - **Root Directory**: `backend`
   - **Environment**: `Python`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port 10000`
6. Important: Go to the "Environment" tab and add your `OPENROUTER_API_KEY` mapping its value to your actual key.
7. Click **Create Web Service**. Wait for the endpoint to go live (e.g. `https://ai-portfolio-backend.onrender.com`).

*(Note: SQLite saves a file to the disk. On Render's Free tier, disk storage is ephemeral, so chat history will reset after inactivity spins down. Upgrade to PostgreSQL if persistent storage is strictly required.)*

## 2. Hosting the Frontend on Vercel
Vercel is ideal for Vite React applications.

1. **Update API Endpoint**: Open `frontend/src/components/Chatbot.tsx`. 
   Change `http://localhost:8000/api/chat` to your Render backend URL (e.g., `https://ai-portfolio-backend.onrender.com/api/chat`).
2. Commit and push the changes to GitHub.
3. Sign in to [Vercel](https://vercel.com).
4. Click "Add New" -> "Project".
5. Import your GitHub repository.
6. In the configuration:
   - **Framework Preset**: Vite
   - **Root Directory**: Select `frontend`
7. Click **Deploy**. Vercel will automatically run `npm run build` and launch the app globally.

Your AI Portfolio is now live!
