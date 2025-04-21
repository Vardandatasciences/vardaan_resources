import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS (required for navbar toggler)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/*" element={<div className="container py-5"><h1>Our Services</h1></div>} />
          <Route path="/products/*" element={<div className="container py-5"><h1>Our Products</h1></div>} />
          <Route path="/ideathon" element={<div className="container py-5"><h1>Ideathon</h1></div>} />
          <Route path="/training" element={<div className="container py-5"><h1>Training</h1></div>} />
          <Route path="/about" element={<div className="container py-5"><h1>About Us</h1></div>} />
          <Route path="/contact" element={<div className="container py-5"><h1>Contact Us</h1></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
