import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Welcome to Vardaan Resources Ltd.</h1>
              <p>Your trusted partner in resource management and development</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>About Us</h2>
              <p>
                Vardaan Resources Ltd. is a leading company dedicated to providing 
                exceptional resource management solutions. With years of experience 
                and a commitment to excellence, we help businesses optimize their 
                resources and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 