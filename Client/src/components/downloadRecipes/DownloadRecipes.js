import React from "react";
import NavBar from "../Navbar";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import img from '../../assets/logo.png'
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
    { img: img, pdf: LavaCake },
    { img: img, pdf: ChipCookis },
    { img: img, pdf: MacCheese },
    { img: img, pdf: Tacos },
    { img: img, pdf: Spagheti },
    { img: img, pdf: FiredChicken },
    { img: img, pdf: Pizza },
    { img: img, pdf: Lasangna },
    { img: img, pdf: StirFry },
    { img: img, pdf: Shrimp },
    { img: img, pdf: RoastedVeg },
    { img: img, pdf: BeefStew },
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