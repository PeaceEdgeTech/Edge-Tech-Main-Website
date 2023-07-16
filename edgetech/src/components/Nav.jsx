import React, { useState } from 'react';
import logo from '../img/logo.jpg';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleThemeToggle = () => {
    setIsLightMode(!isLightMode);
    toggleTheme();
  };

  return (
    <div id="navbar">
      <nav className={`navbar ${theme}`}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" width="45px" />
        </div>
        <div className="navbar-buttons">
          <ul className="navbar-links">
            <li><a href="#main">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
          <button className="theme-button" onClick={handleThemeToggle}>
            <div className="sun-moon-icon">
              <FaSun className={`sun ${isLightMode ? 'active' : ''}`} />
              <FaMoon className={`moon ${isLightMode ? '' : 'active'}`} />
            </div>
          </button>
          <button className="contact-button">Contact Us</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
