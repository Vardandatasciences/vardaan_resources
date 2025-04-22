import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer';
import NextPageCTA from '../../components/NextPageCTA';
import BannerLogo from '../../components/BannerLogo';
import { 
  faDatabase, faBrain, faBalanceScale, faSearchDollar, 
  faChartLine, faBuilding, faClipboardCheck, faFileInvoiceDollar,
  faTools, faProjectDiagram, faUsers, faMapMarkedAlt,
  faAngleRight, faTimes, faHandPointer, faInfoCircle,
  faIndustry, faCity
} from '@fortawesome/free-solid-svg-icons';

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCards, setExpandedCards] = useState([]);
  const [animationClass, setAnimationClass] = useState('');
  
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

  const toggleExpandCard = (index, e) => {
    e.stopPropagation();
    e.preventDefault();
    
    console.log("Toggle expand card for index:", index);
    
    // First, set animation class to out if there's an expanded card
    if (expandedCards.length > 0) {
      setAnimationClass('animate-out');
      
      // Wait for animation to complete before changing the expanded state
      setTimeout(() => {
        // If clicking the same card that's already expanded, collapse it
        if (expandedCards.includes(index)) {
          console.log("Collapsing card:", index);
          setExpandedCards([]);
        } else {
          // Otherwise, collapse any existing expanded card and expand the clicked one
          console.log("Switching to card:", index);
          setExpandedCards([index]);
          setAnimationClass('animate-in');
        }
      }, 300); // Match this timing with CSS animation duration
    } else {
      // If no card is expanded, just expand and animate in
      console.log("Expanding card:", index);
      setExpandedCards([index]);
      setAnimationClass('animate-in');
    }
  };

  const closeExpandedCard = (e) => {
    e.stopPropagation();
    setAnimationClass('animate-out');
    
    setTimeout(() => {
      setExpandedCards([]);
    }, 300);
  };

  const renderFormattedContent = (index) => {
    const content = getDetailedContent(index);
    
    // For the first service (Capitalization of Property, Plant and Equipment)
    if (index === 0) {
      return (
        <>
          <div className="service-expanded-title" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '20px', 
            paddingBottom: '15px', 
            borderBottom: '1px solid rgba(0, 0, 0, 0.05)' 
          }}>
            <div className="service-icon" style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '10px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginRight: '15px', 
              background: 'linear-gradient(135deg, #00c2cb, #2575fc)', 
              color: 'white', 
              fontSize: '20px', 
              boxShadow: '0 5px 15px rgba(0, 194, 203, 0.2)' 
            }}>
              <FontAwesomeIcon icon={serviceData[index].icon} />
            </div>
            <h4 style={{ 
              margin: '0', 
              fontSize: '1.8rem', 
              fontWeight: '600', 
              color: '#333', 
              flex: '1' 
            }}>{serviceData[index].title}</h4>
            <button className="close-expanded" onClick={closeExpandedCard} style={{ 
              position: 'absolute', 
              top: '20px', 
              right: '20px', 
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              background: 'white', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer', 
              color: '#666', 
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
              transition: 'all 0.3s ease', 
              border: 'none', 
              zIndex: '5' 
            }}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          
          <p style={{ marginBottom: '25px', color: '#555', lineHeight: '1.8' }}>{content.intro}</p>
          
          <div className="aspects-container" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px', 
            marginBottom: '30px' 
          }}>
            <div className="aspect-section technical-aspects" style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '15px', 
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', 
              borderLeft: '4px solid #6a11cb' 
            }}>
              <h5 style={{ marginTop: '0' }}><strong>Technical Aspects:</strong></h5>
              <ul style={{ 
                paddingLeft: '20px', 
                listStyleType: 'none' 
              }}>
                {content.technical.map((item, idx) => (
                  <li key={`tech-${idx}`} style={{ 
                    position: 'relative', 
                    padding: '8px 0 8px 30px', 
                    marginBottom: '10px', 
                    color: '#555', 
                    background: 'rgba(255, 255, 255, 0.7)', 
                    borderRadius: '10px', 
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.03)', 
                    transition: 'all 0.3s ease', 
                    borderLeft: '3px solid #6a11cb',
                    position: 'relative'
                  }}>
                    <span style={{
                      content: '✓',
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'white',
                      fontWeight: 'bold',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      background: 'linear-gradient(135deg, #6a11cb, #2575fc)'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="aspect-section commercial-aspects" style={{ 
              background: 'white', 
              padding: '20px', 
              borderRadius: '15px', 
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)', 
              borderLeft: '4px solid #00c2cb' 
            }}>
              <h5 style={{ marginTop: '0' }}><strong>Commercial Aspects:</strong></h5>
              <ul style={{ 
                paddingLeft: '20px', 
                listStyleType: 'none' 
              }}>
                {content.commercial.map((item, idx) => (
                  <li key={`comm-${idx}`} style={{ 
                    position: 'relative', 
                    padding: '8px 0 8px 30px', 
                    marginBottom: '10px', 
                    color: '#555', 
                    background: 'rgba(255, 255, 255, 0.7)', 
                    borderRadius: '10px', 
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.03)', 
                    transition: 'all 0.3s ease', 
                    borderLeft: '3px solid #00c2cb',
                    position: 'relative'
                  }}>
                    <span style={{
                      content: '✓',
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'white',
                      fontWeight: 'bold',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      background: 'linear-gradient(135deg, #00c2cb, #2575fc)'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      );
    }
    
    // For all other services
    return (
      <>
        <div className="service-expanded-title" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px', 
          paddingBottom: '15px', 
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)' 
        }}>
          <div className="service-icon" style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '10px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginRight: '15px', 
            background: 'linear-gradient(135deg, #00c2cb, #2575fc)', 
            color: 'white', 
            fontSize: '20px', 
            boxShadow: '0 5px 15px rgba(0, 194, 203, 0.2)' 
          }}>
            <FontAwesomeIcon icon={serviceData[index].icon} />
          </div>
          <h4 style={{ 
            margin: '0', 
            fontSize: '1.8rem', 
            fontWeight: '600', 
            color: '#333', 
            flex: '1' 
          }}>{serviceData[index].title}</h4>
          <button className="close-expanded" onClick={closeExpandedCard} style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '20px', 
            width: '36px', 
            height: '36px', 
            borderRadius: '50%', 
            background: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            cursor: 'pointer', 
            color: '#666', 
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
            transition: 'all 0.3s ease', 
            border: 'none', 
            zIndex: '5' 
          }}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        
        {content.intro && <p style={{ marginBottom: '25px', color: '#555', lineHeight: '1.8' }}>{content.intro}</p>}
        
        {content.list && (
          <ul style={{ 
            paddingLeft: '20px', 
            listStyleType: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {content.list.map((item, idx) => (
              <li key={`list-${idx}`} style={{ 
                position: 'relative', 
                padding: '12px 15px 12px 35px', 
                marginBottom: '10px', 
                color: '#555', 
                background: 'rgba(255, 255, 255, 0.7)', 
                borderRadius: '10px', 
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.03)', 
                transition: 'all 0.3s ease', 
                borderLeft: '3px solid #00c2cb',
                position: 'relative'
              }}>
                <span style={{
                  content: '✓',
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  fontWeight: 'bold',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  background: 'linear-gradient(135deg, #00c2cb, #2575fc)'
                }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </>
    );
  };

  const getDetailedContent = (index) => {
    switch(index) {
      case 'compCard1':
        return {
          intro: "Schedule II to the 2013 Act enshrines within itself the principle for recognizing depreciation on the assets over their useful lives and provides as follows:",
          list: [
            "Part C of the Schedule II to the 2013 Act lays down indicative useful lives of certain tangible assets.",
            "The principle focuses on systematic allocation of the depreciable amount of an asset over its useful life."
          ]
        };
      case 'compCard2':
        return {
          intro: "Key guidelines regarding useful life and residual value under the Companies Act, 2013:",
          list: [
            "Useful life of tangible assets should not be ordinarily different from the useful life specified in Part C of the Schedule II to the 2013 Act.",
            "The residual value should not be more than 5% of the original cost of the tangible assets.",
            "Proper documentation must be maintained for all assessments of useful life and residual value."
          ]
        };
      case 'compCard3':
        return {
          intro: "Technical assessment requirements for companies adopting different useful life or residual values:",
          list: [
            "Where a company adopts a different useful life or uses a different residual value as prescribed in the Act, the company is required to disclose such differences.",
            "Justification must be provided in the financial statements that is duly supported by a technical advice.",
            "The company should involve technical experts to determine the useful life of the asset.",
            "Adequate details about the technical assessment of the useful lives of the tangible assets must be maintained."
          ]
        };
      case 'compCard4':
        return {
          intro: "Component Definition as per Schedule II to the 2013 Act:",
          list: [
            "The Schedule II to the 2013 Act requires that useful life and depreciation for significant components of an asset should be determined separately.",
            "A component is defined as a part of an asset which has a significant value and a different useful life.",
            "This approach provides a more accurate representation of asset depreciation."
          ]
        };
      case 'compCard5':
        return {
          intro: "Assessment of components involves several key considerations:",
          list: [
            "Identification of components requires a careful assessment of the facts and circumstances.",
            "Technical evaluation is necessary to determine which parts of an asset constitute significant components.",
            "Assessment should consider both the value component and its differing useful life."
          ]
        };
      case 'compCard6':
        return {
          intro: "Regulatory requirements for componentization:",
          list: [
            "Ministry of corporate affairs (MCA) has made the component approach mandatory for financial year commencing on or after 1 April 2015.",
            "This regulatory requirement aims to improve financial reporting accuracy.",
            "Companies must establish systems and processes to track components and their depreciation separately."
          ]
        };
      case 0:
        return {
          intro: "Tangible assets with long life (which include Property, Plant & Equipment) provide economic benefits to an enterprise for a period greater than that covered by current year's financial statements. Accordingly, these assets must be Capitalized rather than immediately expensed and their costs must be allocated over the expected periods of benefit for the reporting entity.VRPL carries Capitalization of the as per IFRS or as per Indian GAAP. VRPL Team goes through the records PPE and determines the amounts at which to initially record the acquisition of such assets and the appropriate methods by which to allocate the assets costs to future periods",
          technical: [
            "Complete understanding of:Products/by-products and the key inputs.",
            "Process & Process flow.",
            "Capacity of the plant.",
            "Configuration of various units of the plant.",
            "Operational aspects of various units.",
            "Study of Engineering drawings of each unit and confirm the bill of quantity.",
            "Confirm that the bill of quantity of items of each unit have been physically installed.",
            "Preparation of unit-wise List of Items indicating Source of Supply, Major Technical Specifications, Quantities etc.",
            "Identifying the item from Sch II of the Companies Act 2013 for Useful Life and Residual Value."
          ],
          commercial: [
            "Review of Purchase Orders, Contracts & Agreements to identify item-wise costs.",
            "Review of commercial files.",
            "Categorization of line items in the commercial file (Asset- wise & unit-wise).",
            "Identifying all direct costs such as Supply Cost, License Fees, Consultancy Charges, Taxes & Duties etc.",
            "Componentization of items which have a substantial value and different useful life.",
            "Preparation of Fixed Assets Register with Tag Nos and all the above details."
          ]
        };
      case 1:
        return {
          intro: "Our valuation of fixed assets follows a comprehensive approach to determine accurate asset values.",
          list: [
            "Site Visit for Physical Observation.",
            "Selection of appropriate Valuation Approach, namely Market Approach, Cost Approach & Income Approach).",
            "Obtain historical costs, if available.",
            "Consider factors for Obsolescence (Physical/ Technical/ Economic)."
          ]
        };
      case 2:
        return {
          intro: "Our verification services ensure accurate inventory and asset records through thorough inspection methods.",
          list: [
            "Site visit for Physical Observation.",
            "Verification of both types of inventories, namely Project Inventory and store Inventory",
            "Reconciliation of Assets with Customer's Fixed Assets Register (FAR).",
            "Tagging of Assets based on Customer Requirement"
          ]
        };
      case 3:
        return {
          intro: "We conduct comprehensive technical assessments to determine the balance useful life of assets through multiple evaluation methods.",
          list: [
            "Site Visit for Physical Inspection.",
            "Study of Maintenance Records",
            "Study of Production Records",
            "Statistical Evaluation"
          ]
        };
      case 4:
        return {
          intro: "Every asset, financial as well as real, has a value. The key to successful investing in and managing these assets lies in understanding not only what the value is but also the source of the value.",
          list: [
            "Any asset can be valued, but some assets are easier to value than others and the details of valuation will vary from case to case.",
            "Valuation of a real estate property requires different information and follows a different format than the valuation of a publicly traded stock.",
            "VRPL has carried out valuations of several businesses and assets.",
            "Our panel of industry experts having wealth of working experience in industries ranging from Steel, Power, Construction, Paper, Shipyards, Automobile etc has carried out independent studies on behalf of various clients."
          ]
        };
      case 5:
        return {
          intro: "Impairment requirements under IFRS are more stringent than many local GAAPS, with goodwill being tested annually for impairment.",
          list: [
            "Intangible assets with indefinite lives are also tested annually for impairment. The disclosures in relation to impairment are extensive due to the number and sensitivity of estimates and assumptions used by the management as the basis for their review.",
            "AS-28 deals with the impairment of assets i.e. the carrying amount of the assets should not be more than the recoverable amount of the assets. This calculation must be done at the end of each financial year.",
            "VRPL has carried out several impairment studies on behalf of its clients engaged in the business of Steel, Power, Construction, Ship building, Paper, Automobile components etc.",
            "VRPL has the requisite expertise to carry out independent study in identifying the Cash Generating Units, verify the projected cash flows and to issue a report on the impairment of the asset (s)."
          ]
        };
      case 6:
        return {
          intro: "The basket of our Technical and Financial Consultancy Services include the following:",
          list: [
            "Providing assistance to existing and new units in project report preparation, financial structuring, financial analysis & fund raising (Debt, Equity & Hybrid).",
            "Drawing up of implementation schedule.",
            "Assistance during trial run of the plant.",
            "Complete Support services in turn-around management of business units or divisions.",
            "Performance and profitability improvement.",
            "Restructuring of operations.",
            "Management Capabilities for project management.",
            "Relocating operations and change management.",
            "Due diligence, risk assessment and risk management."
          ]
        };
      case 7:
        return {
          intro: "Only one out of fifty business ideas may be commercially viable. A business feasibility study is an effective way to safeguard against wastage of further investment or resources.",
          list: [
            "If a project is seen to be feasible from the results of the study, the next logical step is to proceed with the full business plan. The research and information uncovered in the feasibility study will support the business planning stage and reduce the research time. The cost of the business plan is also reduced.",
            "A thorough viability analysis provides an abundance of information that is also necessary for the business plan. A feasibility study should contain clear supporting evidence for its recommendations. The strength of the recommendations can be weighed against the study of ability to demonstrate the continuity that exists between the research analysis and the proposed business model.",
            "A Business Feasibility Study is heavily dependent on the market research and analysis.",
            "VRPL can undertake Technical Feasibility study for potential investors and stakeholders."
          ]
        };
      case 8:
        return {
          intro: "Our project monitoring services provide comprehensive oversight and management for your projects:",
          list: [
            "Services are offered to the clients in the areas of Preparation of Project brief, Project Programming including defining Milestones and Deliverables, Procurement Strategy, Selection of Vendors/ Suppliers/ Contractors, Project Time Management, Materials Management, Construction/ Installation Supervision, Site Staffing, Site Administration, Monitor Project Construction programs, Quality Control, Reporting, Commissioning & Close Out."
          ]
        };
      case 9:
        return {
          intro: "VRPL provides professional engineering consultancy services to cover various works related to any project.",
          list: [
            "The services offered include Preparation of Tender Documents in Consultation with the owner, Attending Pre-bid Meetings, Bid Evaluation and Contract Finalization, Review Engineering, Inspection Services, Project Management, Field Services, Engineering Services for Testing, Commissioning and Performance Tests, Project Closure, Other components of Lender's/ Owner's Engineer's scope.",
            "VRPL has a team of senior management who can assist the Lenders/ Owner in all aspects of setting up the plant."
          ]
        };
      case 10:
        return {
          intro: "VRPL provides assistance to companies in identifying and mitigating risks in the operational performance of the company under following aspects:",
          list: [
            "Evaluation and Selection of assets",
            "Performance improvement",
            "Quality Management Systems & Operation Management Studies",
            "International Quality Certification",
            "Regulatory compliances",
            "Investment proposals",
            "Technical due diligence",
            "Financial due diligence",
            "Engineering and Risk assessment",
            "Technical Assessment of Useful Life of Assets and Residual Value",
            "Inspection services & Third party inspection services",
            "Review of material test reports Mechanical tests",
            "Welder's performance qualifications",
            "NDE and performing visual inspections",
            "Verification of shipping quantities including proper packing & marking",
            "Selection of specialized manpower and training"
          ]
        };
      case 11:
        return {
          intro: "VRPL provides site visits for specific requirements of the client such as for Physical Audit, Componentization, Business Assessment etc.",
          list: [
            "Pre-audit and understanding the manufacturing/production capability and assessment of the overall strategic strength is carried out by companies before take over or purchase of specific assets of the company.",
            "In the present scenario of the industry where brown-field expansion is the norm for faster growth, plant visits help build a better understanding of the performance potential and the current challenges and deficits.",
            "Traditional reports rarely present an up-to-date, thorough picture of an operation's performance. Financial information tends to give an outdated picture of operational health: it will often reflect a plant's performance as it was a year or so ago.",
            "VRPL assists in carrying out such visits and inspection services for plants located within and outside India."
          ]
        };
      default:
        return null;
    }
  };

  const serviceData = [
    {
      title: "Capitalization of Property, Plant and Equipment",
      icon: faBuilding,
      color: "gradient-blue",
      description: "Comprehensive capitalization services for Property, Plant & Equipment assets that provide economic benefits to an enterprise for a period greater than that covered by current year's financial statements."
    },
    {
      title: "Valuation of Fixed Assets",
      icon: faSearchDollar,
      color: "gradient-green",
      description: "Site Visit for Physical Observation. Selection of appropriate Valuation Approach (Market Approach/ Cost Approach/ Income Approach)."
    },
    {
      title: "Physical Verification of Fixed Assets and Inventory",
      icon: faClipboardCheck,
      color: "gradient-purple",
      description: "Thorough on-site verification of assets with detailed reconciliation against existing fixed asset registers and optional tagging services."
    },
    {
      title: "Technical Assessment of Balance Useful Life",
      icon: faBalanceScale,
      color: "gradient-orange",
      description: "Site Visit for Physical Inspection. Study of Maintenance Philosophy/ Production Records/ Product Quality Records/ Statistical Evaluation."
    },
    {
      title: "Business and Plant Valuations",
      icon: faIndustry,
      color: "gradient-red",
      description: "Every asset, financial as well as real, has a value. The key to successful investing in and managing these assets lies in understanding not only what the value is but also the source of the value."
    },
    {
      title: "Asset Impairment Studies",
      icon: faChartLine,
      color: "gradient-teal",
      description: "Impairment requirements under IFRS are more stringent than many local GAAPS, with goodwill being tested annually for impairment."
    },
    {
      title: "Technical and Financial Consultancy",
      icon: faTools,
      color: "gradient-pink",
      description: "Providing assistance to existing and new units in project report preparation, financial structuring, financial analysis & fund raising (Debt, Equity & Hybrid)."
    },
    {
      title: "Technical and Financial Feasibility Studies",
      icon: faFileInvoiceDollar,
      color: "gradient-indigo",
      description: "Only one out of fifty business ideas may be commercially viable. A business feasibility study is an effective way to safeguard against wastage of further investment or resources."
    },
    {
      title: "Project Monitoring",
      icon: faProjectDiagram,
      color: "gradient-amber",
      description: "Services are offered to the clients in the areas of Preparation of Project brief, Project Programming including defining Milestones and Deliverables, Procurement Strategy."
    },
    {
      title: "Lender's/Owner's Engineers",
      icon: faUsers,
      color: "gradient-cyan",
      description: "VRPL provides professional engineering consultancy services to cover various works related to any project."
    },
    {
      title: "Management Services",
      icon: faBrain,
      color: "gradient-deepPurple",
      description: "VRPL provides assistance to companies in identifying and mitigating risks in the operational performance of the company under following aspects."
    },
    {
      title: "Site Visits and Inspection Services",
      icon: faMapMarkedAlt,
      color: "gradient-lime",
      description: "VRPL provides site visits for specific requirements of the client such as for Physical Audit, Componentization, Business Assessment etc."
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
        <BannerLogo />
        <div className="hero-backdrop"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">PROFESSIONAL SERVICES</h1>
            <div className="hero-subtitle">
              <h2>Why Choose Our Services</h2>
            </div>
            <p className="hero-text">
              With over a decade of industry experience and a team of certified experts, we deliver 
              specialized consulting and valuation services tailored to your business requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Content */}
      <section id="services-content" className={`${isVisible ? 'visible' : ''}`}>
        <div className="container">
          {/* Services Image Banner */}
          <div className="services-banner">
            <img src={require('../../assets/images/services.png')} alt="Professional Services" className="services-banner-img" />
          </div>
          
          {/* Componentization, Estimation of Useful Life & Residual Value */}
          <div className="section-header">
            <div className="title-container">
              <h3 className="section-title">Componentization, Estimation of Useful Life & Residual Value</h3>
            </div>
          </div>
          
          {/* Cards for Componentization, Estimation of Useful Life & Residual Value */}
          <div className="services-grid">
            <div className="service-card-container">
              <div 
                className={`service-card gradient-blue ${hoveredCard === 'compCard1' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCard('compCard1')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="click-here-indicator">
                  <FontAwesomeIcon icon={faHandPointer} />
                  <span>Hover here</span>
                </div>
                <div className="card-content">
                  <div className="card-front">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faBuilding} />
                    </div>
                    <h4>Requirement under Companies Act</h4>
                  </div>
                  <div className="card-back">
                    <p>Schedule II to the 2013 Act enshrines within itself the principle for recognizing depreciation on the assets over their useful lives.</p>
                    <p>Part C of the Schedule II to the 2013 Act lays down indicative useful lives of certain tangible assets.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card-container">
              <div 
                className={`service-card gradient-green ${hoveredCard === 'compCard2' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCard('compCard2')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="click-here-indicator">
                  <FontAwesomeIcon icon={faHandPointer} />
                  <span>Hover here</span>
                </div>
                <div className="card-content">
                  <div className="card-front">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faBalanceScale} />
                    </div>
                    <h4>Useful Life & Residual Value</h4>
                  </div>
                  <div className="card-back">
                    <p>Useful life of tangible assets should not be ordinarily different from the useful life specified in Part C of the Schedule II to the 2013 Act.</p>
                    <p>The residual value should not be more than 5% of the original cost of the tangible assets.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card-container">
              <div 
                className={`service-card gradient-purple ${hoveredCard === 'compCard3' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCard('compCard3')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="click-here-indicator">
                  <FontAwesomeIcon icon={faHandPointer} />
                  <span>Hover here</span>
                </div>
                <div className="card-content">
                  <div className="card-front">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faTools} />
                    </div>
                    <h4>Technical Assessment</h4>
                  </div>
                  <div className="card-back">
                    <p>Where a company adopts a different useful life, it is required to disclose such differences supported by technical advice.</p>
                    <p>The company should involve technical experts to determine the useful life of the asset and maintain adequate details about the assessment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Componentization Section */}
          <div className="section-header">
            <div className="title-container">
              <h3 className="section-title">Componentization</h3>
            </div>
          </div>
          
          {/* Cards for Componentization */}
          <div className="services-grid">
            <div className="service-card-container">
              <div 
                className={`service-card gradient-orange ${hoveredCard === 'compCard4' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCard('compCard4')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="click-here-indicator">
                  <FontAwesomeIcon icon={faHandPointer} />
                  <span>Hover here</span>
                </div>
                <div className="card-content">
                  <div className="card-front">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faProjectDiagram} />
                    </div>
                    <h4>Component Definition</h4>
                  </div>
                  <div className="card-back">
                    <p>A component is defined as a part of an asset which has a significant value and a different useful life.</p>
                    <p>The Schedule II to the 2013 Act requires that useful life and depreciation for significant components of an asset should be determined separately.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card-container">
              <div 
                className={`service-card gradient-blue ${hoveredCard === 'compCard5' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCard('compCard5')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="click-here-indicator">
                  <FontAwesomeIcon icon={faHandPointer} />
                  <span>Hover here</span>
                </div>
                <div className="card-content">
                  <div className="card-front">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faSearchDollar} />
                    </div>
                    <h4>Assessment Requirements</h4>
                  </div>
                  <div className="card-back">
                    <p>Identification of components require a careful assessment of the facts and circumstances.</p>
                    <p>Technical evaluation is necessary to determine which parts of an asset constitute significant components.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="service-card-container">
              <div 
                className={`service-card gradient-green ${hoveredCard === 'compCard6' ? 'active' : ''}`}
                onMouseEnter={() => setHoveredCard('compCard6')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="click-here-indicator">
                  <FontAwesomeIcon icon={faHandPointer} />
                  <span>Hover here</span>
                </div>
                <div className="card-content">
                  <div className="card-front">
                    <div className="service-icon">
                      <FontAwesomeIcon icon={faCity} />
                    </div>
                    <h4>MCA Mandate</h4>
                  </div>
                  <div className="card-back">
                    <p>Ministry of corporate affairs (MCA) has made the component approach mandatory for financial year commencing on or after 1 April 2015.</p>
                    <p>This regulatory requirement aims to improve financial reporting accuracy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services Section Header */}
          <div className="section-header">
            <div className="title-container">
              <h3 className="section-title">OUR SERVICES</h3>
            </div>
          </div>
          
          {/* Services Grid */}
          <div className="services-grid">
            {organizeIntoRows(serviceData, 3).map((row, rowIndex) => (
              <React.Fragment key={`row-${rowIndex}`}>
                {row.map((service, colIndex) => {
                  const index = rowIndex * 3 + colIndex;
                  return (
                    <div key={`service-${index}`} className="service-card-container">
                      <div 
                        className={`service-card ${hoveredCard === index ? 'active' : ''} ${service.color}`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                        style={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
                      >
                        <div className="click-here-indicator">
                          <FontAwesomeIcon icon={faHandPointer} />
                          <span>Hover here</span>
                        </div>
                        <div className="card-content" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <div className="card-front">
                            <div className="service-icon">
                              <FontAwesomeIcon icon={service.icon} />
                            </div>
                            <h4>{service.title}</h4>
                          </div>
                          <div className="card-back" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                            <p style={{ 
                              marginBottom: '10px', 
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              maxHeight: '120px'
                            }}>{service.description}</p>
                            <div style={{ 
                              textAlign: 'center', 
                              padding: '10px 0',
                              width: '100%',
                              marginTop: 'auto',
                              position: 'relative',
                              zIndex: 5
                            }}>
                              <button 
                                className="show-more-btn"
                                onClick={(e) => toggleExpandCard(index, e)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '10px',
                                  padding: '12px 25px',
                                  background: 'rgba(0, 194, 203, 0.2)',
                                  border: '2px solid rgba(0, 194, 203, 0.5)',
                                  borderRadius: '50px',
                                  color: '#00c2cb',
                                  fontWeight: '700',
                                  transition: 'all 0.3s ease',
                                  cursor: 'pointer',
                                  fontSize: '1rem',
                                  width: '90%',
                                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                                  margin: '0 auto',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.5px'
                                }}
                              >
                                <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
                                {expandedCards.includes(index) ? "Hide Details" : "View Details"} 
                                <FontAwesomeIcon icon={faAngleRight} />
                              </button>
                            </div>
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
                  <div 
                    className={`service-details-expanded ${animationClass}`}
                    data-service={expandedCards.find(index => Math.floor(index / 3) === rowIndex)}
                    style={{
                      gridColumn: '1 / -1',
                      marginTop: '20px',
                      marginBottom: '40px',
                      padding: '0',
                      background: '#ffffff',
                      borderRadius: '20px',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)',
                      color: '#333333',
                      lineHeight: '1.8',
                      width: '100%',
                      position: 'relative',
                      zIndex: '10',
                      overflow: 'hidden',
                      border: 'none',
                      display: 'block',
                      opacity: '1',
                      height: 'auto',
                      minHeight: '200px'
                    }}
                  >
                    <div className="expanded-content" style={{ padding: '30px', position: 'relative', zIndex: '2' }}>
                      {renderFormattedContent(expandedCards.find(index => 
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
      {/* Journey Navigation - Next Page CTA */}
      <NextPageCTA 
        title="Meet Our Management Team" 
        description="Get to know the experienced professionals behind our success, leading with expertise and vision across diverse engineering domains."
        nextPage={{
          path: "/management",
          label: "Meet Our Team"
        }}
        headingText="MEET US IN YOUR JOURNEY"
      />
      <Footer />
    </div>
  );
}

export default Services; 