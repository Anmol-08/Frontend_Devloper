import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Welcome to SpaceX Data</h1>
        <p>Explore the latest information about rockets and capsules.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
