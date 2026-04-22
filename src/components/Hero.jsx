import React, { useEffect, useState } from 'react';
import { FaRocket, FaLock, FaChartBar } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardData = [
    {
      id: 1,
      icon: FaRocket,
      title: 'Fast Deployment',
      description: 'Deploy AI solutions in days, not months. Quick setup and rapid deployment.'
    },
    {
      id: 2,
      icon: FaLock,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance. Your data is protected always.'
    },
    {
      id: 3,
      icon: FaChartBar,
      title: 'Real-time Analytics',
      description: 'Live dashboards and instant insights. Monitor performance 24/7.'
    }
  ];

  return (
    <section id="hero" className="hero">
      {/* Animated gradient background */}
      <div className="hero-bg">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>

      {/* Mouse follower */}
      <div 
        className="mouse-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      <div className="hero-content">
        <div className="hero-text" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <h1 className="hero-title">
            <span className="word">Scale</span>
            <span className="word">Your</span>
            <span className="word">Business</span>
            <br />
            <span className="gradient-text word">With Intelligent AI</span>
          </h1>

          <p className="hero-subtitle">
            The Clinical Bridge Between Human Expertise and Artificial Intelligence
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <span>Start Your Journey</span>
              <span className="btn-glow"></span>
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              <span>Learn More →</span>
            </button>
          </div>
        </div>

        {/* Feature cards with reveal animation */}
        <div className="floating-cards">
          {cardData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={card.id} 
                className={`card-item ${hoveredCard === card.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-content">
                  <div className="card-icon">
                    <IconComponent />
                  </div>
                  <p className="card-title">{card.title}</p>
                </div>
                <div className="card-reveal">
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
