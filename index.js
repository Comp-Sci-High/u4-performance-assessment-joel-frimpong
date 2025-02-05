//https://chatgpt.com/share/67a03fe4-1010-8008-8b53-64cfcc0bbf63

const express = require('express')
const app = express()

const recipePosts = {
  recipePosts: [
    {
      username: "FoodieGal21",
      dishName: "Spicy Garlic Shrimp Pasta",
      ingredients: "Shrimp, Garlic, Pasta, Olive Oil, Red Pepper Flakes, Parmesan Cheese, Parsley",
      description: "A bold and savory shrimp pasta packed with garlic and a spicy kick, perfect for dinner.",
      price: 15.99,
      image: "https://christieathome.com/wp-content/uploads/2022/05/Chili-Garlic-Shrimp-Noodles-4.jpg",
      inStock: true
    },
    {
      username: "VeganChefMike",
      dishName: "Vegan Buddha Bowl",
      ingredients: "Quinoa, Chickpeas, Sweet Potato, Kale, Avocado, Tahini Dressing",
      description: "A hearty and colorful bowl loaded with healthy, plant-based ingredients.",
      price: 12.50,
      image: "https://www.sunglowkitchen.com/wp-content/uploads/2023/03/tofu-buddha-bowls-peanut-sauce-8-1.jpg",
      inStock: true
    },
    {
      username: "SavorySue",
      dishName: "Bacon Egg & Cheese",
      ingredients: "Bread, Bacon, Egg & Cheese",
      description: "A good and quick breakfast to eat on the road",
      price: 5.99,
      image: "https://www.allrecipes.com/thmb/pmsRHoZskCWXBLs6P0V1j91IAgo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8739440_NYDeli-Bacon-Egg-and-Cheese-Sandwich_Roscoe-Hall_4x3-b8049392302d4a76a0190d9e85411876.jpg",
      inStock: false
    },
    {
      username: "HealthyEats12",
      dishName: "Kale and Quinoa Salad",
      ingredients: "Kale, Quinoa, Cherry Tomatoes, Feta Cheese, Lemon Vinaigrette",
      description: "A refreshing and nutrient-packed salad topped with tangy feta cheese.",
      price: 10.00,
      image: "https://www.eatingwell.com/thmb/H8ldmJ7nz2tNtBsYHNYLTpGbRKc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kale-and-quinoa-salad-with-lemon-dressing-50e7ff379b924df8ab3dd665e2efefb5.jpg",
      inStock: true
    },
    {
      username: "LeBron James",
      dishName: "Chicken Alfredo",
      ingredients: "Chicken, Pasta, Alfredo Sauce, Salt & Pepper & Seasoning of choice",
      description: "A refreshing and nutrient-packed salad topped with tangy feta cheese.",
      price: 15.99,
      image: "https://sugarspunrun.com/wp-content/uploads/2024/02/Chicken-alfredo-recipe-1-of-1.jpg",
      inStock: true
    },
 
]
}
app.set("view engine", "ejs")

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

app.use(express.static(__dirname + "/public"))

app.get("/all", (req, res)=>{
  res.render("overview.ejs", recipePosts)
})

app.get("/post/:id", (req,res) => {
  const park = req.params.id;
  res.render("detailed.ejs", recipePosts.recipePosts[park])
})


app.listen(3000, () => {
  console.log("Server running")
})