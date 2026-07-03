import React from 'react';
import { motion } from 'framer-motion';

const ReferralCard = ({
  programName = 'Refer a Friend',
  status = 'Active',
  referrerReward = '500 Points',
  refereeReward = '₹100 Flat',
  eligibility = [
    { label: 'Tier', val: 'Silver' },
    { label: 'Age', val: '30 Days' },
    { label: 'LTV', val: '₹2,000 Spend' }
  ],
  stats = { generated: 248, used: 189, awarded: '₹18,900', conversion: '71.4%', usedPct: '76.2%' }
}) => {
  return (
    <motion.div
      id="mock-referral-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(16,185,129,0.1)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="glass-panel"
      style={{
        padding: '28px',
        color: 'var(--text)',
        minWidth: '320px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '1.25rem', fontWeight: 800 }}>{programName}</h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {eligibility.map((e, i) => (
              <span key={i} style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700, border: '1px solid rgba(245,158,11,0.2)' }}>
                {e.val}
              </span>
            ))}
          </div>
        </div>
        <div style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', padding: '4px 10px', borderRadius: '12px', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', border: '1px solid rgba(16,185,129,0.3)' }}>
          {status}
        </div>
      </div>

      {/* Rewards Config */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <div style={{ flex: 1, background: 'rgba(245,158,11,0.05)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(245,158,11,0.2)' }}>
          <div style={{ fontSize: '0.65rem', color: '#F59E0B', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Referrer Reward</div>
          <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)' }}>{referrerReward}</div>
        </div>
        <div style={{ flex: 1, background: 'rgba(16,185,129,0.05)', padding: '12px', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.2)' }}>
          <div style={{ fontSize: '0.65rem', color: '#10B981', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Referee Reward</div>
          <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)' }}>{refereeReward}</div>
        </div>
      </div>

      {/* Visual Flow */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><span style={{ fontSize: '1.25rem' }}>👤</span><span>Customer</span></div>
        <span>→</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><span style={{ fontSize: '1.25rem' }}>🔗</span><span>Referral</span></div>
        <span>→</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><span style={{ fontSize: '1.25rem' }}>🛍️</span><span>Purchase</span></div>
        <span>→</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}><span style={{ fontSize: '1.25rem' }}>🎁</span><span>Rewards</span></div>
      </div>

      {/* Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Codes Gen / Used</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
            <span style={{ fontSize: '1rem', fontWeight: 800 }}>{stats.generated}</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>/ {stats.used}</span>
            <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 700 }}>({stats.usedPct})</span>
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Rewards Awarded</div>
          <div style={{ fontSize: '1rem', fontWeight: 800 }}>{stats.awarded}</div>
        </div>
        <div style={{ gridColumn: 'span 2', background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Overall Conversion</span>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10B981' }}>{stats.conversion}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ReferralCard;
