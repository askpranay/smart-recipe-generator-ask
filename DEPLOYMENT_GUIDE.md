# 🚀 Deployment Guide

Guide to deploy your Smart Recipe Generator to production.

## Prerequisites

- ✅ GitHub repository created and pushed
- ✅ Code tested locally
- ✅ All features working

**Your Repository**: https://github.com/askpranay/smart-recipe-generator-exp

---

## Option 1: Vercel (Recommended - Easiest)

### Why Vercel?
- Zero configuration for Vite
- Automatic deployments
- Free tier
- Fast CDN
- Easy custom domains

### Steps:

1. **Sign Up**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub"
   - Authorize Vercel

2. **Import Project**
   - Click "New Project"
   - Find `askpranay/smart-recipe-generator-exp`
   - Click "Import"

3. **Configure (Auto-detected)**
   - Framework: Vite ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
   - Leave everything as default

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

5. **Get Your URL**
   - Copy the URL (looks like: `https://smart-recipe-generator-exp.vercel.app`)
   - Test it thoroughly
   - Update README.md with this URL

### Environment Variables (Optional)

If using image recognition API:
1. Go to Project Settings → Environment Variables
2. Add: `HUGGING_FACE_TOKEN` = `your_token`
3. Redeploy

### Automatic Updates

Every push to `main` branch automatically deploys! 🚀

---

## Option 2: Netlify

### Steps:

1. **Sign Up**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **New Site from Git**
   - Click "New site from Git"
   - Choose GitHub
   - Select `askpranay/smart-recipe-generator-exp`

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy**
   - Click "Deploy site"
   - Wait 2-3 minutes

5. **Get URL**
   - Copy the URL
   - Test it

### Fix 404 on Refresh

Create `public/_redirects` file:
```
/*    /index.html   200
```

Then redeploy.

---

## Option 3: GitHub Pages

### Setup:

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "homepage": "https://askpranay.github.io/smart-recipe-generator-exp",
  "scripts": {
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/smart-recipe-generator-exp/'
})
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Pages → Source: gh-pages branch
   - Save

Your site: `https://askpranay.github.io/smart-recipe-generator-exp`

---

## Post-Deployment Checklist

Test your deployed app:

- [ ] Homepage loads
- [ ] Can add ingredients (text)
- [ ] Can upload images
- [ ] Filters work
- [ ] Recipe details load
- [ ] Can favorite recipes
- [ ] Can rate recipes
- [ ] Mobile view works (resize browser)
- [ ] No console errors (F12)
- [ ] All images load

---

## Troubleshooting

### Build Fails

**Issue**: Build error on deployment

**Solution**:
```bash
# Test locally first
npm run build

# If fails, check:
- Node version (should be 16+)
- All dependencies in package.json
- No console.log errors
```

### 404 on Page Refresh

**Vercel**: Auto-handled ✅

**Netlify**: Add `_redirects` file (see above)

**GitHub Pages**: Routes may not work properly

### Images Not Loading

**Check**:
- Browser console for errors
- Image URLs in recipes.js
- Internet connection

---

## Update Your README

After deployment, update your README.md:

```markdown
## 🚀 Live Demo

**Live Application**: https://your-deployed-url.vercel.app
```

Commit and push:
```bash
git add README.md
git commit -m "Add live demo URL"
git push origin main
```

---

## Custom Domain (Optional)

### On Vercel:
1. Project Settings → Domains
2. Add your domain
3. Update DNS records

### On Netlify:
1. Domain Settings
2. Add custom domain
3. Configure DNS

---

## Monitoring

### Vercel Dashboard:
- View deployments
- Check logs
- Monitor performance
- Analytics (if enabled)

### Netlify Dashboard:
- Deployment history
- Build logs
- Forms & functions

---

## Rollback if Needed

### Vercel:
1. Go to Deployments
2. Find working version
3. Click "Promote to Production"

### Netlify:
1. Go to Deploys
2. Find previous version
3. Click "Publish deploy"

---

## 🎉 Done!

You now have:
- ✅ Live application
- ✅ Automatic deployments
- ✅ Professional URL
- ✅ Ready to submit!

**Next**: Update your README with the live URL and test everything!

---

**Need help?**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
