// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Vitalfit & Wellness</h1>
      <label htmlFor="hamburger-checkbox" className="hamburger">&#9776;</label>
      <nav className="small-nav">
        <ul id="nav-menu" className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;