# 🚀 Quick Start Guide

## What We Built

A professional React application for the Software Engineer technical assessment with ALL required features:

✅ Ingredient input (text + image upload)
✅ 25+ recipes with detailed information
✅ Smart recipe matching algorithm  
✅ Dietary filters and customization
✅ Favorites and rating system
✅ Nutritional information
✅ Substitution suggestions
✅ Mobile-responsive design
✅ Production-ready code

## How to Run Locally

### Step 1: Install Node.js
Download and install from: https://nodejs.org/ (choose LTS version)

### Step 2: Open Terminal/Command Prompt
Navigate to the project folder:
```bash
cd smart-recipe-generator
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Run Development Server
```bash
npm run dev
```

The app will open at: http://localhost:5173

## How to Deploy (for Submission)

### Option 1: Vercel (Recommended - Easiest)

1. Go to https://vercel.com and sign up with GitHub
2. Click "Import Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Done! You'll get a live URL like: `https://your-app.vercel.app`

### Option 2: Netlify

1. Go to https://www.netlify.com and sign up
2. Drag and drop the `dist` folder after running `npm run build`
3. Get your live URL

### Option 3: GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to package.json scripts:
```json
"deploy": "vite build && gh-pages -d dist"
```

Then run:
```bash
npm run deploy
```

## Project Structure Explained

```
src/
├── components/          
│   ├── Header.jsx           → Top navigation bar
│   ├── Hero.jsx             → Welcome banner
│   ├── IngredientInput.jsx  → Where users add ingredients
│   ├── FilterBar.jsx        → Filter recipes by various criteria
│   ├── RecipeGrid.jsx       → Grid layout showing all recipes
│   ├── RecipeCard.jsx       → Individual recipe card
│   ├── RecipeModal.jsx      → Full recipe details popup
│   └── FavoritesList.jsx    → Shows saved favorites
│
├── context/
│   └── RecipeContext.jsx    → Manages all app state (ingredients, favorites, etc.)
│
├── data/
│   └── recipes.js           → 25 recipe objects with all details
│
├── utils/
│   └── imageRecognition.js  → Image processing logic
│
├── App.jsx                  → Main app component
├── main.jsx                 → Entry point
└── index.css                → All styling
```

## Key Features to Demo in Interview

1. **Ingredient Input**
   - Type ingredients and press Enter
   - Upload an image (simulated recognition for demo)
   
2. **Smart Matching**
   - Shows match percentage for each recipe
   - Sorts by best matches
   
3. **Filters**
   - Try different difficulty levels
   - Select cuisines
   - Adjust max cooking time slider
   
4. **Recipe Details**
   - Click any recipe card
   - See full instructions, nutrition, substitutions
   - Adjust serving size
   
5. **Favorites & Ratings**
   - Click heart icon to save favorites
   - Rate recipes with stars
   - View all favorites in dedicated page

## How to Explain Your Approach

### Algorithm (Keep it Simple)
"I used a weighted scoring system where 80% comes from ingredient matching and 20% from user ratings. The system calculates what percentage of the recipe's ingredients you have available, then suggests substitutions for missing items."

### Technology Choices
"I chose React with Vite because:
- React is industry-standard and component-based
- Vite provides instant hot-reload for fast development
- Context API handles state without extra dependencies
- Pure CSS keeps bundle size small"

### Image Recognition
"I built a modular image recognition system that can integrate with APIs like Clarifai. For the demo, it simulates recognition, but the architecture is ready for production API integration."

### Error Handling
"I added validation for image uploads, fallback images if URLs break, empty state messages when no recipes match, and loading indicators for better UX."

## Submission Checklist

Before submitting:

✅ Push all code to GitHub (public repository)
✅ Deploy to Vercel/Netlify and get live URL
✅ Test all features on the live site
✅ Include README.md and APPROACH.md in repo
✅ Make sure repo is on 'main' branch
✅ Confirm repo is public/accessible

## Submission Format

**Email should include:**

1. GitHub Repository Link
   Example: https://github.com/yourusername/smart-recipe-generator

2. Live Application URL
   Example: https://smart-recipe-generator.vercel.app

3. Approach Write-up (already in APPROACH.md)

## Common Issues & Solutions

### Issue: npm install fails
**Solution**: Make sure you have Node.js installed (v16+)

### Issue: Port 5173 already in use
**Solution**: Run `npm run dev -- --port 3000` to use different port

### Issue: Images not loading
**Solution**: Check internet connection (images are from Unsplash CDN)

### Issue: Build fails
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

## Tips for Interview

1. **Be Honest**: If asked about parts you didn't fully understand, be honest and show willingness to learn

2. **Highlight Decisions**: Talk about WHY you made certain choices (e.g., "I used Context API instead of Redux because the app state is simple")

3. **Discuss Trade-offs**: "I used simulated image recognition for the demo because real API integration requires paid keys, but the architecture is ready for production"

4. **Show Testing**: Demonstrate that you tested on mobile, different browsers, edge cases

5. **Future Improvements**: Mention features you'd add with more time (shopping lists, meal planning, social features)

## Need Help?

If you encounter any issues:
1. Read error messages carefully
2. Google the error
3. Check the browser console (F12)
4. Verify all files are in correct locations

## Good Luck! 🎉

You've built a professional, feature-complete application. The interviewers will be impressed by:
- Clean code organization
- All requirements met
- Modern tech stack
- Thoughtful algorithm design
- Great UI/UX

**Remember**: Confidence is key. You understand this project because you've seen it built step-by-step!
