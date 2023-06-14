import React from "react";
import NavBar from "../Navbar";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";
import mainUserHome from "../../assets/mainUserHome.jpeg";

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
        </Container>
      </Container>
    </HelmetProvider>
  );
}