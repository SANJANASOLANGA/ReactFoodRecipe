import React from "react";
import NavBar from "../Navbar";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

export default function About() {

  return (
    <HelmetProvider>
      <NavBar />
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | About Us</title>
        </Helmet>
        <Container>
          <div className="about-page">
            <div className="about-page-text">
              <h1>Welcome to CookeryCorner!</h1>
              <p>We are a community of food lovers who share a passion for cooking and discovering new recipes.</p>
              <p>Our website is dedicated to providing a platform for home cooks to share their favorite recipes and culinary experiences with others. Whether you're a seasoned cook or just starting out, we believe that everyone has something valuable to contribute to our community.</p>
              <p>We understand that cooking can be both exciting and challenging, which is why we strive to make our website user-friendly and easy to navigate. You can browse our extensive collection of recipes, connect with other foodies, and even create your own profile to share your own culinary creations.</p>
              <p>Our mission is to inspire and empower home cooks to explore their culinary passions and share their love for food with others. We believe that cooking is not just a necessity, but a creative and enjoyable activity that brings people together.</p>
              <p>Thank you for being a part of our community, and we hope that CookeryCorner becomes your go-to destination for all things food-related.</p>
            </div>
          </div>
        </Container>
      </Container>
    </HelmetProvider>
  );
}