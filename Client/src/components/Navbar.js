import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileAdd } from "react-icons/cg";
import { ImPhone } from "react-icons/im";
import { FiDownload } from "react-icons/fi";
import { TbToolsKitchen2 } from "react-icons/tb";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.svg";
import "../style.css";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setExpand(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="navbar-nav ml-auto">
            <Navbar.Brand href="/userhome" className="d-flex">
              <img src={logo} className="logo-image" alt="brand" />
            </Navbar.Brand>

            <Nav.Link as={Link} to="/userhome" onClick={handleLinkClick}>
              <AiOutlineHome/>
              {" "}Home
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes" onClick={handleLinkClick}>
              <TbToolsKitchen2/>
              {" "}Recipes
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/downloadRecipes"
              onClick={handleLinkClick}
            >
              <FiDownload/>
              {" "}Download
            </Nav.Link>
            <Nav.Link as={Link} to="/sign-in" onClick={handleLinkClick}>
              <CgFileAdd/> {" "}Add Recipe
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleLinkClick}>
              <AiOutlineUser/>
              {" "}About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleLinkClick}>
              <ImPhone/> {" "}Contact
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
