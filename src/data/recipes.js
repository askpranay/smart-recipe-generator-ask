// Recipe Database with 30+ diverse recipes
export const recipes = [
  {
    id: 1,
    title: "Classic Spaghetti Carbonara",
    cuisine: "Italian",
    difficulty: "Medium",
    cookingTime: 25,
    servings: 4,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800",
    ingredients: [
      "400g spaghetti",
      "200g pancetta",
      "4 large eggs",
      "100g parmesan cheese",
      "1 tsp black pepper",
      "1 pinch salt"
    ],
    instructions: [
      "Cook spaghetti according to package directions in salted boiling water.",
      "While pasta cooks, dice pancetta and fry in a large pan until crispy.",
      "Beat eggs and grated parmesan together in a bowl, season with black pepper.",
      "Drain pasta, reserving 1 cup pasta water.",
      "Add hot pasta to pancetta pan, remove from heat.",
      "Quickly stir in egg mixture, adding pasta water to create creamy sauce.",
      "Serve immediately with extra parmesan and black pepper."
    ],
    nutrition: {
      calories: 520,
      protein: 28,
      carbs: 62,
      fat: 18,
      fiber: 3
    },
    dietaryTags: [],
    allergies: ["gluten", "dairy", "eggs"]
  },
  {
    id: 2,
    title: "Creamy Pesto Pasta",
    cuisine: "Italian",
    difficulty: "Easy",
    cookingTime: 20,
    servings: 4,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
    ingredients: [
      "400g penne pasta",
      "1 cup fresh basil pesto",
      "1/2 cup heavy cream",
      "1/2 cup parmesan cheese",
      "1 cup cherry tomatoes (halved)",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Boil pasta in salted water until al dente. Drain, reserving 1/2 cup pasta water.",
      "In a large pan, heat the pesto and heavy cream over low heat.",
      "Add the cooked pasta and toss to coat.",
      "Add reserved pasta water if needed to thin the sauce.",
      "Stir in cherry tomatoes and parmesan cheese.",
      "Serve hot garnished with extra basil."
    ],
    nutrition: {
      calories: 480,
      protein: 14,
      carbs: 55,
      fat: 22,
      fiber: 4
    },
    dietaryTags: ["vegetarian"],
    allergies: ["gluten", "dairy", "nuts"]
  },
  {
    id: 3,
    title: "Chicken Tikka Masala",
    cuisine: "Indian",
    difficulty: "Medium",
    cookingTime: 45,
    servings: 4,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
    ingredients: [
      "500g chicken breast",
      "1 cup plain yogurt",
      "1 can (400g) tomato puree",
      "1/2 cup heavy cream",
      "1 large onion",
      "3 cloves garlic",
      "1 inch ginger",
      "2 tbsp garam masala",
      "1 tsp cumin",
      "1 tsp paprika",
      "2 cups basmati rice"
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for at least 30 minutes.",
      "Grill or bake chicken pieces until cooked through.",
      "Sauté onions, garlic, and ginger until fragrant.",
      "Add tomatoes and spices, cook until sauce thickens.",
      "Stir in cream and cooked chicken, simmer for 10 minutes.",
      "Serve hot with rice and naan bread."
    ],
    nutrition: {
      calories: 480,
      protein: 38,
      carbs: 42,
      fat: 16,
      fiber: 4
    },
    dietaryTags: ["gluten-free"],
    allergies: ["dairy"]
  },
  {
    id: 4,
    title: "Avocado Toast Deluxe",
    cuisine: "Modern",
    difficulty: "Easy",
    cookingTime: 10,
    servings: 2,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=800",
    ingredients: [
      "2 slices sourdough bread",
      "1 large avocado",
      "2 large eggs",
      "6 cherry tomatoes",
      "30g feta cheese",
      "1 tsp lemon juice",
      "1 tsp olive oil",
      "salt to taste",
      "pepper to taste"
    ],
    instructions: [
      "Toast bread slices until golden brown.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Poach or fry eggs to your preference.",
      "Spread avocado mixture on toasted bread.",
      "Top with eggs, halved cherry tomatoes, and crumbled feta.",
      "Drizzle with olive oil and serve immediately."
    ],
    nutrition: {
      calories: 380,
      protein: 16,
      carbs: 32,
      fat: 22,
      fiber: 8
    },
    dietaryTags: ["vegetarian"],
    allergies: ["gluten", "eggs", "dairy"]
  },
  {
    id: 5,
    title: "Beef Tacos",
    cuisine: "Mexican",
    difficulty: "Easy",
    cookingTime: 25,
    servings: 4,
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "2 cups shredded lettuce",
      "2 diced tomatoes",
      "1 cup cheddar cheese",
      "1/2 cup sour cream",
      "1/2 diced onion",
      "1 packet taco seasoning"
    ],
    instructions: [
      "Brown ground beef in a large skillet over medium heat.",
      "Add taco seasoning and water, simmer until thick.",
      "Warm taco shells in oven.",
      "Chop lettuce, tomatoes, and onions.",
      "Assemble tacos with beef and toppings.",
      "Serve with sour cream and extra cheese."
    ],
    nutrition: {
      calories: 450,
      protein: 28,
      carbs: 35,
      fat: 22,
      fiber: 4
    },
    dietaryTags: ["gluten-free"],
    allergies: ["dairy"]
  },
  {
    id: 6,
    title: "Thai Green Curry",
    cuisine: "Thai",
    difficulty: "Medium",
    cookingTime: 35,
    servings: 4,
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
    ingredients: [
      "500g chicken breast",
      "400ml coconut milk",
      "2 tbsp green curry paste",
      "1 cup bamboo shoots",
      "1 red bell pepper",
      "1 cup thai basil",
      "1 tbsp fish sauce",
      "2 cups jasmine rice"
    ],
    instructions: [
      "Heat curry paste in a pot until fragrant.",
      "Add chicken pieces and cook until browned.",
      "Pour in coconut milk and bring to simmer.",
      "Add vegetables and cook until tender.",
      "Season with fish sauce and sugar.",
      "Garnish with Thai basil and serve with rice."
    ],
    nutrition: {
      calories: 420,
      protein: 32,
      carbs: 38,
      fat: 16,
      fiber: 3
    },
    dietaryTags: ["gluten-free"],
    allergies: ["fish"]
  },
  {
    id: 7,
    title: "Greek Salad",
    cuisine: "Greek",
    difficulty: "Easy",
    cookingTime: 15,
    servings: 4,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
    ingredients: [
      "1 large cucumber",
      "4 ripe tomatoes",
      "1/2 red onion",
      "200g feta cheese",
      "1/2 cup kalamata olives",
      "3 tbsp olive oil",
      "1 tbsp lemon juice",
      "1 tsp dried oregano"
    ],
    instructions: [
      "Chop cucumbers, tomatoes, and red onion into bite-sized pieces.",
      "Combine vegetables in a large bowl.",
      "Add Kalamata olives and cubed feta cheese.",
      "Drizzle with olive oil and lemon juice.",
      "Season with oregano, salt, and pepper.",
      "Toss gently and serve immediately."
    ],
    nutrition: {
      calories: 220,
      protein: 8,
      carbs: 12,
      fat: 16,
      fiber: 3
    },
    dietaryTags: ["vegetarian", "gluten-free"],
    allergies: ["dairy"]
  },
  {
    id: 8,
    title: "Salmon with Roasted Vegetables",
    cuisine: "Modern",
    difficulty: "Medium",
    cookingTime: 35,
    servings: 2,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    ingredients: [
      "2 salmon fillets (150g each)",
      "1 head broccoli",
      "2 carrots",
      "1 yellow bell pepper",
      "2 tbsp olive oil",
      "1 lemon",
      "2 cloves garlic",
      "1 tsp mixed herbs"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Chop vegetables into even pieces and toss with olive oil.",
      "Spread vegetables on baking sheet.",
      "Season salmon with lemon, garlic, and herbs.",
      "Place salmon on vegetables and roast for 20-25 minutes.",
      "Serve hot with lemon wedges."
    ],
    nutrition: {
      calories: 380,
      protein: 36,
      carbs: 18,
      fat: 18,
      fiber: 6
    },
    dietaryTags: ["gluten-free"],
    allergies: ["fish"]
  },
  {
    id: 10,
    title: "Margherita Pizza",
    cuisine: "Italian",
    difficulty: "Medium",
    cookingTime: 30,
    servings: 2,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
    ingredients: [
      "1 ball pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "1 bunch fresh basil",
      "1 tbsp olive oil",
      "1 clove garlic"
    ],
    instructions: [
      "Preheat oven to 475°F with pizza stone if available.",
      "Roll out pizza dough into desired shape.",
      "Spread tomato sauce evenly, leaving border for crust.",
      "Add sliced mozzarella cheese.",
      "Bake for 12-15 minutes until crust is golden.",
      "Top with fresh basil and drizzle with olive oil."
    ],
    nutrition: {
      calories: 480,
      protein: 20,
      carbs: 58,
      fat: 18,
      fiber: 3
    },
    dietaryTags: ["vegetarian"],
    allergies: ["gluten", "dairy"]
  },
  {
    id: 11,
    title: "Chickpea Curry",
    cuisine: "Indian",
    difficulty: "Easy",
    cookingTime: 30,
    servings: 4,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    ingredients: [
      "2 cans (800g) chickpeas",
      "1 can (400g) diced tomatoes",
      "1 large onion",
      "1 can (400ml) coconut milk",
      "2 tbsp curry powder",
      "2 cloves garlic",
      "1 inch ginger",
      "2 cups fresh spinach"
    ],
    instructions: [
      "Sauté onions, garlic, and ginger until soft.",
      "Add curry powder and cook until fragrant.",
      "Add tomatoes and cook until they break down.",
      "Add chickpeas and coconut milk, simmer 15 minutes.",
      "Stir in spinach until wilted.",
      "Serve with rice or naan."
    ],
    nutrition: {
      calories: 320,
      protein: 12,
      carbs: 42,
      fat: 12,
      fiber: 10
    },
    dietaryTags: ["vegetarian", "vegan", "gluten-free"],
    allergies: []
  },
  {
    id: 12,
    title: "Caesar Salad",
    cuisine: "American",
    difficulty: "Easy",
    cookingTime: 15,
    servings: 4,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
    ingredients: [
      "2 heads romaine lettuce",
      "1 cup croutons",
      "1/2 cup parmesan cheese",
      "1/2 cup caesar dressing",
      "1/2 lemon",
      "1 clove garlic",
      "2 chicken breasts (optional)"
    ],
    instructions: [
      "Grill or pan-fry chicken breast if adding protein.",
      "Chop romaine lettuce into bite-sized pieces.",
      "Make dressing with mayo, lemon, garlic, and anchovy paste.",
      "Toss lettuce with dressing.",
      "Top with croutons, parmesan, and sliced chicken.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 380,
      protein: 28,
      carbs: 18,
      fat: 22,
      fiber: 3
    },
    dietaryTags: [],
    allergies: ["gluten", "dairy", "eggs", "fish"]
  },
  {
    id: 13,
    title: "Mushroom Risotto",
    cuisine: "Italian",
    difficulty: "Hard",
    cookingTime: 45,
    servings: 4,
    image: "https://images.unsplash.com/photo-1476124369491-a7adeb1fc5f6?w=800",
    ingredients: [
      "1.5 cups arborio rice",
      "400g mixed mushrooms",
      "1/2 cup white wine",
      "1/2 cup parmesan cheese",
      "4 tbsp butter",
      "1 small onion",
      "2 cloves garlic",
      "4 cups vegetable stock"
    ],
    instructions: [
      "Sauté mushrooms in butter until golden, set aside.",
      "In same pot, sauté onion and garlic until soft.",
      "Add arborio rice and toast for 2 minutes.",
      "Add wine and stir until absorbed.",
      "Add stock one ladle at a time, stirring constantly.",
      "When rice is creamy, stir in mushrooms, butter, and parmesan.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 420,
      protein: 12,
      carbs: 58,
      fat: 14,
      fiber: 2
    },
    dietaryTags: ["vegetarian", "gluten-free"],
    allergies: ["dairy"]
  },
  {
    id: 14,
    title: "Pulled Pork Sandwich",
    cuisine: "American",
    difficulty: "Hard",
    cookingTime: 240,
    servings: 8,
    image: "https://images.unsplash.com/photo-1619221882232-23e72c76cccf?w=800",
    ingredients: [
      "1.5kg pork shoulder",
      "2 cups bbq sauce",
      "8 burger buns",
      "2 cups coleslaw",
      "1 large onion",
      "4 cloves garlic",
      "1 tbsp paprika",
      "2 tbsp brown sugar"
    ],
    instructions: [
      "Rub pork with spice mixture and refrigerate overnight.",
      "Slow cook at 300°F for 4 hours until tender.",
      "Shred pork with two forks.",
      "Mix with BBQ sauce.",
      "Toast buns lightly.",
      "Serve pork on buns topped with coleslaw."
    ],
    nutrition: {
      calories: 520,
      protein: 38,
      carbs: 45,
      fat: 20,
      fiber: 2
    },
    dietaryTags: [],
    allergies: ["gluten"]
  },
  {
    id: 16,
    title: "Chicken Fajitas",
    cuisine: "Mexican",
    difficulty: "Easy",
    cookingTime: 25,
    servings: 4,
    image: "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=800",
    ingredients: [
      "500g chicken breast (sliced)",
      "3 bell peppers (mixed colors)",
      "1 large onion",
      "8 flour tortillas",
      "1 tbsp chili powder",
      "1 tsp cumin",
      "1 lime",
      "2 tbsp olive oil"
    ],
    instructions: [
      "Mix chili powder, cumin, salt, pepper, and lime juice.",
      "Marinate chicken slices in half the spice mix.",
      "Sauté chicken in hot oil until browned and cooked.",
      "Remove chicken, add peppers and onions to same pan.",
      "Cook vegetables until tender-crisp.",
      "Return chicken to pan, toss together, and serve in warm tortillas."
    ],
    nutrition: {
      calories: 450,
      protein: 32,
      carbs: 42,
      fat: 16,
      fiber: 4
    },
    dietaryTags: [],
    allergies: ["gluten"]
  },
  {
    id: 17,
    title: "Lentil Soup",
    cuisine: "Mediterranean",
    difficulty: "Easy",
    cookingTime: 40,
    servings: 6,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
    ingredients: [
      "2 cups dried lentils",
      "3 carrots",
      "3 stalks celery",
      "1 large onion",
      "1 can diced tomatoes",
      "6 cups vegetable stock",
      "1 tsp cumin",
      "2 cloves garlic"
    ],
    instructions: [
      "Sauté onion, carrots, and celery until soft.",
      "Add garlic and cumin, cook until fragrant.",
      "Add lentils, tomatoes, and stock.",
      "Bring to boil, then simmer for 30 minutes.",
      "Season with salt and pepper.",
      "Serve hot with crusty bread."
    ],
    nutrition: {
      calories: 240,
      protein: 14,
      carbs: 38,
      fat: 2,
      fiber: 12
    },
    dietaryTags: ["vegetarian", "vegan", "gluten-free"],
    allergies: []
  },
  {
    id: 18,
    title: "Shrimp Scampi",
    cuisine: "Italian",
    difficulty: "Easy",
    cookingTime: 20,
    servings: 4,
    image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?w=800",
    ingredients: [
      "500g shrimp (peeled)",
      "400g linguine pasta",
      "4 tbsp butter",
      "4 cloves garlic",
      "1/2 cup white wine",
      "2 tbsp lemon juice",
      "1/4 cup parsley",
      "1 tsp red pepper flakes"
    ],
    instructions: [
      "Cook pasta according to package directions.",
      "Sauté garlic in butter until fragrant.",
      "Add shrimp and cook until pink.",
      "Add wine and lemon juice, simmer.",
      "Toss with cooked pasta.",
      "Garnish with parsley and red pepper flakes."
    ],
    nutrition: {
      calories: 420,
      protein: 28,
      carbs: 48,
      fat: 12,
      fiber: 2
    },
    dietaryTags: [],
    allergies: ["shellfish", "gluten", "dairy"]
  },
  {
    id: 19,
    title: "Black Bean Burrito",
    cuisine: "Mexican",
    difficulty: "Easy",
    cookingTime: 25,
    servings: 4,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800",
    ingredients: [
      "2 cans black beans",
      "4 large tortillas",
      "1 cup cooked rice",
      "1 cup shredded cheese",
      "1 avocado",
      "1/2 cup salsa",
      "1/4 cup sour cream",
      "1 cup shredded lettuce"
    ],
    instructions: [
      "Cook rice and warm black beans.",
      "Warm tortillas in microwave or on griddle.",
      "Layer rice, beans, cheese on tortilla.",
      "Add avocado, lettuce, and salsa.",
      "Roll tightly, tucking in sides.",
      "Serve with sour cream."
    ],
    nutrition: {
      calories: 460,
      protein: 18,
      carbs: 62,
      fat: 16,
      fiber: 12
    },
    dietaryTags: ["vegetarian"],
    allergies: ["gluten", "dairy"]
  },
  {
    id: 20,
    title: "Pad Thai",
    cuisine: "Thai",
    difficulty: "Medium",
    cookingTime: 30,
    servings: 4,
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800",
    ingredients: [
      "250g rice noodles",
      "300g shrimp",
      "2 eggs",
      "1 cup bean sprouts",
      "1/4 cup crushed peanuts",
      "1 lime",
      "2 tbsp fish sauce",
      "1 tbsp tamarind paste"
    ],
    instructions: [
      "Soak rice noodles in warm water until soft.",
      "Make sauce with fish sauce, tamarind, and sugar.",
      "Stir fry shrimp until cooked, set aside.",
      "Scramble eggs in wok, add noodles and sauce.",
      "Add shrimp and bean sprouts, toss well.",
      "Serve with crushed peanuts and lime wedges."
    ],
    nutrition: {
      calories: 480,
      protein: 24,
      carbs: 58,
      fat: 16,
      fiber: 3
    },
    dietaryTags: ["gluten-free"],
    allergies: ["shellfish", "eggs", "peanuts", "fish"]
  },
  {
    id: 21,
    title: "Falafel Wrap",
    cuisine: "Middle Eastern",
    difficulty: "Medium",
    cookingTime: 35,
    servings: 4,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800",
    ingredients: [
      "2 cups chickpeas (soaked)",
      "4 pita breads",
      "1/4 cup tahini",
      "1 cucumber",
      "1 tomato",
      "1 cup lettuce",
      "1/2 red onion",
      "1 bunch parsley"
    ],
    instructions: [
      "Blend chickpeas with spices to form falafel mixture.",
      "Form into balls and fry until golden brown.",
      "Make tahini sauce with lemon and garlic.",
      "Warm pita bread.",
      "Fill pita with falafel, vegetables, and sauce.",
      "Wrap and serve immediately."
    ],
    nutrition: {
      calories: 380,
      protein: 14,
      carbs: 52,
      fat: 14,
      fiber: 10
    },
    dietaryTags: ["vegetarian", "vegan"],
    allergies: ["gluten", "sesame"]
  },
  {
    id: 22,
    title: "Beef Stir Fry",
    cuisine: "Chinese",
    difficulty: "Easy",
    cookingTime: 25,
    servings: 4,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800",
    ingredients: [
      "500g beef sirloin",
      "2 bell peppers",
      "1 large onion",
      "3 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "2 cloves garlic",
      "1 inch ginger",
      "2 cups cooked rice"
    ],
    instructions: [
      "Slice beef thinly against the grain.",
      "Marinate in soy sauce and cornstarch.",
      "Heat wok to very high heat with oil.",
      "Stir fry beef until browned, remove.",
      "Stir fry vegetables with garlic and ginger.",
      "Add beef back, add sauces, serve over rice."
    ],
    nutrition: {
      calories: 420,
      protein: 32,
      carbs: 42,
      fat: 14,
      fiber: 3
    },
    dietaryTags: ["gluten-free"],
    allergies: ["soy"]
  },
  {
    id: 25,
    title: "Chocolate Chip Pancakes",
    cuisine: "American",
    difficulty: "Easy",
    cookingTime: 20,
    servings: 4,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    ingredients: [
      "1.5 cups all-purpose flour",
      "1 cup milk",
      "2 large eggs",
      "1/2 cup chocolate chips",
      "2 tbsp melted butter",
      "2 tbsp sugar",
      "1 tbsp baking powder",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Mix dry ingredients in a bowl.",
      "Whisk together wet ingredients separately.",
      "Combine wet and dry ingredients until just mixed.",
      "Fold in chocolate chips.",
      "Cook on griddle until bubbles form, flip.",
      "Serve with maple syrup and butter."
    ],
    nutrition: {
      calories: 380,
      protein: 10,
      carbs: 52,
      fat: 14,
      fiber: 2
    },
    dietaryTags: ["vegetarian"],
    allergies: ["gluten", "dairy", "eggs"]
  },
  {
    id: 27,
    title: "Vegetable Biryani",
    cuisine: "Indian",
    difficulty: "Hard",
    cookingTime: 60,
    servings: 6,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
    ingredients: [
      "2 cups basmati rice",
      "1 cup mixed vegetables (carrots, beans, peas)",
      "1 cup yogurt",
      "2 onions (sliced fried)",
      "1 tbsp ginger garlic paste",
      "1/4 cup mint leaves",
      "1/4 cup coriander leaves",
      "1 tbsp biryani masala",
      "Pinch of saffron soaked in milk",
      "3 tbsp ghee"
    ],
    instructions: [
      "Soak rice for 30 minutes, then cook with whole spices until 70% done.",
      "Marinate vegetables in yogurt, ginger garlic paste, and biryani masala for 30 minutes.",
      "Cook marinated vegetables in a pan until tender.",
      "In a heavy pot, layer vegetables and rice.",
      "Top with fried onions, mint, coriander, saffron milk, and ghee.",
      "Cover tightly and cook on very low heat (dum) for 20 minutes."
    ],
    nutrition: {
      calories: 420,
      protein: 10,
      carbs: 65,
      fat: 14,
      fiber: 6
    },
    dietaryTags: ["vegetarian", "gluten-free"],
    allergies: ["dairy"]
  },
  {
    id: 29,
    title: "Palak Paneer",
    cuisine: "Indian",
    difficulty: "Medium",
    cookingTime: 35,
    servings: 4,
    image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=800",
    ingredients: [
      "250g paneer cubes",
      "500g fresh spinach",
      "1 large onion",
      "2 tomatoes",
      "1 inch ginger",
      "3 cloves garlic",
      "1/2 cup fresh cream",
      "1 tsp garam masala",
      "2 tbsp butter"
    ],
    instructions: [
      "Blanch spinach in boiling water for 2 mins, then dip in ice water. Puree it.",
      "Sauté onions, ginger, and garlic in butter until golden.",
      "Add tomatoes and spices, cook until soft.",
      "Add spinach puree and simmer for 5-7 minutes.",
      "Stir in cream and paneer cubes.",
      "Simmer for 2 minutes and serve hot with naan."
    ],
    nutrition: {
      calories: 380,
      protein: 18,
      carbs: 12,
      fat: 28,
      fiber: 6
    },
    dietaryTags: ["vegetarian", "gluten-free"],
    allergies: ["dairy"]
  },
  {
    id: 31,
    title: "Veg Manchurian",
    cuisine: "Indo-Chinese",
    difficulty: "Medium",
    cookingTime: 45,
    servings: 4,
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800",
    ingredients: [
      "2 cups cabbage (finely grated)",
      "1 cup carrot (grated)",
      "1/2 cup spring onion",
      "3 tbsp corn flour",
      "2 tbsp all-purpose flour",
      "1 tbsp soy sauce",
      "1 tbsp ginger garlic (minced)",
      "Oil for deep frying"
    ],
    instructions: [
      "Mix cabbage, carrot, spring onion, flours, salt, and pepper. Form into small balls.",
      "Deep fry balls in hot oil until golden and crisp. Set aside.",
      "Heat 1 tbsp oil, sauté ginger, garlic, and chilies.",
      "Add soy sauce, ketchup, vinegar, and 1 cup water.",
      "Add a cornflour slurry to thicken the sauce.",
      "Toss the fried balls in the sauce and garnish with spring onions."
    ],
    nutrition: {
      calories: 350,
      protein: 6,
      carbs: 45,
      fat: 18,
      fiber: 5
    },
    dietaryTags: ["vegetarian", "vegan"],
    allergies: ["gluten", "soy"]
  },
  {
    id: 32,
    title: "Chilli Paneer",
    cuisine: "Indo-Chinese",
    difficulty: "Medium",
    cookingTime: 30,
    servings: 3,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    ingredients: [
      "250g paneer (cubed)",
      "1 large bell pepper (diced)",
      "1 large onion (diced)",
      "2 tbsp corn flour",
      "2 tbsp soy sauce",
      "1 tbsp chili sauce",
      "1 tbsp vinegar",
      "2 green chilies (slit)"
    ],
    instructions: [
      "Coat paneer cubes in cornflour and salt. Shallow fry until golden.",
      "In a wok, heat oil and stir-fry garlic, green chilies, onions, and peppers on high heat.",
      "Add soy sauce, chili sauce, vinegar, and salt.",
      "Add a splash of water and cornflour slurry for gravy (optional).",
      "Toss in fried paneer cubes and coat well.",
      "Serve hot garnished with spring onion greens."
    ],
    nutrition: {
      calories: 380,
      protein: 18,
      carbs: 25,
      fat: 24,
      fiber: 2
    },
    dietaryTags: ["vegetarian", "gluten-free"],
    allergies: ["dairy", "soy"]
  },
  {
    id: 33,
    title: "Veg Hakka Noodles",
    cuisine: "Indo-Chinese",
    difficulty: "Easy",
    cookingTime: 20,
    servings: 4,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800",
    ingredients: [
      "300g egg noodles or plain noodles",
      "1 cup cabbage (shredded)",
      "1 carrot (julienned)",
      "1 bell pepper (sliced)",
      "1 tbsp soy sauce",
      "1 tbsp vinegar",
      "1 tbsp chili sauce",
      "2 cloves garlic (minced)"
    ],
    instructions: [
      "Boil noodles al dente, drain, and toss with a little oil to prevent sticking.",
      "Heat oil in a wok on high flame. Add garlic and vegetables.",
      "Stir-fry veggies for 2-3 minutes (keep them crunchy).",
      "Add boiled noodles, soy sauce, vinegar, and chili sauce.",
      "Toss well on high heat for 1-2 minutes.",
      "Serve hot with Manchurian or Chilli Paneer."
    ],
    nutrition: {
      calories: 310,
      protein: 8,
      carbs: 58,
      fat: 6,
      fiber: 4
    },
    dietaryTags: ["vegetarian"],
    allergies: ["gluten", "soy", "eggs"]
  },
  {
    id: 34,
    title: "Chicken Fried Rice",
    cuisine: "Chinese",
    difficulty: "Easy",
    cookingTime: 20,
    servings: 4,
    image: "https://images.unsplash.com/photo-1603133872878-684f1084261d?w=800",
    ingredients: [
      "3 cups cooked rice (cold)",
      "200g chicken breast (diced)",
      "2 eggs (beaten)",
      "1/2 cup peas",
      "1/2 cup carrots (diced)",
      "3 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "2 stalks spring onion"
    ],
    instructions: [
      "Scramble eggs in a wok and set aside.",
      "Stir-fry diced chicken until cooked through.",
      "Add carrots and peas, stir-fry for 2 minutes.",
      "Add cold rice and break up any clumps.",
      "Add soy sauce, oyster sauce, and cooked eggs. Toss well.",
      "Garnish with chopped spring onions and serve."
    ],
    nutrition: {
      calories: 450,
      protein: 25,
      carbs: 55,
      fat: 12,
      fiber: 3
    },
    dietaryTags: [],
    allergies: ["soy", "eggs", "gluten"]
  },
  {
    id: 35,
    title: "California Sushi Rolls",
    cuisine: "Japanese",
    difficulty: "Hard",
    cookingTime: 60,
    servings: 4,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
    ingredients: [
      "2 cups sushi rice",
      "4 sheets nori",
      "1 cucumber (julienned)",
      "1 avocado (sliced)",
      "200g crab meat or imitation crab",
      "2 tbsp rice vinegar",
      "1 tbsp sugar",
      "1 tbsp sesame seeds"
    ],
    instructions: [
      "Cook sushi rice and season with mixture of vinegar, sugar, and salt.",
      "Place nori sheet on bamboo mat, spread rice evenly.",
      "Flip nori so rice is on outside (optional), or keep rice inside.",
      "Place cucumber, avocado, and crab meat in a line.",
      "Roll tightly using the bamboo mat.",
      "Slice into bite-sized pieces and serve with soy sauce and wasabi."
    ],
    nutrition: {
      calories: 320,
      protein: 10,
      carbs: 45,
      fat: 8,
      fiber: 4
    },
    dietaryTags: ["gluten-free"],
    allergies: ["shellfish", "sesame"]
  },
  {
    id: 36,
    title: "Spicy Beef Burritos",
    cuisine: "Mexican",
    difficulty: "Medium",
    cookingTime: 30,
    servings: 4,
    image: "https://images.unsplash.com/photo-1566740933430-b55593292225?w=800",
    ingredients: [
      "500g ground beef",
      "4 large flour tortillas",
      "1 cup cooked rice",
      "1 cup black beans",
      "1 cup cheddar cheese",
      "1 tbsp chili powder",
      "1 tsp cumin",
      "1/2 cup salsa"
    ],
    instructions: [
      "Brown ground beef in a skillet with chili powder, cumin, and salt.",
      "Warm tortillas in the microwave or on a pan.",
      "Layer rice, beans, beef, and cheese onto each tortilla.",
      "Add salsa and any desired toppings (lettuce, sour cream).",
      "Fold sides in and roll tightly.",
      "Serve warm, optionally grilled for a crispy exterior."
    ],
    nutrition: {
      calories: 550,
      protein: 28,
      carbs: 58,
      fat: 22,
      fiber: 6
    },
    dietaryTags: [],
    allergies: ["gluten", "dairy"]
  },
  {
    id: 37,
    title: "Japanese Miso Ramen",
    cuisine: "Japanese",
    difficulty: "Medium",
    cookingTime: 40,
    servings: 2,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    ingredients: [
      "2 packs ramen noodles",
      "4 cups chicken or vegetable stock",
      "3 tbsp miso paste",
      "1 cup corn",
      "2 boiled eggs (halved)",
      "2 stalks green onion",
      "200g cooked pork or tofu",
      "1 sheet nori (optional)"
    ],
    instructions: [
      "Bring stock to a boil. Dissolve miso paste in a ladle of hot stock, then return to pot.",
      "Cook ramen noodles separately, drain, and place in bowls.",
      "Pour hot miso broth over noodles.",
      "Top with corn, sliced protein (pork/tofu), egg halves, and green onions.",
      "Add a piece of nori and serve immediately."
    ],
    nutrition: {
      calories: 450,
      protein: 22,
      carbs: 55,
      fat: 14,
      fiber: 4
    },
    dietaryTags: [],
    allergies: ["soy", "eggs", "gluten"]
  },
  {
    id: 38,
    title: "Crispy Fish Fry",
    cuisine: "General",
    difficulty: "Medium",
    cookingTime: 25,
    servings: 2,
    image: "https://images.unsplash.com/photo-1595250497678-b328773998b3?w=800",
    ingredients: [
      "2 large fish fillets",
      "1 tbsp red chili powder",
      "1 tsp turmeric powder",
      "1 tsp coriander powder",
      "1 tbsp lemon juice",
      "1 tsp ginger garlic paste",
      "1/2 cup semolina or rice flour (for coating)",
      "Oil for shallow frying"
    ],
    instructions: [
      "Marinate fish fillets with chili powder, turmeric, coriander, lemon juice, ginger garlic paste, and salt for 20 minutes.",
      "Coat the marinated fish in semolina or rice flour.",
      "Heat oil in a pan and shallow fry on medium heat.",
      "Cook until crispy and golden brown on both sides.",
      "Serve hot with lemon wedges and onion rings."
    ],
    nutrition: {
      calories: 320,
      protein: 24,
      carbs: 12,
      fat: 18,
      fiber: 1
    },
    dietaryTags: ["gluten-free"],
    allergies: ["fish"]
  },
  {
    id: 39,
    title: "Alfredo White Sauce Pasta",
    cuisine: "Italian",
    difficulty: "Medium",
    cookingTime: 25,
    servings: 2,
    image: "https://images.unsplash.com/photo-1626844131082-256783844137?w=800",
    ingredients: [
      "200g fettuccine or penne pasta",
      "2 tbsp butter",
      "1 cup heavy cream",
      "1/2 cup parmesan cheese",
      "2 cloves garlic (minced)",
      "1/2 tsp black pepper",
      "Parsley for garnish"
    ],
    instructions: [
      "Cook pasta in salted boiling water until al dente.",
      "Melt butter in a pan and sauté minced garlic until fragrant.",
      "Pour in heavy cream and bring to a simmer.",
      "Stir in parmesan cheese until melted and sauce thickens.",
      "Toss cooked pasta in the sauce.",
      "Season with pepper and garnish with parsley."
    ],
    nutrition: {
      calories: 550,
      protein: 16,
      carbs: 58,
      fat: 28,
      fiber: 2
    },
    dietaryTags: ["vegetarian"],
    allergies: ["gluten", "dairy"]
  },
  {
    id: 40,
    title: "Classic Beef Burger",
    cuisine: "American",
    difficulty: "Medium",
    cookingTime: 20,
    servings: 2,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    ingredients: [
      "2 burger buns",
      "300g ground beef patty",
      "1 tomato (sliced)",
      "1 onion (sliced rings)",
      "2 lettuce leaves",
      "2 slices cheddar cheese",
      "2 tbsp mayonnaise/ketchup",
      "Salt and pepper"
    ],
    instructions: [
      "Season beef patty with salt and pepper.",
      "Grill or pan-fry patty for 4-5 minutes per side until cooked.",
      "Place cheese slice on patty to melt in last minute.",
      "Toast buns lightly.",
      "Assemble burger with sauce, lettuce, patty, tomato, and onion.",
      "Serve hot with fries."
    ],
    nutrition: {
      calories: 600,
      protein: 30,
      carbs: 45,
      fat: 32,
      fiber: 3
    },
    dietaryTags: [],
    allergies: ["gluten", "dairy", "eggs"]
  },
  {
    id: 41,
    title: "Crispy French Fries",
    cuisine: "American",
    difficulty: "Easy",
    cookingTime: 30,
    servings: 2,
    image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=800",
    ingredients: [
      "3 large potatoes (cut into strips)",
      "Oil for deep frying",
      "Salt to taste"
    ],
    instructions: [
      "Soak potato strips in cold water for 20 minutes to remove starch.",
      "Drain and pat dry completely.",
      "Heat oil and double fry potatoes: first at lower temp to cook inside, then at high temp for crispiness.",
      "Drain excess oil and toss with salt immediately.",
      "Serve hot with ketchup."
    ],
    nutrition: {
      calories: 350,
      protein: 4,
      carbs: 45,
      fat: 16,
      fiber: 4
    },
    dietaryTags: ["vegetarian", "vegan", "gluten-free"],
    allergies: []
  },
  {
    id: 42,
    title: "Steamed Momos",
    cuisine: "Tibetan",
    difficulty: "Medium",
    cookingTime: 45,
    servings: 4,
    image: "https://images.unsplash.com/photo-1626509677274-9844e1378378?w=800",
    ingredients: [
      "2 cups all-purpose flour",
      "1 cup cabbage (finely chopped)",
      "1 cup carrot (finely grated)",
      "1 onion (finely chopped)",
      "1 tbsp ginger garlic paste",
      "1 tbsp soy sauce",
      "Salt and pepper"
    ],
    instructions: [
      "Knead flour with water to make a smooth dough. Let rest.",
      "Mix chopped vegetables with ginger garlic, soy sauce, salt, and pepper.",
      "Roll dough into small thin circles.",
      "Place filling in center and pleat edges to seal.",
      "Steam in a steamer for 10-12 minutes until dough is translucent.",
      "Serve hot with spicy chutney."
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 55,
      fat: 4,
      fiber: 3
    },
    dietaryTags: ["vegetarian", "vegan"],
    allergies: ["gluten", "soy"]
  }
];

// Common ingredient substitutions
export const substitutions = {
  "butter": ["margarine", "coconut oil", "olive oil", "applesauce"],
  "milk": ["almond milk", "soy milk", "oat milk", "coconut milk"],
  "eggs": ["flax eggs", "chia eggs", "applesauce", "banana"],
  "flour": ["almond flour", "coconut flour", "oat flour", "gluten-free flour"],
  "sugar": ["honey", "maple syrup", "agave nectar", "stevia"],
  "soy sauce": ["tamari", "coconut aminos", "worcestershire sauce"],
  "cream": ["coconut cream", "cashew cream", "greek yogurt"],
  "cheese": ["nutritional yeast", "cashew cheese", "vegan cheese"],
  "chicken": ["tofu", "tempeh", "seitan", "mushrooms"],
  "beef": ["lentils", "black beans", "mushrooms", "tempeh"],
  "pasta": ["zucchini noodles", "rice noodles", "lentil pasta"],
  "rice": ["cauliflower rice", "quinoa", "couscous"],
  "vegetable oil": ["olive oil", "coconut oil", "canola oil", "applesauce", "butter"]
};