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
      <p>At VitalFit & Wellness, we are dedicated to empowering individuals to live healthier, more fulfilling lives. Our holistic approach to wellness blends physical fitness, mental well-being, and personalized coaching, creating a supportive community where everyone can thrive. Whether you're embarking on your fitness journey or looking to enhance your routine, we provide expert guidance and innovative programs designed to meet your unique goals. Together, we aim to inspire healthier lifestyles and foster a lasting sense of well-being.</p>
      <div className="whoweare-images">
        <img src={whoweare1} alt="Who We Are Image 1" className="whoweare-image" />
        <img src={whoweare2} alt="Who We Are Image 2" className="whoweare-image" />
      </div>
    </section>
  );
};

export default WhoWeAre;