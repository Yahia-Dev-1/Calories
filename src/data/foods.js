const foods = [
  // Bakery
  {
    id: 1,
    name: "Bread",
    image: "Bread.webp",
    caloriesPer100g: 266,
    protein: 8.9,
    fat: 3.3,
    carbs: 49,
    category: "Bakery"
  },
  {
    id: 2,
    name: "French Baguette",
    image: "Baguette.webp",
    caloriesPer100g: 319,
    protein: 13,
    fat: 2.1,
    carbs: 62,
    category: "Bakery"
  },
  // Eggs
  {
    id: 3,
    name: "Boiled Egg",
    image: "BoiledEgg.webp",
    caloriesPer100g: 155,
    protein: 13,
    fat: 11,
    carbs: 1.1,
    category: "Eggs"
  },
  {
    id: 4,
    name: "Fried Egg",
    image: "FriedEgg.webp",
    caloriesPer100g: 196,
    protein: 13.6,
    fat: 14.8,
    carbs: 0.8,
    category: "Eggs"
  },
  // Vegetables
  {
    id: 5,
    name: "Tomato",
    image: "Tomato.webp",
    caloriesPer100g: 18,
    protein: 0.88,
    fat: 0.2,
    carbs: 3.9,
    category: "Vegetables"
  },
  {
    id: 6,
    name: "Cucumber",
    image: "Cucumber.webp",
    caloriesPer100g: 15,
    protein: 0.65,
    fat: 0.11,
    carbs: 3.6,
    category: "Vegetables"
  },
  {
    id: 7,
    name: "Lettuce",
    image: "Lettuce.webp",
    caloriesPer100g: 15,
    protein: 1.4,
    fat: 0.15,
    carbs: 2.9,
    category: "Vegetables"
  },
  // Carbs
  {
    id: 8,
    name: "Pasta",
    image: "Pasta.webp",
    caloriesPer100g: 371,
    protein: 13,
    fat: 1.5,
    carbs: 75,
    category: "Carbs"
  },
  {
    id: 9,
    name: "Rice",
    image: "rice.webp",
    caloriesPer100g: 360,
    protein: 6.61,
    fat: 0.58,
    carbs: 79.34,
    category: "Carbs"
  },
  {
    id: 10,
    name: "Flour",
    image: "Flour.webp",
    caloriesPer100g: 364,
    protein: 10.3,
    fat: 1.0,
    carbs: 76.3,
    category: "Carbs"
  },
  // Dairy
  {
    id: 11,
    name: "Cheddar Cheese",
    image: "CheddarCheese.webp",
    caloriesPer100g: 404,
    protein: 23,
    fat: 33,
    carbs: 3.1,
    category: "Dairy"
  },
  {
    id: 12,
    name: "Mozzarella Cheese",
    image: "MozzarellaCheese.webp",
    caloriesPer100g: 280,
    protein: 28,
    fat: 17,
    carbs: 3.1,
    category: "Dairy"
  },
  {
    id: 13,
    name: "Turkey Cheese",
    image: "TurkeyCheese.webp",
    caloriesPer100g: 387,
    protein: 4.5,
    fat: 18,
    carbs: 3.6,
    category: "Dairy"
  },
  // Fats
  {
    id: 14,
    name: "Oil",
    image: "Oil.webp",
    caloriesPer100g: 884,
    protein: 0,
    fat: 100,
    carbs: 0,
    category: "Fats"
  },
  {
    id: 15,
    name: "Ghee",
    image: "Ghee.webp",
    caloriesPer100g: 876,
    protein: 0.3,
    fat: 99.5,
    carbs: 0,
    category: "Fats"
  },
  // Legumes
  {
    id: 16,
    name: "Beans",
    image: "Beans.webp",
    caloriesPer100g: 105,
    protein: 4.8,
    fat: 0.4,
    carbs: 20,
    category: "Legumes"
  },
  {
    id: 17,
    name: "Tahini",
    image: "Tahini.webp",
    caloriesPer100g: 595,
    protein: 17,
    fat: 54,
    carbs: 21,
    category: "Legumes"
  },
  // Sweets
  {
    id: 18,
    name: "Chocolate",
    image: "Chocolate.webp",
    caloriesPer100g: 535,
    protein: 7.65,
    fat: 29.66,
    carbs: 59.4,
    category: "Sweets"
  },
  {
    id: 19,
    name: "Dark Chocolate",
    image: "DarkChocolate.webp",
    caloriesPer100g: 505,
    protein: 3.9,
    fat: 34.2,
    carbs: 59.6,
    category: "Sweets"
  },
  // Meat
  {
    id: 20,
    name: "Minced Meat",
    image: "MincedMeatBeef.webp",
    caloriesPer100g: 254,
    protein: 17.17,
    fat: 20,
    carbs: 0,
    category: "Meat"
  },
  {
    id: 21,
    name: "Meat",
    image: "meat.webp",
    caloriesPer100g: 288,
    protein: 26.33,
    fat: 19.54,
    carbs: 0,
    category: "Meat"
  },
  {
    id: 22,
    name: "Grilled meat",
    image: "Grilledmeat.webp",
    caloriesPer100g: 252,
    protein: 27.3,
    fat: 15.0,
    carbs: 0,
    category: "Meat"
  },
  {
    id: 23,
    name: "Ribs",
    image: "BeefRibs.webp",
    caloriesPer100g: 388,
    protein: 14.0,
    fat: 36.0,
    carbs: 0,
    category: "Meat"
  },
  {
    id: 24,
    name: "Mombar",
    image: "Mombar.webp",
    caloriesPer100g: 192,
    protein: 4.8,
    fat: 6.4,
    carbs: 22.0,
    category: "Meat"
  },
  {
    id: 25,
    name: "Lung",
    image: "lung.webp",
    caloriesPer100g: 92,
    protein: 16.2,
    fat: 2.5,
    carbs: 0,
    category: "Meat"
  },
  {
    id: 26,
    name: "Spleen",
    image: "Spleen.webp",
    caloriesPer100g: 105,
    protein: 18.3,
    fat: 3.0,
    carbs: 0,
    category: "Meat"
  },
  {
    id: 27,
    name: "Brain",
    image: "Brain.webp",
    caloriesPer100g: 143,
    protein: 10.9,
    fat: 10.3,
    carbs: 1.1,
    category: "Meat"
  },
  // Poultry
  {
    id: 28,
    name: "Chicken",
    image: "Chicken.webp",
    caloriesPer100g: 110,
    protein: 23.09,
    fat: 1.24,
    carbs: 0,
    category: "Poultry"
  },
  {
    id: 29,
    name: "Fried Chicken",
    image: "FriedChicken.webp",
    caloriesPer100g: 245,
    protein: 24.9,
    fat: 15.4,
    carbs: 0,
    category: "Poultry"
  },
  // Meat & Poultry
  {
    id: 30,
    name: "Liver",
    image: "Liver.webp",
    caloriesPer100g: 116,
    protein: 16.92,
    fat: 4.83,
    carbs: 0,
    category: "Meat"
  },
  {
    id: 31,
    name: "Chicken liver",
    image: "Brain.webp",
    caloriesPer100g: 116,
    protein: 16.9,
    fat: 4.8,
    carbs: 0,
    category: "Poultry"
  },
  // Fish & Rabbit
  {
    id: 32,
    name: "Fish",
    image: "fish.webp",
    caloriesPer100g: 146,
    protein: 21.6,
    fat: 5.9,
    carbs: 0,
    category: "Fish"
  },
  {
    id: 33,
    name: "Rabbit meat",
    image: "Rabbitmeat.webp",
    caloriesPer100g: 136,
    protein: 20.1,
    fat: 5.6,
    carbs: 0,
    category: "Rabbit"
  },
  // Dairy
  {
    id: 34,
    name: "Milk",
    image: "milk.webp",
    caloriesPer100g: 62,
    protein: 3.4,
    fat: 3.5,
    carbs: 4.7,
    category: "Dairy"
  },
  // Potato
  {
    id: 35,
    name: "French fries",
    image: "Frenchfries.webp",
    caloriesPer100g: 213,
    protein: 3.8,
    fat: 18,
    carbs: 36,
    category: "Potato"
  },
  // Fruits
  {
    id: 36,
    name: "Banana",
    image: "banana.webp",
    caloriesPer100g: 89,
    protein: 1.2,
    fat: 0.3,
    carbs: 24.8,
    category: "Fruits"
  },
  {
    id: 37,
    name: "Mango",
    image: "mango.webp",
    caloriesPer100g: 80,
    protein: 1.1,
    fat: 0.5,
    carbs: 20,
    category: "Fruits"
  },
  // Nuts
  {
    id: 38,
    name: "Peanut butter",
    image: "peanutbutter.webp",
    caloriesPer100g: 588,
    protein: 23.5,
    fat: 50,
    carbs: 20,
    category: "Nuts"
  },
  {
    id: 39,
    name: "Peanuts",
    image: "peanut.webp",
    caloriesPer100g: 567,
    protein: 25.8,
    fat: 49.2,
    carbs: 16.1,
    category: "Nuts"
  },
  // Others
  {
    id: 40,
    name: "Onion",
    image: "Onion.webp",
    caloriesPer100g: 40,
    protein: 1.1,
    fat: 0.1,
    carbs: 9.3,
    category: "Vegetables"
  },
  {
    id: 41,
    name: "Falafel",
    image: "falafel.webp",
    caloriesPer100g: 333,
    protein: 13.3,
    fat: 17.8,
    carbs: 31.8,
    category: "Traditional"
  },
  {
    id: 42,
    name: "Macaroni béchamel",
    image: "Macaroniwithbéchamel.webp",
    caloriesPer100g: 175,
    protein: 5.1,
    fat: 7.7,
    carbs: 22.5,
    category: "Pastry"
  },
  {
    id: 43,
    name: "Pizza",
    image: "Pizza.webp",
    caloriesPer100g: 276,
    protein: 12.3,
    fat: 11.7,
    carbs: 30.3,
    category: "Pastry"
  },
  // New Foods
  {
    id: 44,
    name: "Popcorn",
    image: "popcorn.webp",
    caloriesPer100g: 387,
    protein: 13,
    fat: 4.5,
    carbs: 78,
    category: "Snacks"
  },
  {
    id: 45,
    name: "Grilled salmon",
    image: "salmon.webp",
    caloriesPer100g: 265,
    protein: 26.5,
    fat: 17.3,
    carbs: 0,
    category: "Fish"
  },
  {
    id: 46,
    name: "Donut",
    image: "Donuts.webp",
    caloriesPer100g: 361,
    protein: 6.4,
    fat: 24.5,
    carbs: 30,
    category: "Sweets"
  },
  {
    id: 47,
    name: "Boiled potatoes",
    image: "Boiledpotatoes.webp",
    caloriesPer100g: 87,
    protein: 1.9,
    fat: 0.1,
    carbs: 20.1,
    category: "Potato"
  },
  {
    id: 48,
    name: "Moussaka",
    image: "Mahshi.webp",
    caloriesPer100g: 140,
    protein: 6,
    fat: 8,
    carbs: 15,
    category: "Traditional"
  },
  {
    id: 49,
    name: "Molokhia",
    image: "Molokhia.webp",
    caloriesPer100g: 64,
    protein: 2.6,
    fat: 3.6,
    carbs: 4.9,
    category: "Traditional"
  },
  {
    id: 50,
    name: "Vegetable soup",
    image: "Vegetablesoup.webp",
    caloriesPer100g: 42,
    protein: 1.8,
    fat: 1.9,
    carbs: 5.1,
    category: "Traditional"
  },
  {
    id: 51,
    name: "Grilled pigeon",
    image: "Grilledpigeon.webp",
    caloriesPer100g: 294,
    protein: 18.5,
    fat: 23.8,
    carbs: 0,
    category: "Poultry"
  },
  {
    id: 52,
    name: "Stuffed pigeon",
    image: "Stuffedpigeon (rice &.webp",
    caloriesPer100g: 230,
    protein: 10,
    fat: 13,
    carbs: 17,
    category: "Poultry"
  },
  {
    id: 53,
    name: "White rice",
    image: "rice.webp",
    caloriesPer100g: 138,
    protein: 2.7,
    fat: 0.5,
    carbs: 31,
    category: "Carbs"
  },
  {
    id: 54,
    name: "Freekeh",
    image: "Flour.webp",
    caloriesPer100g: 124,
    protein: 5,
    fat: 1.2,
    carbs: 12.2,
    category: "Carbs"
  },
  {
    id: 55,
    name: "Sautéed vegetables",
    image: "Sautéedmixedvegetables.webp",
    caloriesPer100g: 67,
    protein: 1.3,
    fat: 4.7,
    carbs: 6.7,
    category: "Vegetables"
  },
  {
    id: 56,
    name: "Fried eggplant",
    image: "Lettuce.webp",
    caloriesPer100g: 218,
    protein: 3.7,
    fat: 12.7,
    carbs: 22.3,
    category: "Vegetables"
  },
  {
    id: 57,
    name: "Cannelloni",
    image: "Cannelloni.webp",
    caloriesPer100g: 210,
    protein: 10.5,
    fat: 8,
    carbs: 24,
    category: "Pastry"
  },
  {
    id: 58,
    name: "Lasagna",
    image: "Lasagna.webp",
    caloriesPer100g: 163,
    protein: 10,
    fat: 6,
    carbs: 17.2,
    category: "Pastry"
  },
  {
    id: 59,
    name: "Grilled fish",
    image: "BeefRibs.webp",
    caloriesPer100g: 124,
    protein: 22.7,
    fat: 3.7,
    carbs: 0,
    category: "Fish"
  },
  {
    id: 60,
    name: "Crab",
    image: "Crab.webp",
    caloriesPer100g: 101,
    protein: 20,
    fat: 1.8,
    carbs: 0,
    category: "Fish"
  },
  {
    id: 61,
    name: "Shrimp",
    image: "Shrimp.webp",
    caloriesPer100g: 138,
    protein: 26.5,
    fat: 2.3,
    carbs: 1.2,
    category: "Fish"
  },
];

export default foods;