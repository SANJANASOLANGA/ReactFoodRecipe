import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomePage from '../src/components/auth/WelcomePage'

const App = () => {
  return (
      <Router>
        <div>
            <Routes>
              <Route exact path="/" element={<WelcomePage />} />
            </Routes>
        </div>
      </Router>
  );
};

export default App;
