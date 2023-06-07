import React from "react";
import NavBar from "../Navbar";
import { meta } from "../contact/content_option";

export default function DownloadRecipes() {
  
  return (
    <div>
      <NavBar/>
      <title>{meta.title} | Download Recipes</title>
      <h1>downloadRecipes</h1>
    </div>
  );
}