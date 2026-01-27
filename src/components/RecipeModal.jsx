import React, { useState } from 'react';
import { useRecipes } from '../context/RecipeContext';
import { substitutions } from '../data/recipes';

const RecipeModal = ({ recipe, onClose }) => {
  const { 
    favorites, 
    toggleFavorite, 
    ratings, 
    rateRecipe, 
    getMissingIngredients,
    userIngredients 
  } = useRecipes();
  
  const [servings, setServings] = useState(recipe.servings);
  const isFavorite = favorites.includes(recipe.id);
  const currentRating = ratings[recipe.id] || 0;
  const missingIngredients = getMissingIngredients(recipe);

  const handleRating = (rating) => {
    rateRecipe(recipe.id, rating);
  };

  const handleFavoriteClick = () => {
    toggleFavorite(recipe.id);
  };

  const adjustServings = (newServings) => {
    if (newServings > 0 && newServings <= 20) {
      setServings(newServings);
    }
  };

  const calculateAdjustedAmount = (originalAmount) => {
    const ratio = servings / recipe.servings;
    // This is a simple multiplier - in production you'd parse amounts properly
    return originalAmount;
  };

  const getSubstitutions = (ingredient) => {
    const ingredientName = ingredient.toLowerCase().split(' ').slice(-1)[0];
    return substitutions[ingredientName] || [];
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="recipe-detail-header">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="recipe-detail-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800';
            }}
          />
        </div>

        <div className="recipe-detail-content">
          <h1 className="recipe-detail-title">{recipe.title}</h1>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
            <button 
              className={`icon-btn ${isFavorite ? 'favorited' : ''}`}
              onClick={handleFavoriteClick}
              style={{ fontSize: '32px' }}
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
            <div className="rating">
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  className={`star ${star <= currentRating ? 'filled' : ''}`}
                  onClick={() => handleRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="recipe-info-grid">
            <div className="info-item">
              <div className="info-label">Cooking Time</div>
              <div className="info-value">{recipe.cookingTime} min</div>
            </div>
            <div className="info-item">
              <div className="info-label">Difficulty</div>
              <div className="info-value">{recipe.difficulty}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Cuisine</div>
              <div className="info-value">{recipe.cuisine}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Servings</div>
              <div className="info-value" style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                <button onClick={() => adjustServings(servings - 1)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>−</button>
                {servings}
                <button onClick={() => adjustServings(servings + 1)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}>+</button>
              </div>
            </div>
          </div>

          {missingIngredients.length > 0 && userIngredients.length > 0 && (
            <div className="substitutions">
              <h4>⚠️ Missing Ingredients ({missingIngredients.length}):</h4>
              <ul>
                {missingIngredients.map((ingredient, index) => {
                  const subs = getSubstitutions(ingredient);
                  return (
                    <li key={index}>
                      <strong>{ingredient}</strong>
                      {subs.length > 0 && (
                        <span> - Try: {subs.slice(0, 3).join(', ')}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <section className="ingredients-section">
            <h2 className="section-title">Ingredients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{calculateAdjustedAmount(ingredient)}</li>
              ))}
            </ul>
          </section>

          <section className="instructions-section">
            <h2 className="section-title">Instructions</h2>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </section>

          <section className="nutrition-section">
            <h2 className="section-title">Nutrition (per serving)</h2>
            <div className="nutrition-grid">
              <div className="nutrition-item">
                <div className="nutrition-value">{recipe.nutrition.calories}</div>
                <div className="nutrition-label">Calories</div>
              </div>
              <div className="nutrition-item">
                <div className="nutrition-value">{recipe.nutrition.protein}g</div>
                <div className="nutrition-label">Protein</div>
              </div>
              <div className="nutrition-item">
                <div className="nutrition-value">{recipe.nutrition.carbs}g</div>
                <div className="nutrition-label">Carbs</div>
              </div>
              <div className="nutrition-item">
                <div className="nutrition-value">{recipe.nutrition.fat}g</div>
                <div className="nutrition-label">Fat</div>
              </div>
              <div className="nutrition-item">
                <div className="nutrition-value">{recipe.nutrition.fiber}g</div>
                <div className="nutrition-label">Fiber</div>
              </div>
            </div>
          </section>

          {recipe.allergies && recipe.allergies.length > 0 && (
            <div style={{ marginTop: '30px', padding: '20px', background: '#fff3cd', borderRadius: '12px' }}>
              <h4 style={{ marginBottom: '10px', color: '#856404' }}>⚠️ Allergen Information:</h4>
              <p style={{ color: '#856404' }}>
                Contains: {recipe.allergies.join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
