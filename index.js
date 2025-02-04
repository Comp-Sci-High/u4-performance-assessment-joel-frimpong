const express = require('express')
const app = express()

const recipePosts = [
    {
      username: "FoodieGal21",
      dishName: "Spicy Garlic Shrimp Pasta",
      ingredients: "Shrimp, Garlic, Pasta, Olive Oil, Red Pepper Flakes, Parmesan Cheese, Parsley",
      description: "A bold and savory shrimp pasta packed with garlic and a spicy kick, perfect for dinner.",
      price: 15.99,
      image: "images/spicy-garlic-shrimp.jpg",
      inStock: true
    },
    {
      username: "VeganChefMike",
      dishName: "Vegan Buddha Bowl",
      ingredients: "Quinoa, Chickpeas, Sweet Potato, Kale, Avocado, Tahini Dressing",
      description: "A hearty and colorful bowl loaded with healthy, plant-based ingredients.",
      price: 12.50,
      image: "images/vegan-buddha-bowl.jpg",
      inStock: true
    },
    {
      username: "SavorySue",
      dishName: "Classic Beef Wellington",
      ingredients: "Beef Tenderloin, Puff Pastry, Mushrooms, Prosciutto, Dijon Mustard",
      description: "A gourmet British dish with perfectly cooked beef wrapped in flaky puff pastry.",
      price: 32.99,
      image: "images/beef-wellington.jpg",
      inStock: false
    },
    {
      username: "HealthyEats12",
      dishName: "Kale and Quinoa Salad",
      ingredients: "Kale, Quinoa, Cherry Tomatoes, Feta Cheese, Lemon Vinaigrette",
      description: "A refreshing and nutrient-packed salad topped with tangy feta cheese.",
      price: 10.00,
      image: "images/kale-quinoa-salad.jpg",
      inStock: true
    },
    {
      username: "SweetToothJen",
      dishName: "Chocolate Lava Cake",
      ingredients: "Dark Chocolate, Butter, Eggs, Sugar, Flour",
      description: "A decadent dessert with a gooey molten chocolate center.",
      price: 8.00,
      images: "images/chocolate-lava-cake.jpg",
      inStock: false
  } 
]

app.set("view engine", "ejs")

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

  
