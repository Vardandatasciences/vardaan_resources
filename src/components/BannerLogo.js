import React from 'react';
import './BannerLogo.css';
import logoImage from '../assets/images/logo.png';

const BannerLogo = () => {
  return (
    <img 
      src={logoImage} 
      alt="Company Logo Watermark" 
      className="banner-logo-watermark"
    />
  );
};

export default BannerLogo; 