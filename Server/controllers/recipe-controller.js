const mongoose = require('mongoose');
const RecipeModel = require('../model/Recipe.js');
const User = require('../model/User.js');

exports.getAllRecipes = async (req, res, next) => {
  let recipes;
  try {
    recipes = await RecipeModel.find().populate('user');
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
    console.log('existingUser is ', existingUser)
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!existingUser) {
    return res.status(400).json({ message: 'Unable to find user' });
  }

  const blog = new RecipeModel({
    title,
    description,
    image,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.recipes.push(blog);
    console.log('existingUser is ', existingUser)
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log('existingUser is ', existingUser)
    console.log('error 1 is ', err);
    return res.status(500).json({ message: err });
  }
  return res.status(200).json({ blog });
};

exports.updateRecipe = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await RecipeModel.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!blog) {
    return res.status(500).json({ message: 'Unable to update' });
  }
  return res.status(200).json({ blog });
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await RecipeModel.findById(id);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!blog) {
    return res.status(404).json({ message: 'No Recipe Found' });
  }
  return res.status(200).json({ blog });
};

exports.deleteRecipe = async (req, res, next) => {
  const id = req.params.id;
  let recipe;
  try {
    recipe = await RecipeModel.findByIdAndRemove(id).populate('user');
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

