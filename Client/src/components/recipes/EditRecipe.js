import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminRecipe from '../recipes/AdminRecipe';

const EditRecipes = () => {
  const [recipes, setRecipes] = useState([]);


  return (
    <div>
      {recipes &&
        recipes.map((recipe, index) => (
          <AdminRecipe
            key={index}
            id={recipe._id}
            isUser={localStorage.getItem('userId') === recipe.user._id}
            title={recipe.title}
            description={recipe.description}
            imageURL={recipe.image}
            userName={recipe.user.name}
          />
        ))}
    </div>
  );
};

export default EditRecipes;