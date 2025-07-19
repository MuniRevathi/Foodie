const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/api/restaurants", (req, res) => {
  res.json([
    {
      info: {
        id: "1",
        name: "Domino's Pizza",
        avgRating: 4.2,
      },
    },
    {
      info: {
        id: "2",
        name: "KFC",
        avgRating: 3.8,
      },
    },
    {
      info: {
        id: "3",
        name: "Burger King",
        avgRating: 4.5,
      },
    },
  ]);
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
