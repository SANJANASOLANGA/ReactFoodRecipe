import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserRecipe from '../recipes/UserRecipe';
import NavBarAdmin from '../NavBarAdmin';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../contact/content_option";
import { Container } from "react-bootstrap";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const sendRequest = async () => {
    const res = await axios.get('http://localhost:5000/api/recipe').catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <HelmetProvider>
      <NavBarAdmin />
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Recipes</title>
        </Helmet>
      </Container>

      <div>
        {recipes &&
          recipes.map((recipe, index) => (
            <UserRecipe
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
    </HelmetProvider>
  );
};

export default Recipes;