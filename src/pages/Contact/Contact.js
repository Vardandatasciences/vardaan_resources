import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import Footer from '../../components/Footer'; 
import NextPageCTA from '../../components/NextPageCTA';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitStatus, setFormSubmitStatus] = useState({
    success: '',
    error: ''
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Refs for scroll animation elements
  const sectionIntroRef = useRef(null);
  const contactInfoRef = useRef(null);
  const contactFormRef = useRef(null);
  const mapRef = useRef(null);
  const modalRef = useRef(null);
  
  useEffect(() => {
    setIsLoaded(true);
    setIsVisible(true);
    
    // Animate cards with staggered delay
    setTimeout(() => {
      setAnimatedCards(true);
    }, 500);
    
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

    // Close modal when clicking outside of it
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
      document.removeEventListener('mousedown', handleClickOutside);
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
      
      // Show the modal instead of the inline success message
      setShowModal(true);
      
      // Reset form
      setFormData({
        fullname: '',
        phone: '',
        email: '',
        subject: '',
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

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className={`contact-page ${isLoaded ? 'loaded' : ''}`}>
        {/* Hero Section */}
        <section className={`contact-hero ${isVisible ? 'visible' : ''}`}>
          <div className="floating-squares">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="animate-on-load">Contact Us</h1>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`contact-section ${isVisible ? 'visible' : ''}`}>
          <div className="container">
            {/* Contact Information Cards */}
            <div className="contact-info-section animate-on-scroll" ref={contactInfoRef}>
              <div className={`contact-cards ${animatedCards ? 'animated' : ''}`}>
                <div className="contact-card" style={{animationDelay: '0.1s'}}>
                  <div className="contact-card-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3>Our Location</h3>
                  <p>Vardaan Resources Pvt. Ltd.</p>
                  <p>Aurum, 1st Floor, Plot no 57, Jayabheri Enclave, Phase 2, Gachibowli, Hyderabad - 500 032 INDIA.</p>
                </div>
                
                <div className="contact-card" style={{animationDelay: '0.3s'}}>
                  <div className="contact-card-icon">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <h3>Phone Number</h3>
                  <p>+91 99662 22370</p>
                </div>
                
                <div className="contact-card" style={{animationDelay: '0.5s'}}>
                  <div className="contact-card-icon">
                    <i className="fas fa-envelope-open-text"></i>
                  </div>
                  <h3>Email Us</h3>
                  <p>contact@vardaanresources.com</p>
                </div>
                
                <div className="contact-card" style={{animationDelay: '0.7s'}}>
                  <div className="contact-card-icon">
                    <i className="fas fa-business-time"></i>
                  </div>
                  <h3>Working Hours</h3>
                  <p>8:00 - 16:00</p>
                </div>
              </div>
            </div>
          
            {/* Map and Contact Form Section - Side by Side */}
            <div className="map-form-section animate-on-scroll">
              <div className="row">
                <div className="col-md-6" ref={mapRef}>
                  {/* Map */}
                  <div className="map-wrapper">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.255718434639!2d78.3564716713452!3d17.447470564518333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93318bc85167%3A0x121d25c11fd5e289!2sAurum!5e0!3m2!1sen!2sin!4v1701322901964!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Map"
                    ></iframe>
                  </div>
                </div>
                
                <div className="col-md-6">
                  {/* Contact Form */}
                  <div className="form-card" ref={contactFormRef}>
                    <div className="form-header">
                      <h3>Contact Us</h3>
                      <p>We'd love to hear from you. Please fill out the form below.</p>
                    </div>
                    
                    {formSubmitStatus.error && (
                      <div className="error-message">
                        <i className="fas fa-times-circle"></i>
                        <p>{formSubmitStatus.error}</p>
                      </div>
                    )}
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <div className="input-icon-wrapper">
                          <i className="fas fa-user-circle input-icon"></i>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="fullname"
                            placeholder="Your Name"
                            required 
                            name="fullname" 
                            value={formData.fullname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <div className="input-icon-wrapper">
                          <i className="fas fa-envelope input-icon"></i>
                          <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            placeholder="Your Email"
                            required 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <div className="input-icon-wrapper">
                          <i className="fas fa-heading input-icon"></i>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="subject"
                            placeholder="Your Subject"
                            required 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <div className="input-icon-wrapper">
                          <i className="fas fa-comment-alt input-icon"></i>
                          <textarea 
                            className="form-control" 
                            id="message"
                            placeholder="Your Message"
                            name="message" 
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                          ></textarea>
                        </div>
                      </div>
                      
                      <button type="submit" className="submit-button">
                        <span>CONTACT US</span>
                        <i className="fas fa-paper-plane send-icon"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Modal */}
        {showModal && (
          <div className="modal-overlay">
            <div className="success-modal" ref={modalRef}>
              <div className="modal-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. Our team will get back to you shortly.</p>
              <p className="response-time">Expected response time: 24-48 hours</p>
              <button className="modal-close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Journey Navigation - Next Page CTA */}
      <NextPageCTA 
        title="Visit Again" 
        description="Thank you for exploring our site. Return to our homepage to discover more about how Vardaan Resources can support your engineering needs."
        nextPage={{
          path: "/",
          label: "Return to Home"
        }}
        headingText="RESTART YOUR JOURNEY"
      />
      <Footer />
    </div>
  );
};

export default Contact; 