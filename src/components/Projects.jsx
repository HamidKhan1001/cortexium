import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MediCare AI',
      description: 'Intelligent healthcare platform powered by AI for personalized patient care, diagnostic support, and clinical decision enhancement.',
      features: ['Patient Diagnosis', 'Treatment Plans', 'Health Monitoring'],
      image: '🏥'
    },
    {
      id: 2,
      title: 'LanguageCoach',
      description: 'Adaptive language learning platform with AI-powered personalized lessons and real-time feedback for effective language acquisition.',
      features: ['Real-time Feedback', 'Adaptive Lessons', 'Progress Tracking'],
      image: '🗣️'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Our Projects</h2>
          <p>Cutting-edge AI solutions making a real impact</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
              <a href="#contact" className="project-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
