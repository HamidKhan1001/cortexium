import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => [...new Set([...prev, entry.target.dataset.id])]);
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business. We identify opportunities and chart your path to digital transformation.',
      icon: 'S1'
    },
    {
      id: 2,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation. Reduce costs, improve efficiency, and focus your team on high-value work.',
      icon: 'S2'
    },
    {
      id: 3,
      title: 'Data Intelligence',
      description: 'Turn raw data into actionable insights. Our analytics solutions help you make informed decisions and uncover growth opportunities.',
      icon: 'S3'
    },
    {
      id: 4,
      title: 'Custom AI Solutions',
      description: 'Purpose-built AI applications designed for your specific challenges. From chatbots to predictive models, we deliver results.',
      icon: 'S4'
    },
    {
      id: 5,
      title: 'Team Training & Support',
      description: 'Empower your workforce with AI expertise. Comprehensive training and ongoing support for successful adoption.',
      icon: 'S5'
    },
    {
      id: 6,
      title: 'Growth Scaling',
      description: 'Accelerate growth with AI-driven insights. Scale revenue and operations without proportional cost increases.',
      icon: 'S6'
    }
  ];

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Everything you need to scale your business with AI</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${visibleCards.includes(String(service.id)) ? 'visible' : ''}`}
              data-id={service.id}
            >
              <div className="service-icon-wrapper">
                <div className="service-icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
