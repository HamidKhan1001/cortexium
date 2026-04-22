import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Cortexium</h4>
            <p>The Clinical Bridge Between Human and AI</p>
          </div>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Cortexium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
