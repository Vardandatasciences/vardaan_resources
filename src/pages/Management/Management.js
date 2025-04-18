import React, { useState, useEffect, useRef } from 'react';
import './Management.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
 
// Fallback image using data URL for Vivek Challa's profile
const VIVEK_PHOTO_FALLBACK = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiMzNDk4ZGIiIC8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iNzAiIHI9IjQwIiBmaWxsPSIjZWNmMGYxIiAvPjxyZWN0IHg9IjUwIiB5PSIxMTAiIHdpZHRoPSIxMDAiIGhlaWdodD0iOTAiIGZpbGw9IiNlY2YwZjEiIC8+PHRleHQgeD0iMTAwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM0OThkYiI+Vi4gQ2hhbGxhPC90ZXh0Pjwvc3ZnPg==';
 
// Try to import the image, but provide a fallback if it doesn't exist
let VivekPhoto;
try {
  VivekPhoto = require('../../assets/images/vivek.png');
} catch (e) {
  // Use the fallback if the image doesn't exist
  VivekPhoto = VIVEK_PHOTO_FALLBACK;
}
 
const Management = () => {
  const [activeDirector, setActiveDirector] = useState(1);
  const detailsRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
 
  // Effect to scroll back to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
   
    // Add class to body when on management page
    document.body.classList.add('management-page-active');
   
    // Clean up function
    return () => {
      document.body.classList.remove('management-page-active');
    };
  }, []);
 
  // Function to handle image load errors
  const handleImageError = (directorId) => {
    // Use fallback image for Vivek Challa
    if (directorId === 1) {
      return VIVEK_PHOTO_FALLBACK;
    }
    return null;
  };
 
  // Function to handle card click
  const handleCardClick = (directorId) => {
    setActiveDirector(directorId);
   
    // Scroll to the details section after a brief delay
    setTimeout(() => {
      if (detailsRef.current) {
        detailsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };
 
  const directors = [
    {
      id: 1,
      name: 'VIVEK CHALLAA',
      title: 'Director',
      photo: VivekPhoto,
      details: [
        'Masters in Technology (Mechanical) in Designs from IIT, Kharagpur.',
        'Over 40 years of rich Industrial Experience in the field of Project Management, Finance & General Administration.',
        'Was COO for a MNC in the manufacturing sector.',
        'Exhaustive experience in Design, Fabrication & Erection of Industrial Piping, Steel Structures, Equipment Erection for a variety of Industries which include Steel Plants, Power Plants, Defense Establishments, Nuclear Plants, Ship Building etc.',
        'Experienced in Bid Evaluation, Negotiations, Finalization of Contracts, Execution of Projects and Commissioning.',
        'Experienced in Project Management, Construction Management, Quality Assurance Services.',
        'Experienced in Interacting with Statutory Authorities, Government Bodies etc.',
        'Involved in detailed engineering projects and DPR preparation for Sponge Iron Plants, Chemical Plants etc.',
        'Undertook 3rd party inspection of equipment for import from abroad.',
        'Fair market valuations completed for many steel manufacturing companies, oil refineries, power projects, construction projects etc.',
        'Fellow of the Institution of Engineers',
        'Fellow of the Institution of Valuers',
        'Registered Valuer u/s 34AB of the Wealth Tax Act, 1957 for Plant & Machinery'
      ]
    },
    {
      id: 2,
      name: 'A PATTABHI RAMAN',
      title: 'Director',
      details: [
        'B.E. Mechanical and Fellow of the Institution of Engineers',
        'Presented papers and delivered lectures on Residual life assessment, plant life extension, plant betterment, R&M studies, etc.',
        'Over 36 years\' experience in power plant, from engineering concept note to Feasibility study, Design, Engineering, Site establishment, Construction and Construction management, Commissioning, O & M, Plant betterment, Resident Life Assessment, Life Extension, Implementation of R & M works, Valuation of plant, Relocation of power plant, Upgrading/Up rating of power plant, training of power plant personnel and associated works.',
        'Worked as Director (Projects) of Lanco Amarkantak Power Pvt Ltd',
        'Worked as Director (Power) of BPL Power Projects (AP) Pvt Ltd'
      ]
    },
    {
      id: 3,
      name: 'S. RADHAKRISHNA',
      title: 'Consultant',
      details: [
        'Masters in Technology (Mech.) in Machine Design from IIT, Kharagpur.',
        'Over 45 years Experience in Design and Manufacturing sector.',
        'Served in senior position in HMT (SPM & CNC Divisions), Veljan Hydrair, Denison Hydraulics, Nor crane & Winch',
        'Highly Experienced in Design of CNC Machine Tools, Special Purpose Machines, Fluid Power Equipment, Deck Machinery and other ship related equipment.',
        'Responsibilities include Design, Production, Sales, Purchase, Outsourcing, HR etc.'
      ]
    }
  ];
 
  return (
    <div>
    <div className="management-page">
      <Navbar />
     
      <div className="management-container">
        <motion.div
          className="management-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="management-title">Management Team</h1>
          <div className="title-underline"></div>
        </motion.div>
 
        <div className="intro-section">
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Leadership That Drives Excellence</h2>
            <p>Our distinguished management team brings together decades of expertise in engineering, operations, and strategic leadership. With a combined experience across diverse industrial sectors, they provide the visionary guidance that defines our approach to excellence and innovation.</p>
          </motion.div>
        </div>
 
        <div className="content-container">
          <motion.h3
            className="section-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Meet Our Team
          </motion.h3>
         
          <div className="directors-grid">
            {directors.map((director, index) => (
              <motion.div
                key={director.id}
                className={`director-card ${activeDirector === director.id ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.165, 0.84, 0.44, 1]
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15), 0 0 20px rgba(0, 123, 255, 0.2)'
                }}
                onClick={() => handleCardClick(director.id)}
              >
                <div className="director-image-container">
                  <div className="hover-indicator">
                    <FontAwesomeIcon icon={faHandPointer} />
                  </div>
                  {director.id === 1 && director.photo && (
                    <div
                      className="director-image"
                      style={{
                        backgroundImage: `url(${director.photo})`,
                      }}
                      onError={() => {
                        const fallbackImg = handleImageError(director.id);
                        if (fallbackImg) {
                          // Update the background image with fallback
                          const imgElement = document.querySelector(`.director-card:nth-child(${director.id}) .director-image`);
                          if (imgElement) {
                            imgElement.style.backgroundImage = `url(${fallbackImg})`;
                          }
                        }
                      }}
                    />
                  )}
                  {(director.id !== 1 || !director.photo) && (
                    <div className="director-image" />
                  )}
                  <div className="director-overlay" />
                </div>
                <div className="director-info">
                  <h2 className="director-name">{director.name}</h2>
                  <h3 className="director-title">{director.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
 
          <div ref={detailsRef}></div>
         
          <AnimatePresence mode="wait">
            {activeDirector && (
              <motion.div
                className="director-details-container"
                key={`details-${activeDirector}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{
                  duration: 0.4,
                  ease: [0.165, 0.84, 0.44, 1],
                  layout: { duration: 0.3 }
                }}
                layout
              >
                <div className="detail-card" data-director={activeDirector}>
                  <div className="detail-header">
                    <h2 className="detail-name">{directors.find(d => d.id === activeDirector)?.name}</h2>
                    <h3 className="detail-title">{directors.find(d => d.id === activeDirector)?.title}</h3>
                    <div className="detail-underline"></div>
                  </div>
                 
                  <motion.div
                    className="detail-content"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 }
                      }
                    }}
                  >
                    <div className="detail-paragraphs-container">
                      {directors.find(d => d.id === activeDirector)?.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          className="detail-paragraph-wrapper"
                          variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.3,
                                ease: "easeOut"
                              }
                            }
                          }}
                        >
                          <div className="detail-bullet"></div>
                          <p className="detail-paragraph">{detail}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
    
    <div className="management-cta">
      <div className="container">
        <h3 className="cta-heading">MOVE ON TO NEXT STEP</h3>
        <h2 className="cta-title">CREDENTIALS</h2>
        <p className="cta-description">
          Get to know our project expertize.
        </p>
        <Link to="/credentials" className="cta-button">
          Credentials <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
    
    <Footer />
    </div>
  );
};
 
export default Management;
 