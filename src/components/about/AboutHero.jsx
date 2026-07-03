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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ marginBottom: '24px' }}
          >
            <span style={{
              background: 'rgba(109,74,255,0.1)', 
              color: 'var(--primary)', 
              padding: '8px 20px', 
              borderRadius: '99px', 
              fontSize: '14px', 
              fontWeight: 700,
              border: '1px solid rgba(109,74,255,0.25)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              About Us
            </span>
          </motion.div>

          <h1
            id="about-h1"
            className="hero-title"
            style={{ fontSize: 'var(--font-hero)', fontWeight: 900, lineHeight: 1.15, marginBottom: '24px', maxWidth: '900px', margin: '0 auto 24px', letterSpacing: '-0.03em' }}
          >
            We build retention software that works{' '}
            <span className="gradient-text">the way your customers do.</span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '720px',
            margin: '0 auto 0', lineHeight: 1.6,
          }}>
            ownRewards is an iEyal Solutions product, built on the belief that intelligent, automated loyalty programs should be accessible to growing businesses, not just enterprise giants.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
