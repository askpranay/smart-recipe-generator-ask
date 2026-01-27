import React from 'react';
import { useRecipes } from '../context/RecipeContext';

const FilterBar = () => {
  const { filters, updateFilters, allRecipes } = useRecipes();

  // Get unique cuisines from recipes
  const cuisines = [...new Set(allRecipes.map(r => r.cuisine))].sort();

  const handleFilterChange = (filterType, value) => {
    updateFilters({ [filterType]: value });
  };

  return (
    <section className="filters">
      <h3 style={{ marginBottom: '20px' }}>Filter Recipes</h3>
      <div className="filter-row">
        
        {/* Difficulty Filter */}
        <div className="filter-group">
          <label>Difficulty</label>
          <select 
            value={filters.difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Cuisine Filter */}
        <div className="filter-group">
          <label>Cuisine</label>
          <select 
            value={filters.cuisine}
            onChange={(e) => handleFilterChange('cuisine', e.target.value)}
          >
            <option value="all">All Cuisines</option>
            {cuisines.map(cuisine => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>

        {/* Dietary Filter */}
        <div className="filter-group">
          <label>Dietary Preference</label>
          <select 
            value={filters.dietary}
            onChange={(e) => handleFilterChange('dietary', e.target.value)}
          >
            <option value="all">All</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>
        </div>

        {/* Time Filter */}
        <div className="filter-group">
          <label>Max Cooking Time: {filters.maxTime} min</label>
          <input
            type="range"
            min="10"
            max="240"
            step="10"
            value={filters.maxTime}
            onChange={(e) => handleFilterChange('maxTime', parseInt(e.target.value))}
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>

      </div>
    </section>
  );
};

export default FilterBar;
