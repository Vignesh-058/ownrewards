import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    id: 'value-intelligence',
    icon: '🧠',
    title: 'Intelligence',
    body: 'Every feature is built around data — triggers, cohorts, LTV predictions, A/B tests. Intelligence, not guesswork.',
    color: '#6366F1',
  },
  {
    id: 'value-simplicity',
    icon: '✨',
    title: 'Simplicity',
    body: "Powerful tools shouldn't require a PhD to configure. Every feature is designed to be set up in minutes, not months.",
    color: '#F59E0B',
  },
  {
    id: 'value-trust',
    icon: '🔒',
    title: 'Trust',
    body: 'Multi-tenant architecture with zero cross-organization data access. Your customer data is yours, always.',
    color: '#10B981',
  },
  {
    id: 'value-growth',
    icon: '📈',
    title: 'Growth',
    body: "We measure our success by your retention metrics, not your subscription. If it doesn't drive repeat business, it doesn't ship.",
    color: '#EC4899',
  },
];

const ValuesSection = () => (
  <section
    id="about-values"
    style={{ padding: '100px 0', background: 'var(--bg)' }}
    aria-labelledby="values-heading"
  >
    <div className="container">
      <div className="section-header text-center" style={{ marginBottom: '56px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)',
          border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px',
          padding: '6px 18px', fontSize: '0.8125rem', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px',
        }}>Our Values</div>
        <h2
          id="values-heading"
          style={{ fontSize: '2.25rem', fontWeight: 800 }}
        >
          What we stand for
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '24px',
        perspective: '1200px'
      }}>
        {values.map((val, i) => (
          <motion.article
            key={val.id}
            id={val.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
            aria-label={val.title}
            style={{
              padding: '28px',
              cursor: 'default',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              transformStyle: 'preserve-3d',
              marginTop: i % 2 !== 0 ? '30px' : '0px'
            }}
            className="glass-panel"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 20px 50px ${val.color}25`;
              e.currentTarget.style.borderColor = `${val.color}55`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            <div style={{ transform: 'translateZ(20px)' }}>
            {/* Glow stripe */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
              background: `linear-gradient(90deg, ${val.color}00, ${val.color}, ${val.color}00)`,
              opacity: 0.7,
            }} />

            <div style={{
              width: '52px', height: '52px', borderRadius: '14px',
              background: `${val.color}14`, border: `1px solid ${val.color}25`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.625rem', marginBottom: '18px',
            }} aria-hidden="true">
              {val.icon}
            </div>

            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px', color: val.color }}>
              {val.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
              {val.body}
            </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
