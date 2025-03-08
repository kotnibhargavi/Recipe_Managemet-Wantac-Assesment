const Recipe = require('../models/Recipe');


const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ category: 1, categoryOrder: 1 });
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getRandomRecipe = async (req, res) => {
  try {
    const count = await Recipe.countDocuments();
    const random = Math.floor(Math.random() * count);
    const recipe = await Recipe.findOne().skip(random);
    
    if (!recipe) {
      return res.status(404).json({ message: 'No recipes found' });
    }
    
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get recipe by ID
// @route   GET /api/recipes/:id
// @access  Public
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a recipe
// @route   POST /api/recipes
// @access  Public
const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a recipe
// @route   PUT /api/recipes/:id
// @access  Public
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update category order
// @route   PUT /api/recipes/category
// @access  Public
const updateCategoryOrder = async (req, res) => {
  try {
    const { updates } = req.body;
    
    // Validate the updates array
    if (!Array.isArray(updates) || updates.length === 0) {
      return res.status(400).json({ message: 'Invalid updates format' });
    }
    
    // Process each update
    const updatePromises = updates.map(update => {
      return Recipe.findByIdAndUpdate(
        update.id,
        { 
          category: update.category,
          categoryOrder: update.order 
        },
        { new: true }
      );
    });
    
    await Promise.all(updatePromises);
    
    res.status(200).json({ message: 'Category order updated successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a recipe
// @route   DELETE /api/recipes/:id
// @access  Public
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    await Recipe.findByIdAndDelete(req.params.id);
    
    res.status(200).json({ message: 'Recipe removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRecipes,
  getRecipeById,
  getRandomRecipe,
  createRecipe,
  updateRecipe,
  updateCategoryOrder,
  deleteRecipe,
};