// src/components/Carousel.js
import React from 'react';
import '../styles/Carousel.css';

const Carousel = () => {
  return (
    <section className="client-carousel">
      <h2>Our Client Success Stories</h2>
      <div className="carousel">
        <div className="carousel-item">
          <p>"VitalFit & Wellness has been a life-changer..." - Zoe Johnson</p>
        </div>
        <div className="carousel-item">
          <p>"From VitalFit & Wellness, I not only lost weight..." - Liam Harrison</p>
        </div>
        <div className="carousel-item">
          <p>"I've found a supportive community..." - Elijah Brown</p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;