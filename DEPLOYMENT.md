# 🚀 Deployment Guide

This guide will walk you through deploying Aura to GitHub and various hosting platforms.

## 📋 Pre-Deployment Checklist

- [ ] Remove any sensitive API keys from code
- [ ] Update `.env.example` with placeholder values
- [ ] Ensure `.env` is in `.gitignore`
- [ ] Test build locally: `npm run build`
- [ ] Review `README.md` for accuracy

## 🐙 Deploying to GitHub

### Step 1: Initialize Git Repository

If you haven't already initialized git:

```bash
cd aura-robopark-chatbot
git init
git add .
git commit -m "Initial commit: Aura RoboPark Chatbot"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click the **+** icon → **New repository**
3. **Repository name**: `aura-robopark-chatbot`
4. **Description**: "Intelligent chatbot for RoboPark by Inker Robotics"
5. **Visibility**: Choose **Public** or **Private**
6. **DO NOT** initialize with README (you already have one)
7. Click **Create repository**

### Step 3: Link and Push to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/probablynotnmp/aura-robopark-chatbot.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Verify Upload

1. Go to `https://github.com/probablynotnmp/aura-robopark-chatbot`
2. Verify all files are uploaded
3. Check that `.env` is **NOT** visible (should be gitignored)

---

## 🌐 Deploying to Vercel (Recommended)

Vercel offers the best experience for React + Vite projects.

### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Import `probablynotnmp/aura-robopark-chatbot`
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add **Environment Variables**:
   - Key: `VITE_GROQ_API_KEY`
   - Value: `your_groq_api_key_here`
7. Click **Deploy**

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: aura-robopark-chatbot
# - Directory: ./
# - Override settings? No

# Add environment variable
vercel env add VITE_GROQ_API_KEY

# Deploy to production
vercel --prod
```

Your app will be live at: `https://aura-robopark-chatbot.vercel.app`

---

## 🟢 Deploying to Netlify

### Option A: Deploy via Netlify Dashboard

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **Add new site** → **Import an existing project**
4. Choose **Deploy with GitHub**
5. Select `probablynotnmp/aura-robopark-chatbot`
6. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **Advanced** → **New variable**:
   - Key: `VITE_GROQ_API_KEY`
   - Value: `your_groq_api_key_here`
8. Click **Deploy site**

### Option  B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Build
npm run build

# Deploy
netlify deploy --prod
```

Your app will be live at: `https://aura-robopark-chatbot.netlify.app`

---

## 🔧 Post-Deployment

### Update README with Live URL

Edit `README.md` and add:

```markdown
## 🌐 Live Demo

Visit the live chatbot at: [https://aura-robopark-chatbot.vercel.app](https://aura-robopark-chatbot.vercel.app)
```

### Test Deployed App

1. Visit your deployed URL
2. Test the chatbot with various queries
3. Verify AI responses work (if API key is configured)
4. Check mobile responsiveness

### Monitor and Maintain

- **Vercel**: Check deployment logs in dashboard
- **Netlify**: Monitor build status and logs
- **GitHub**: Update code and push changes - auto-deploys!

---

## 🔒 Security Best Practices

✅ **DO:**
- Keep `.env` in `.gitignore`
- Use `.env.example` for documentation
- Add API keys as environment variables in hosting platform
- Rotate API keys if exposed

❌ **DON'T:**
- Commit `.env` to GitHub
- Hardcode API keys in source code
- Share API keys publicly

---

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Environment Variables Not Working

- Ensure variable name starts with `VITE_`
- Restart dev server after changing `.env`
- Redeploy after updating environment variables in hosting platform

### API Key Issues

- Verify key is valid at [console.groq.com](https://console.groq.com)
- Check key has proper permissions
- Ensure no extra spaces in `.env` file

---

## 📞 Need Help?

Contact: **info@inkerrobotics.com**

---

**Happy Deploying! 🚀**
