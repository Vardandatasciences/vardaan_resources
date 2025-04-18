import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import Services from './pages/Service/Services';
import Mission from './pages/Mission/Mission';
import Contact from './pages/Contact/Contact';
import Credentials from './pages/Credentials/Credentials';
import Management from './pages/Management/Management';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Import Bootstrap JS (required for navbar toggler)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/services" element={<Services />} />
          <Route path="/management" element={<Management/>} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
