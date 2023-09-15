import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1457364847821-58861bbda116?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    'https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1454789415558-bdda08f4eabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2079&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  },[]);

  const handleGetStartedClick = () => {
    const searchFormElement = document.getElementById('search-bar');

    if (searchFormElement) {
      searchFormElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="banner">
      <div className="banner-carousel">
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        ))}
        <div className="carousel-controls">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-control ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        <div className="banner-content">
          <h1>Welcome to SpaceX Data</h1>
          <p>Explore the latest information about rockets.</p>
          <button className="cta-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
