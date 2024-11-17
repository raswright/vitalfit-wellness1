import React from 'react';
import '../styles/About.css';
import ContactForm from '../components/ContactForm'; 

// Import images
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
              mental health support, and nutrition coaching. Today, VitalFit & Wellness remains true to its mission—helping individuals lead healthier, more balanced lives through a comprehensive approach to wellness.
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

        {/* Contact Form Section */}
        <section className="contact-section">
          <ContactForm />
        </section>
      </main>
    </div>
  );
};

export default About;