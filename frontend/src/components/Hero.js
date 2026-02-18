import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm <span className="highlight">Shubham Karade</span>
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Full Stack Developer | Vibe Coder | Building amazing web experiences
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            I'm passionate about creating beautiful, responsive, and user-friendly web applications.
            Let's bring your ideas to life with cutting-edge technologies.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link to="contact" smooth>
              <button className="btn btn-primary">Get in Touch</button>
            </Link>
            <Link to="projects" smooth>
              <button className="btn btn-secondary">View My Work</button>
            </Link>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a href="https://github.com/shubhamkaradegit" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shubhamkarade/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://leetcode.com/u/Shubham_Karade/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LeetCode">
              <SiLeetcode />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="image-wrapper">
            <img
              src="/myphoto.png"
              alt="Shubham Karade"
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
