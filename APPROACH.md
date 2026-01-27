# Technical Approach - Smart Recipe Generator

## Architecture Overview

I built a React-based single-page application using Vite for optimal performance and modern development experience. The architecture follows a component-based pattern with centralized state management through React Context API and React Router for navigation.

**Core Algorithm**: The recipe matching system uses a weighted scoring approach that calculates ingredient match percentage (80% weight) by comparing available ingredients against recipe requirements using fuzzy string matching. User ratings contribute 20% weight to prioritize highly-rated recipes. The algorithm performs partial matching on ingredient names to handle variations. Missing ingredients trigger substitution suggestions from a curated database of common alternatives.

**Image Recognition**: Implemented a preprocessing pipeline that validates, resizes, and normalizes uploaded images before processing. The system integrates with Hugging Face's Google Vision Transformer (ViT) model via a serverless API endpoint. The backend processes base64-encoded images and returns detected ingredients, which are automatically mapped to standardized names for consistent recipe matching.

**Data Persistence**: Used LocalStorage for favorites and ratings, ensuring user preferences persist across sessions without requiring backend infrastructure. All state updates use functional setState patterns to prevent stale closure bugs.

**UI/UX Decisions**: Adopted a mobile-first responsive design with glassmorphism effects and gradient backgrounds. Implemented real-time autocomplete for ingredient input by extracting unique ingredients from the recipe database. Filter controls update results instantly using React's useEffect hooks. Recipe cards display dynamic match percentage bars with visual feedback.

**Error Handling**: Implemented comprehensive validation for image uploads (file type, size limits), graceful fallbacks for missing images using CDN URLs, informative empty states throughout the application, and loading indicators for async operations.
