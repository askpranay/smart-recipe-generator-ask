import React from 'react';
import { useRecipes } from '../context/RecipeContext';

const Header = ({ onToggleFavorites, showFavorites }) => {
  // We don't need 'favorites' array anymore since we removed the count
  const { favorites } = useRecipes(); 

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">🍳 Smart Recipe Generator</div>
        <nav>
          {/* Added inline styles to strictly force removal of bullets/markers */}
          <ul className="nav-links" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ listStyle: 'none' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); onToggleFavorites(); }}>
                {/* Count removed, only showing text */}
                {showFavorites ? '🏠 Home' : '❤️ Favorites'}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;