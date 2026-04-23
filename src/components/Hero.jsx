import React, { useMemo, useState } from 'react';
import { FaRocket, FaLock, FaChartBar } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const particles = useMemo(
    () =>
      [...Array(18)].map((_, i) => ({
        id: i,
        left: `${(i * 17) % 100}%`,
        top: `${(i * 29) % 100}%`,
        delay: `${i * 0.2}s`,
      })),
    []
  );

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
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-kicker">Built for outcomes, not demos</div>

          <h1 className="hero-title">
            <span className="word">Launch AI workflows</span>
            <span className="word">that your team</span>
            <span className="gradient-text word">actually ships.</span>
          </h1>

          <p className="hero-subtitle">
            Cortexium connects strategy, implementation, and governance so your
            business can deliver measurable AI value without the chaos.
          </p>

          <div className="hero-metrics">
            <div className="metric-item">
              <p className="metric-value">99.9%</p>
              <p className="metric-label">System reliability</p>
            </div>
            <div className="metric-item">
              <p className="metric-value">4-6 weeks</p>
              <p className="metric-label">Average go-live window</p>
            </div>
            <div className="metric-item">
              <p className="metric-value">24/7</p>
              <p className="metric-label">Monitoring and support</p>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <span>Book a Strategy Call</span>
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              <span>See How We Work</span>
            </button>
          </div>
        </div>

        {/* Feature cards */}
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
                  <div className="card-texts">
                    <p className="card-title">{card.title}</p>
                    <p className="card-description">{card.description}</p>
                  </div>
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
