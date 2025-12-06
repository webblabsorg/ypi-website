# Vercel Setup Guide for YPI Website

**Project:** Yellow Power International Website  
**Repository:** https://github.com/webblabsorg/ypi-website  
**Date:** December 6, 2025

---

## 📋 Prerequisites

- ✅ GitHub account with access to: https://github.com/webblabsorg/ypi-website
- ✅ Project pushed to GitHub (Phase 0 & 1 complete)
- ✅ Vercel account (free tier is sufficient)

---

## 🚀 Step-by-Step Vercel Deployment

### Step 1: Create Vercel Account

1. Go to: https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Vercel will import your repositories automatically

---

### Step 2: Import the YPI Website Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. Find **"ypi-website"** in your repository list
3. Click **"Import"**

---

### Step 3: Configure Project Settings

**IMPORTANT:** The Next.js app is in the `dev/` folder, not the root!

#### Configure these settings:

```
Framework Preset:       Next.js
Root Directory:         dev          ← CRITICAL: Must be "dev"
Build Command:          npm run build
Output Directory:       .next        (default, leave as-is)
Install Command:        npm install  (default, leave as-is)
Node Version:           18.x or 20.x (default is fine)
```

#### Screenshot of Settings:

```
┌─────────────────────────────────────────────┐
│ Configure Project                            │
├─────────────────────────────────────────────┤
│ Framework Preset:    Next.js          [▼]   │
│                                              │
│ Root Directory:      dev              [📁]  │
│                     ↑ MUST BE "dev"          │
│                                              │
│ Build Settings:                              │
│   Build Command:     npm run build           │
│   Output Directory:  .next                   │
│   Install Command:   npm install             │
│                                              │
│ [Cancel]                    [Deploy] →       │
└─────────────────────────────────────────────┘
```

---

### Step 4: Deploy

1. Click **"Deploy"**
2. Vercel will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Build your project (`npm run build`)
   - Deploy to a `.vercel.app` URL

**First deployment takes 2-4 minutes.**

---

### Step 5: Get Your Deployment URL

After successful deployment, you'll get:

```
✅ Production URL:  https://ypi-website.vercel.app
✅ Preview URL:     https://ypi-website-git-main-yourname.vercel.app
```

**Test your site immediately!**

---

## 🔧 Configure Automatic Deployments

### Production Branch (Already Configured)

- **Branch:** `main`
- **Deploys to:** Production URL
- **Trigger:** Every push to `main`
- **Status:** ✅ Automatic

### Preview Deployments (Recommended)

Create a `develop` branch for testing:

```bash
cd C:\Users\plange\Downloads\projects\ypi-website
git checkout -b develop
git push origin develop
```

Now every push to `develop` creates a preview deployment:
- **Preview URL:** `https://ypi-website-git-develop-yourname.vercel.app`
- **Use for:** Testing before merging to main

---

## 📧 Environment Variables (For Phase 9+)

You'll need these in **Phase 9** when implementing forms:

### Go to: Project Settings → Environment Variables

Add these variables:

```
# Email Service (SendGrid or Resend - choose one)
SENDGRID_API_KEY=your_key_here
# or
RESEND_API_KEY=your_key_here

# Contact Email
CONTACT_EMAIL=info@yellowpowerinternational.com

# Mapbox (for Phase 3 maps)
NEXT_PUBLIC_MAPBOX_TOKEN=your_token_here

# OpenAI (for Phase 11 AI features)
OPENAI_API_KEY=your_key_here
```

**Don't add these now** - wait until you need them in Phase 9+.

---

## 🌐 Custom Domain Setup (For Launch - Phase 16)

### Step 1: Go to Project Settings → Domains

### Step 2: Add Domain

```
yellowpowerinternational.com
www.yellowpowerinternational.com
```

### Step 3: Update DNS Records

Vercel will provide DNS records to add at your domain registrar:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**Note:** Don't do this until Phase 16 (Pre-Launch).

---

## 🔄 Deployment Workflow

### For Development (Phases 2-15)

```bash
# Work on features
git checkout -b phase/02-homepage
# ... make changes ...
git add .
git commit -m "feat: Phase 2 - Homepage sections"
git push origin phase/02-homepage

# Vercel creates preview deployment automatically
# Test at: https://ypi-website-git-phase-02-homepage-yourname.vercel.app

# If good, merge to main
git checkout main
git merge phase/02-homepage
git push origin main

# Vercel deploys to production automatically
```

### Deployment Status

- ✅ **Main branch** → Production
- ✅ **Other branches** → Preview deployments
- ✅ **Pull requests** → Preview deployments with comments

---

## 🐛 Troubleshooting

### Issue: Build Fails with "Cannot find module"

**Solution:** Verify `Root Directory` is set to `dev`

```
Project Settings → General → Root Directory: dev
```

### Issue: 404 on deployment

**Solution:** Check that `dev/app/(marketing)/page.tsx` exists

### Issue: "Module not found" for @/components

**Solution:** Verify `dev/tsconfig.json` has:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## 📊 Vercel Dashboard Features

### Overview Tab
- Deployment status
- Performance metrics
- Visitor analytics

### Deployments Tab
- All deployment history
- Preview deployments
- Rollback to previous versions

### Settings Tab
- Environment variables
- Domain configuration
- Build settings
- Integrations

### Analytics Tab (Optional - Paid)
- Web Vitals
- Traffic analytics
- Performance insights

---

## ✅ Post-Deployment Checklist

After your first deployment:

- [ ] Visit production URL - site loads correctly
- [ ] Test header navigation - all links work (even if pages don't exist yet)
- [ ] Test mobile navigation - hamburger menu works
- [ ] Check footer - company info displays correctly
- [ ] Verify fonts - Inter and Roboto Mono load properly
- [ ] Check colors - gold (#FDB714) and navy (#003B5C) display correctly
- [ ] Test responsive design - resize browser window
- [ ] Check browser console - no JavaScript errors
- [ ] Verify build logs - no warnings or errors

---

## 🎯 What's Next?

### Immediate (Phase 2)

- ✅ Vercel is deployed and working
- ➡️ Start building homepage sections (Phase 2)
- 🔄 Every commit to `main` auto-deploys

### Phase 9 (Forms)

- Add **SendGrid** or **Resend** API key to Vercel environment variables
- Forms will send emails (no database needed)

### Phase 13 (Optional - Database)

- Set up **Neon** PostgreSQL if you choose to implement database
- Add `DATABASE_URL` to Vercel environment variables

### Phase 16 (Launch)

- Configure custom domain
- Update DNS records
- Go live! 🚀

---

## 📞 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deployment:** https://nextjs.org/docs/deployment
- **Vercel Support:** https://vercel.com/support

---

**Setup Guide Complete!**  
**Ready to deploy Phase 1 to Vercel and continue with Phase 2.**
