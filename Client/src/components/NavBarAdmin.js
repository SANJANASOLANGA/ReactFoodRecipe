import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { CgFileAdd } from "react-icons/cg";
import { TbToolsKitchen2 } from "react-icons/tb";
import { LuEdit } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import "../style.css";

function NavBarAdmin() {
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
            <Navbar.Brand href="/adminhome" className="d-flex">
              <img src={logo} className="logo-image" alt="brand" />
            </Navbar.Brand>
            <Nav.Link as={Link} to="/adminhome" onClick={handleLinkClick}>
              <AiOutlineHome/>
              {" "}Home
            </Nav.Link>
            <Nav.Link as={Link} to="/recipes-admin" onClick={handleLinkClick}>
              <TbToolsKitchen2/>
              {" "}Recipes
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/create-receipe"
              onClick={handleLinkClick}
            >
              <CgFileAdd/>
              {" "}Add Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/edit-recipes" onClick={handleLinkClick}>
              <LuEdit/>
              {" "}Edit Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/admin-contact" onClick={handleLinkClick}>
              <FiLogOut/> {" "}Log Out
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarAdmin;
