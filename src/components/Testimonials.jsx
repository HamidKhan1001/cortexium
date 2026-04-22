import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Chief Medical Officer',
      company: 'HealthTech Solutions',
      content: 'Cortexium transformed how we approach patient care. The AI insights have improved our diagnostic accuracy by 40%.',
      rating: 5
    },
    {
      id: 2,
      name: 'Marcus Chen',
      role: 'Operations Director',
      company: 'Global Enterprise Inc',
      content: 'Implementing their automation solutions cut our operational costs significantly while improving team productivity.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Head of Innovation',
      company: 'FinTech Ventures',
      content: 'A truly transformative partner. Their AI expertise and personalized approach made all the difference in our digital transformation.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real results from real organizations we've partnered with</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              
              <p className="testimonial-content">{testimonial.content}</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
