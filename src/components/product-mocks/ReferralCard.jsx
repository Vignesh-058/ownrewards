import React from 'react';
import { motion } from 'framer-motion';

const ReferralCard = ({
  programName = 'Give ₹100, Get 500 Pts',
  status = 'Active',
  referrerReward = '500 Points',
  refereeReward = '₹100 Coupon',
  eligibility = 'Silver+ Tiers Only',
  stats = { generated: 1240, used: 842, awarded: 421000, conversion: '67.9%' }
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(16,185,129,0.1)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        background: 'var(--surface)',
        border: '1px solid rgba(16,185,129,0.3)',
        borderRadius: '20px',
        padding: '28px',
        color: 'var(--text)',
        minWidth: '320px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '1.125rem', fontWeight: 800 }}>{programName}</h4>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Eligibility: {eligibility}</div>
        </div>
        <div style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', padding: '4px 10px', borderRadius: '12px', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>
          {status}
        </div>
      </div>

      {/* Rewards Config */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Referrer Gets</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--primary)' }}>{referrerReward}</div>
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Referee Gets</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#EC4899' }}>{refereeReward}</div>
        </div>
      </div>

      {/* Visual Flow */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '1.25rem' }}>👤</span>
          <span>Customer</span>
        </div>
        <span>→</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '1.25rem' }}>🔗</span>
          <span>Referral</span>
        </div>
        <span>→</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '1.25rem' }}>🛍️</span>
          <span>Purchase</span>
        </div>
        <span>→</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '1.25rem' }}>🎁</span>
          <span>Rewards</span>
        </div>
      </div>

      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Conversion</div>
          <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#10B981' }}>{stats.conversion}</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Codes Used</div>
          <div style={{ fontSize: '1.125rem', fontWeight: 800 }}>{stats.used}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReferralCard;
