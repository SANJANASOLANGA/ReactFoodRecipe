import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, } from "react-icons/ai";
import { CgFileAdd } from "react-icons/cg";
import { ImPhone } from "react-icons/im";
import { FiDownload } from "react-icons/fi";
import { TbToolsKitchen2 } from "react-icons/tb";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import "../style.css"
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

  const handleToggle = () => setExpand(!expand);

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
          <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Link
                as={Link}
                to="/userhome"
                onClick={handleLinkClick}
              >
                <img src={logo} className="img-fluid logo" alt="brand" />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/userhome"
                onClick={handleLinkClick}
              >
                <AiOutlineHome style={{ marginBottom: "2px", color: 'red' }} />
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={handleLinkClick}
              >
                <AiOutlineUser style={{ marginBottom: "2px", color: 'red' }} />
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/recipes"
                onClick={handleLinkClick}
              >
                <TbToolsKitchen2
                  style={{ marginBottom: "2px", color: 'red' }}
                />
                {" "}
                Recipes
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/downloadRecipes"
                onClick={handleLinkClick}
              >
                <FiDownload style={{ marginBottom: "2px", color: 'red' }} />
                Download
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={handleLinkClick}
              >
                <ImPhone style={{ marginBottom: "2px", color: 'red' }} /> Contact
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/sign-in"
                onClick={handleLinkClick}
              >
                <CgFileAdd style={{ marginBottom: "2px", color: 'red' }} /> Add Recipe
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}

export default NavBar;