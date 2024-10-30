// src/components/ServicesPage.js
import React from 'react';
import '../styles/Services.css'; // Import CSS styles

// Import images for each service
import fitness1 from '../assets/images/fitness1.jpg';
import fitness2 from '../assets/images/fitness2.jpg';
import virtual1 from '../assets/images/virtual1.jpg';
import virtual2 from '../assets/images/virtual2.jpg';
import nutrition1 from '../assets/images/nutrition1.jpg';
import nutrition2 from '../assets/images/nutrition2.jpg';
import personal1 from '../assets/images/personal1.jpg';
import personal2 from '../assets/images/personal2.jpg';
import group1 from '../assets/images/group1.jpg';
import group2 from '../assets/images/group2.jpg';
import meditation1 from '../assets/images/meditation1.jpg';
import groupMeditation from '../assets/images/groupmeditation.jpg';
import mentalWorkshop1 from '../assets/images/mentalworkshop1.jpg';
import mentalWorkshop2 from '../assets/images/mentalworkshop2.jpg';
import outdoor1 from '../assets/images/outdoor1.jpg';
import outdoor2 from '../assets/images/outdoor2.jpg';

const ServicesPage = () => {
    return (
      <div>  
        <main>
        <section className="services-section">
          {/* Fitness Programs */}
          <div className="service-item fitness">
            <h3>Fitness Programs</h3>
            <img src={fitness1} alt="Fitness Icon" className="service-icon" />
            <div className="more-info">
              <p>Achieve your health goals with personalized training and group classes for you.</p>
              <img src={fitness2} alt="Fitness Programs" className="service-hover-image" />
            </div>
          </div>

          {/* Wellness Coaching */}
          <div className="service-item wellness">
            <h3>Wellness Coaching</h3>
            <img src={virtual1} alt="Wellness Icon" className="service-icon" />
            <div className="more-info">
              <p>Connect with expert coaches for personalized fitness, nutrition, and mental well-being guidance from home.</p>
              <img src={virtual2} alt="Wellness Coaching" className="service-hover-image" />
            </div>
          </div>

          {/* Nutrition Plans */}
          <div className="service-item nutrition">
            <h3>Nutrition Plans</h3>
            <img src={nutrition1} alt="Nutrition Icon" className="service-icon" />
            <div className="more-info">
              <p>Custom nutrition plans to complement your fitness routine, tailored by our experts.</p>
              <img src={nutrition2} alt="Nutrition Plans" className="service-hover-image" />
            </div>
          </div>

          {/* Personal Training */}
          <div className="service-item personal-training">
            <h3>Personal Training</h3>
            <img src={personal1} alt="Personal Training Icon" className="service-icon" />
            <div className="more-info">
              <p>One-on-one personal training sessions to meet your specific goals.</p>
              <img src={personal2} alt="Personal Training" className="service-hover-image" />
            </div>
          </div>

          {/* Group Classes */}
          <div className="service-item group-classes">
            <h3>Group Classes</h3>
            <img src={group1} alt="Group Classes Icon" className="service-icon" />
            <div className="more-info">
              <p>Join our high-energy group classes, designed to suit all fitness levels.</p>
              <img src={group2} alt="Group Classes" className="service-hover-image" />
            </div>
          </div>

          {/* Meditation */}
          <div className="service-item meditation">
            <h3>Meditation</h3>
            <img src={meditation1} alt="Meditation Icon" className="service-icon" />
            <div className="more-info">
              <p>Our meditation programs help you manage stress and find inner tranquility.</p>
              <img src={groupMeditation} alt="Meditation" className="service-hover-image" />
            </div>
          </div>

          {/* Mental Health Workshops */}
          <div className="service-item mental-health">
            <h3>Mental Health Workshops</h3>
            <img src={mentalWorkshop1} alt="Mental Health Icon" className="service-icon" />
            <div className="more-info">
              <p>Workshops to help you manage stress and improve mental well-being.</p>
              <img src={mentalWorkshop2} alt="Mental Health Workshops" className="service-hover-image" />
            </div>
          </div>

          {/* Outdoor Fitness Adventures */}
          <div className="service-item outdoor">
            <h3>Outdoor Fitness Adventures</h3>
            <img src={outdoor1} alt="Outdoor Fitness Icon" className="service-icon" />
            <div className="more-info">
              <p>Explore nature while staying fit with our outdoor adventures.</p>
              <img src={outdoor2} alt="Outdoor Fitness Adventures" className="service-hover-image" />
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
};

export default ServicesPage;