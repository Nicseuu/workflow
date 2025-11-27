# n8n for Railway Deployment

This repository deploys n8n on Railway.

## Environment variables required in Railway:

N8N_HOST=0.0.0.0  
N8N_PORT=5678  
N8N_PROTOCOL=http  
WEBHOOK_URL=https://YOUR-RAILWAY-APP.up.railway.app/  
N8N_EDITOR_BASE_URL=https://YOUR-RAILWAY-APP.up.railway.app  

## Deploy steps:

1. Push this repo to GitHub
2. Open Railway
3. New Project
4. Deploy from GitHub
5. Add environment variables
6. Deploy
7. Open n8n editor in browser
