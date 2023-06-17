import React from "react";
import NavBar from "../Navbar";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import img from '../../assets/logo.png'

export default function DownloadRecipes() {
  const images = [
    img,
    img,
    img,
    img,
    img,
    img,
    img,
    img,
    img,
    // 'image4.jpg',
    // 'image5.jpg',
    // 'image6.jpg',
    // 'image7.jpg',
    // 'image8.jpg',
    // 'image9.jpg',
  ];

  const downloadRecipe = () => {
    console.log('Recipe downloaded!');
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
            <img src={image} alt={`Image ${index + 1}`} className="image" />
            <button className="download-button" onClick={downloadRecipe}><AiOutlineDownload />{' '}Download Recipe</button>
          </div>
        ))}
      </div>
    </HelmetProvider>
  );
}