import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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

        {/* Floating cards with scroll effect */}
        <div className="floating-cards">
          <div className="card-item" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
            <div className="card-icon">🚀</div>
            <p>Fast Deployment</p>
          </div>
          <div className="card-item" style={{ transform: `translateY(${scrollY * 0.4}px)` }}>
            <div className="card-icon">🔒</div>
            <p>Enterprise Security</p>
          </div>
          <div className="card-item" style={{ transform: `translateY(${scrollY * 0.35}px)` }}>
            <div className="card-icon">📊</div>
            <p>Real-time Analytics</p>
          </div>
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
