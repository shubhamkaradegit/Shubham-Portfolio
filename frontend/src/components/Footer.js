import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3>Shubham Karade</h3>
            <p>Full Stack Developer | Vibe Coder | Building amazing web experiences</p>
            <div className="footer-social">
              <a href="https://github.com/shubhamkaradegit" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shubhamkarade/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/Shubham_Karade/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                <SiLeetcode />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li><a href="mailto:shubham.karade@gmail.com">Email</a></li>
              <li><a href="tel:+91xxxxxxxxxx">Phone</a></li>
              <li><a href="https://www.linkedin.com/in/shubhamkarade/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/shubhamkaradegit" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Shubham Karade. All rights reserved. | Made with <FaHeart className="heart-icon" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
