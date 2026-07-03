import React from 'react';
import { motion } from 'framer-motion';

/* ─── Story Journey Step ─────────────────────────────────────── */
const JourneyStep = ({ icon, label, color, isLast }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{
        width: '56px', height: '56px', borderRadius: '16px',
        background: `${color}14`, border: `1px solid ${color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem',
      }}
      aria-hidden="true"
    >{icon}</motion.div>
    <span style={{ fontSize: '0.78rem', fontWeight: 600, color, textAlign: 'center', maxWidth: '72px', lineHeight: 1.3 }}>{label}</span>
    {!isLast && (
      <div style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1, marginTop: '2px' }}>↓</div>
    )}
  </div>
);

/* ─── Origin Story Section ───────────────────────────────────── */
const OriginStory = () => {
  const journey = [
    { icon: '🍽️', label: 'Restaurant', color: '#F59E0B' },
    { icon: '❌', label: 'Problem', color: '#EF4444' },
    { icon: '🛍️', label: 'Retail', color: '#6366F1' },
    { icon: '⚠️', label: 'Challenges', color: '#F59E0B' },
    { icon: '🏆', label: 'ownRewards', color: '#6366F1' },
    { icon: '📈', label: 'Growth', color: '#10B981' },
  ];

  return (
    <section
      id="about-origin"
      style={{ padding: '100px 0', background: 'var(--surface)' }}
      aria-labelledby="origin-heading"
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'inline-block', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)',
              border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px',
              padding: '6px 18px', fontSize: '0.8125rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px',
            }}>Our Story</div>

            <h2
              id="origin-heading"
              style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.25 }}
            >
              Why we built ownRewards
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ color: 'var(--muted)', fontSize: '1.0625rem', lineHeight: 1.75, margin: 0 }}>
                We watched restaurant owners hand out paper stamp cards with no data, no automation, and no idea which customers were about to leave. We watched retail managers run seasonal campaigns with no budget controls and no way to measure what actually worked.
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '1.0625rem', lineHeight: 1.75, margin: 0 }}>
                ownRewards was built to change that. To give every business — from a 2-outlet restaurant chain to a 500-SKU retail brand — a loyalty and retention engine that actually drives measurable business outcomes.
              </p>
            </div>
          </motion.div>

          {/* Right: Journey visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}
          >
            <div style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: '20px', padding: '32px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              boxShadow: '0 8px 32px rgba(99,102,241,0.07)',
            }}>
              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                The Journey
              </div>
              {journey.map((step, i) => (
                <JourneyStep
                  key={step.label}
                  icon={step.icon}
                  label={step.label}
                  color={step.color}
                  isLast={i === journey.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
