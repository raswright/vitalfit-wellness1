import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Vitalfit & Wellness</h1>
      <label htmlFor="hamburger-checkbox" className="hamburger">&#9776;</label>
      <nav className="small-nav">
        <ul id="nav-menu" className="nav-menu">
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/services">Services</Link></li> 
          <li><Link to="/schedule">Schedule</Link></li> 
          <li><Link to="/blog">Blog</Link></li> 
          <li><Link to="/about">About Us</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;