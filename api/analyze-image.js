export default async function handler(req, res) {
  // -----------------------------------------------------------------
  // ✅ UPDATED: Google ViT (Vision Transformer)
  // We use the Router URL to avoid 410/404 errors.
  const MODEL_URL = "https://router.huggingface.co/hf-inference/models/google/vit-base-patch16-224";
  // -----------------------------------------------------------------

  // 1. CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { imageBase64 } = req.body;
  if (!imageBase64) return res.status(400).json({ error: 'No image data' });

  // 2. Check for Token
  if (!process.env.HUGGING_FACE_TOKEN) {
    console.error("❌ Hugging Face Token Missing");
    return res.status(500).json({ error: "Server configuration error: Missing Token" });
  }

  try {
    console.log("📡 Sending request to:", MODEL_URL);

    const imageBuffer = Buffer.from(imageBase64, 'base64');

    const response = await fetch(MODEL_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
        "Content-Type": "application/octet-stream",
        "x-use-cache": "false"
      },
      body: imageBuffer
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Hugging Face Error:", response.status, errorText);
      throw new Error(`HF API Error: ${response.status}`);
    }

    const data = await response.json();
    
    // 4. Process Results (Multi-Ingredient Logic)
    if (!Array.isArray(data)) {
       console.log("⚠️ Unexpected response format:", data);
       if (data.error && data.error.includes("loading")) {
         return res.status(503).json({ error: "Model is loading... try again in 30 seconds." });
       }
       return res.status(200).json({ ingredients: ["food"] }); 
    }

    // LIST OF NON-FOOD WORDS TO IGNORE
    // This forces the code to skip "Grocery store" and find the real food behind it.
    const ignoreList = [
      'grocery store', 'grocery', 'market', 'supermarket', 'fruit stand', 'food market',
      'basket', 'hamper', 'crate', 'bin', 'bucket', 'bowl', 'tray', 'plate', 'dish',
      'table', 'wood', 'background', 'container', 'packaging', 'shopping cart',
      'fruit', 'vegetable', 'food', 'produce' // Too generic
    ];

    // Extract unique labels from the TOP 10 results (not just top 1)
    const uniqueIngredients = [...new Set(
      data
        // Look at top 10 guesses to find smaller items
        .slice(0, 10) 
        // Filter out low confidence, but keep it loose (0.02) to catch secondary items
        .filter(item => item.score > 0.02) 
        .map(item => {
           // Clean label: "Granny Smith" -> "granny smith"
           return item.label.toLowerCase().split(',')[0].trim();
        })
        // Remove the non-food "scene" labels
        .filter(label => !ignoreList.includes(label))
    )];

    console.log("✅ Success! Detected:", uniqueIngredients);
    
    // Fallback if we filtered everything out
    if (uniqueIngredients.length === 0) {
        // Just return the top raw label if we have nothing else
        const topLabel = data[0]?.label?.split(',')[0] || "unknown food";
        return res.status(200).json({ ingredients: [topLabel] });
    }

    res.status(200).json({ ingredients: uniqueIngredients });

  } catch (error) {
    console.error("❌ Server Error:", error.message);
    if (error.message.includes("503")) {
      return res.status(503).json({ error: "AI Model is loading... try again in 30 seconds." });
    }
    res.status(500).json({ error: "Failed to analyze image" });
  }
}