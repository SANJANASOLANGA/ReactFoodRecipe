import React from "react";
import NavBarAdmin from "../NavBarAdmin";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

export default function AdminAddRecipes() {
  
  return (
    <HelmetProvider>
      <NavBarAdmin/>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Add Recipes</title>
        </Helmet>
      </Container>
    </HelmetProvider>
  );
}