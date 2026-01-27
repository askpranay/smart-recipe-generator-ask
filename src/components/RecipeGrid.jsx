import React from 'react';
import { useRecipes } from '../context/RecipeContext';
import RecipeCard from './RecipeCard';

const RecipeGrid = ({ onRecipeClick }) => {
  const { filteredRecipes, userIngredients } = useRecipes();

  if (userIngredients.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🔍</div>
        <h2>Start by adding ingredients!</h2>
        <p>Enter ingredients you have or upload a photo to discover amazing recipes.</p>
      </div>
    );
  }

  if (filteredRecipes.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">😕</div>
        <h2>No recipes found</h2>
        <p>Try adjusting your filters or adding different ingredients.</p>
      </div>
    );
  }

  return (
    <>
      <div style={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>
        <h2>Found {filteredRecipes.length} Recipe{filteredRecipes.length !== 1 ? 's' : ''}</h2>
      </div>
      <div className="recipe-grid">
        {filteredRecipes.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onClick={() => onRecipeClick(recipe)}
          />
        ))}
      </div>
    </>
  );
};

export default RecipeGrid;
