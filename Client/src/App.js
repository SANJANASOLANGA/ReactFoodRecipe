import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import UserDetails from './components/auth/userDetails';
import NavBar from './components/Navbar';
import { Contact } from './components/contact/Contact';
const App = () => {
  return (
      <Router>
        <div>
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path='/contact-us' element={<Contact />} />
            </Routes>
        </div>
      </Router>
  );
};

export default App;
