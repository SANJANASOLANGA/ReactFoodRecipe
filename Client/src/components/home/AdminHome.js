import React from "react";
import NavBarAdmin from "../NavBarAdmin";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import mainUserHome from "../../assets/mainUserHome.jpeg";
import downloadRecipe from "../../assets/downloadRecipe.jpeg";
import AddRecipe from "../../assets/AddRecipe.jpeg";

export default function AdminHome() {
  
  return (
    <HelmetProvider>
      <NavBarAdmin/>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Home</title>
        </Helmet>
        <Container>
          <div class="container-user">
            <img src={mainUserHome} className="mainUserHome" alt="brand" />
            <div class="mainUserHome-text">
              <a href="/recipes-admin">View Delicious Recipes <br/> From Around The World! </a>
            </div>
          </div>
          <div class="container-user-download">
            <img src={downloadRecipe} className="downloadRecipe" alt="brand" />
            <div class="downloadRecipe-text">
              <a href="/create-receipe">Add Your Own Recipes to Our Collection </a>
            </div>
          </div>
          <div class="container-user-add">
            <img src={AddRecipe} className="addRecipe" alt="brand" />
            <div class="addRecipe-text">
              <a href="/edit-recipes">Edit and Improve <br/> Existing Recipes </a>
            </div>
          </div>
        </Container>
      </Container>
    </HelmetProvider>
  );
}