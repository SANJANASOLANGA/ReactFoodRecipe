import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserRecipe from '../recipes/UserRecipe';

const Recipes = () => {
  const [recipes,setRecipes]= useState();
  const sendRequest = async () => {
    const res = await axios.get("http://localhost:5000/api/blog").catch(err=>console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(()=>{
    sendRequest().then(data => setRecipes(data.blogs));
  },[])
  console.log(recipes);
  
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