// src/components/AboutPage.js
import React from 'react';
import '../styles/About.css';

import AboutUs1 from '../assets/images/AboutUs1.jpg';
import AboutUs2 from '../assets/images/AboutUs2.jpg';
import FoundingStory from '../assets/images/FoundingStory.jpg';
import IGLogo from '../assets/images/iglogo.png';
import XLogo from '../assets/images/xlogo.png';
import TikTokLogo from '../assets/images/tiktoklogo.png';

const About = () => {
  return (
    <div>
      <main>
        {/* Our Mission Section */}
        <section className="mission-section">
          <h2>Our Team's Mission</h2>
          <p>
            At VitalFit & Wellness, we're committed to helping individuals achieve balanced well-being—physically,
            mentally, and emotionally. We provide personalized fitness programs, mental health workshops, and nutrition
            plans to suit each person's unique needs. Our vision is to create a supportive community where wellness
            becomes a lifestyle, not just a goal. Whether through virtual coaching or outdoor adventures, we empower
            you to embrace your potential and live with vitality, strength, and purpose. Together, we strive to build
            healthier bodies, resilient minds, and deeper connections.
          </p>
        </section>

        {/* Image Placeholder Section */}
        <section className="mission-images">
          <img src={AboutUs1} alt="About us Image 1" width="270" height="200" className="mission-image" />
          <img src={AboutUs2} alt="About us Image 2" width="270" height="200" className="mission-image" />
        </section>

        {/* Founding Story Section */}
        <section className="mission-section founding-section">
          <h2>The Founding Story</h2>
          <div className="text-left">
            <p>
              VitalFit & Wellness was born from our founder's personal journey as a professional athlete who faced
              physical and mental challenges. After discovering the powerful link between fitness, mental health, and
              nutrition, Jalen Smith set out to create a space that nurtures all aspects of well-being.
            </p>
          </div>

          <div className="founding-image">
            <img src={FoundingStory} alt="Founder Image" />
          </div>

          <div className="text-right">
            <p>
              What began as a small local gym has grown into a holistic wellness platform, offering fitness training,
              mental health support, and nutrition coaching. Today, VitalFit & Wellness remains true to its mission—
              helping individuals lead healthier, more balanced lives through a comprehensive approach to wellness.
            </p>
          </div>
        </section>

        {/* Social Media Logos */}
        <section className="social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={IGLogo} width="40" height="40" alt="Instagram Icon" className="social-icon" />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <img src={XLogo} width="40" height="40" alt="X Icon" className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
              <img src={TikTokLogo} width="40" height="40" alt="Tiktok Icon" className="social-icon" />
            </a>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>Feel free to reach out with any questions. We're here to support your wellness journey.</p>
          <br></br>
          <form id="contactForm" className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="1e6479b5-6604-4cbc-b29d-ac281be3a8f1" />

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required placeholder="Enter your message"></textarea>

            <input type="submit" value="Send Message" className="submit-button" />
            <p id="formSuccess" style={{ color: 'rgb(17, 120, 17)', display: 'none' }}>Thank you! Your message was sent successfully.</p>
            <p id="formError" style={{ color: 'red', display: 'none' }}>Error! Please fill out correctly.</p>
          </form>
        </section>

      </main>
    </div>
  );
};

export default About;