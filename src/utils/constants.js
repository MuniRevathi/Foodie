
export const LOGO_URL = "https://img.freepik.com/premium-vector/food-logo-with-smile-spoon-fork-delicious-food-design-illustration-tongue-saliva_207371-61.jpg?w=2000";

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

// Use environment variable for API URL, fallback to live Render API
export const API_BASE_URL = process.env.REACT_APP_API_URL || "https://foodie-5n13.onrender.com";

export const MENU_API = `${API_BASE_URL}/api/menu/`;