import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-media" aria-hidden="true">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/cortexium-logo.png"
        >
          <source src="https://cdn.coverr.co/videos/coverr-working-with-graphs-1579/1080p.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'reveal-in' : ''}`}>
          <h1 className="hero-title">
            Scale Your Business<br />
            <span className="gradient-text">With Intelligent AI</span>
          </h1>
          <p className="hero-subtitle">
            The Clinical Bridge Between Human Expertise and Artificial Intelligence
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Start Your Journey
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
