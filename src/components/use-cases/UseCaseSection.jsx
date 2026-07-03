import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Use Case section — alternating left/right layout.
 * Props:
 *   id, badge, headline, painPoints[], solutions[], Mock (component),
 *   stat (optional { value, label }), reverse (bool), accentColor
 */
const UseCaseSection = ({
  id,
  badge,
  headline,
  painPoints,
  solutions,
  Mock,
  stat,
  reverse = false,
  accentColor = '#6366F1',
}) => {
  return (
    <section
      id={id}
      style={{ padding: '100px 0', background: reverse ? 'var(--surface)' : 'var(--bg)' }}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'start',
          direction: reverse ? 'rtl' : 'ltr',
        }}>

          {/* ─── CONTENT SIDE ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ direction: 'ltr' }}
          >
            {/* Industry Badge */}
            <div style={{
              display: 'inline-block',
              background: `${accentColor}12`, color: accentColor,
              border: `1px solid ${accentColor}30`,
              borderRadius: '20px', padding: '6px 18px',
              fontSize: '0.8125rem', fontWeight: 700,
              marginBottom: '20px',
            }}>
              {badge}
            </div>

            <h2
              id={`${id}-heading`}
              style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '32px' }}
            >
              {headline}
            </h2>

            {/* Pain Points */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#EF4444', marginBottom: '12px' }}>
                Pain Points
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {painPoints.map((pt, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                  >
                    <span style={{
                      flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                      background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 700, color: '#EF4444', marginTop: '2px',
                    }}>✗</span>
                    <span style={{ color: 'var(--muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{pt}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div style={{ marginBottom: stat ? '28px' : '0' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#10B981', marginBottom: '12px' }}>
                ownRewards Solution
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {solutions.map((sol, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                  >
                    <span style={{
                      flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                      background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', fontWeight: 700, color: '#10B981', marginTop: '2px',
                    }}>✓</span>
                    <span style={{ fontSize: '0.9375rem', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: sol }} />
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Result Stat */}
            {stat && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  background: 'linear-gradient(135deg, rgba(15,17,35,0.95), rgba(25,20,55,0.95))',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  border: `1px solid ${accentColor}40`,
                  boxShadow: `0 8px 32px ${accentColor}20`,
                  marginTop: '8px',
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: accentColor, lineHeight: 1, marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem', lineHeight: 1.5 }}>
                  {stat.label}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* ─── DASHBOARD MOCK SIDE ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true }}
            style={{ direction: 'ltr' }}
          >
            <Mock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
