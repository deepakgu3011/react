import React from 'react';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'; // Import Link
import HomePage from './home';
import Contact from './pages/contact';
import AboutUs from './pages/about';
import Footer from './pages/footer';
import './App.css';
import PrivacyPolicy from './pages/privacy-policy';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul className="nav justify-content-end bg-dark">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/privacy-policy">Privacy Policy</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
