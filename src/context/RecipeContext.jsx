import React, { createContext, useState, useContext, useEffect } from 'react';
import { recipes } from '../data/recipes';

// Create Context
const RecipeContext = createContext();

// Custom hook to use the Recipe Context
export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within RecipeProvider');
  }
  return context;
};

// Provider Component
export const RecipeProvider = ({ children }) => {
  // State management
  const [allRecipes] = useState(recipes);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [userIngredients, setUserIngredients] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [filters, setFilters] = useState({
    difficulty: 'all',
    cuisine: 'all',
    dietary: 'all',
    maxTime: 120
  });

  // Load favorites and ratings from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    const savedRatings = localStorage.getItem('ratings');
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    if (savedRatings) {
      setRatings(JSON.parse(savedRatings));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Save ratings to localStorage
  useEffect(() => {
    localStorage.setItem('ratings', JSON.stringify(ratings));
  }, [ratings]);

  // This solves the issue where loops would only add the last item
  const addIngredient = (ingredient) => {
    const normalizedIngredient = ingredient.toLowerCase().trim();
    
    if (!normalizedIngredient) return;

    setUserIngredients(prevIngredients => {
      // Check for duplicates against the LATEST state
      if (!prevIngredients.includes(normalizedIngredient)) {
        return [...prevIngredients, normalizedIngredient];
      }
      return prevIngredients; // Return same state if duplicate
    });
  };

  // Remove ingredient using functional update
  const removeIngredient = (ingredient) => {
    setUserIngredients(prevIngredients => 
      prevIngredients.filter(i => i !== ingredient)
    );
  };

  // Clear all ingredients
  const clearIngredients = () => {
    setUserIngredients([]);
  };

  // Toggle favorite using functional update
  const toggleFavorite = (recipeId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(recipeId)) {
        return prevFavorites.filter(id => id !== recipeId);
      } else {
        return [...prevFavorites, recipeId];
      }
    });
  };

  // Rate recipe using functional update
  const rateRecipe = (recipeId, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [recipeId]: rating
    }));
  };

  // Calculate match percentage
  const calculateMatch = (recipe) => {
    if (userIngredients.length === 0) return 0;
    
    const recipeIngredients = recipe.ingredients.map(ing => 
      ing.toLowerCase().split(' ').slice(-1)[0] // Get last word (ingredient name)
    );
    
    let matches = 0;
    userIngredients.forEach(userIng => {
      if (recipeIngredients.some(recipeIng => 
        recipeIng.includes(userIng) || userIng.includes(recipeIng)
      )) {
        matches++;
      }
    });
    
    return Math.round((matches / recipe.ingredients.length) * 100);
  };

  // Filter recipes based on ingredients and filters
  const filterRecipes = () => {
    let filtered = [...allRecipes];

    // Filter by ingredients if any are provided
    if (userIngredients.length > 0) {
      filtered = filtered.map(recipe => ({
        ...recipe,
        matchPercentage: calculateMatch(recipe)
      })).filter(recipe => recipe.matchPercentage > 0);
      
      // Sort by match percentage and rating
      filtered.sort((a, b) => {
        const ratingDiff = (ratings[b.id] || 0) - (ratings[a.id] || 0);
        if (ratingDiff !== 0) return ratingDiff * 0.2; // 20% weight
        return b.matchPercentage - a.matchPercentage; // 80% weight
      });
    }

    // Apply difficulty filter
    if (filters.difficulty !== 'all') {
      filtered = filtered.filter(recipe => 
        recipe.difficulty.toLowerCase() === filters.difficulty.toLowerCase()
      );
    }

    // Apply cuisine filter
    if (filters.cuisine !== 'all') {
      filtered = filtered.filter(recipe => 
        recipe.cuisine.toLowerCase() === filters.cuisine.toLowerCase()
      );
    }

    // Apply dietary filter
    if (filters.dietary !== 'all') {
      filtered = filtered.filter(recipe => 
        recipe.dietaryTags.includes(filters.dietary.toLowerCase())
      );
    }

    // Apply time filter
    filtered = filtered.filter(recipe => 
      recipe.cookingTime <= filters.maxTime
    );

    setFilteredRecipes(filtered);
  };

  // Re-filter when ingredients or filters change
  useEffect(() => {
    filterRecipes();
  }, [userIngredients, filters, ratings]);

  // --- SMART RECOMMENDATION ENGINE ---
  const getRecommendations = () => {
    // 1. Gather Liked Recipes (Favorites + High Ratings)
    const likedRecipeIds = [...favorites, ...Object.keys(ratings).filter(id => ratings[id] >= 4).map(Number)];
    // Remove duplicates
    const uniqueLikedIds = [...new Set(likedRecipeIds)];
    
    // If no data, return random "Popular" ones (simulated by ID)
    if (uniqueLikedIds.length === 0) {
      return allRecipes.slice(0, 3);
    }

    const likedRecipes = allRecipes.filter(r => uniqueLikedIds.includes(r.id));

    // 2. Analyze Preferences (Count Cuisines & Tags)
    const cuisineScores = {};
    const tagScores = {};

    likedRecipes.forEach(recipe => {
      // Weight cuisines heavily
      cuisineScores[recipe.cuisine] = (cuisineScores[recipe.cuisine] || 0) + 3;
      
      // Weight tags moderately
      recipe.dietaryTags.forEach(tag => {
        tagScores[tag] = (tagScores[tag] || 0) + 1;
      });
    });

    // 3. Score "New" Candidates (Unrated / Unfavorited)
    const candidates = allRecipes.filter(r => !uniqueLikedIds.includes(r.id));

    const scoredCandidates = candidates.map(recipe => {
      let score = 0;
      
      // Add points for matching cuisine
      if (cuisineScores[recipe.cuisine]) {
        score += cuisineScores[recipe.cuisine];
      }

      // Add points for matching tags
      recipe.dietaryTags.forEach(tag => {
        if (tagScores[tag]) {
          score += tagScores[tag];
        }
      });

      return { ...recipe, recommendationScore: score };
    });

    // 4. Return Top 3 Matches
    return scoredCandidates
      .filter(r => r.recommendationScore > 0) // Only show relevant ones
      .sort((a, b) => b.recommendationScore - a.recommendationScore)
      .slice(0, 3);
  };

  // Update filters
  const updateFilters = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters
    });
  };

  // Get missing ingredients for a recipe
  const getMissingIngredients = (recipe) => {
    const recipeIngredients = recipe.ingredients.map(ing => 
      ing.toLowerCase().split(' ').slice(-1)[0]
    );
    
    return recipe.ingredients.filter((_, index) => {
      const ingredientName = recipeIngredients[index];
      return !userIngredients.some(userIng => 
        ingredientName.includes(userIng) || userIng.includes(ingredientName)
      );
    });
  };

  const value = {
    allRecipes,
    filteredRecipes,
    userIngredients,
    favorites,
    ratings,
    filters,
    addIngredient,
    removeIngredient,
    clearIngredients,
    toggleFavorite,
    rateRecipe,
    updateFilters,
    calculateMatch,
    getRecommendations,
    getMissingIngredients
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};
