import React from "react";
import NavBar from "../Navbar";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import mainUserHome from "../../assets/mainUserHome.jpeg";
import downloadRecipe from "../../assets/downloadRecipe.jpeg";
import AddRecipe from "../../assets/AddRecipe.jpeg";

export default function UserHome() {

  return (
    <HelmetProvider>
      <NavBar />
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Home</title>
        </Helmet>
        <Container>
          <div class="container-user">
            <img src={mainUserHome} className="mainUserHome" alt="brand" />
            <div class="mainUserHome-text">
              <a href="/recipes">Let's Start Cooking With <br/> Popular Recipes </a>
            </div>
          </div>
          <div class="container-user-download">
            <img src={downloadRecipe} className="downloadRecipe" alt="brand" />
            <div class="downloadRecipe-text">
              <a href="/download-recipes">Download Your <br/> Favourite Recipes </a>
            </div>
          </div>
          <div class="container-user-add">
            <img src={AddRecipe} className="addRecipe" alt="brand" />
            <div class="addRecipe-text">
              <a href="/sign-in">Add Your <br/> Delicious Recipes </a>
            </div>
          </div>
        </Container>
      </Container>
    </HelmetProvider>
  );
}