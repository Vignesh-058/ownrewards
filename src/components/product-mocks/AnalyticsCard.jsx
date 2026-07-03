import React from 'react';
import { motion } from 'framer-motion';

const AnalyticsCard = ({
  metrics = {
    roi: '284%',
    retention: '67.4%',
    active: '12,450',
    ltv: '₹4,800'
  },
  tiers = [
    { name: 'Bronze', pct: 45, color: '#CD7F32' },
    { name: 'Silver', pct: 30, color: '#94A3B8' },
    { name: 'Gold', pct: 18, color: '#F59E0B' },
    { name: 'Platinum', pct: 7, color: '#E2E8F0' },
  ]
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(99,102,241,0.1)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '20px',
        padding: '24px',
        color: 'var(--text)',
        minWidth: '300px',
      }}
    >
      <h4 style={{ margin: '0 0 20px 0', fontSize: '1.125rem', fontWeight: 800 }}>Platform Analytics</h4>

      {/* Top Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
        {[
          { label: 'Reward ROI', val: metrics.roi, color: '#10B981' },
          { label: 'Avg Retention', val: metrics.retention, color: '#6366F1' },
          { label: 'Active Members', val: metrics.active, color: 'var(--text)' },
          { label: 'Avg LTV', val: metrics.ltv, color: '#EC4899' },
        ].map((m, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>{m.label}</div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: m.color }}>{m.val}</div>
          </div>
        ))}
      </div>

      {/* Tier Distribution Bars */}
      <div>
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>Tier Distribution</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {tiers.map((t, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px' }}>
                <span style={{ color: t.color, fontWeight: 700 }}>{t.name}</span>
                <span style={{ fontWeight: 600 }}>{t.pct}%</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${t.pct}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: i * 0.1 }}
                  viewport={{ once: true }}
                  style={{ height: '100%', background: t.color, borderRadius: '3px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsCard;
