const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    ingredients: {
      type: [String],
      required: [true, 'Please add ingredients'],
      validate: {
        validator: function(arr) {
          return arr.length > 0;
        },
        message: 'At least one ingredient is required',
      },
    },
    instructions: {
      type: String,
      required: [true, 'Please add instructions'],
    },
    cookingTime: {
      type: Number,
      required: [true, 'Please add cooking time in minutes'],
      min: [1, 'Cooking time must be at least 1 minute'],
    },
    imageUrl: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'Uncategorized',
    },
    categoryOrder: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Recipe', recipeSchema);