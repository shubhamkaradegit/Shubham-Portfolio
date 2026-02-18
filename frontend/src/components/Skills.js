import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, 
  SiMongodb, SiMysql, SiGit 
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - will be replaced with API call
    const mockSkills = [
      {
        category: 'Frontend',
        items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design']
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Server Management']
      },
      {
        category: 'Database',
        items: ['MongoDB', 'MySQL', 'Data Modeling', 'Query Optimization']
      },
      {
        category: 'Tools',
        items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux Terminal']
      }
    ];
    setSkills(mockSkills);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="skill-badge">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-icons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="icons-title">Tech Stack</h3>
          <div className="icon-grid">
            {[
              { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
              { name: 'CSS3', icon: <SiCss3 color="#1572B6" /> },
              { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
              { name: 'React', icon: <SiReact color="#61DAFB" /> },
              { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
              { name: 'Express', icon: <SiExpress /> },
              { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
              { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
              { name: 'Git', icon: <SiGit color="#F05032" /> }
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                className="tech-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.3 }}
                title={tech.name}
              >
                <div className="icon-emoji" style={{ color: 'inherit' }}>{tech.icon}</div>
                <p>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
