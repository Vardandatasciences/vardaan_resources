import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Credentials.css';
import Footer from '../../components/Footer';
import NextPageCTA from '../../components/NextPageCTA';
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faBuilding, 
  faDatabase, 
  faNetworkWired, 
  faServer, 
  faCloud,
  faCodeBranch,
  faShieldAlt,
  faArrowDown,
  faChevronDown,
  faChartLine,
  faUsers,
  faAward,
  faProjectDiagram,
  faClock,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';

// Import company logos
import EssarLogo from '../../assets/logos/Essar.jpeg';
import VedantaLogo from '../../assets/logos/Vedanta.jpg';
import AmwLogo from '../../assets/logos/AMW.jpg';
import SterliteLogo from '../../assets/logos/Sterlite.png';
import MittalLogo from '../../assets/logos/Mittal.jpg';
import KalyaniLogo from '../../assets/logos/Kalyani.webp';
import GerdauLogo from '../../assets/logos/Gerdau.jpeg';
import JswLogo from '../../assets/logos/JSW.png';
import DbPowerLogo from '../../assets/logos/DB Power.jpeg';
import TalwandiLogo from '../../assets/logos/Talwandi Sabo.jpg';
import UshaMartinLogo from '../../assets/logos/Usha Martin.png';

const Credentials = () => {
  // Data for credential cards with complete content - Moved to the top before state declarations
  const credentialCards = [
    {
      id: 1,
      title: "Capitalization of Property Plant & Equipment",
      icon: "building",
      color: "#3498db",
      projects: [
        "ESSAR Oil Ltd – 14 MMTPA Oil Refinery at Vadinar, Gujarat",
        "ESSAR Oil Ltd – Expansion of the Oil Refinery to 20 MMTPA.",
        "VADINAR Oil Terminal Ltd. – Major items include Jetty, Pipelines and Tankages etc",
        "VADINAR Power Co Ltd. – Co-gen Power Plant of 120 MWe in Phase 1 and 510 MWe in Phase 2.",
        "VEDANTA Aluminium Ltd – Aluminium Smelting Plant, Jharsuguda, Orissa",
        "VEDANTA Alumina Ltd. – Aluminium Refinery at Lanjigar, Orissa",
        "Asia Motor Works Ltd – Commercial Vehicles Plant including Auto Component Division at Bhuj, Gujarat.",
        "Sterlite Energy Ltd – 4 x 600 MW Independent Power Plant at Jharsuguda, Orissa",
        "HPCL Mittal Energy Ltd – 9.0 MMTPA Oil Refinery at Bhatinda, Punjab",
        "Kalyani Gerdau Steel Ltd – Determination of Fair Value of 0.3 MMTPA Steel Plant at Tadipatri, AP.",
        "JSW Steel Ltd – 7.0 and 10.0 MMTPA Steel Plant expansion at Vijanagar, Karnataka.",
        "Essar Power Gujarat Ltd – 2 x 600 MW Coal Based Power Plant at Salaya, Gujarat.",
        "Essar Power MP Ltd – 2 x 600 MW Coal Based Power Plant at Mahan, MP.",
        "Essar Power Transmission Co Ltd – Transmission Lines",
        "Gerdau Steel India Ltd – Expansion of Steel Plant capacity at Tadipatri, AP",
        "DB Power Ltd – 2 x 600 MW Coal Based Power Plant near Raipur, Chattisgarh (In progress)",
        "Talwandi Sabo Power Ltd – 3 x 660 MW Coal Based Power Plant near Mansa, Bhatinda, Punjab (In Progress)",
        "JSW Energy Ltd for their power plants located at Vijaynagar and Ratnagiri.",
        "Raj West Power Ltd for their power plant at Barmer, Rajasthan.",
        "Essar Power Hazira Ltd – 2 x 135 MW Thermal Power Plant (in progress)",
        "Essar Power Orissa Ltd – 4 x 30 MW Thermal Power Plant (in progress)"
      ]
    },
    {
      id: 2,
      title: "Asset Valuation As Per IFRS Requirements",
      icon: "chart-line",
      color: "#e74c3c",
      description: "Determination of Fair Value of Property Plant & Equipment as per IFRS",
      companyHeading: "ESSAR Global Ltd., the holding arm of various companies which include:",
      companies: [
        "ESSAR Steel Ltd and other Steel Companies of ESSAR",
        "ESSAR Power Ltd and other Power Companies of ESSAR",
        "ESSAR Oil Ltd;",
        "ESSAR Oilfield Services Ltd",
        "Vadinar Oil Terminal Ltd",
        "ESSAR Constructions India Ltd",
        "ESSAR Shipping Ltd",
        "ESSAR Ports and Logistics Ltd"
      ],
      otherProjects: [
        "JSW Steel Ltd for their plants located at Vijaynagar, Salem, Tarapur and Vasind",
        "Vedanta Aluminium Ltd for their plants located at Jharsuguda and Lanjigarh",
        "Gerdau Steel India Ltd for their plant located at Tadipatri, AP"
      ]
    },
    {
      id: 3,
      title: "Assessment of Useful Life & Residual Value",
      icon: "clock",
      color: "#2ecc71",
      projects: [
        "Essar Oil Ltd – for 20 MMTPA Refinery at Vadinar, Gujarat",
        "JSW Steel Ltd – for their Steel Plants at Vijaynagar, Salem, Dolvi and Salav and ARCL",
        "Essar Steel Ltd - for their Steel Plants at Hazira, Visakhapatnam and Kirandul",
        "Usha Martin Ltd – for their Steel Plant at Jamshedpur",
        "Vadinar Oil Terminal Ltd, Vadinar",
        "Vadinar Ports & Terminal Ltd, Vadinar"
      ]
    },
    {
      id: 4,
      title: "Audit & Physical Verification",
      icon: "clipboard-check",
      color: "#f39c12",
      projects: [
        "HPCL Mittal Energy Ltd – Estimate, Audit and Physical Verification of Civil and Structural Quantities for CDSP Project in Delayed Coker Unit at Bhatinda, Punjab.",
        "Essar Projects Ltd – Construction material stock verification at various project locations all over the country",
        "Essar Oil Ltd – Physical Verification of Fixed Assets and Reconciliation of Fixed Assets Register for 20 MMTPA Refinery at Vadinar, Gujarat."
      ]
    }
  ];

  const [activeCard, setActiveCard] = useState(1);
  const [activeTabLine, setActiveTabLine] = useState(1);
  const [panelColor, setPanelColor] = useState(credentialCards[0].color);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const projectsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Debug log to check component mounting
    console.log('Credentials component mounted');
    console.log('projectsRef exists:', projectsRef !== null);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Projects section reference not found');
      // Fallback - scroll down 600px
      window.scrollTo({
        top: 600,
        behavior: 'smooth'
      });
    }
  };

  const handleTabHover = (tabId) => {
    setActiveCard(tabId);
    setActiveTabLine(tabId);
    // Set the panel color based on the hovered tab
    const selectedCard = credentialCards.find(card => card.id === tabId);
    setPanelColor(selectedCard.color);
  };

  // Map company names to logos
  const getCompanyLogo = (projectName) => {
    if (projectName.includes('ESSAR') || projectName.includes('Essar')) return EssarLogo;
    if (projectName.includes('VEDANTA') || projectName.includes('Vedanta')) return VedantaLogo;
    if (projectName.includes('Asia Motor') || projectName.includes('AMW')) return AmwLogo;
    if (projectName.includes('Sterlite')) return SterliteLogo;
    if (projectName.includes('HPCL Mittal') || projectName.includes('Mittal')) return MittalLogo;
    if (projectName.includes('Kalyani')) return KalyaniLogo;
    if (projectName.includes('Gerdau')) return GerdauLogo;
    if (projectName.includes('JSW')) return JswLogo;
    if (projectName.includes('DB Power')) return DbPowerLogo;
    if (projectName.includes('Talwandi')) return TalwandiLogo;
    if (projectName.includes('Usha Martin')) return UshaMartinLogo;
    if (projectName.includes('VADINAR')) return EssarLogo; // Use Essar logo for VADINAR as they're related
    
    // Default fallback to building icon if no logo matches
    return null;
  };

  return (
    <div className="credentials-page">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">Credentials</span>
          </h1>
          
          <div className="feature-pills" style={{ marginTop: '40px' }}>
            <div className="feature-pill">
              <FontAwesomeIcon icon={faCheckCircle} />
              Quality Assessment
            </div>
            <div className="feature-pill">
              <FontAwesomeIcon icon={faChartLine} />
              Enterprise Grade
            </div>
            <div className="feature-pill">
              <FontAwesomeIcon icon={faProjectDiagram} />
              Smart Solutions
            </div>
          </div>
          
          <button className="hero-button pulse-animation" onClick={scrollToProjects}>
            Explore Our Projects
            <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
          </button>
        </div>
        
        <div className="hero-background">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        {/* Floating Icons */}
        <div className="floating-icons">
          <div className="floating-icon icon-1">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <div className="floating-icon icon-2">
            <FontAwesomeIcon icon={faDatabase} />
          </div>
          <div className="floating-icon icon-3">
            <FontAwesomeIcon icon={faServer} />
          </div>
          <div className="floating-icon icon-4">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <div className="floating-icon icon-5">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="floating-icon icon-6">
            <FontAwesomeIcon icon={faProjectDiagram} />
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="decorative-elements">
          <div className="line-element line-1"></div>
          <div className="line-element line-2"></div>
          <div className="dot-element dot-1"></div>
          <div className="dot-element dot-2"></div>
          <div className="dot-element dot-3"></div>
          <div className="circle-element circle-1"></div>
          <div className="circle-element circle-2"></div>
        </div>
      </section>

      {/* Statistics Section - Moved just below hero section */}
      <section className={`stats-section ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Industry Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`projects-section ${isVisible ? 'visible' : ''}`} ref={projectsRef}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Project Expertise</h2>
            <p className="section-subtitle">
              Some of the major assignments completed by our team
            </p>
          </div>

          <div className="credentials-tabs">
            <div className="tabs-container">
              {credentialCards.map((card) => (
                <div
                  key={card.id}
                  className={`tab ${activeCard === card.id ? 'active' : ''}`}
                  onMouseEnter={() => handleTabHover(card.id)}
                  style={{ 
                    '--tab-color': card.color,
                    '--tab-shadow-color': `${card.color}40`
                  }}
                >
                  <div className="tab-icon">
                    <FontAwesomeIcon icon={card.id === 1 ? faBuilding : 
                                         card.id === 2 ? faChartLine : 
                                         card.id === 3 ? faClock :
                                         faClipboardCheck} />
                  </div>
                  <h3 className="tab-title">{card.title}</h3>
                </div>
              ))}
            </div>

            <div className="tab-content">
              {activeCard === 1 && (
                <div className="content-panel active" style={{ '--panel-color': panelColor }}>
                  <h2 className="panel-title" data-tab={activeTabLine}>{credentialCards[0].title}</h2>
                  <div className="panel-content">
                    <ul className="project-list">
                      {credentialCards[0].projects.map((project, index) => (
                        <li key={index} className="project-item">
                          <div className="check-icon">
                            {getCompanyLogo(project) ? 
                              <img src={getCompanyLogo(project)} alt="Company Logo" className="company-logo" /> : 
                              <FontAwesomeIcon icon={faBuilding} />
                            }
                          </div>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeCard === 2 && (
                <div className="content-panel active" style={{ '--panel-color': panelColor }}>
                  <h2 className="panel-title" data-tab={activeTabLine}>{credentialCards[1].title}</h2>
                  <div className="panel-content">
                    <p className="panel-description">{credentialCards[1].description}</p>
                    <h3 className="company-heading">{credentialCards[1].companyHeading}</h3>
                    <ul className="project-list">
                      {credentialCards[1].companies.map((company, index) => (
                        <li key={index} className="project-item">
                          <div className="check-icon">
                            {getCompanyLogo(company) ? 
                              <img src={getCompanyLogo(company)} alt="Company Logo" className="company-logo" /> : 
                              <FontAwesomeIcon icon={faBuilding} />
                            }
                          </div>
                          <span>{company}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="other-companies">
                      {credentialCards[1].otherProjects.map((project, index) => (
                        <div key={index} className="other-company-item">
                          <div className="company-icon">
                            {getCompanyLogo(project) ? 
                              <img src={getCompanyLogo(project)} alt="Company Logo" className="company-logo" /> : 
                              <FontAwesomeIcon icon={faBuilding} />
                            }
                          </div>
                          <p>{project}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeCard === 3 && (
                <div className="content-panel active" style={{ '--panel-color': panelColor }}>
                  <h2 className="panel-title" data-tab={activeTabLine}>{credentialCards[2].title}</h2>
                  <div className="panel-content">
                    <ul className="project-list">
                      {credentialCards[2].projects.map((project, index) => (
                        <li key={index} className="project-item">
                          <div className="check-icon">
                            {getCompanyLogo(project) ? 
                              <img src={getCompanyLogo(project)} alt="Company Logo" className="company-logo" /> : 
                              <FontAwesomeIcon icon={faBuilding} />
                            }
                          </div>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeCard === 4 && (
                <div className="content-panel active" style={{ '--panel-color': panelColor }}>
                  <h2 className="panel-title" data-tab={activeTabLine}>{credentialCards[3].title}</h2>
                  <div className="panel-content">
                    <ul className="project-list">
                      {credentialCards[3].projects.map((project, index) => (
                        <li key={index} className="project-item">
                          <div className="check-icon">
                            {getCompanyLogo(project) ? 
                              <img src={getCompanyLogo(project)} alt="Company Logo" className="company-logo" /> : 
                              <FontAwesomeIcon icon={faBuilding} />
                            }
                          </div>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Moved to be second */}
      <section className={`industries-section ${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              We offer services to clients operating in a broad spectrum of industries
            </p>
          </div>
          <div className="industries-grid">
            {/* First Row */}
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h3>Steel</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-oil-can"></i>
              </div>
              <h3>Oil & Gas</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Energy</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-hard-hat"></i>
              </div>
              <h3>Construction</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>Fertilizer</h3>
            </div>
            
            {/* Second Row */}
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-scroll"></i>
              </div>
              <h3>Paper</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-cubes"></i>
              </div>
              <h3>Cement</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-cookie"></i>
              </div>
              <h3>Sugar</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-car"></i>
              </div>
              <h3>Automobiles</h3>
            </div>
            <div className="industry-card">
              <div className="industry-icon">
                <i className="fas fa-shopping-basket"></i>
              </div>
              <h3>FMCG</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Navigation - Next Page CTA */}
      <NextPageCTA 
        title="Get In Touch" 
        description="Ready to start your project? Reach out to our team for personalized solutions and expert consultation tailored to your specific needs."
        nextPage={{
          path: "/contact",
          label: "Contact Us Now"
        }}
        headingText="LAST STEP OF OUR JOURNEY"
      />
      <Footer />
    </div>
  );
};

export default Credentials; 