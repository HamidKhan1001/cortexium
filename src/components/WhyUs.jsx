import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  const reasons = [
    {
      title: 'Clinical Approach',
      description: 'Rigorous, methodical implementation ensuring measurable results and sustainable growth.',
      icon: '🔬'
    },
    {
      title: 'Human-Centric',
      description: 'We augment human capability, not replace it. Your team stays empowered and in control.',
      icon: '💡'
    },
    {
      title: 'Proven Expertise',
      description: 'Years of experience scaling businesses across industries and market segments.',
      icon: '⭐'
    },
    {
      title: 'Results-Driven',
      description: 'Transparent ROI metrics and regular reporting keep you informed every step.'
    }
  ];

  return (
    <section id="why-us" className="why-us">
      <div className="why-container">
        <div className="section-header">
          <h2>Why Choose Cortexium</h2>
          <p>The advantages of partnering with us</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="reason-content">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
              <div className="reason-accent"></div>
            </div>
          ))}
        </div>

        <div className="why-highlight">
          <div className="highlight-box">
            <h3>✓ Trusted by Leading Companies</h3>
            <p>We've transformed operations for startups to enterprises, delivering consistent results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
