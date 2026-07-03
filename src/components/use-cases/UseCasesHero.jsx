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
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(99,102,241,0.1)', color: 'var(--primary)',
            border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px',
            padding: '6px 18px', fontSize: '0.8125rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px',
          }}>
            Use Cases
          </div>

          <h1
            id="usecases-h1"
            className="hero-title"
            style={{ fontSize: '3.25rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px' }}
          >
            Built for the way your{' '}
            <span className="gradient-text">customers shop.</span>
          </h1>

          <p style={{
            color: 'var(--muted)', fontSize: '1.1875rem', maxWidth: '580px',
            margin: '0 auto 48px', lineHeight: 1.7,
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
