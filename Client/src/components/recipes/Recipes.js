import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserRecipe from '../recipes/UserRecipe';

const Recipes = () => {
  
  return (
    <div>
      {recipes && 
      recipes.map((recipe,index) => (
      <UserRecipe 
      id = {recipe._id}
      isUser = {localStorage.getItem("userId")===recipe.user._id}
      title={recipe.title} 
      description={recipe.description} 
      imageURL={recipe.image} 
      userName={recipe.user.name} /> 
      ))}
    </div>
  )
}

export default Recipes;