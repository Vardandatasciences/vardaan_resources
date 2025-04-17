import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

import Footer from '../../components/Footer'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [formSubmitStatus, setFormSubmitStatus] = useState({
    success: '',
    error: ''
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [activeOffice, setActiveOffice] = useState('mumbai');
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs for scroll animation elements
  const sectionIntroRef = useRef(null);
  const officeTabsRef = useRef(null);
  const contactFormRef = useRef(null);
  
  useEffect(() => {
    setIsLoaded(true);
    setIsVisible(true);
    
    // Set up intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend API
    // For now, we'll simulate a successful submission
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form and show success message
      setFormData({
        fullname: '',
        phone: '',
        email: '',
        message: ''
      });
      
      setFormSubmitStatus({
        success: 'Thank you! We will be in touch with you very soon.',
        error: ''
      });
    } catch (error) {
      setFormSubmitStatus({
        success: '',
        error: 'Message sending failed. Please try again later.'
      });
    }
  };

  const toggleOffice = (office) => {
    setActiveOffice(office);
  };

  return (
    <div>
    <div className={`contact-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <section className={`contact-hero ${isVisible ? 'visible' : ''}`}>
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="animate-on-load">Contact Us</h1>
            <div className="breadcrumb-wrapper animate-on-load">
              {/* <ul className="breadcrumb">
                <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
                <li className="active">Contact Us</li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`contact-section ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-intro animate-on-scroll" ref={sectionIntroRef}>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">We'd love to hear from you. Here's how you can reach us...</p>
          </div>
          
          <div className="office-tabs animate-on-scroll" ref={officeTabsRef}>
            <div className="tab-buttons">
              <button 
                className={`tab-btn ${activeOffice === 'mumbai' ? 'active' : ''}`} 
                onClick={() => toggleOffice('mumbai')}
              >
                Mumbai Office
              </button>
              <button 
                className={`tab-btn ${activeOffice === 'hyderabad' ? 'active' : ''}`} 
                onClick={() => toggleOffice('hyderabad')}
              >
                Hyderabad Office
              </button>
            </div>
            
            <div className="tab-content">
              <div className={`office-content ${activeOffice === 'mumbai' ? 'active' : ''}`} id="mumbai">
                <div className="office-card animate-on-scroll">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="office-details">
                        <h3 className="office-title">Mumbai <span>Registered Office</span></h3>
                        <div className="address-item">
                          <div className="icon-box">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div className="content">
                            <h4>Address</h4>
                            <p>Vardaan Resources Pvt. Ltd.</p>
                            <p>No.48, 6th Floor, Tardeo AC Market, Tardeo, Mumbai – 400 034, Maharashtra, INDIA.</p>
                          </div>
                        </div>
                        <div className="address-item">
                          <div className="icon-box">
                            <i className="fas fa-envelope"></i>
                          </div>
                          <div className="content">
                            <h4>Email Address</h4>
                            <p><a href="mailto:contact@vardaanresources.com">contact@vardaanresources.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="map-wrapper">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0643661506756!2d72.81144537426567!3d18.972764555207196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce704daecd27%3A0xddfe1e79b1d2d93b!2sTardeo%20AC%20Market%2C%20Dadasaheb%20Vichare%20Rd%2C%20Janata%20Nagar%2C%20Tardeo%2C%20Mumbai%2C%20Maharashtra%20400034!5e0!3m2!1sen!2sin!4v1701322759082!5m2!1sen!2sin" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Mumbai Office Map"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`office-content ${activeOffice === 'hyderabad' ? 'active' : ''}`} id="hyderabad">
                <div className="office-card animate-on-scroll">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="office-details">
                        <h3 className="office-title">Hyderabad <span>Office</span></h3>
                        <div className="address-item">
                          <div className="icon-box">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div className="content">
                            <h4>Address</h4>
                            <p>Vardaan Resources Pvt. Ltd.</p>
                            <p>Aurum, 1st Floor, Plot no 57, Jayabheri Enclave, Phase 2, Gachibowli, Hyderabad - 500 032 INDIA.</p>
                          </div>
                        </div>
                        <div className="address-item">
                          <div className="icon-box">
                            <i className="fas fa-phone-alt"></i>
                          </div>
                          <div className="content">
                            <h4>Phone</h4>
                            <p><a href="tel:+919966222370">+91 99662 22370</a></p>
                          </div>
                        </div>
                        <div className="address-item">
                          <div className="icon-box">
                            <i className="fas fa-envelope"></i>
                          </div>
                          <div className="content">
                            <h4>Email Address</h4>
                            <p><a href="mailto:contact@vardaanresources.com">contact@vardaanresources.com</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="map-wrapper">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.255718434639!2d78.3564716713452!3d17.447470564518333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93318bc85167%3A0x121d25c11fd5e289!2sAurum!5e0!3m2!1sen!2sin!4v1701322901964!5m2!1sen!2sin" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Hyderabad Office Map"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section animate-on-scroll" ref={contactFormRef}>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="form-card">
                  <div className="form-header">
                    <h3>Send Us a Message</h3>
                    <p>We'd love to hear from you. Please fill out the form below.</p>
                  </div>
                  
                  {formSubmitStatus.success && (
                    <div className="success-message">
                      <i className="fas fa-check-circle"></i>
                      <p>{formSubmitStatus.success}</p>
                    </div>
                  )}
                  
                  {formSubmitStatus.error && (
                    <div className="error-message">
                      <i className="fas fa-times-circle"></i>
                      <p>{formSubmitStatus.error}</p>
                    </div>
                  )}
                  
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <i className="fas fa-user"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="fullname"
                          placeholder="Your Name *"
                          required 
                          name="fullname" 
                          value={formData.fullname}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <i className="fas fa-mobile-alt"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="phone"
                          placeholder="Phone No *"
                          required 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="input-with-icon">
                        <span className="input-icon">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email"
                          placeholder="Email Address *"
                          required 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="input-with-icon textarea-icon">
                        <span className="input-icon">
                          <i className="fas fa-comment-dots"></i>
                        </span>
                        <textarea 
                          className="form-control" 
                          id="message"
                          placeholder="Message *"
                          name="message" 
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                        ></textarea>
                      </div>
                    </div>
                    
                    <button type="submit" className="submit-button">
                      <span>SUBMIT</span>
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default Contact; 