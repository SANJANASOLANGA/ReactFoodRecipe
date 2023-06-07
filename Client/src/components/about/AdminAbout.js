import React from "react";
import NavBarAdmin from "../NavBarAdmin";
import { meta } from "../contact/content_option";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Alert } from "react-bootstrap";

export default function AdminAbout() {
  
  return (
    <HelmetProvider>
      <NavBarAdmin/>
      <Container>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | About</title>
        </Helmet>
      </Container>
    </HelmetProvider>
  );
} 