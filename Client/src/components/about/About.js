import React from "react";
import NavBar from "../Navbar";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

export default function About() {
  
  return (
    <HelmetProvider>
      <NavBar/>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | About Us</title>
        </Helmet>
      </Container>
    </HelmetProvider>
  );
}