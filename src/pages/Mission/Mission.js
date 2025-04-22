import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Mission.css';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Footer from '../../components/Footer'; 
import NextPageCTA from '../../components/NextPageCTA';
import BannerLogo from '../../components/BannerLogo';

const Mission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const isHeroInView = useInView(heroRef);
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  
  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.3 + (i * 0.1)
      }
    })
  };

  // Core values with additional properties
  const coreValues = [
    {
      id: 1,
      title: "Commitment",
      content: "Committed to providing quality engineering services in the fields of Project Evaluation, Technical Audit, Monitoring and Due Diligence.",
      icon: "fa-solid fa-handshake",
      color: "#4F46E5",
      lightColor: "#EEF2FF"
    },
    {
      id: 2,
      title: "Excellence",
      content: "Provide our customers with the complete range and highest quality of information and services.",
      icon: "fa-solid fa-chart-line",
      color: "#EC4899",
      lightColor: "#FCE7F3"
    },
    {
      id: 3,
      title: "Relationships",
      content: "Building customer relationships by focusing on customer needs and striving to exceed their expectations through flexible customer driven solutions.",
      icon: "fa-solid fa-users",
      color: "#F97316",
      lightColor: "#FFF7ED"
    },
    {
      id: 4,
      title: "Integrity",
      content: "Maintain high standards of professional conduct and to comply with all the rules and regulations relating to our work.",
      icon: "fa-solid fa-shield-halved",
      color: "#10B981",
      lightColor: "#ECFDF5"
    },
    {
      id: 5,
      title: "Development",
      content: "Develop cost effective solutions that meet specific needs of our clients consistent with long term development of the industry.",
      icon: "fa-solid fa-code",
      color: "#8B5CF6",
      lightColor: "#F3E8FF"
    }
  ];

  // Mission principles array
  const missionPrinciples = [
    {
      id: 1,
      text: "Committed to providing quality engineering services in the fields of project evaluation, technical audit, monitoring and due diligence.",
      icon: "fa-solid fa-check-double",
      iconClass: "mission-icon-1"
    },
    {
      id: 2,
      text: "Develop cost effective solutions that meet specific needs of our clients consistent with long term development of the industry.",
      icon: "fa-solid fa-code",
      iconClass: "mission-icon-2"
    },
    {
      id: 3,
      text: "Provide our customers with the complete range and highest quality of information and services.",
      icon: "fa-solid fa-chart-line",
      iconClass: "mission-icon-3"
    },
    {
      id: 4,
      text: "Building customer relationships by focusing on customer needs and striving to exceed their expectations through flexible customer driven solutions.",
      icon: "fa-solid fa-users",
      iconClass: "mission-icon-4"
    },
    {
      id: 5,
      text: "Maintain high standards of professional conduct and to comply with all the rules and regulations relating to our work.",
      icon: "fa-solid fa-shield-halved",
      iconClass: "mission-icon-5"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    // return () => {
    // };
  }, []);
  

  // Handle card interaction
  const handleCardClick = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div>
    <div className="mission-modern">
      {/* Hero Section - Fullscreen with 3D effect */}
      <motion.section 
        className="hero-section"
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <BannerLogo />
        <motion.div 
          className="hero-content"
          style={{ y: parallaxY, opacity: opacityTransform }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mission
          </motion.h1>
          <motion.div 
            className="hero-decoration"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-3d-scene"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {[...Array(15)].map((_, i) => (
            <div key={i} className="scene-particle"></div>
          ))}
        </motion.div>
      </motion.section>

      {/* Mission Wrapper */}
      <div className="vision-mission-wrapper">
        <div className="container">
          <div className="vision-mission-content mission-only">
            {/* Mission Content Section */}
            <section className={`mission-content-section ${isVisible ? 'visible' : ''}`} ref={missionRef}>
              <motion.div 
                className="mission-modern-container"
                initial="hidden"
                animate={isMissionInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { 
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                <motion.div className="mission-header" variants={headingVariants}>
                  <h2>Mission</h2>
                  <div className="mission-decoration-modern">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                  </div>
                </motion.div>

                <motion.div className="mission-content-modern" variants={contentVariants}>
                  <div className="mission-quote">
                    
                    <div className="mission-principles-list">
                      {missionPrinciples.map((principle, index) => (
                        <motion.div 
                          key={principle.id}
                          className="mission-principle-item"
                          custom={index}
                          variants={listItemVariants}
                        >
                          <div className={`mission-principle-icon ${principle.iconClass}`}>
                            <i className={principle.icon}></i>
                          </div>
                          <p>{principle.text}</p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mission-animated-underline"></div>
                  </div>
                  
                  <div className="mission-floating-shapes">
                    <div className="floating-shape shape1"></div>
                    <div className="floating-shape shape2"></div>
                    <div className="floating-shape shape3"></div>
                  </div>
                </motion.div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>

      {/* Core Values - Interactive Cards with 3D Tilt Effect */}
      <section className={`core-values-section ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Core Values</h2>
            <p>The principles that drive our work and define our company</p>
          </motion.div>

          <div className="core-values-grid">
            {coreValues.map((value) => (
              <motion.div
                key={value.id}
                className={`value-card ${activeCard === value.id ? 'active' : ''}`}
                style={{ 
                  backgroundColor: value.lightColor,
                  borderColor: value.color
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: value.id * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: `0 10px 15px rgba(0,0,0,0.1), 0 0 0 1px ${value.color}33`
                }}
                onClick={() => handleCardClick(value.id)}
              >
                <div className="value-icon" style={{ backgroundColor: value.color }}>
                  <i className={value.icon}></i>
                </div>
                <div className="value-content">
                  <h3>{value.title}</h3>
                  <p>{value.content}</p>
                </div>
                <div className="value-number">{value.id}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
      {/* Journey Navigation - Next Page CTA */}
      <NextPageCTA 
        title="Explore Our Services" 
        description="Discover our comprehensive range of engineering and consulting services designed to meet your project needs with precision and expertise."
        nextPage={{
          path: "/services",
          label: "View Our Services"
        }}
        headingText="Next step of your journey"
      />
      <Footer />
    </div>
  );
};

export default Mission; 