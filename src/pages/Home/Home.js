import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import NextPageCTA from '../../components/NextPageCTA';
import BannerLogo from '../../components/BannerLogo';
import resourcesVideo from '../../assets/videos/resources1.mp4';
import expertsVideo from '../../assets/videos/experts.mp4';
import projectImage1 from '../../assets/images/p1.png';
import projectImage2 from '../../assets/images/p2.png';
import projectImage3 from '../../assets/images/p3.png';
import engineerImage1 from '../../assets/images/p4.png';
import engineerImage2 from '../../assets/images/p5.png';
import engineerImage3 from '../../assets/images/p6.png';
import backgroundImage from '../../assets/images/bg.webp';
import backgroundImage1 from '../../assets/images/bg1.jpg';
import backgroundImage2 from '../../assets/images/bg2.webp';
import vivekProfile from '../../assets/images/vivek.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  // References for animation elements
  const sectionsRef = useRef([]);
  const teamVideoRef = useRef(null);
  const teamDescriptionRef = useRef(null);
  const teamParagraphsRef = useRef([]);
  const serviceCardsRef = useRef([]);
  const textContentParagraphsRef = useRef([]);
  const managementCardsRef = useRef([]);
  
  // State for team slider
  const [activeTeamSlide, setActiveTeamSlide] = useState(0);
  
  // State for hero banner slider
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  
  // Hero slides data
  const heroSlides = [
    {
      background: backgroundImage,
      title: (
        <>
          <h1>Engineering, Financial</h1>
          <span className="accent" style={{ color: '#0056b3' }}>&</span>
          <h1>Information Technology Services</h1>
        </>
      )
    },
    {
      background: backgroundImage1,
      title: (
        <>
          <h1>Engineering Services</h1>
          <span className="accent" style={{ color: '#0056b3' }}>Division</span>
        </>
      )
    },
    {
      background: backgroundImage2,
      title: (
        <>
          <h1>Highly Experienced</h1>
          <span className="accent" style={{ color: '#0056b3' }}>Professionals</span>
        </>
      )
    }
  ];
  
  // Navigate hero slider
  const nextHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };
  
  const prevHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  // Team members data with more consistent styling
  const teamMembers = [
    {
      name: "Vivek Challapally",
      position: "Director",
      bio: "Masters in Technology (Mechanical) in Designs from IIT, Kharagpur. Over 45 years of rich Industrial Experience in the field of Project Management, Finance & General Administration.",
      profileImage: vivekProfile
    },
    {
      name: "A. Pattabhi Raman",
      position: "Director",
      bio: "B.E. Mechanical and Fellow of the Institution of Engineers. Presented papers and delivered lectures on Residual life assessment, plant life extension, plant betterment, R&M studies, etc.",
      profileImage: null
    },
    {
      name: "S. Radhakrishna",
      position: "Consultant",
      bio: "Masters in Technology (Mechanical) in Designs from IIT, Kharagpur. Over 46 years Experience in Design, Production, Sales, Purchase, Out sourcing & HR.",
      profileImage: null
    }
  ];

  useEffect(() => {
    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Toggle visibility class based on intersection status
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          // Remove the visible class when out of view
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    // Get all section elements and observe them
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      sectionsRef.current.push(section);
      sectionObserver.observe(section);
    });

    // Animation observers for team video and description
    const elementObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          // Remove animation class when out of view
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe team video container
    if (teamVideoRef.current) {
      elementObserver.observe(teamVideoRef.current);
    }

    // Observe team description
    if (teamDescriptionRef.current) {
      elementObserver.observe(teamDescriptionRef.current);
    }

    // Paragraphs observer
    const paragraphObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, 100); // Small delay for better visual effect
        } else {
          // Reset animation when scrolling back up
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });

    // Observe team paragraphs
    if (teamParagraphsRef.current.length > 0) {
      teamParagraphsRef.current.forEach(paragraph => {
        paragraphObserver.observe(paragraph);
      });
    }

    // Observe welcome section paragraphs
    if (textContentParagraphsRef.current.length > 0) {
      textContentParagraphsRef.current.forEach(paragraph => {
        paragraphObserver.observe(paragraph);
      });
    }

    // Service cards observer
    const cardsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, 100);
        } else {
          // Reset animation when scrolling back up
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });

    // Observe service cards
    if (serviceCardsRef.current.length > 0) {
      serviceCardsRef.current.forEach(card => {
        cardsObserver.observe(card);
      });
    }

    // Observe management team cards
    if (managementCardsRef.current.length > 0) {
      managementCardsRef.current.forEach(card => {
        cardsObserver.observe(card);
      });
    }

    // Cleanup
    return () => {
      sectionObserver.disconnect();
      elementObserver.disconnect();
      paragraphObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  // Function to add refs to arrays
  const addToRefs = (el, refs) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      
      <div 
        className="hero-banner" 
        style={{ backgroundImage: `url(${heroSlides[activeHeroSlide].background})` }}
      >
        <BannerLogo />
        <div className="overlay"></div>
        <div className="hero-text">
          {heroSlides[activeHeroSlide].title}
        </div>
        <div className="carousel-controls">
          <button className="carousel-control prev" onClick={prevHeroSlide}>&lt;</button>
          <button className="carousel-control next" onClick={nextHeroSlide}>&gt;</button>
        </div>
        <div className="hero-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-indicator ${activeHeroSlide === index ? 'active' : ''}`}
              onClick={() => setActiveHeroSlide(index)}
            />
          ))}
        </div>
      </div>
      
      <div className="home-content">
        <section className="welcome-section">
          <div className="section-container">
            <div className="text-content">
              <h2 className="section-title">Welcome to <span style={{ color: '#0056b3' }}>Vardaan Resources Pvt. Ltd.</span></h2>
              <div className="title-underline"></div>
              
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)} className="company-intro"><strong style={{ color: '#0056b3' }}>Vardaan Resources Private Limited (VRPL)</strong>, is a value-based engineering and financial services company which offers services related to Fixed Assets for a broad spectrum of industries covering Steel, Oil, Energy, Power, Fertilizer, Automobile and General Engineering.</p>
              
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)}>It all started with <strong style={{ color: '#0056b3' }}>Vardaan Projects Limited (VPL)</strong> in the year 2005 with assignments pertaining to Capitalization of Fixed Assets.</p>
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)}><strong style={{ color: '#0056b3' }}>As part of continuing efforts to expand business, </strong>Cyber Security was added to our portfolio.</p>
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)}>Nature of these assignments & client requirements are vastly different compared to <span style={{ color: '#0056b3' }}>Fixed Asset</span> assignments.</p>
              
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)}>To maintain dedicated focus & attention on Fixed Asset related customers, <span style={{ color: '#0056b3' }}>Vardaan Resources Ltd (VRL)</span> was incorporated in 2010 and various works are bifurcated between VPL and VRL.</p>
              
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)}>Name of the company was changed to <span style={{ color: '#0056b3' }}>Vardaan Resources Private Limited</span> in July 2021.</p>
              
              {/* <p ref={(el) => addToRefs(el, textContentParagraphsRef)}><strong>Vardan Resources Private Limited (VRPL)</strong> is a subsidiary of Vardaan Projects Ltd (VPL).</p> */}
            </div>
            <div className="image-content">
              <div className="video-container welcome-video">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="resources-video"
                >
                  <source src={resourcesVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>
        
        <section className="team-section">
          <div className="section-container">
            <h2 className="section-title">Team <span style={{ color: '#0056b3' }}>of Experts</span></h2>
            <div className="title-underline"></div>
            
            <div className="team-content-wrapper">
              <div ref={teamVideoRef} className="team-video-container">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="experts-video"
                >
                  <source src={expertsVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div ref={teamDescriptionRef} className="team-description">
                <p ref={(el) => addToRefs(el, teamParagraphsRef)}><span style={{ color: '#0056b3' }}>VRPL team</span> consists of highly experienced professionals in the fields of Mechanical, Chemical, Civil, Electrical Engineering and Finance having experience of over 45 years in their respective fields.</p>
                
                <p ref={(el) => addToRefs(el, teamParagraphsRef)}>Many members in VRPL team worked in senior positions in <span style={{ color: '#0056b3' }}>PSUs/ MNCs</span> and have acquired hands on experience in providing technical and financial services for many projects.</p>
                
                <p ref={(el) => addToRefs(el, teamParagraphsRef)}>A few of the VRPL team members are accredited as <span style={{ color: '#0056b3' }}>Registered Valuers</span> of Plant & Machinery, Land & Buildings as Chartered Engineers.</p>
                
                <p ref={(el) => addToRefs(el, teamParagraphsRef)}>The Company has offered its services to leading corporate houses in India and has been appreciated for the quality and commitment of our services.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="services-section">
          <div className="section-container">
            <h2 className="section-title">Engineering Services <span className="division-text" style={{ color: '#0056b3' }}>Division</span></h2>
            <div className="title-underline"></div>
            
            <div className="services-grid">
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-clipboard-check animated-icon"></i>
                </div>
                <h3>Capitalization of <span style={{ color: '#0056b3' }}>Property, Plant & Equipment</span></h3>
                <p>Long lived tangible assets provide economic benefits to an enterprise for a period greater than that covered by the current year's.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-bar animated-icon"></i>
                </div>
                <h3>Business and <span style={{ color: '#0056b3' }}>Plant Valuations</span></h3>
                <p>Every asset, financial as well as real, has a value. The key to successful investing lies in understanding the value and its source.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-clipboard-list animated-icon"></i>
                </div>
                <h3><span style={{ color: '#0056b3' }}>Physical Verification</span> of Fixed Assets</h3>
                <p>Verification of all Assets and classifying as: Available/ Partly Available/ Discarded/ Transferred to other Units etc.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-line animated-icon"></i>
                </div>
                <h3><span style={{ color: '#0056b3' }}>Technical & Financial</span> Feasibility Studies</h3>
                <p>A business feasibility study is an effective way to safeguard against wastage of further investment or resources.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-sync-alt animated-icon"></i>
                </div>
                <h3><span style={{ color: '#0056b3' }}>Project Monitoring</span></h3>
                <p>Study of Maintenance Philosophy/ Production Records/ Product Quality Records/ Statistical Evaluation.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-exchange-alt animated-icon"></i>
                </div>
                <h3><span style={{ color: '#0056b3' }}>Lenders/Owners</span> Engineers</h3>
                <p>Services include Tender Documents, Bid Evaluation, Contract Finalization, Engineering, Inspection and Project Management.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="management-section">
          <div className="section-container">
            <h2 className="section-title"><span style={{ color: '#0056b3' }}>Management</span> Team</h2>
            <div className="title-underline"></div>
            
            <div className="management-team-grid">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  ref={(el) => addToRefs(el, managementCardsRef)} 
                  className="team-card"
                >
                  <div className="team-card-inner">
                    <div className="profile-container">
                      <div className="profile-image">
                        {member.profileImage ? (
                          <img src={member.profileImage} alt={member.name} />
                        ) : (
                          <div className="profile-placeholder">
                            <FontAwesomeIcon icon={faUser} size="3x" />
                          </div>
                        )}
                      </div>
                      <div className="profile-details">
                        <h3>{member.name}</h3>
                        <p className="position" style={{ color: '#0056b3' }}>{member.position}</p>
                      </div>
                    </div>
                    <p className="bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="callback-section">
          <div className="callback-container">
            <div className="callback-content">
              <div className="callback-image">
                <div className="overlay"></div>
              </div>
              <div className="callback-form-container">
                <h2 className="callback-title">Request a <span style={{ color: '#0056b3' }}>Call Back</span></h2>
                <p className="callback-description">For any queries, please fill in the below form with valid details. We will get back to you shortly.</p>
                
                <form className="callback-form">
                  <div className="form-row">
                    <div className="form-group">
                      <div className="input-icon-wrapper">
                        <span className="input-icon">
                          <i className="fas fa-user"></i>
                        </span>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="Your Name" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="input-icon-wrapper">
                        <span className="input-icon">
                          <i className="fas fa-phone-alt"></i>
                        </span>
                        <input 
                          type="tel" 
                          className="form-input" 
                          placeholder="Phone Number" 
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <div className="input-icon-wrapper">
                        <span className="input-icon">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <input 
                          type="email" 
                          className="form-input" 
                          placeholder="Email Address" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="input-icon-wrapper">
                        <span className="input-icon">
                          <i className="fas fa-list-alt"></i>
                        </span>
                        <select 
                          className="form-input" 
                          required
                        >
                          <option value="" disabled selected>Select Subject</option>
                          <option value="capitalization">Capitalization</option>
                          <option value="valuation">Valuation</option>
                          <option value="assessment">Balance Useful Life (BUL)</option>
                          <option value="verification">Physical verification</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <div className="input-icon-wrapper">
                      <span className="input-icon textarea-icon">
                        <i className="fas fa-comment"></i>
                      </span>
                      <textarea 
                        className="form-textarea" 
                        placeholder="Your Message" 
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="button-container">
                    <button type="submit" className="submit-button">
                      <i className="fas fa-paper-plane"></i> SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        <section className="locations-section">
          <div className="section-container">
            <h2 className="section-title">Typical <span style={{ color: '#0056b3' }}>Locations</span> Where we worked...</h2>
            <div className="title-underline"></div>
            
            <div className="locations-grid">
              <div className="location-image-container">
                <img 
                  src={projectImage1} 
                  alt="Typical Power Plant with cooling towers" 
                  className="location-image"
                />
                <div className="location-name" style={{ color: '#0056b3' }}>Power Plant</div>
              </div>
              <div className="location-image-container">
                <img 
                  src={projectImage2} 
                  alt="Steel Plant facility" 
                  className="location-image"
                />
                <div className="location-name" style={{ color: '#0056b3' }}>Steel Plant</div>
              </div>
              <div className="location-image-container">
                <img 
                  src={projectImage3} 
                  alt="Aluminium Refinery facility" 
                  className="location-image"
                />
                <div className="location-name" style={{ color: '#0056b3' }}>Aluminium Refinery</div>
              </div>
            </div>
            
            <h2 className="section-title engineers-title">Our <span style={{ color: '#0056b3' }}>Engineers</span> at work...</h2>
            <div className="title-underline"></div>
            
            <div className="locations-grid">
              <div className="location-image-container">
                <img 
                  src={engineerImage1} 
                  alt="Engineer examining industrial equipment" 
                  className="location-image"
                />
              </div>
              <div className="location-image-container">
                <img 
                  src={engineerImage2} 
                  alt="Engineer working in control room" 
                  className="location-image"
                />
              </div>
              <div className="location-image-container">
                <img 
                  src={engineerImage3} 
                  alt="Engineer inspecting construction site" 
                  className="location-image"
                />
              </div>
            </div>
          </div>
        </section>
    </div>
      {/* Journey Navigation - Next Page CTA */}
      <NextPageCTA 
        title="Discover Mission" 
        description="Learn about our vision, mission, and the core values that drive our commitment to excellence in engineering services."
        nextPage={{
          path: "/mission",
          label: "Explore Mission"
        }}
        headingText="Embark Your Journey"
      />
      <Footer />
    </div>
  );
};

export default Home; 