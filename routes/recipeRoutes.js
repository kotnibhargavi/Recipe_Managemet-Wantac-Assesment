const express = require('express');
const router = express.Router();
const {
  getRecipes,
  getRecipeById,
  getRandomRecipe,
  createRecipe,
  updateRecipe,
  updateCategoryOrder,
  deleteRecipe,
} = require('../controllers/recipeController');

// Get all recipes and create a recipe
router.route('/')
  .get(getRecipes)
  .post(createRecipe);

// Get a random recipe
router.route('/random')
  .get(getRandomRecipe);

// Update category organization
router.route('/category')
  .put(updateCategoryOrder);

// Get, update, and delete a recipe by ID
router.route('/:id')
  .get(getRecipeById)
  .put(updateRecipe)
  .delete(deleteRecipe);

module.exports = router;