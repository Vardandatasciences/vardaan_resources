import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Vardaan Resources Private Limited (VRPL) is a value-based engineering and financial services company offering services for a broad spectrum of industries.</p>
        </div>
       
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mission">Our Mission</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/management">Management</Link></li>
            <li><Link to="/credentials">Credentials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
       
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services#capitalization">Capitalization</Link></li>
            <li><Link to="/services#valuation">Valuation</Link></li>
            <li><Link to="/services#bulf">Balance Useful Life(BULF)</Link></li>
            <li><Link to="/services#verification">Physical Verification</Link></li>
          </ul>
        </div>
       
        <div className="footer-column">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="location-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="location-text">
                <p className="company-name">Vardaan Resources Pvt. Ltd.</p>
                <p>Aurum, 1st Floor, Plot no 57,</p>
                <p>Jayabheri Enclave, Phase 2,</p>
                <p>Gachibowli, Hyderabad - 500 032</p>
                <p>INDIA.</p>
              </div>
            </div>
            <p><i className="fas fa-phone"></i><span>+91 99662 22370</span></p>
            <p><i className="fas fa-envelope"></i><span>info@vardaanresources.com</span></p>
          </div>
        </div>
      </div>
     
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vardaan Resources Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
 
export default Footer;
 