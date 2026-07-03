import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section
      id="about-hero"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
      aria-labelledby="about-h1"
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '600px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{
            display: 'inline-block', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)',
            border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px',
            padding: '6px 18px', fontSize: '0.8125rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px',
          }}>
            About Us
          </div>

          <h1
            id="about-h1"
            className="hero-title"
            style={{ fontSize: '3.25rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px', maxWidth: '840px', margin: '0 auto 24px' }}
          >
            We build retention software that works{' '}
            <span className="gradient-text">the way your customers do.</span>
          </h1>

          <p style={{
            color: 'var(--muted)', fontSize: '1.1875rem', maxWidth: '640px',
            margin: '0 auto 0', lineHeight: 1.7,
          }}>
            ownRewards is an iEyal Solutions product, built on the belief that intelligent, automated loyalty programs should be accessible to growing businesses, not just enterprise giants.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
