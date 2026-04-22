import React from 'react';
import './Navigation.css';

const Navigation = ({ scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/cortexium-logo.png" alt="Cortexium" className="logo-img" />
          <span className="logo-text">CORTEXIUM</span>
        </div>

        <button 
          className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#why-us" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}>Why Us</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li>
            <button 
              className="cta-btn"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
