// src/components/WhoWeAre.js
import React from 'react';
import '../styles/WhoWeAre.css';

const WhoWeAre = () => {
  return (
    <section className="whoweare">
      <h2>Who We Are</h2>
      <p>
        At VitalFit & Wellness, we are dedicated to empowering individuals to live healthier, more fulfilling lives...
      </p>
      <div className="whoweare-images">
        <img src="/path/to/whoweare1.jpg" alt="Who We Are Image 1" className="whoweare-image" />
        <img src="/path/to/whoweare2.jpg" alt="Who We Are Image 2" className="whoweare-image" />
      </div>
    </section>
  );
};

export default WhoWeAre;