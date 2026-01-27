import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import Router components
import { RecipeProvider } from './context/RecipeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import IngredientInput from './components/IngredientInput';
import FilterBar from './components/FilterBar';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail'; // Import new page
import FavoritesList from './components/FavoritesList';
import './index.css';

// Create a Home Component to keep App clean
const Home = () => {
  const navigate = useNavigate(); // To handle clicking on recipes
  
  return (
    <>
      <Hero />
      <div className="container">
        <IngredientInput />
        <FilterBar />
        {/* Pass empty function since Card now handles navigation internally */}
        <RecipeGrid onRecipeClick={() => {}} />
      </div>
    </>
  );
};

function App() {
  const [showFavorites, setShowFavorites] = useState(false);

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <RecipeProvider>
      <div className="App">
        <Header onToggleFavorites={toggleFavorites} showFavorites={showFavorites} />
        
        {showFavorites ? (
          <div className="container">
            <FavoritesList onRecipeClick={() => {}} />
          </div>
        ) : (
          <Routes>
            {/* Route for Home Page */}
            <Route path="/" element={<Home />} />
            
            {/* Route for Recipe Detail Page */}
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        )}
      </div>
    </RecipeProvider>
  );
}

export default App;