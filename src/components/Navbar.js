import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/vr logo.png';

const Navbar = () => {
  const location = useLocation();
  const activePage = location.pathname.split('/').pop() || 'index';

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-logo-section">
            <Link className="navbar-brand" to="/" onClick={scrollToTop}>
              <img src={logo} className="logo" alt="LOGO" />
            </Link>
            <div className="contact-buttons">
              <a href="tel:+919966222370" className="contact-button">
                <i className="fas fa-phone"></i> Call Us
              </a>
              <a href="mailto:info@vardaanresources.com" className="contact-button">
                <i className="fas fa-envelope"></i> Email Us
              </a>
            </div>
          </div>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${activePage === '' || activePage === 'index' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
              Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/mission" 
                  className={`nav-link ${activePage === 'mission' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  Our Mission
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/services" 
                  className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/management" 
                  className={`nav-link ${activePage === 'management' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  Management
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/credentials" 
                  className={`nav-link ${activePage === 'credentials' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  Credentials
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 