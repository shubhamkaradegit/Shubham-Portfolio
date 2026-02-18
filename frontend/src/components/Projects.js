import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiHtml5, SiCss3, SiJavascript, SiAxios 
} from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const getTechIcon = (techName) => {
    const iconStyle = { marginRight: '5px', verticalAlign: 'middle' };
    switch (techName) {
      case 'React': return <SiReact color="#61DAFB" style={iconStyle} />;
      case 'Node.js': return <SiNodedotjs color="#339933" style={iconStyle} />;
      case 'MongoDB': return <SiMongodb color="#47A248" style={iconStyle} />;
      case 'Express': return <SiExpress style={iconStyle} />;
      case 'HTML5': return <SiHtml5 color="#E34F26" style={iconStyle} />;
      case 'CSS3': 
      case 'CSS': return <SiCss3 color="#1572B6" style={iconStyle} />;
      case 'JavaScript': return <SiJavascript color="#F7DF1E" style={iconStyle} />;
      case 'Axios': return <SiAxios color="#5A29E4" style={iconStyle} />;
      default: return null;
    }
  };

  const [projects] = useState([
    {
      id: 1,
      title: 'Wanderlust – Airbnb Clone',
      description: 'A full-stack Airbnb clone with authentication, listing management, and user reviews.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/project_img/WanderLust-01-10-2026_10_11_PM.png',
      category: 'Major',
      liveLink: 'https://major-project-wanderlust-40f9.onrender.com/listings',
      githubLink: 'https://github.com/shubhamkaradegit/Major-Project-WanderLust'
    },
    {
      id: 2,
      title: 'Blinkit Clone',
      description: 'Front-end clone of Blinkit using pure HTML and CSS focusing on responsive design.',
      technologies: ['HTML5', 'CSS3'],
      image: '/project_img/Everything-delivered-in-minutes-Blinkit-01-10-2026_10_15_PM.png',
      category: 'Major',
      liveLink: 'https://shubhamkaradegit.github.io/Blinkit-Clone/',
      githubLink: 'https://github.com/shubhamkaradegit/Blinkit-Clone'
    },
    {
      id: 3,
      title: 'Search Movie (React)',
      description: 'Mini React app that allows users to search for movies and view details using API.',
      technologies: ['React', 'Axios', 'REST API'],
      image: '/project_img/React-App-01-10-2026_10_26_PM.png',
      category: 'Minor',
      liveLink: 'https://karademovie.netlify.app/',
      githubLink: 'https://github.com/shubhamkaradegit/karademovie'
    },
    {
      id: 4,
      title: 'Todo App (React)',
      description: 'React application for task management with add, delete, and mark features.',
      technologies: ['React', 'JavaScript', 'CSS'],
      image: '/project_img/todo-01-10-2026_10_29_PM.png',
      category: 'Minor',
      liveLink: 'https://karadetodo.netlify.app/',
      githubLink: 'https://github.com/shubhamkaradegit/Full-Stack-Web-Dev/tree/main/React/Todo'
    },
    {
      id: 5,
      title: 'Weather App (React)',
      description: 'Real-time weather application fetching data from weather API with clean UI.',
      technologies: ['React', 'Weather API', 'Axios'],
      image: '/project_img/mini-project-react-01-10-2026_10_24_PM.png',
      category: 'Minor',
      liveLink: 'https://shubhamkaradegit.github.io/weather-app/',
      githubLink: 'https://github.com/shubhamkaradegit/weather-forecast-react-app'
    },
    {
      id: 6,
      title: 'Spotify Clone (HTML & CSS)',
      description: 'Front-end clone of Spotify built with HTML and CSS showcasing modern UI design.',
      technologies: ['HTML5', 'CSS3'],
      image: '/project_img/Spotify-Web-Player-Music-for-everyone-01-10-2026_10_20_PM.png',
      category: 'Minor',
      liveLink: 'https://shubhamkaradegit.github.io/Spotify-Clone/',
      githubLink: 'https://github.com/shubhamkaradegit/Spotify-Clone'
    }
  ]);

  const [filter, setFilter] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Reset slider when filter changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [filter]);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {['All', 'Major', 'Minor'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="projects-slider">
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                animate={{
                  x: -currentSlide * 100,
                  opacity: Math.abs(idx - currentSlide) <= 1 ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={(e) => {
                      e.target.src = '/project_img/project_management_coursefees.avif';
                    }}
                  />
                  <div className="project-overlay">
                    <a href={project.liveLink} className="project-link" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.githubLink} className="project-link" title="GitHub">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
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

        <div className="slider-dots">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
