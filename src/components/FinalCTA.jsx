import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

const FinalCTA = () => {
  return (
    <section
      className="final-cta"
      id="cta-banner"
      style={{
        background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(236,72,153,0.1))',
        borderTop: '1px solid var(--border-glow)',
        borderBottom: '1px solid var(--border-glow)',
      }}
    >
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <h2 className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, maxWidth: '700px', margin: '0 auto 16px' }}>
              Your best customers deserve better than a paper stamp card.
            </h2>
            <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '36px' }}>
              Set up ownRewards in minutes. No dev team needed. No complex migrations.
            </p>
            <div className="cta-actions" style={{ justifyContent: 'center' }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="primary" className="btn-large">
                  Start Free — No Credit Card Required
                </Button>
              </Link>
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
