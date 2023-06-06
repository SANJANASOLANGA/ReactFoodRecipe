import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from '../src/components/auth/WelcomePage'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import UserDetails from './components/auth/userDetails';
import NavBar from './components/Navbar';
const App = () => {
  return (
      <Router>
        <div>
          <NavBar />
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
            </Routes>
        </div>
      </Router>
  );
};

export default App;
