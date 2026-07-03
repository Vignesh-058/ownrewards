import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const cards = [
  {
    icon: '🧠',
    title: 'Rules That Think',
    body: 'Not just "earn 1 point per ₹100". Set 30+ trigger events — birthday, nth visit, inactivity, feedback, referral — and automate any action: bonus points, reward grants, tier changes, coupon issuance.',
    highlight: ['Birthday', 'Nth Visit', 'Inactivity', 'Referral', 'Feedback'],
  },
  {
    icon: '🏆',
    title: 'Tiers That Mean Something',
    body: 'Bronze → Silver → Gold → Platinum with dynamic progression, tier-based multipliers, and lifecycle stage tracking (active, at-risk, churned). Customers feel the difference.',
    tiers: ['Bronze', 'Silver', 'Gold', 'Platinum'],
  },
  {
    icon: '📊',
    title: 'Analytics That Drive Decisions',
    body: 'Track cohort retention curves, reward ROI, product correlations, and customer lifetime value — not just points totals.',
    metrics: ['ROI', 'Retention', 'LTV', 'Product Intelligence'],
  },
];

const tierColors = {
  Bronze: { bg: 'rgba(180,83,9,0.1)', color: '#B45309', border: 'rgba(180,83,9,0.25)' },
  Silver: { bg: 'rgba(100,116,139,0.1)', color: '#64748B', border: 'rgba(100,116,139,0.25)' },
  Gold: { bg: 'rgba(245,158,11,0.1)', color: '#D97706', border: 'rgba(245,158,11,0.25)' },
  Platinum: { bg: 'rgba(99,102,241,0.1)', color: '#6366F1', border: 'rgba(99,102,241,0.25)' },
};

const Differentiators = () => {
  return (
    <section
      id="differentiators"
      style={{ padding: '60px 0', background: 'var(--bg)' }}
      aria-labelledby="differentiators-heading"
    >
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '64px' }}>
          <h2
            id="differentiators-heading"
            className="headline"
            style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}
          >
            Why businesses choose ownRewards
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto' }}>
            Three capabilities that separate us from generic loyalty software.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
            perspective: '1200px'
          }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.02, rotateY: i === 0 ? 5 : i === 2 ? -5 : 0, rotateX: 2 }}
              style={{
                height: '100%',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                transformStyle: 'preserve-3d',
                cursor: 'default'
              }}
              className="glass-panel"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(99,102,241,0.2)`;
                e.currentTarget.style.borderColor = `rgba(99,102,241,0.5)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ transform: 'translateZ(20px)', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Icon */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'rgba(99,102,241,0.08)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem',
                    border: '1px solid rgba(99,102,241,0.15)',
                  }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.375rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>{card.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: '0.95rem' }}>
                    {card.body}
                  </p>
                </div>
              </div>

              <div style={{ transform: 'translateZ(30px)' }}>

                {/* Tiers visual for card 2 */}
                {card.tiers && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {card.tiers.map((tier) => (
                      <span
                        key={tier}
                        style={{
                          background: tierColors[tier].bg,
                          color: tierColors[tier].color,
                          border: `1px solid ${tierColors[tier].border}`,
                          borderRadius: '20px',
                          padding: '4px 14px',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                        }}
                      >
                        {tier}
                      </span>
                    ))}
                  </div>
                )}

                {/* Metrics visual for card 3 */}
                {card.metrics && (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '8px',
                    }}
                  >
                    {card.metrics.map((m) => (
                      <div
                        key={m}
                        style={{
                          background: 'rgba(99,102,241,0.06)',
                          border: '1px solid rgba(99,102,241,0.12)',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          color: 'var(--primary)',
                          textAlign: 'center',
                        }}
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
