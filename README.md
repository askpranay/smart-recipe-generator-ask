# 🍳 Smart Recipe Generator

A modern web application that suggests personalized recipes based on available ingredients using AI-powered image recognition and smart matching algorithms.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Project Overview

Smart Recipe Generator is a full-stack web application that helps users discover recipes by analyzing their available ingredients through text input or image upload. Built with React and Vite, featuring AI-powered image recognition and intelligent recipe matching.

## 🎯 Key Features

### Core Functionality
- **🖼️ Image Recognition**: Upload photos of ingredients for automatic detection using AI
- **📝 Text Input**: Manual ingredient entry with smart autocomplete suggestions
- **🎯 Smart Matching Algorithm**: Calculates match percentages based on available ingredients
- **🔍 Advanced Filtering**: Filter by difficulty, cuisine type, dietary restrictions, and cooking time
- **⭐ Rating System**: Rate recipes and get personalized recommendations
- **❤️ Favorites Management**: Save and organize your favorite recipes
- **🔄 Serving Size Adjustment**: Dynamically adjust recipe quantities
- **📊 Nutritional Information**: Detailed nutrition facts for each recipe
- **🔀 Smart Substitutions**: Intelligent ingredient substitution suggestions

### Technical Features
- **25+ Recipe Database**: Diverse recipes across multiple cuisines
- **Mobile Responsive**: Fully responsive design for all devices
- **Local Storage Persistence**: Favorites and ratings persist across sessions
- **Real-time Filtering**: Instant recipe updates based on user input
- **Error Handling**: Comprehensive validation and graceful error recovery

## 🚀 Live Demo

**Live Application**: [To be deployed]

**Repository**: https://github.com/askpranay/smart-recipe-generator-exp

## 🛠️ Tech Stack

- **React 18** - Modern UI library with Hooks
- **React Router DOM** - Client-side routing
- **Context API** - State management
- **Vite** - Lightning-fast build tool
- **Hugging Face API** - Image recognition (Google ViT model)
- **Pure CSS** - Custom styling

## 📋 Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/askpranay/smart-recipe-generator-exp.git
cd smart-recipe-generator-exp
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
smart-recipe-generator-exp/
├── api/
│   └── analyze-image.js          # Serverless function for image recognition
├── src/
│   ├── components/
│   │   ├── Header.jsx             # Navigation header
│   │   ├── Hero.jsx               # Welcome banner
│   │   ├── IngredientInput.jsx    # Ingredient input with autocomplete
│   │   ├── FilterBar.jsx          # Recipe filtering controls
│   │   ├── RecipeGrid.jsx         # Recipe grid layout
│   │   ├── RecipeCard.jsx         # Individual recipe card
│   │   ├── RecipeDetail.jsx       # Full recipe detail page
│   │   ├── RecipeModal.jsx        # Recipe detail modal
│   │   └── FavoritesList.jsx      # Favorites management
│   ├── context/
│   │   └── RecipeContext.jsx      # Global state management
│   ├── data/
│   │   └── recipes.js             # Recipe database (25+ recipes)
│   ├── utils/
│   │   └── imageRecognition.js    # Image processing utilities
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## 🧠 Algorithm Explanation

### Recipe Matching Algorithm

The smart matching system uses a weighted scoring approach:

```javascript
matchScore = (ingredientMatch × 0.8) + (userRating × 0.2)

where:
- ingredientMatch = (availableIngredients / requiredIngredients) × 100
- userRating = (rating / 5) × 100
```

**Key Features**:
- Fuzzy string matching for flexible ingredient recognition
- Weighted scoring (80% ingredient match + 20% user ratings)
- Missing ingredient detection
- Smart substitution suggestions
- Real-time filtering and sorting

### Image Recognition Flow

```
User uploads image → Validate → Preprocess → 
API Call (Hugging Face) → Ingredient Detection → 
Mapping → Add to ingredient list
```

## 🎨 Key Design Decisions

### State Management
- **Context API** for global state management
- **LocalStorage** for data persistence
- **Functional updates** to prevent stale closure bugs

### Component Architecture
- Functional components with React Hooks
- Separation of concerns (components, context, data, utils)
- Single responsibility principle

### Styling
- Pure CSS with modern features
- CSS variables for theming
- Mobile-first responsive design
- Glassmorphism effects

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder via Netlify Dashboard

## 🔐 Environment Variables

For production with image recognition:

```env
HUGGING_FACE_TOKEN=your_token_here
```

*Note: App works without API key using simulated recognition*

## 🧪 Testing

Run locally and verify:
- Add ingredients via text and image
- Apply filters
- View recipe details
- Add favorites
- Rate recipes
- Adjust serving sizes
- Check mobile responsiveness

## 📚 API Reference

### Image Recognition API

**Endpoint**: `/api/analyze-image`

**Method**: `POST`

**Request**:
```json
{
  "imageBase64": "base64_encoded_image_string"
}
```

**Response**:
```json
{
  "ingredients": ["tomato", "onion", "garlic"]
}
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Pranay Rabade**

- GitHub: [@askpranay](https://github.com/askpranay)
- Email: pranayrabde@gmail.com

## 🙏 Acknowledgments

- Recipe images from [Unsplash](https://unsplash.com/)
- AI model from [Hugging Face](https://huggingface.co/)
- Built as a technical assessment project

## 📈 Future Enhancements

- User authentication and cloud sync
- Shopping list generation
- Meal planning calendar
- Recipe sharing and social features
- Multi-language support
- Voice input for hands-free cooking

## 🐛 Known Issues

- Image recognition requires API key for production use
- Serving size adjustment displays count but doesn't recalculate ingredient amounts

---

**Made with ❤️ and React**
