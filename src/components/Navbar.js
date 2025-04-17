import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const activePage = location.pathname.split('/').pop() || 'index';

  return (
    <header className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="../assets/images/logo.png" className="logo" alt="LOGO" />
          </Link>
          
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
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/mission" 
                  className={`nav-link ${activePage === 'mission' ? 'active' : ''}`}
                >
                  Our Mission
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/services" 
                  className={`nav-link ${activePage === 'services' ? 'active' : ''}`}
                >
                  Our Services
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/management" 
                  className={`nav-link ${activePage === 'management' ? 'active' : ''}`}
                >
                  Management
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/credentials" 
                  className={`nav-link ${activePage === 'credentials' ? 'active' : ''}`}
                >
                  Credentials
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
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