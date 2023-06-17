import React from "react";
import NavBar from "../Navbar";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import img from '../../assets/logo.png'
import pdf1 from '../../assets/Document.pdf';
import pdf2 from '../../assets/Document1.pdf';
import pdf3 from '../../assets/Document2.pdf';

export default function DownloadRecipes() {
  const images = [
    { img: img, pdf: pdf1 },
    { img: img, pdf: pdf2 },
    { img: img, pdf: pdf3 },
    { img: img, pdf: pdf1 },
    { img: img, pdf: pdf2 },
    { img: img, pdf: pdf3 },
    { img: img, pdf: pdf1 },
    { img: img, pdf: pdf2 },
    { img: img, pdf: pdf3 },
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