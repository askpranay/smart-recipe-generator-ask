// Image Recognition Service connecting to Vercel Serverless Function

// Common ingredient mappings (Keep this for better matching)
const ingredientMappings = {
  'tomato': ['tomato', 'tomatoes'],
  'onion': ['onion', 'onions'],
  'garlic': ['garlic'],
  'chicken': ['chicken', 'poultry'],
  'beef': ['beef', 'meat', 'steak'],
  'rice': ['rice'],
  'pasta': ['pasta', 'noodle', 'spaghetti'],
  'cheese': ['cheese', 'cheddar', 'mozzarella', 'parmesan'],
  'egg': ['egg', 'eggs'],
  'milk': ['milk', 'dairy'],
  'butter': ['butter'],
  'bread': ['bread', 'baguette', 'loaf'],
  'lettuce': ['lettuce', 'salad', 'greens', 'leaf'],
  'carrot': ['carrot', 'carrots'],
  'potato': ['potato', 'potatoes'],
  'broccoli': ['broccoli'],
  'mushroom': ['mushroom', 'mushrooms'],
  'pepper': ['pepper', 'bell pepper', 'capsicum'],
  'avocado': ['avocado'],
  'lemon': ['lemon', 'citrus', 'lime'],
  'fish': ['fish', 'salmon', 'tuna'],
  'shrimp': ['shrimp', 'prawn', 'seafood']
};

/**
 * Recognizes ingredients by calling our backend API
 */
// ... keep imports and other helper functions like convertToBase64 ...

export const recognizeIngredientsFromImage = async (imageFile) => {
  try {
    const base64DataUrl = await convertToBase64(imageFile);
    const base64String = base64DataUrl.split(',')[1]; 
    
    console.log('📡 Calling Backend API...');
    
    const response = await fetch('/api/analyze-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ imageBase64: base64String })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log('📦 AI Response:', data);
    
    // ✅ CRITICAL FIX: Ensure we return the raw array directly
    // The backend now sends { ingredients: ['orange', 'banana', ...] }
    // We just need to pass that array straight through.
    
    const ingredients = data.ingredients || [];
    
    if (ingredients.length === 0) {
      throw new Error("No ingredients detected");
    }

    console.log('✅ Final List to UI:', ingredients);
    return ingredients; 
    
  } catch (error) {
    console.error('❌ Error recognizing ingredients:', error);
    throw error;
  }
};

// ... keep validateImageFile and preprocessImage as they are ...

/**
 * Helper: Convert image file to base64
 */
const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

/**
 * Helper: Map recognized items to standard names
 */
const mapToStandardIngredients = (recognizedItems) => {
  const standardIngredients = new Set();
  
  recognizedItems.forEach(item => {
    let matched = false;
    Object.entries(ingredientMappings).forEach(([standard, variations]) => {
      if (variations.some(v => item.includes(v) || v.includes(item))) {
        standardIngredients.add(standard);
        matched = true;
      }
    });
    // If no specific mapping, keep the original name if it's reasonable length
    if (!matched && item.length > 2) {
      standardIngredients.add(item);
    }
  });
  
  return Array.from(standardIngredients);
};

export const validateImageFile = (file) => {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    throw new Error('Please upload a valid image (JPEG, PNG, or WebP).');
  }
  if (file.size > 5 * 1024 * 1024) { 
    throw new Error('Image size should be less than 5MB.');
  }
  return true;
};

// No changes needed for preprocessImage, export as before
export const preprocessImage = async (imageFile) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const maxWidth = 800;
        const maxHeight = 800;
        let width = img.width;
        let height = img.height;
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          resolve(new File([blob], imageFile.name, { type: 'image/jpeg' }));
        }, 'image/jpeg', 0.9);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);
  });
};

export default {
  recognizeIngredientsFromImage,
  validateImageFile,
  preprocessImage
};