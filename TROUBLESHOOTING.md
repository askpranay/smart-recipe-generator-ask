# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### Installation Issues

#### Problem: `npm install` fails with EACCES error
**Solution**:
```bash
# Option 1: Use sudo (Mac/Linux)
sudo npm install

# Option 2: Fix npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
```

#### Problem: "node: command not found"
**Solution**: Install Node.js from https://nodejs.org/
- Download LTS version
- Run installer
- Restart terminal
- Verify: `node --version`

#### Problem: "npm: command not found" (but Node is installed)
**Solution**: npm comes with Node.js. Reinstall Node.js from official site.

### Development Server Issues

#### Problem: Port 5173 already in use
**Solution**:
```bash
# Option 1: Use different port
npm run dev -- --port 3000

# Option 2: Kill process on port 5173 (Mac/Linux)
lsof -ti:5173 | xargs kill

# Option 2: Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

#### Problem: "Cannot find module" errors
**Solution**:
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Problem: Hot reload not working
**Solution**:
- Save the file (Ctrl+S / Cmd+S)
- Check browser console for errors
- Restart dev server
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Browser/Display Issues

#### Problem: Blank white screen
**Solution**:
1. Open browser console (F12)
2. Check for errors (usually shows which component failed)
3. Common causes:
   - Missing import statement
   - Syntax error in JSX
   - Component not exported properly

#### Problem: CSS not loading/styles broken
**Solution**:
- Verify `index.css` is imported in `main.jsx`
- Check browser console for 404 errors
- Clear browser cache
- Restart dev server

#### Problem: Images not displaying
**Solution**:
- Check internet connection (images load from Unsplash)
- Verify image URLs in `recipes.js`
- Check browser console for CORS errors
- Images have fallback URLs in components

### Functionality Issues

#### Problem: Ingredients not adding
**Solution**:
- Check browser console for errors
- Verify `RecipeContext.jsx` is properly set up
- Make sure `RecipeProvider` wraps the app in `App.jsx`

#### Problem: Filters not working
**Solution**:
- Open browser console
- Check if `updateFilters` function exists in context
- Verify filter values are being set correctly
- Clear localStorage: `localStorage.clear()`

#### Problem: Favorites/Ratings not saving
**Solution**:
- Check if localStorage is enabled in browser
- Open DevTools → Application → Local Storage
- Verify data is being saved
- Try incognito mode (some extensions block localStorage)

#### Problem: Modal not opening/closing
**Solution**:
- Check if `selectedRecipe` state is being set
- Verify `onClick` handlers are connected
- Check for JavaScript errors in console

### Build Issues

#### Problem: `npm run build` fails
**Solution**:
```bash
# Clean and rebuild
rm -rf dist node_modules package-lock.json
npm install
npm run build
```

#### Problem: Build succeeds but app doesn't work
**Solution**:
- Check `dist/index.html` exists
- Verify assets are in `dist/assets`
- Test locally: `npm run preview`
- Check for absolute paths (should be relative)

### GitHub Issues

#### Problem: "Repository not found"
**Solution**:
- Verify repository is public
- Check repository name is correct
- Confirm you're logged into GitHub

#### Problem: "Permission denied (publickey)"
**Solution**:
```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/USERNAME/REPO.git
```

#### Problem: "Large files rejected"
**Solution**:
- Verify `.gitignore` includes `node_modules`
- Remove `node_modules` from tracking:
  ```bash
  git rm -r --cached node_modules
  git commit -m "Remove node_modules"
  ```

#### Problem: Old commits showing wrong files
**Solution**:
```bash
# Force push (only if repo is new and no one else uses it)
git push -f origin main
```

### Deployment Issues (Vercel)

#### Problem: "Build failed" on Vercel
**Solution**:
1. Check Vercel build logs for specific error
2. Verify `package.json` has all dependencies
3. Make sure Node version is compatible (use 18.x)
4. Add to `vercel.json` if needed:
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist"
   }
   ```

#### Problem: 404 errors on deployed site
**Solution**:
- Vercel should handle this automatically for Vite
- Check if `vercel.json` exists
- Verify build output directory is `dist`

#### Problem: Environment variables not working
**Solution**:
- Add environment variables in Vercel dashboard
- Go to Project Settings → Environment Variables
- Redeploy after adding variables

#### Problem: Images/assets not loading on deployed site
**Solution**:
- Check if images use relative paths
- Verify images are in `public` folder or imported properly
- Check browser console for 404 errors
- Images from Unsplash should work (check internet connection)

### Deployment Issues (Netlify)

#### Problem: "Page not found" on deployed site
**Solution**:
- Create `_redirects` file in `public` folder:
  ```
  /*    /index.html   200
  ```
- Redeploy

#### Problem: Build command not recognized
**Solution**:
- Set build command to: `npm run build`
- Set publish directory to: `dist`

### Browser-Specific Issues

#### Problem: Works in Chrome but not Safari
**Solution**:
- Check for unsupported CSS features
- Verify JavaScript features are widely supported
- Add vendor prefixes for CSS if needed

#### Problem: Works on desktop but not mobile
**Solution**:
- Check responsive CSS media queries
- Test with browser DevTools device emulation
- Verify touch events work
- Check for fixed positioning issues

### Performance Issues

#### Problem: App is slow/laggy
**Solution**:
- Check browser console for errors
- Reduce number of recipes shown per page
- Optimize images (use smaller sizes)
- Add loading states
- Use React.memo for expensive components

#### Problem: High memory usage
**Solution**:
- Close unused browser tabs
- Restart browser
- Clear browser cache
- Check for memory leaks in console

## How to Debug Effectively

### 1. Check Browser Console (F12)
- Red errors? That's your problem
- Yellow warnings? Usually safe to ignore
- Network tab? Check if resources load

### 2. Add Console Logs
```javascript
console.log('Debug:', variable);
```

### 3. React DevTools
- Install React DevTools browser extension
- Inspect component state and props
- Check component tree

### 4. Check File Locations
- Are files in correct folders?
- Are imports pointing to right paths?
- Case sensitivity matters!

### 5. Test in Incognito Mode
- Rules out browser extension issues
- Fresh localStorage
- No cache

## Still Stuck?

### Google the Error
- Copy exact error message
- Search: "error message + react + vite"
- Check Stack Overflow

### Check the Docs
- React: https://react.dev
- Vite: https://vitejs.dev

### Ask for Help
- Include: Error message, what you tried, relevant code
- Don't share entire codebase
- Be specific about the problem

## Quick Fixes Checklist

When something breaks, try these in order:

1. ✅ Save all files
2. ✅ Refresh browser (Ctrl+Shift+R)
3. ✅ Check browser console for errors
4. ✅ Restart dev server
5. ✅ Clear browser cache
6. ✅ Delete node_modules and reinstall
7. ✅ Try incognito mode
8. ✅ Check file paths and imports
9. ✅ Google the error message
10. ✅ Take a break and come back fresh

## Prevention Tips

- ✅ Commit often to git
- ✅ Test after each major change
- ✅ Keep dependencies updated
- ✅ Use consistent naming
- ✅ Follow the project structure
- ✅ Read error messages carefully
- ✅ Keep backups of working code

Remember: Every developer faces these issues. Don't panic, debug methodically! 🐛🔍
