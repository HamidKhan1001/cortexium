import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>About Cortexium</h2>
          <p>Who we are and what we do</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-block">
              <h3>Our Mission</h3>
              <p>
                Cortexium is your trusted partner in navigating the intersection of artificial intelligence and business growth. 
                We believe the future belongs to companies that seamlessly blend human ingenuity with machine intelligence.
              </p>
            </div>

            <div className="about-block">
              <h3>Our Approach</h3>
              <p>
                We don't just implement solutions—we transform how your business operates, thinks, and grows. Our clinical approach 
                ensures that every implementation is rigorous, measurable, and sustainable.
              </p>
            </div>

            <div className="about-block">
              <h3>Your Success Is Our Success</h3>
              <p>
                From automation workflows to launching AI-powered products, Cortexium brings precision and human expertise to every engagement. 
                We measure success by your growth.
              </p>
            </div>
          </div>

          <div className="about-visual">
            <div className="stat-box stat-1">
              <span className="number">50+</span>
              <span className="label">Companies</span>
            </div>
            <div className="stat-box stat-2">
              <span className="number">300%</span>
              <span className="label">Growth Rate</span>
            </div>
            <div className="stat-box stat-3">
              <span className="number">100%</span>
              <span className="label">Satisfaction</span>
            </div>
            <div className="stat-box stat-4">
              <span className="number">24/7</span>
              <span className="label">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
