# 🚀 GitHub Setup Guide

Complete guide to push your Smart Recipe Generator project to GitHub.

## Prerequisites

- ✅ GitHub account created
- ✅ Git installed on your computer
- ✅ Project files ready
- ✅ `node_modules` folder deleted

## Step 1: Verify Your Files

Your project should have these files:
- All source code in `src/`
- Configuration files (`.gitignore`, `package.json`, etc.)
- No `node_modules/` folder
- No `.env` file (only `.env.example`)
- No `dist/` folder

## Step 2: Your Repository is Ready

**Repository URL**: https://github.com/askpranay/smart-recipe-generator-exp

If you haven't created it yet:
1. Go to https://github.com/askpranay
2. Click "+" → "New repository"
3. Name: `smart-recipe-generator-exp`
4. Visibility: **PUBLIC**
5. Don't initialize with README
6. Click "Create repository"

## Step 3: Initialize Git

Open terminal in your project folder:

```bash
# Navigate to your project
cd path/to/smart-recipe-generator-exp

# Initialize git
git init

# Verify .gitignore exists
ls -la | grep .gitignore
```

## Step 4: Configure Git (First Time Only)

```bash
# Set your name
git config --global user.name "Pranay Rabade"

# Set your email
git config --global user.email "pranayrabde@gmail.com"

# Verify
git config --global --list
```

## Step 5: Add and Commit Files

```bash
# Check what will be added
git status

# Add all files
git add .

# Commit
git commit -m "Initial commit: Smart Recipe Generator with all features"
```

## Step 6: Connect to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/askpranay/smart-recipe-generator-exp.git

# Verify
git remote -v
```

## Step 7: Push to GitHub

```bash
# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### If Authentication is Required:

**For HTTPS** (recommended):
- Username: `askpranay`
- Password: Use a **Personal Access Token** (not your GitHub password)

**Create Token**:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scope: `repo`
4. Copy the token
5. Use as password when pushing

## Step 8: Verify on GitHub

Go to: https://github.com/askpranay/smart-recipe-generator-exp

Check:
- ✅ All files visible
- ✅ README displays
- ✅ Branch is `main`
- ✅ No `node_modules/`
- ✅ Repository is PUBLIC

## Common Issues

### "Permission denied"
```bash
# Use Personal Access Token as password
# Or set up SSH keys
```

### "Repository not found"
```bash
# Verify remote URL
git remote -v

# Update if wrong
git remote set-url origin https://github.com/askpranay/smart-recipe-generator-exp.git
```

### "node_modules was pushed"
```bash
# Remove from git
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push origin main
```

## Making Changes Later

```bash
# Check status
git status

# Stage changes
git add .

# Commit
git commit -m "Description of changes"

# Push
git push origin main
```

## Done! ✅

Your code is now on GitHub at:
https://github.com/askpranay/smart-recipe-generator-exp

Next step: Deploy to Vercel!
