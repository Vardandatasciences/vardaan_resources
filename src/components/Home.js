import React, { useEffect, useRef, useState } from 'react';
import '../components/Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import resourcesVideo from '../assets/videos/resources.mp4';
import expertsVideo from '../assets/videos/experts.mp4';
import projectImage1 from '../assets/images/p1.png';
import projectImage2 from '../assets/images/p2.png';
import projectImage3 from '../assets/images/p3.png';
import engineerImage1 from '../assets/images/p4.png';
import engineerImage2 from '../assets/images/p5.png';
import engineerImage3 from '../assets/images/p6.png';
import backgroundImage from '../assets/images/bg.webp';
import backgroundImage1 from '../assets/images/bg1.jpg';
import backgroundImage2 from '../assets/images/bg2.webp';

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
          <span className="accent">&</span>
          <h1>Information Technology Services</h1>
        </>
      )
    },
    {
      background: backgroundImage1,
      title: (
        <>
          <h1>Engineering Services</h1>
          <span className="accent">Division</span>
        </>
      )
    },
    {
      background: backgroundImage2,
      title: (
        <>
          <h1>Highly Experienced</h1>
          <span className="accent">Professionals</span>
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

  // Team members data
  const teamMembers = [
    {
      name: "Vivek Challapally",
      position: "Director",
      bio: "Masters in Technology (Mechanical) in Designs from IIT, Kharagpur. Over 30 years of rich Industrial Experience in the field of Project Management, Finance & General Administration."
    },
    {
      name: "A. Pattabhi Raman",
      position: "Director",
      bio: "B.E. Mechanical and Fellow of the Institution of Engineers. Presented papers and delivered lectures on Residual life assessment, plant life extension, plant betterment, R&M studies, etc."
    },
    {
      name: "S. Radhakrishna",
      position: "Consultant",
      bio: "Masters in Technology (Mechanical) in Designs from IIT, Kharagpur. Over 30 years Experience in design & manufacturing sector includes Design, Production, Sales, Purchase, Out sourcing & HR."
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
              <h2 className="section-title">Welcome to Vardaan Resources Pvt. Ltd.</h2>
              <div className="title-underline"></div>
              
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)} className="company-intro"><strong>Vardaan Resources Private Limited (VRPL)</strong>, is a value-based engineering and financial services company which offers services related to Fixed Assets for a broad spectrum of industries covering Steel, Oil, Energy, Power, Fertilizer, Automobile and General Engineering.</p>
              
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)}>It all started with <strong>Vardaan Projects Limited (VPL)</strong> in the year 2005 with assignments pertaining to Capitalization of Fixed Assets.</p>
              
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)}>Nature of these assignments & client requirements are vastly different compared to Fixed Asset assignments.</p>
              
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)}>To maintain dedicated focus & attention on Fixed Asset related customers, Vardaan Resources Ltd (VRL) was incorporated in 2010 and various works are bifurcated between VPL and VRL.</p>
              
              <p ref={(el) => addToRefs(el, textContentParagraphsRef)}>Name of the company was changed to Vardaan Resources Private Limited in July 2021.</p>
              
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
            <h2 className="section-title">Our Expert Team</h2>
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
                <p ref={(el) => addToRefs(el, teamParagraphsRef)}>VRPL team consists of highly experienced professionals in the fields of Mechanical, Chemical, Civil, Electrical Engineering and Finance having experience of over 45 years in their respective fields.</p>
                
                <p ref={(el) => addToRefs(el, teamParagraphsRef)}>Many members in VRPL team worked in senior positions in PSUs/ MNCs and have acquired hands on experience in providing technical and financial services for many projects.</p>
                
                <p ref={(el) => addToRefs(el, teamParagraphsRef)}>A few of the VRPL team members are accredited as Registered Valuers of Plant & Machinery and Buildings and as Chartered Engineers.</p>
                
                <p ref={(el) => addToRefs(el, teamParagraphsRef)}>The Company has offered its services to leading corporate houses in India and has been appreciated for the quality and commitment to the services.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="services-section">
          <div className="section-container">
            <h2 className="section-title">Engineering Services <span className="division-text">Division</span></h2>
            <div className="title-underline"></div>
            
            <div className="services-grid">
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3>Capitalization of Property, Plant & Equipment</h3>
                <p>Long lived tangible assets provide economic benefits to an enterprise for a period greater than that covered by the current year's.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <h3>Business and Plant Valuations</h3>
                <p>Every asset, financial as well as real, has a value. The key to successful investing lies in understanding the value and its source.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-clipboard-list"></i>
                </div>
                <h3>Physical Verification of Fixed Assets</h3>
                <p>Verification of all Assets and classifying as: Available/ Partly Available/ Discarded/ Transferred to other Units etc.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Technical & Financial Feasibility Studies</h3>
                <p>A business feasibility study is an effective way to safeguard against wastage of further investment or resources.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h3>Project Monitoring</h3>
                <p>Study of Maintenance Philosophy/ Production Records/ Product Quality Records/ Statistical Evaluation.</p>
              </div>
              
              <div ref={(el) => addToRefs(el, serviceCardsRef)} className="service-card">
                <div className="service-icon">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <h3>Lenders/Owners Engineers</h3>
                <p>Services include Tender Documents, Bid Evaluation, Contract Finalization, Engineering, Inspection and Project Management.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="management-section">
          <div className="section-container">
            <h2 className="section-title"><span className="highlight-text">Management</span> Team</h2>
            <div className="title-underline"></div>
            
            <div className="management-team-grid">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  ref={(el) => addToRefs(el, managementCardsRef)} 
                  className="team-card"
                >
                  <div className="team-card-inner">
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
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
                <h2 className="callback-title">Request a <span className="highlight-text">Call Back</span></h2>
                <p className="callback-description">For any queries, please fill in the below form with valid details. We will get back to you shortly.</p>
                
                <form className="callback-form">
                  <div className="form-row">
                    <div className="form-group">
                      <div className="input-icon-wrapper">
                        <i className="fas fa-user input-icon"></i>
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
                        <i className="fas fa-phone-alt input-icon"></i>
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
                        <i className="fas fa-envelope input-icon"></i>
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
                        <i className="fas fa-list-alt input-icon"></i>
                        <select 
                          className="form-input" 
                          required
                        >
                          <option value="" disabled selected>Select Subject</option>
                          <option value="capitalization">Capitalization</option>
                          <option value="valuation">Valuation</option>
                          <option value="assessment">Balance Useful Life(BULF)</option>
                          <option value="verification">Physical verification</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <div className="input-icon-wrapper textarea-wrapper">
                      <i className="fas fa-comment input-icon textarea-icon"></i>
                      <textarea 
                        className="form-input" 
                        placeholder="Your Message" 
                        rows="4"
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
            <h2 className="section-title">Typical Locations Where we worked...</h2>
            <div className="title-underline"></div>
            
            <div className="locations-grid">
              <div className="location-image-container">
                <img 
                  src={projectImage1} 
                  alt="Typical Power Plant with cooling towers" 
                  className="location-image"
                />
                <div className="location-name">Typical Power Plant</div>
              </div>
              <div className="location-image-container">
                <img 
                  src={projectImage2} 
                  alt="Steel Plant facility" 
                  className="location-image"
                />
                <div className="location-name">Steel Plant</div>
              </div>
              <div className="location-image-container">
                <img 
                  src={projectImage3} 
                  alt="Aluminium Refinery facility" 
                  className="location-image"
                />
                <div className="location-name">Aluminium Refinery</div>
              </div>
            </div>
            
            <h2 className="section-title engineers-title">Our Engineers at work...</h2>
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
      <Footer />
    </div>
  );
};

export default Home; 