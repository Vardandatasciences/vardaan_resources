import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer';
import { 
  faDatabase, faBrain, faBalanceScale, faSearchDollar, 
  faChartLine, faBuilding, faClipboardCheck, faFileInvoiceDollar,
  faTools, faProjectDiagram, faUsers, faMapMarkedAlt,
  faLightbulb, faAngleRight, faTimes
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [expandedCards, setExpandedCards] = useState([]);
  
  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .hero-title, .hero-subtitle, .section-title, .section-description').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.service-card, .hero-title, .hero-subtitle, .section-title, .section-description').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const toggleExpandCard = (index, e) => {
    e.stopPropagation();
    
    // If clicking the same card that's already expanded, collapse it
    if (expandedCards.includes(index)) {
      setExpandedCards([]);
    } else {
      // Otherwise, collapse any existing expanded card and expand the clicked one
      setExpandedCards([index]);
    }
  };

  const getDetailedContent = (index) => {
    switch(index) {
      case 0:
        return (
          <>
            <p><b>VRPL provides assistance to companies in identifying and mitigating risks in the operational performance of the company under following aspects:</b></p>
            <ul>
              <li>Evaluation and Selection of assets</li>
              <li>Performance improvement</li>
              <li>Quality Management Systems & Operation Management Studies</li>
              <li>International Quality Certification</li>
              <li>Regulatory compliances</li>
              <li>Investment proposals</li>
              <li>Technical due diligence</li>
              <li>Financial due diligence</li>
            </ul>
            <p><b>Commercial Aspects:</b></p>
            <ul>
              <li>Engineering and Risk assessment</li>
              <li>Technical Assessment of Useful Life of Assets and Residual Value</li>
              <li>Inspection services & Third party inspection services</li>
              <li>Review of material test reports Mechanical tests</li>
              <li>Welder's performance qualifications</li>
              <li>NDE and performing visual inspections</li>
              <li>Verification of shipping quantities including proper packing & marking</li>
              <li>Selection of specialized manpower and training</li>
            </ul>
          </>
        );
      case 1:
        return (
          <>
            <p>Tangible assets with long life (which include Property, Plant & Equipment) provide economic benefits to an enterprise for a period greater than that covered by current year's financial statements. Accordingly, these assets must be Capitalized rather than immediately expensed and their costs must be allocated over the expected periods of benefit for the reporting entity.</p>
            <div>
              <b>The steps involved in Capitalization include:</b>
              <h5><strong><u>Technical Aspects:</u></strong></h5>
              <ul>
                <li>Complete understanding of:</li>
                <ul>
                  <li>&nbsp; - Products/ by-products and the key inputs.</li>
                  <li>&nbsp; - Process & Process flow.</li>
                  <li>&nbsp; - Capacity of the plant.</li>
                  <li>&nbsp; - Configuration of various units of the plant.</li>
                  <li>&nbsp; - Operational aspects of various units.</li>
                </ul>
                <li>Study of Engineering drawings of each unit and confirm the bill of quantity.</li>
                <li>Confirm that all items of each unit have been physically installed.</li>
                <li>Preparation of unit-wise List of Items indicating Source of Supply, Major Technical Specifications, Quantities etc.</li>
                <li>Identifying the Components as per Sch II of the Companies Act 2013 for Useful Life and Residual Value.</li>
              </ul>
              <h5><strong><u>Commercial Aspects:</u></strong></h5>
              <ul>
                <li>Review of Purchase Orders, Contracts & Agreements to identify item-wise costs.</li>
                <li>Review of commercial files.</li>
                <li>Categorization of line items in the commercial file (Asset- wise & unit-wise).</li>
                <li>Identifying all direct costs such as Supply Cost, License Fees, Consultancy Charges, Taxes & Duties etc.</li>
                <li>Componentization of items which have a substantial value and different useful life.</li>
                <li>Preparation of Fixed Assets Register with Tag Nos and all the above details.</li>
              </ul>
            </div>
          </>
        );
      case 2:
        return (
          <ul>
            <li>Site Visit for Physical Observation.</li>
            <li>Selection of appropriate Valuation Approach (namely: Market Approach/ Cost Approach/ Income Approach).</li>
            <li>Obtain Replacement Cost New (RCN) or Historical Cost and Commissioning Date.</li>
            <li>Consider factors for Obsolescence (Physical/ Technical/ Economic).</li>
          </ul>
        );
      case 3:
        return (
          <ul>
            <li>Site visit for Physical Observation.</li>
            <li>Verification of all Assets and classifying as:<br />
              - Available/ Partly Available/ Discarded/ Transferred to other Units etc.</li>
            <li>Reconciliation of Assets with Customer's Fixed Assets Register (FAR).</li>
            <li>Supply of Metallic/ Paper Tags based on Customer Requirement.</li>
          </ul>
        );
      case 4:
        return (
          <ul>
            <li>Site Visit for Physical Inspection.</li>
            <li>Study of Maintenance Philosophy/ Production Records/ Product Quality Records/ Statistical Evaluation.</li>
            <li>Adherence to relevant Standards and Normal Industry Practices.</li>
          </ul>
        );
      case 5:
        return (
          <ul>
            <li>Every asset, financial as well as real, has a value. The key to successful investing in and managing these assets lies in understanding not only what the value is but also the source of the value.</li>
            <li>Any asset can be valued, but some assets are easier to value than others and the details of valuation will vary from case to case.</li>
            <li>Valuation of a real estate property requires different information and follows a different format than the valuation of a publicly traded stock.</li>
            <li>VRPL has carried out valuations of several businesses and assets.</li>
            <li>Our panel of industry experts having wealth of working experience in industries ranging from Steel, Power, Construction, Paper, Shipyards, Automobile etc has carried out independent studies on behalf of various clients.</li>
          </ul>
        );
      case 6:
        return (
          <ul>
            <li>Impairment requirements under IFRS are more stringent than many local GAAPS, with goodwill being tested annually for impairment.</li>
            <li>Intangible assets with indefinite lives are also tested annually for impairment. The disclosures in relation to impairment are extensive due to the number and sensitivity of estimates and assumptions used by the management as the basis for their review.</li>
            <li>AS-28 deals with the impairment of assets i.e. the carrying amount of the assets should not be more than the recoverable amount of the assets. This calculation must be done at the end of each financial year.</li>
            <li>VRPL has carried out several impairment studies on behalf of its clients engaged in the business of Steel, Power, Construction, Ship building, Paper, Automobile components etc.</li>
            <li>VRPL has the requisite expertise to carry out independent study in identifying the Cash Generating Units, verify the projected cash flows and to issue a report on the impairment of the asset (s).</li>
          </ul>
        );
      case 7:
        return (
          <>
            <p><b>The basket of our Technical and Financial Consultancy Services include the following:</b></p>
            <ul>
              <li>Providing assistance to existing and new units in project report preparation, financial structuring, financial analysis & fund raising (Debt, Equity & Hybrid).</li>
              <li>Drawing up of implementation schedule.</li>
              <li>Assistance during trial run of the plant.</li>
              <li>Complete Support services in turn-around management of business units or divisions.</li>
              <li>Performance and profitability improvement.</li>
              <li>Restructuring of operations.</li>
              <li>Management Capabilities for project management.</li>
              <li>Relocating operations and change management.</li>
              <li>Due diligence, risk assessment and risk management.</li>
            </ul>
          </>
        );
      case 8:
        return (
          <ul>
            <li>Only one out of fifty business ideas may be commercially viable. A business feasibility study is an effective way to safeguard against wastage of further investment or resources.</li>
            <li>If a project is seen to be feasible from the results of the study, the next logical step is to proceed with the full business plan. The research and information uncovered in the feasibility study will support the business planning stage and reduce the research time. The cost of the business plan is also reduced.</li>
            <li>A thorough viability analysis provides an abundance of information that is also necessary for the business plan. A feasibility study should contain clear supporting evidence for its recommendations. The strength of the recommendations can be weighed against the study of ability to demonstrate the continuity that exists between the research analysis and the proposed business model.</li>
            <li>A Business Feasibility Study is heavily dependent on the market research and analysis.</li>
            <li>VRPL can undertake Technical Feasibility study for potential investors and stakeholders.</li>
          </ul>
        );
      case 9:
        return (
          <ul>
            <li>Services are offered to the clients in the areas of Preparation of Project brief, Project Programming including defining Milestones and Deliverables, Procurement Strategy, Selection of Vendors/ Suppliers/ Contractors, Project Time Management, Materials Management, Construction/ Installation Supervision, Site Staffing, Site Administration, Monitor Project Construction programs, Quality Control, Reporting, Commissioning & Close Out.</li>
          </ul>
        );
      case 10:
        return (
          <ul>
            <li>VRPL provides professional engineering consultancy services to cover various works related to any project.</li>
            <li>The services offered include Preparation of Tender Documents in Consultation with the owner, Attending Pre-bid Meetings, Bid Evaluation and Contract Finalization, Review Engineering, Inspection Services, Project Management, Field Services, Engineering Services for Testing, Commissioning and Performance Tests, Project Closure, Other components of Lender's/ Owner's Engineer's scope.</li>
            <li>VRPL has a team of senior management who can assist the Lenders/ Owner in all aspects of setting up the plant.</li>
          </ul>
        );
      case 11:
        return (
          <>
            <p><b>VRPL provides assistance to companies in identifying and mitigating risks in the operational performance of the company under following aspects:</b></p>
            <ul>
              <li>Evaluation and Selection of assets</li>
              <li>Performance improvement</li>
              <li>Quality Management Systems & Operation Management Studies</li>
              <li>International Quality Certification</li>
              <li>Regulatory compliances</li>
              <li>Investment proposals</li>
              <li>Technical due diligence</li>
              <li>Financial due diligence</li>
              <li>Engineering and Risk assessment</li>
              <li>Technical Assessment of Useful Life of Assets and Residual Value</li>
              <li>Inspection services & Third party inspection services</li>
              <li>Review of material test reports Mechanical tests</li>
              <li>Welder's performance qualifications</li>
              <li>NDE and performing visual inspections</li>
              <li>Verification of shipping quantities including proper packing & marking</li>
              <li>Selection of specialized manpower and training</li>
            </ul>
          </>
        );
      case 12:
        return (
          <ul>
            <li>VRPL provides site visits for specific requirements of the client such as for Physical Audit, Componentization, Business Assessment etc.</li>
          </ul>
        );
      default:
        return null;
    }
  };

  const serviceData = [
    // {
    //   title: "Componentization, Useful Life & Residual Value",
    //   icon: faDatabase,
    //   color: "gradient-purple",
    //   description: "Expert assessment of asset components to determine appropriate useful life and residual values in compliance with Schedule II of Companies Act, 2013."
    // },
    {
      title: "Capitalization of Property, Plant and Equipment",
      icon: faBuilding,
      color: "gradient-blue",
      description: "Comprehensive capitalization services for PPE assets with technical and commercial assessment to ensure proper asset recognition and valuation."
    },
    {
      title: "Valuation of Fixed Assets",
      icon: faSearchDollar,
      color: "gradient-green",
      description: "Professional valuation services using market, cost, and income approaches to determine accurate asset values with consideration for various obsolescence factors."
    },
    {
      title: "Physical Verification of Assets and Inventory",
      icon: faClipboardCheck,
      color: "gradient-purple",
      description: "Thorough on-site verification of assets with detailed reconciliation against existing fixed asset registers and optional tagging services."
    },
    {
      title: "Technical Assessment of Balance Useful Life",
      icon: faBalanceScale,
      color: "gradient-orange",
      description: "Expert evaluation of remaining useful life through physical inspection, maintenance records review, and statistical analysis per industry standards."
    },
    {
      title: "Business and Plant Valuations",
      icon: faBuilding,
      color: "gradient-blue",
      description: "Comprehensive business valuation services by industry experts for various sectors including Steel, Power, Construction, and Automobile."
    },
    {
      title: "Asset Impairment Studies",
      icon: faChartLine,
      color: "gradient-green",
      description: "Detailed impairment analysis in compliance with IFRS and AS-28 standards to ensure accurate representation of asset value."
    },
    {
      title: "Technical and Financial Consultancy",
      icon: faTools,
      color: "gradient-orange",
      description: "Specialized consultancy services for project preparation, implementation, performance improvement, and risk management."
    },
    {
      title: "Technical and Financial Feasibility Studies",
      icon: faFileInvoiceDollar,
      color: "gradient-purple",
      description: "Thorough feasibility analysis to evaluate commercial viability of business ideas before proceeding with full business plans."
    },
    {
      title: "Project Monitoring",
      icon: faProjectDiagram,
      color: "gradient-blue",
      description: "End-to-end project monitoring from planning through commissioning including vendor selection, quality control, and timeline management."
    },
    {
      title: "Lender's/Owner's Engineers",
      icon: faUsers,
      color: "gradient-green",
      description: "Professional engineering consultancy covering tender preparation, bid evaluation, project management, and performance testing."
    },
    {
      title: "Management Services",
      icon: faBrain,
      color: "gradient-orange",
      description: "Comprehensive management services including performance improvement, quality management, regulatory compliance, and technical assessments."
    },
    {
      title: "Site Visits and Inspection Services",
      icon: faMapMarkedAlt,
      color: "gradient-purple",
      description: "Comprehensive site visits and inspection services to ensure accurate asset valuation and compliance with industry standards."
    }
  ];

  // Add this function to organize cards into rows
  const organizeIntoRows = (items, columnsPerRow = 3) => {
    const rows = [];
    for (let i = 0; i < items.length; i += columnsPerRow) {
      rows.push(items.slice(i, i + columnsPerRow));
    }
    return rows;
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className={`services-hero ${isVisible ? 'visible' : ''}`}>
        <div className="hero-backdrop"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">PROFESSIONAL SERVICES</h1>
            <div className="hero-subtitle">
              <div className="light-bulb-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h2>Why Choose Our Services</h2>
            </div>
            <p className="hero-text">With over a decade of industry experience and a team of certified experts, we deliver specialized consulting and valuation services tailored to your business requirements.
              
            </p>
            
            {/* <p className="hero-text">We are a team of experienced professionals who are dedicated to providing the best possible services to our clients.</p> */}
          </div>
        </div>
      </section>

      {/* Main Services Content */}
      <section id="services-content" className={`${isVisible ? 'visible' : ''}`}>
        <div className="container">
          <div className="section-header">
            <div className="title-container">
              <div className="title-icon">
                <FontAwesomeIcon icon={faLightbulb} className="pulse-icon" />
              </div>
              <h3 className="section-title">OUR SERVICES</h3>
              <div className="section-description">
                <p>Comprehensive professional services designed to maximize asset valuation and management efficiency</p>
                <p>We are a team of experienced professionals who are dedicated to providing the best possible services to our clients.</p>
              </div>
            </div>
          </div>
          
          {/* Add a separate section for the componentization content */}
          <div className="service-intro-content">
            <h2 className="intro-heading">Componentization, Estimation of Useful Life & Residual Value</h2>
            
            <div className="intro-section">
              <h3 className="intro-subheading">Requirement under Companies Act, 2013:</h3>
              <p>Schedule II to the 2013 Act enshrines within itself the principle for recognizing depreciation on the assets over their useful lives and provides as follows:</p>
              <p>Part C of the Schedule II to the 2013 Act lays down indicative useful lives of certain tangible assets. Useful life of tangible assets should not be ordinarily different from the useful life specified in Part C of the Schedule II to the 2013 Act and the residual value should not be more than 5% of the original cost of the tangible assets.</p>
              <p>The 2013 Act also permits companies to depreciate assets over their useful lives as per Part C of the Schedule II to the 2013 Act. Where a company adopts a different useful life or uses a different residual value as prescribed in the Act, the company is required to disclose such differences and provide justification in the financial statements that is duly supported by a technical advice. The company should involve technical experts to determine the useful life of the asset and maintain adequate details about the technical assessment of the useful lives of the tangible assets.</p>
            </div>
            
            <div className="intro-section">
              <h3 className="intro-subheading">Componentization</h3>
              <p>The Schedule II to the 2013 Act requires that useful life and depreciation for significant components of an asset should be determined separately. A component is defined as a part of an asset which has a significant value and a different useful life. Identification of components require a careful assessment of the facts and circumstances. Ministry of corporate affairs (MCA) has made the component approach mandatory for financial year commencing on or after 1 April 2015.</p>
            </div>
          </div>
          
          <div className="services-grid">
            {organizeIntoRows(serviceData, 3).map((row, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {row.map((service, colIndex) => {
                  const index = rowIndex * 3 + colIndex;
                  return (
                    <div key={`service-${index}`} className="service-card-container">
                      <div 
                        className={`service-card ${activeCard === index ? 'active' : ''} ${service.color}`}
                        onClick={() => toggleCard(index)}
                      >
                        <div className="card-content">
                          <div className="card-front">
                            <div className="service-icon">
                              <FontAwesomeIcon icon={service.icon} />
                            </div>
                            <h4>{service.title}</h4>
                          </div>
                          <div className="card-back">
                            <p>{service.description}</p>
                            <button 
                              className="show-more-btn"
                              onClick={(e) => toggleExpandCard(index, e)}
                            >
                              {expandedCards.includes(index) ? "Hide Details" : "Show Details"} <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
                {/* Add expanded details at the end of each row */}
                {row.some((_service, colIndex) => {
                  const index = rowIndex * 3 + colIndex;
                  return expandedCards.includes(index);
                }) && (
                  <div className="service-details-expanded">
                    <div className="expanded-content">
                      {getDetailedContent(expandedCards.find(index => 
                        Math.floor(index / 3) === rowIndex
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Services; 