import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Git - Skill Up',
      issuer: 'GeeksforGeeks',
      date: '02 January, 2026',
      link: 'https://www.geeksforgeeks.org/certificate/f6924f2790862fb62e90b365deba2026',
      description: 'Mastered version control with Git. Learned branching, merging, and collaborative workflows.',
      image: '/certificates/git.jpeg'
    },
    {
      id: 2,
      title: 'Python Basic To Advance Course',
      issuer: 'Saumya Singh',
      date: '16 January, 2026',
      link: 'https://drive.google.com/file/d/19O3XDyJIm7bojbpTqx_qjOncdBqvCY-6/view?usp=sharing',
      description: 'Comprehensive Python training from fundamentals to advanced concepts including OOP and data structures.',
      image: '/certificates/python_certificate.jpg'
    },
    {
      id: 3,
      title: 'Power BI Micro Course',
      issuer: 'SkillCourse',
      date: '28 December, 2025',
      link: 'https://exam.skillcourse.in/student/view_certificate?uid=SC-13A9E1A610',
      description: 'Data visualization and business intelligence using Power BI. Created dashboards and reports for data analysis.',
      image: '/certificates/power-bi.jpeg'
    },
    {
      id: 4,
      title: 'AI for Beginners',
      issuer: 'HP LIFE',
      date: '2025',
      link: 'https://www.life-global.org/certificate/5da8ae49-601d-42e9-afe9-f0c7201aa604',
      description: 'Introduction to AI concepts, tools, and applications. Explored AI solutions for personal and professional growth.',
      image: '/certificates/ai-for-beginners.jpeg'
    },
    {
      id: 5,
      title: 'AI for Business Professionals',
      issuer: 'HP LIFE',
      date: '30 January, 2026',
      link: 'https://www.life-global.org/certificate/22c1413f-a19b-42b1-9c2e-de9c1c65eb7c',
      description: 'Advanced AI applications in business. Learned prompt crafting, ethical use, and enterprise AI integration.',
      image: '/certificates/ai-for-bussiness-professional.jpeg'
    },
    {
      id: 6,
      title: 'AI Tools Workshop',
      issuer: 'be10x',
      date: '2025',
      link: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971060735',
      description: 'Hands-on workshop on latest AI tools and frameworks. Practical implementation and real-world applications.',
      image: '/certificates/Ai-tool.jpeg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Professional certificates and completed courses
        </motion.p>

        <motion.div
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 123, 255, 0.2)'
              }}
            >
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-description">{cert.description}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
