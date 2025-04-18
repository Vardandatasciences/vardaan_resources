import React from 'react';
import { Link } from 'react-router-dom';
import './NextPageCTA.css';

const NextPageCTA = ({ nextPage, title, description, headingText = "CONTINUE YOUR JOURNEY" }) => {
  const handleClick = () => {
    // Scroll to top when the button is clicked
    window.scrollTo(0, 0);
  };

  return (
    <div className="next-page-cta">
      <div className="container">
        <div className="next-page-content">
          <h3>{headingText}</h3>
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={nextPage.path} className="next-page-button" onClick={handleClick}>
            <span>{nextPage.label}</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NextPageCTA; 