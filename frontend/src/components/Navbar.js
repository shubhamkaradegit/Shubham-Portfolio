import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="home" smooth duration={500} offset={-70} className="navbar-logo">
          <span className="logo-symbol">&lt;</span>
          <span className="logo-text">Shubham</span>  
          <span className="logo-text">Karade</span>
          <span className="logo-symbol">/</span>
          <span className="logo-symbol">&gt;</span>
        </Link>

        <button className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="home" smooth duration={500} offset={-70} className="nav-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="about" smooth duration={500} offset={-70} className="nav-link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="skills" smooth duration={500} offset={-70} className="nav-link" onClick={toggleMenu}>
            Skills
          </Link>
          <Link to="projects" smooth duration={500} offset={-70} className="nav-link" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="experience" smooth duration={500} offset={-70} className="nav-link" onClick={toggleMenu}>
            Experience
          </Link>
          <Link to="certificates" smooth duration={500} offset={-70} className="nav-link" onClick={toggleMenu}>
            Certificates
          </Link>
          <Link to="contact" smooth duration={500} offset={-70} className="nav-link" onClick={toggleMenu}>
            Contact
          </Link>
          <a href="/resume.pdf" download="Shubham_Karade_Resume.pdf" className="resume-btn" onClick={toggleMenu}>
            Resume
          </a>
        </div>

        <button className="theme-toggle" onClick={toggleTheme} title="Toggle dark mode">
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
