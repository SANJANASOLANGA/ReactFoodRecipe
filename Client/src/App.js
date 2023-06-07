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
import AdminAddRecipes from './components/recipes/AdminAddRecipes';
import AdminAbout from './components/about/AdminAbout';
import AdminContact from './components/contact/AdminContact'

const App = () => {
  return (
      <Router>
        <div>
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/recipes' element={<Recipes />} />
              <Route path='/downloadRecipes' element={<DownloadRecipes />} />
              <Route path='/about' element={<About />} />
              <Route path='/userhome' element={<UserHome />} />
              <Route path='/adminhome' element={<AdminHome />} />
              <Route path='/add-recipes' element={<AdminAddRecipes />} />
              <Route path='/admin-about' element={<AdminAbout />} />
              <Route path='/admin-contact' element={<AdminContact />} />
            </Routes>
        </div>
      </Router>
  );
};

export default App;
