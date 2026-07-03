import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksHero = () => {
  return (
    <section
      id="hiw-hero"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
      aria-labelledby="hiw-h1"
    >
      {/* Animated radial glow blobs */}
      <div style={{
        position: 'absolute', top: '-200px', left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '600px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(99,102,241,0.1)', color: 'var(--primary)',
            border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px',
            padding: '6px 18px', fontSize: '0.8125rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px',
          }}>
            How It Works
          </div>

          <h1
            id="hiw-h1"
            className="hero-title"
            style={{ fontSize: '3.25rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px' }}
          >
            From first visit to loyal superfan —{' '}
            <span className="gradient-text">automatically.</span>
          </h1>

          <p style={{
            color: 'var(--muted)', fontSize: '1.1875rem', maxWidth: '560px',
            margin: '0 auto 40px', lineHeight: 1.7,
          }}>
            No manual processes. No missed moments. Just a loyalty engine that runs itself.
          </p>

          {/* Step count strip */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          }}>
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + i * 0.07, type: 'spring', stiffness: 200 }}
                style={{
                  width: i === 0 ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === 0 ? 'var(--primary)' : 'var(--border)',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
