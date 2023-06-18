import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import UserDetails from './components/auth/userDetails';
import { Contact } from './components/contact/Contact';
import Recipes from './components/recipes/Recipes';
import DownloadRecipes from './components/downloadRecipes/DownloadRecipes';
import About from './components/about/About';
import UserHome from './components/home/UserHome';
import AdminHome from './components/home/AdminHome';
import CreateReceipe from './components/recipes/CreateRecipe';
import EditRecipe from './components/recipes/EditRecipe'
import UpdateRecipe from './components/recipes/UpdateRecipe';
import AllRecipesAdmin from './components/recipes/AllRecipesAdmin';
import Footer from './components/Footer'

const App = () => {
  return (
      <Router>
        <div>
            <Routes>
              <Route exact path="/" element={<UserHome />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/recipes' element={<Recipes />} />
              <Route path='/downloadRecipes' element={<DownloadRecipes />} />
              <Route path='/about' element={<About />} />
              <Route path='/userhome' element={<UserHome />} />
              <Route path='/adminhome' element={<AdminHome />} />
              <Route path='/create-receipe' element={<CreateReceipe />} />
              <Route path='/edit-recipes' element={<EditRecipe />} />
              <Route path="/update-recipes/:id" element={<UpdateRecipe />}/>
              <Route path="/recipes-admin" element={<AllRecipesAdmin />}/>              
            </Routes>
            <Footer/>
        </div>
      </Router>
  );
};

export default App;
