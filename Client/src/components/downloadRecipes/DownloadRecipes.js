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
import PizzaImg from '../../assets/RecipeImages/Pizza.webp'
import LasangnaImg from '../../assets/RecipeImages/Lasangna.webp'
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
    { img: LavaCakeImg, pdf: LavaCake },
    { img: ChipCookisImg, pdf: ChipCookis },
    { img: MacCheeseImg, pdf: MacCheese },
    { img: TacosImg, pdf: Tacos },
    { img: SpaghetiImg, pdf: Spagheti },
    { img: FiredChickenImg, pdf: FiredChicken },
    { img: PizzaImg, pdf: Pizza },
    { img: LasangnaImg, pdf: Lasangna },
    { img: StirFryImg, pdf: StirFry },
    { img: ShrimpImg, pdf: Shrimp },
    { img: RoastedVegImg, pdf: RoastedVeg },
    { img: BeefStewImg, pdf: BeefStew },
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
            <img src={image.img} alt={`Image ${index + 1}`} className="image" />
            <button className="download-button" onClick={() => downloadRecipe(image.pdf)}><AiOutlineDownload />{' '}Download Recipe</button>
          </div>
        ))}
      </div>
    </HelmetProvider>
  );
}