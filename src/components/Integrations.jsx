import React from 'react';
import { motion } from 'framer-motion';

const integrations = [
  { icon: '🍽️', label: 'Petpooja', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)' },
  { icon: '🖥️', label: 'Custom POS', color: '#6366F1', bg: 'rgba(99,102,241,0.08)' },
  { icon: '💬', label: 'ownChat (WhatsApp)', color: '#10B981', bg: 'rgba(16,185,129,0.08)' },
  { icon: '🔌', label: 'REST API', color: '#3B82F6', bg: 'rgba(59,130,246,0.08)' },
  { icon: '🔗', label: 'Webhooks', color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)' },
  { icon: '🛒', label: 'ownCart', color: '#EC4899', bg: 'rgba(236,72,153,0.08)' },
];

const Integrations = () => {
  return (
    <section
      id="integrations"
      style={{ padding: '80px 0', background: 'var(--bg)' }}
      aria-labelledby="integrations-heading"
    >
      <div className="container">
        <h2
          id="integrations-heading"
          style={{
            textAlign: 'center',
            color: 'var(--muted)',
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '40px',
          }}
        >
          Built to connect with your stack
        </h2>

        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', padding: '20px 0' }}>
          <div className="animate-marquee" style={{ gap: '24px' }}>
            {[...integrations, ...integrations, ...integrations].map((item, i) => (
              <motion.div
                key={`${item.label}-${i}`}
                whileHover={{ y: -4, boxShadow: `0 8px 24px ${item.color}33`, scale: 1.05 }}
                className="glass-panel"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  background: item.bg,
                  border: `1px solid ${item.color}33`,
                  borderRadius: '99px',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                }}
                aria-label={item.label}
              >
                <span style={{ fontSize: '1.5rem' }} aria-hidden="true">{item.icon}</span>
                <span style={{ fontWeight: 700, color: item.color, fontSize: '1rem', whiteSpace: 'nowrap' }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--background), transparent)', zIndex: 10, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--background), transparent)', zIndex: 10, pointerEvents: 'none' }} />
        </div>
      </div>
    </section>
  );
};

export default Integrations;
