import React from 'react';
import { motion } from 'framer-motion';

const CompanyIntro = () => {
  return (
    <section
      id="about-company"
      style={{ padding: '40px 0 80px' }}
      aria-labelledby="company-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '24px', padding: '56px 48px',
            position: 'relative', overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.03)',
            display: 'flex', flexDirection: 'column', gap: '32px',
          }}
        >
          {/* Subtle HTML/CSS Illustration (Abstract geometric shapes) */}
          <div aria-hidden="true" style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(99,102,241,0.05)', borderRadius: '40%', transform: 'rotate(45deg)' }} />
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '160px', height: '160px', background: 'rgba(245,158,11,0.04)', borderRadius: '50%' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              id="company-heading"
              style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px' }}
            >
              About iEyal Solutions
            </h2>
            
            <p style={{ color: 'var(--muted)', fontSize: '1.125rem', lineHeight: 1.75, marginBottom: '20px' }}>
              iEyal Solutions builds focused, production-grade software for real businesses — not feature-bloated enterprise suites that require a consultant to set up.
            </p>
            
            <p style={{ color: 'var(--muted)', fontSize: '1.125rem', lineHeight: 1.75, margin: 0 }}>
              We believe loyalty is a business necessity, not a luxury. Every restaurant, retail brand, and e-commerce store should have access to the same retention intelligence that enterprise brands pay millions for.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyIntro;
