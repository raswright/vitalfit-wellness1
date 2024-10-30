// src/components/WhoWeAre.js
import React from 'react';
import '../styles/WhoWeAre.css'; // Import the CSS for this component
import whoweare1 from '../assets/images/whoweare1.jpg'; // Import the first image
import whoweare2 from '../assets/images/whoweare2.jpg'; // Import the second image

const WhoWeAre = () => {
  return (
    <section className="whoweare">
      <h2>Who We Are</h2>
      <p>At VitalFit & Wellness, we are dedicated to empowering individuals to live healthier, more fulfilling lives...</p>
      <div className="whoweare-images">
        <img src={whoweare1} alt="Who We Are Image 1" className="whoweare-image" />
        <img src={whoweare2} alt="Who We Are Image 2" className="whoweare-image" />
      </div>
    </section>
  );
};

export default WhoWeAre;