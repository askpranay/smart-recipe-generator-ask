import React from 'react';
import { useRecipes } from '../context/RecipeContext';
import RecipeCard from './RecipeCard';

const FavoritesList = ({ onRecipeClick }) => {
  const { allRecipes, favorites, getRecommendations } = useRecipes();
  
  const favoriteRecipes = allRecipes.filter(recipe => favorites.includes(recipe.id));
  const recommendations = getRecommendations();

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      
      {/* 1. Only show the MAIN HEADING if there are actual favorites */}
      {favoriteRecipes.length > 0 && (
        <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>
          ❤️ Your Favorite Recipes
        </h1>
      )}

      {/* 2. Show the Grid OR the Empty State (Broken Heart) */}
      {favoriteRecipes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">💔</div>
          <h2>No favorites yet!</h2>
          <p>Start adding recipes to your favorites to see them here.</p>
        </div>
      ) : (
        <div className="recipe-grid">
          {favoriteRecipes.map(recipe => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onClick={() => onRecipeClick(recipe)}
            />
          ))}
        </div>
      )}

      {/* 3. Recommendations Section (Always visible if data exists) */}
      {recommendations.length > 0 && (
        <>
          <h2 style={{ 
            color: 'white', 
            textAlign: 'center', 
            marginTop: '60px', 
            marginBottom: '40px' 
          }}>
            ⭐ Recommended For You
          </h2>
          <div className="recipe-grid">
            {recommendations.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onClick={() => onRecipeClick(recipe)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavoritesList;