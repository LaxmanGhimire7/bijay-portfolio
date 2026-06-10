# 🚀 Deployment Guide

## Vercel Deployment (Recommended)

This project is configured for easy deployment to Vercel using serverless functions for the backend and static hosting for the frontend.

### Prerequisites
- Vercel account (free at [vercel.com](https://vercel.com))
- MongoDB Atlas account (free tier available at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas))
- GitHub repository (your code must be pushed to GitHub)

---

## Step 1: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user with username and password
4. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`)
5. Copy this URI — you'll need it for Vercel

---

## Step 2: Push Code to GitHub

Make sure all your code is pushed to GitHub:

```bash
git add .
git commit -m "Deployment ready"
git push origin main
```

---

## Step 3: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts to:
- Link your project to GitHub
- Select your framework (Node.js)
- Confirm deployment settings

### Option B: Using Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `bijay-portfolio` repository
4. Configure project:
   - **Framework**: Other (since we have custom config)
   - **Root Directory**: `.` (root)
5. Add Environment Variables (see Step 4)
6. Click "Deploy"

---

## Step 4: Configure Environment Variables on Vercel

After creating the project, go to **Project Settings → Environment Variables** and add:

```
MONGO_URI = mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV = production
CLIENT_URL = https://your-vercel-app-name.vercel.app
```

**Important:**
- Replace `username`, `password`, and `cluster` with your MongoDB Atlas credentials
- Replace `your-vercel-app-name` with your actual Vercel app name

---

## Step 5: Update Client Configuration (If Using Custom Domain)

If you're using a custom domain or different deployment URL:

1. Update `client/.env.production`:
   ```
   REACT_APP_API_URL=https://your-domain.vercel.app
   ```

Or set the environment variable in Vercel dashboard:
```
REACT_APP_API_URL=https://your-vercel-app-name.vercel.app
```

---

## Verification

After deployment:

1. ✅ Visit `https://your-app.vercel.app`
2. ✅ Check if the portfolio loads
3. ✅ Open browser DevTools Console (F12) — should see no errors
4. ✅ Try interacting with sections
5. ✅ Check Network tab to verify API calls work

### View Deployment Logs

```bash
vercel logs
```

Or check logs in Vercel Dashboard → Function Logs

---

## Common Issues & Solutions

### ❌ "MONGO_URI is not set"

**Solution:** Add `MONGO_URI` environment variable in Vercel Settings

### ❌ "API calls fail / CORS errors"

**Solution:** 
- Ensure `CLIENT_URL` in Vercel matches your deployment URL
- Check `server/server.js` CORS configuration
- Verify API requests use correct `REACT_APP_API_URL`

### ❌ "Build fails - node_modules not found"

**Solution:** 
- Delete `node_modules` locally
- Run `npm install` in root, `client/`, and `server/` directories
- Commit and push

### ❌ "Static files not loading / 404 errors"

**Solution:**
- Verify `vercel.json` routing rules are correct
- Check that `client/build/` exists locally
- Run `cd client && npm run build` before deploying

---

## Local Testing Before Deployment

Test everything locally first:

```bash
# Terminal 1: Start MongoDB locally
mongod

# Terminal 2: Start server
cd server
npm run dev

# Terminal 3: Start client
cd client
npm start
```

Visit `http://localhost:3000` and verify all features work.

---

## Redeployment

After making changes:

```bash
git add .
git commit -m "Your changes"
git push origin main
# Vercel automatically redeploys on push
```

Or manually redeploy:

```bash
vercel --prod
```

---

## Database Management

### View MongoDB Data

1. Go to MongoDB Atlas Dashboard
2. Click "Collections" in your cluster
3. Browse `portfolio` database
4. Check `portfolios` and `sections` collections

### Seed Production Database

1. Ensure MongoDB is properly configured
2. In Vercel environment, set `NODE_ENV=development` temporarily (or call seed endpoint)
3. Call the seed endpoint: `curl https://your-app.vercel.app/api/seed`

Or manually add test data in MongoDB Atlas dashboard.

---

## Monitoring & Debugging

### Check Server Logs
```bash
vercel logs --tail
```

### Debug API Issues
```bash
curl -X GET https://your-app.vercel.app/api/portfolio
```

### Check CORS Headers
Open DevTools Network tab and look for CORS errors in API requests

---

## Security Notes

⚠️ **Never commit `.env` files to Git**
- Use `.env.example` as template
- All secrets should be in Vercel Environment Variables
- MongoDB credentials are in `MONGO_URI` only

---

## Next Steps

- 🎨 Customize your portfolio sections
- 📱 Test responsive design on mobile
- 🔍 Monitor Vercel Analytics
- 📊 Check MongoDB usage
- 🚀 Set up custom domain (optional)

---

For more help: [Vercel Docs](https://vercel.com/docs) | [MongoDB Atlas Docs](https://docs.mongodb.com/manual/)
