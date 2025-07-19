const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Proxy endpoint to fetch restaurants from Swiggy API
app.get("/api/restaurants", async (req, res) => {
  try {
    const { lat = "14.44840", lng = "79.98880" } = req.query;
    
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'application/json',
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    // Fallback to mock data if Swiggy API fails
    res.json({
      data: {
        cards: [
          {
            card: {
              card: {
                gridElements: {
                  infoWithStyle: {
                    restaurants: [
                      {
                        info: {
                          id: "1",
                          name: "Domino's Pizza",
                          avgRating: 4.2,
                          cloudinaryImageId: "example1",
                          cuisines: ["Pizza", "Italian"],
                          costForTwo: "₹400 for two",
                          deliveryTime: "30-35 mins"
                        },
                      },
                      {
                        info: {
                          id: "2",
                          name: "KFC",
                          avgRating: 3.8,
                          cloudinaryImageId: "example2",
                          cuisines: ["Chicken", "Fast Food"],
                          costForTwo: "₹300 for two",
                          deliveryTime: "25-30 mins"
                        },
                      },
                      {
                        info: {
                          id: "3",
                          name: "Burger King",
                          avgRating: 4.5,
                          cloudinaryImageId: "example3",
                          cuisines: ["Burgers", "Fast Food"],
                          costForTwo: "₹350 for two",
                          deliveryTime: "20-25 mins"
                        },
                      },
                    ]
                  }
                }
              }
            }
          }
        ]
      }
    });
  }
});

// Proxy endpoint to fetch restaurant menu from Swiggy API
app.get("/api/menu/:restaurantId", async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const { lat = "14.44840", lng = "79.98880" } = req.query;
    
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'application/json',
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching menu:', error);
    // Fallback to mock menu data if Swiggy API fails
    res.json({
      data: {
        cards: [
          {
            card: {
              card: {
                info: {
                  id: req.params.restaurantId,
                  name: "Sample Restaurant",
                  avgRating: 4.2,
                  totalRatingsString: "1000+ ratings",
                  costForTwoMessage: "₹400 for two",
                  cuisines: ["Pizza", "Italian"],
                  areaName: "Sample Area",
                  sla: {
                    deliveryTime: 30
                  }
                }
              }
            }
          },
          {
            card: {
              card: {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                title: "Sample Category",
                itemCards: [
                  {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      info: {
                        id: "1",
                        name: "Margherita Pizza",
                        price: 29900,
                        description: "Classic pizza with tomato sauce and mozzarella",
                        imageId: "sample-image",
                        ratings: {
                          aggregatedRating: {
                            rating: "4.3",
                            ratingCount: "100"
                          }
                        }
                      }
                    }
                  },
                  {
                    card: {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                      info: {
                        id: "2",
                        name: "Pepperoni Pizza",
                        price: 39900,
                        description: "Pizza with pepperoni and cheese",
                        imageId: "sample-image-2",
                        ratings: {
                          aggregatedRating: {
                            rating: "4.5",
                            ratingCount: "150"
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    });
  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
