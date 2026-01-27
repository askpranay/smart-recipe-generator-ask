import React, { useState, useEffect, useRef } from 'react';
import { useRecipes } from '../context/RecipeContext';
import { recognizeIngredientsFromImage, validateImageFile, preprocessImage } from '../utils/imageRecognition';

const IngredientInput = () => {
  const { userIngredients, addIngredient, removeIngredient, clearIngredients, allRecipes } = useRecipes();
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  
  const wrapperRef = useRef(null);

  // 1. Logic to get unique ingredients for autocomplete
  const allKnownIngredients = React.useMemo(() => {
    const ingredients = new Set();
    // Common staples
    const staples = ['tomato', 'onion', 'garlic', 'rice', 'pasta', 'cheese', 'egg', 'milk', 'butter', 'potato', 'carrot'];
    staples.forEach(s => ingredients.add(s));

    // Extract from actual recipes
    allRecipes.forEach(recipe => {
      recipe.ingredients.forEach(ingStr => {
        const name = ingStr.toLowerCase().split(' ').pop().replace(/[^a-z]/g, '');
        if (name.length > 2) ingredients.add(name);
      });
    });

    return Array.from(ingredients).sort();
  }, [allRecipes]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length > 0) {
      const filtered = allKnownIngredients.filter(ing => 
        ing.toLowerCase().startsWith(value.toLowerCase()) && 
        !userIngredients.includes(ing)
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const addSpecificIngredient = (ing) => {
    addIngredient(ing);
    setInput('');
    setShowSuggestions(false);
    document.querySelector('.ingredient-input').focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      addIngredient(input);
      setInput('');
      setShowSuggestions(false);
    }
  };

  const handleAddClick = () => {
    if (input.trim()) {
      addIngredient(input);
      setInput('');
      setShowSuggestions(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setError('');
      setIsProcessing(true);
      validateImageFile(file);
      const processedImage = await preprocessImage(file);
      const recognizedIngredients = await recognizeIngredientsFromImage(processedImage);
      recognizedIngredients.forEach(ing => addIngredient(ing));
    } catch (err) {
      setError(err.message);
    } finally {
      setIsProcessing(false);
      e.target.value = '';
    }
  };

  return (
    <section className="search-section">
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#2d3436', textAlign: 'center', fontWeight: '700' }}>
        What ingredients do you have?
      </h2>
      
      {/* Main Card Container */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* INPUT SECTION */}
        <div style={{ marginBottom: '20px' }} ref={wrapperRef}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#666', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
            ENTER INGREDIENTS
          </label>
          
          <div style={{ display: 'flex', gap: '15px', position: 'relative' }}>
            {/* Input with Autocomplete */}
            <div style={{ position: 'relative', flex: 1 }}>
              <input 
                type="text" 
                className="ingredient-input"
                style={{ width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', background: '#f8f9fa' }}
                /* Placeholder without "chicken" */
                placeholder="e.g., tomato, onion, cheese..."
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                autoComplete="off"
              />

              {/* FLOATING SUGGESTIONS LIST */}
              {showSuggestions && suggestions.length > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'white',
                  borderRadius: '0 0 8px 8px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  zIndex: 100,
                  marginTop: '5px',
                  border: '1px solid #eee'
                }}>
                  {suggestions.map((ing, index) => (
                    <div 
                      key={index}
                      onClick={() => addSpecificIngredient(ing)}
                      style={{
                        padding: '10px 15px',
                        cursor: 'pointer',
                        borderBottom: index === suggestions.length - 1 ? 'none' : '1px solid #f5f5f5',
                        color: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f8f9fa'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                    >
                      <span style={{ color: '#ff6b6b' }}>+</span> {ing}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button 
              className="btn btn-primary" 
              onClick={handleAddClick}
              style={{ background: '#ff6b6b', border: 'none', padding: '0 30px', borderRadius: '8px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Add
            </button>
          </div>
        </div>

        {/* --- MOVED TAGS CONTAINER HERE (BELOW INPUT BAR) --- */}
        {userIngredients.length > 0 && (
          <div className="tags-container" style={{ marginBottom: '30px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {userIngredients.map((ing, index) => (
              <span key={index} className="ingredient-tag" style={{ background: '#6c5ce7', color: 'white', padding: '5px 12px', borderRadius: '20px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {ing}
                <button 
                  className="remove-tag" 
                  onClick={() => removeIngredient(ing)}
                  aria-label={`Remove ${ing}`}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
                >
                  ×
                </button>
              </span>
            ))}
            <button 
              onClick={clearIngredients}
              style={{ background: 'none', border: 'none', color: '#ff6b6b', textDecoration: 'underline', cursor: 'pointer', fontSize: '14px' }}
            >
              Clear All
            </button>
          </div>
        )}

        {/* UPLOAD SECTION */}
        <div>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#666', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
            OR UPLOAD AN IMAGE
          </label>
          
          <div 
            className="image-upload-area"
            style={{ 
              border: '2px dashed #d1d5db', 
              borderRadius: '12px', 
              padding: '40px 20px', 
              textAlign: 'center', 
              background: '#f8fafc',
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={() => document.getElementById('image-input').click()}
          >
            <input
              id="image-input"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={isProcessing}
              style={{ display: 'none' }} 
            />
            
            <div style={{ marginBottom: '15px' }}>
              <span style={{ fontSize: '40px' }}>📷</span>
            </div>
            
            {isProcessing ? (
              <p style={{ color: '#ff6b6b', fontWeight: '600' }}>Analyzing image...</p>
            ) : (
              <>
                <p style={{ fontSize: '16px', color: '#333', marginBottom: '5px' }}>
                  Click to upload an image of your ingredients
                </p>
                <p style={{ fontSize: '13px', color: '#999' }}>
                  Supports: JPG, PNG, WebP (Max 5MB)
                </p>
              </>
            )}
          </div>
        </div>
        
        {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
      </div>
    </section>
  );
};

export default IngredientInput;