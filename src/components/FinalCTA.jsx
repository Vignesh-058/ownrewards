import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './FinalCTA.css';

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <h2>Ready to turn one-time buyers into lifelong regulars?</h2>
            <p>Join thousands of growing businesses using OwnRewards to drive revenue and increase customer retention.</p>
            <div className="cta-actions">
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Button variant="primary" className="btn-large">Get Started Today</Button>
              </Link>
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }} style={{ textDecoration: 'none' }}>
                <Button variant="glass" className="btn-large">Talk to Sales</Button>
              </a>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="cta-decoration dec-1"></div>
          <div className="cta-decoration dec-2"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
