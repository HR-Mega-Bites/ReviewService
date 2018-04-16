const db = require('./index.js');
const Comments = require('./comments.js');
const faker = require('faker');
const mongoose = require('mongoose');

// recipe array
const recipe = ['5 Spice Onion Soup', 'Barley Mushroom Soup', 'Cajun Kidney Bean Chili', 'Carrot Coconut Soup', 'Golden Squash Soup', 'Italian Navy Bean Soup with Rosemary', 'Minestrone Surprise', 'Oyster and Clam Chowder', 'Red Kidney Bean Soup with Lime Yogurt', 'Seafood Gazpacho', 'Shiitake Mushroom Seaweed Soup', 'Spicy Cabbage Soup', 'Spicy Posole Soup', 'Super Energy Kale Soup', 'Turkey and Vegetable Chili Verde', 'WHFoods Menu: Miso Soup with Dulse (sea vegetable)', 'Zesty Mexican Soup', '7-Minute "Quick Steamed" Butternut Squash', '10-Minute Seared Tuna', '15-Minute Asian Tuna', '15-Minute Cod with Avocado Salsa', '15-Minute Maui-Style Cod', '15-Minute Salmon with Mint Salsa', '15-Minute Salmon with Mustard, Dill Sauce', '15-Minute Salmon with Tomato Salsa', '15-Minute Sautéed Fennel Salmon', '15-Minute Seared Tuna with Sage', '15-Minute Steamed Cod with Bok Choy', '3-Minute Scallops', '5 Spice Salmon', '5-Minute "Quick Broiled" Salmon', '5-Minute Boiled Large Shrimp', 'Baked Halibut with Herbs', 'Baked Salmon & Walnut Patties With Red Bell Pepper Sauce', 'Braised Cod with Celery', 'Braised Salmon with Leeks', 'Halibut with Ginger and Scallions', 'Lemon Fish with Puree of Sweet Peas', 'Mediterranean Cod with Tomatoes', 'Miso Salmon', 'Pasta with Clams', 'Peanut Shrimp', 'Poached Cod with Fennel and Cauliflower', 'Poached Fish with Napa Cabbage', 'Quick Broiled Halibut', 'Quick Broiled Salmon with Ginger Mint Salsa', 'Salmon in Citrus Sauce', 'Salmon with Cucumber Chili Salad', 'Salmon with Dill Sauce', 'Salmon with Maple Dijon Glaze', 'Salmon with Mustard', 'Salmon with Mustard and Ginger', 'Southwestern Cod Sauté', 'Southwestern Salmon & Black Beans', 'Spicy Asian Shrimp', 'Steamed Salmon and Asparagus with Mustard Dill Sauce', 'Sweet N Sour Cod with Cabbage and Broccoli', 'Thai - Style Cod with Seaweed', 'WHFoods Menu: Quick Broiled Salmon with Yogurt Dill Sauce', 'WHFoods Menu: Salmon with Cherry Tomatoes and Artichokes', 'WHFoods Menu: Seafood Asparagus with Garlic Mirin Sauce', 'WHFoods Menu: Mediterranean Cod with Heirloom Tomatoes', 'WHFoods Menu: Seafood Asparagus with Garlic Mirin Sauce', 'WHFoods Menu: Turmeric Glazed Salmon', 'Figs, Walnuts and Spinach Salad', 'Fresh Herbed Chicken Breasts', '15 - Minute Broiled Chicken Salad', '15 - Minute Healthy Sautéed Chicken & Asparagus', '15 - Minute Healthy Sautéed Chicken & Bok Choy', '15 - Minute Sautéed Chicken Breasts with Mustard and Tarragon', '5 - Spice Chicken in a Bowl', '7 - Minute Quick Broiled Chicken', 'Asian Chicken with Ginger and Bok Choy', 'Broiled Rosemary Chicken over Puréed Lentils and Swiss Chard', 'Curried Chicken Over Spinach', 'Healthy Sautéed Red Cabbage with Baked Chicken Breast', 'Holiday Turkey with Rice Stuffing & Gravy with Fresh Herbs', 'Quick Broiled Chicken Breast with Honey - Mustard Sauce', 'Roast Turkey Breast with Chipotle Chili Sauce', 'Sesame Braised Chicken & Cabbage', 'WHFoods Menu: Easy Thai Chicken Curry', 'WHFoods Menu: Shiitake Sesame Chicken Rice Bowl', '7 - Minute "Quick Steamed" Butternut Squash', 'Asian - Flavored Broccoli with Tofu', 'Black Bean Burrito, Indian Style', 'Black Bean Chili', 'Braised Kidney Beans & Sweet Potato', 'Curried Lentils', 'Curried Mustard Greens & Garbanzo Beans with Sweet Potatoes', 'Fettuccini with Spinach Pesto', 'Healthy Caesar Salad for Smart Menu', 'Indian - Style Lentils', 'Mediterranean Lentil Salad', 'Miso Healthy Sauté', 'Moroccan Eggplant with Garbanzo Beans', 'Polenta, Onion and Gorgonzola Pizza', 'Primavera Verde', 'Quick Black Bean Chili', 'Spicy Black Bean Burrito', 'Spicy Healthy Sautéed Tofu', 'Spicy Vegetable Tart', 'Steamed Butternut Squash with Almond Sauce', 'Tan Tan Noodles', 'Vegetarian Healthy Sauté', 'Warm Quinoa Salad', 'WHFoods Menu: Black Bean Soft Shell Tacos or Burrito', 'WHFoods Menu: Spicy Black Bean Burrito']

// insert sample data
const sampleData = () => {
  let sampleArray = [];
  for (let i = 0; i < 108; i++) {
    sampleArray.push(
      {
        id: i+1,
        recipeName: recipe[i],
        comments: [{
          commentsText: faker.lorem.sentence(),
          fullName: faker.name.findName(),
          created_At: faker.date.past(),
          image: faker.image.avatar(),
        }],
      });
  }
  return sampleArray;
};

// variable to run function
const sampleArrays = sampleData();
// function to insert data into MongoDB
const insertSampleData = () => {
  Comments.Comments.create(sampleArrays);
};

// run the insertion function
insertSampleData(); 
