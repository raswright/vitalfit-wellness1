//  Part of Home Page (index)
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome to VitalFit & Wellness</h2>
        <p>Your journey to better health starts here. Explore our programs tailored just for you.</p>
        <a href="/services" className="cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default HeroSection;