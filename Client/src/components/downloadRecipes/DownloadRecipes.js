import React from "react";
import NavBar from "../Navbar";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import LavaCakeImg from '../../assets/RecipeImages/LavaCake.jpg'
import ChipCookisImg from '../../assets/RecipeImages/ChipCookis.webp'
import MacCheeseImg from '../../assets/RecipeImages/MacCheese.webp'
import TacosImg from '../../assets/RecipeImages/Tacos.jpg'
import SpaghetiImg from '../../assets/RecipeImages/Spagheti.webp'
import FiredChickenImg from '../../assets/RecipeImages/FiredChicken.webp'
import PizzaImg from '../../assets/RecipeImages/Pizza.jpeg'
import LasangnaImg from '../../assets/RecipeImages/Lasangna.png'
import StirFryImg from '../../assets/RecipeImages/StirFry.webp'
import ShrimpImg from '../../assets/RecipeImages/Shrimp.webp'
import RoastedVegImg from '../../assets/RecipeImages/RoastedVeg.webp'
import BeefStewImg from '../../assets/RecipeImages/BeefStew.webp'
import LavaCake from '../../assets/RecipePDF/LavaCake.pdf';
import ChipCookis from '../../assets/RecipePDF/ChipCookis.pdf';
import MacCheese from '../../assets/RecipePDF/MacCheese.pdf';
import Tacos from '../../assets/RecipePDF/Tacos.pdf';
import Spagheti from '../../assets/RecipePDF/Spagheti.pdf';
import FiredChicken from '../../assets/RecipePDF/FiredChicken.pdf';
import Pizza from '../../assets/RecipePDF/Pizza.pdf';
import Lasangna from '../../assets/RecipePDF/Lasangna.pdf';
import StirFry from '../../assets/RecipePDF/StirFry.pdf';
import Shrimp from '../../assets/RecipePDF/Shrimp.pdf';
import RoastedVeg from '../../assets/RecipePDF/RoastedVeg.pdf';
import BeefStew from '../../assets/RecipePDF/BeefStew.pdf';

export default function DownloadRecipes() {
  const images = [
    { recipeImg: LavaCakeImg, pdf: LavaCake, name: "Lava Cake" },
    { recipeImg: ChipCookisImg, pdf: ChipCookis, name: "Chip Cookies" },
    { recipeImg: MacCheeseImg, pdf: MacCheese, name: "Mac and Cheese" },
    { recipeImg: TacosImg, pdf: Tacos, name: "Tacos" },
    { recipeImg: SpaghetiImg, pdf: Spagheti, name: "Spaghetti" },
    { recipeImg: FiredChickenImg, pdf: FiredChicken, name: "Fried Chicken" },
    { recipeImg: PizzaImg, pdf: Pizza, name: "Pizza" },
    { recipeImg: LasangnaImg, pdf: Lasangna, name: "Lasagna" },
    { recipeImg: StirFryImg, pdf: StirFry, name: "Stir Fry" },
    { recipeImg: ShrimpImg, pdf: Shrimp, name: "Shrimp" },
    { recipeImg: RoastedVegImg, pdf: RoastedVeg, name: "Roasted Vegetables" },
    { recipeImg: BeefStewImg, pdf: BeefStew, name: "Beef Stew" },
  ];

  const downloadRecipe = (pdf) => {
    console.log('Recipe downloaded!');
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'recipe.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HelmetProvider>
      <NavBar />
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Download Recipes</title>
        </Helmet>
      </Container>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <div><h2 style={{textAlign: "center"}}>{image.name}</h2></div>
            <img src={image.recipeImg} alt={`Image ${index + 1}`} title={image.name} className="image hover-effect" />
            <button className="download-button" onClick={() => downloadRecipe(image.pdf)}><AiOutlineDownload />{' '}Download Recipe</button>
          </div>
        ))}
      </div>
    </HelmetProvider>
  );
}