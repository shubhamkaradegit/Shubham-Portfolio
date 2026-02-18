import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              Hi! I'm Shubham Karade, a passionate Full Stack Developer from Mumbai currently pursuing B.Tech
              from St. Francis Institute of Technology. I specialize in building modern, scalable web
              applications using the MERN stack with a focus on clean code and user experience.
            </p>

            <p>
              My journey in tech is backed by a strong academic foundation (94.80% in SSC, 88.50% in HSC) and continuous learning through professional certifications. I've successfully completed courses in Git, Power BI, Python, AI Tools, and more, demonstrating my commitment to staying updated with industry standards.
            </p>

            <p>
              I'm passionate about solving real-world problems through technology, building responsive interfaces, and creating maintainable code. My expertise spans across frontend frameworks, backend APIs, database management, and DevOps practices. I believe in writing code that's not just functional, but elegant and efficient.
            </p>

            <p>
              Beyond coding, I'm passionate about UI/UX design, exploring new technologies, contributing to open-source, and mentoring aspiring developers. I'm always excited about new opportunities to collaborate and build solutions that make a real impact.
            </p>

            <div className="achievements">
              <motion.div 
                className="achievement-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>10+</h3>
                <p>Projects Completed</p>
              </motion.div>
              <motion.div 
                className="achievement-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>6+</h3>
                <p>Professional Certifications</p>
              </motion.div>
              <motion.div 
                className="achievement-item"
                whileHover={{ scale: 1.05 }}
              >
                <h3>2+</h3>
                <p>Years of Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
