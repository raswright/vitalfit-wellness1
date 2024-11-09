import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar-container">
        <h1 className="logo">VitalFit & Wellness</h1>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={isOpen ? 'nav-links open' : 'nav-links'}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/schedule" onClick={toggleMenu}>Schedule</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;