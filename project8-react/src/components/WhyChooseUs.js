// src/components/WhyChooseUs.js
import React from 'react';
import '../styles/WhyChooseUs.css';
import whychooseus1 from '../assets/images/whychooseus1.jpg'; // Import the first image
import whychooseus2 from '../assets/images/whychooseus2.jpg'; // Import the second image

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose VitalFit & Wellness...</h2>
      <div className="why-choose-us-container">
        <div className="left-image">
          <img src={whychooseus1} width="400" height="550" alt="Image 1" />
        </div>
        <div className="why-choose-us-text">
          <ul>
            <li>Personalized Programs for Every Fitness Level</li>
            <li>Expert Coaches with Years of Experience</li>
            <li>Comprehensive Nutrition and Wellness Support</li>
            <li>Community and Accountability for Lasting Results</li>
          </ul>
        </div>
        <div className="right-image">
          <img src={whychooseus2} width="400" height="550" alt="Image 2" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;