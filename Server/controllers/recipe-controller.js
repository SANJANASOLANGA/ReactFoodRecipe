const mongoose = require('mongoose');
const Recipe = require('../model/Recipe.js');
const User = require('../model/User.js');

exports.getAllRecipes = async (req, res, next) => {
  let recipes;
  try {
    recipes = await Recipe.find().populate('user');
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  if (!recipes) {
    return res.status(404).json({ message: 'No Recipes Found' });
  }
  return res.status(200).json({ recipes });
};

