//  Part of Home Page (index)
import React from 'react';
import '../styles/WhoWeAre.css'; 

//Import Images
import whoweare1 from '../assets/images/whoweare1.jpg'; 
import whoweare2 from '../assets/images/whoweare2.jpg'; 

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