import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <h1>Vitalfit & Wellness</h1>
      <button
        className="hamburger"
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>
      <nav className={`small-nav ${isNavOpen ? 'open' : ''}`}>
        <ul className="nav-menu">
          <li><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setIsNavOpen(false)}>Services</Link></li>
          <li><Link to="/schedule" onClick={() => setIsNavOpen(false)}>Schedule</Link></li>
          <li><Link to="/blog" onClick={() => setIsNavOpen(false)}>Blog</Link></li>
          <li><Link to="/about" onClick={() => setIsNavOpen(false)}>About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;