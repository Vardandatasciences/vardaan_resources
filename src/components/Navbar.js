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
        <div className="container-fluid">
          <div className="navbar-logo-section">
            <Link className="navbar-brand" to="/" onClick={scrollToTop}>
              <img src={logo} className="logo" alt="LOGO" />
            </Link>
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
            <ul className="navbar-nav mx-auto align-items-center">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={`nav-link ${activePage === '' || activePage === 'index' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  <i className="fas fa-home nav-icon"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/mission" 
                  className={`nav-link ${activePage === 'mission' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  <i className="fas fa-bullseye nav-icon"></i> Mission
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/services" 
                  className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  <i className="fas fa-hands-helping nav-icon"></i> Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/management" 
                  className={`nav-link ${activePage === 'management' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  <i className="fas fa-users nav-icon"></i> Management
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/credentials" 
                  className={`nav-link ${activePage === 'credentials' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  <i className="fas fa-award nav-icon"></i> Credentials
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
                  onClick={scrollToTop}
                >
                  <i className="fas fa-address-card nav-icon"></i> Contact Us
                </Link>
              </li>
            </ul>
            <div className="contact-buttons">
              <a href="tel:+919966222370" className="contact-button phone-button">
                <i className="fas fa-phone-alt"></i> Call Us
              </a>
              <a href="mailto:www.vardaanglobal.com" className="contact-button email-button">
                <i className="fas fa-envelope-open-text"></i> Email Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 