import React from 'react';
import { motion } from 'framer-motion';

const UseCasesHero = () => {
  const industries = [
    { icon: '🍽️', label: 'Restaurants' },
    { icon: '👗', label: 'Retail' },
    { icon: '🛒', label: 'E-Commerce' },
  ];

  return (
    <section
      id="usecases-hero"
      style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
      aria-labelledby="usecases-h1"
    >
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '600px',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)',
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
              Use Cases
            </span>
          </motion.div>

          <h1
            id="usecases-h1"
            className="hero-title"
            style={{ fontSize: 'var(--font-hero)', fontWeight: 900, lineHeight: 1.15, marginBottom: '24px', letterSpacing: '-0.03em' }}
          >
            Built for the way your{' '}
            <span className="gradient-text">customers shop.</span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '640px',
            margin: '0 auto 48px', lineHeight: 1.6,
          }}>
            ownRewards adapts to different industries through intelligent loyalty
            automation, campaigns, referrals, and analytics.
          </p>

          {/* Industry pills */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {industries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '10px 20px', borderRadius: '50px',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  fontWeight: 600, fontSize: '0.9375rem',
                }}
              >
                <span>{ind.icon}</span>
                <span>{ind.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesHero;
