const express = require('express');
const { addRecipe, deleteRecipe, getAllRecipes, getById, getByUserId, updateRecipe } = require('../controllers/recipe-controller.js');

const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.post('/add', addRecipe);
recipeRouter.put('/update/:id', updateRecipe);
recipeRouter.get('/:id', getById);
recipeRouter.delete('/:id', deleteRecipe);
recipeRouter.get('/user/:id', getByUserId);
