import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiNodedotjs, SiMongodb, SiExpress 
} from 'react-icons/si';
import './Experience.css';

const Experience = () => {
  const getTechIcon = (techName) => {
    const iconStyle = { marginRight: '5px', verticalAlign: 'middle' };
    switch (techName) {
      case 'React': return <SiReact color="#61DAFB" style={iconStyle} />;
      case 'JavaScript': return <SiJavascript color="#F7DF1E" style={iconStyle} />;
      case 'Node.js': return <SiNodedotjs color="#339933" style={iconStyle} />;
      case 'MongoDB': return <SiMongodb color="#47A248" style={iconStyle} />;
      case 'Express': return <SiExpress style={iconStyle} />;
      default: return null;
    }
  };

  const [experiences] = useState([
    {
      id: 1,
      title: 'Intern',
      company: 'Tech Company',
      duration: 'June 2022 - August 2022',
      description: 'Worked on developing web applications and gained experience in team collaboration and agile methodologies.',
      technologies: ['React', 'JavaScript', 'Node.js']
    },
    {
      id: 2,
      title: 'Freelance Developer',
      company: 'Self Employed',
      duration: 'Ongoing',
      description: 'Built custom websites and applications for clients, focusing on user experience and performance optimization.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express']
    }
  ]);

  return (
    <section className="experience" id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              className="experience-item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-duration">{exp.duration}</p>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-tech">
                  {exp.technologies && exp.technologies.map((tech, i) => (
                    <span key={i} className="exp-tech-tag">
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
