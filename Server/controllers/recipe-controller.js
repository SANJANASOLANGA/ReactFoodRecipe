const mongoose = require('mongoose');
const Recipe = require('../model/Recipe.js');
const User = require('../model/User.js');

exports.getAllRecipes = async (req, res, next) => {
  let recipes;
  try {
    recipes = await Recipe.find().populate('user');
    console.log(recipes)
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!recipes) {
    return res.status(404).json({ message: 'No Recipe Found' });
  }
  return res.status(200).json({ recipes });
};

exports.addRecipe = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!existingUser) {
    return res.status(400).json({ message: 'Unable to find user' });
  }

  const recipe = new Recipe({
    title,
    description,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await recipe.save({ session });
    existingUser.recipes.push(recipe);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  return res.status(200).json({ recipe });
};

exports.updateRecipe = async (req, res, next) => {
  const { title, description } = req.body;
  const recipeId = req.params.id;
  let recipe;
  try {
    recipe = await Recipe.findByIdAndUpdate(recipeId, {
      title,
      description,
    });
    console.log(recipe, 'Update')
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!recipe) {
    return res.status(500).json({ message: 'Unable to update' });
  }
  return res.status(200).json({ recipe });
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  let recipe;
  try {
    recipe = await Recipe.findById(id);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!recipe) {
    return res.status(404).json({ message: 'No Blog Found' });
  }
  return res.status(200).json({ recipe });
};

exports.deleteRecipe = async (req, res, next) => {
  const id = req.params.id;
  let recipe;
  try {
    recipe = await Recipe.findByIdAndRemove(id).populate('user');
    await recipe.user.recipes.pull(recipe);
    await recipe.user.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!recipe) {
    return res.status(500).json({ message: 'Unable to Delete' });
  }
  return res.status(200).json({ message: 'Successfully Deleted' });
};

