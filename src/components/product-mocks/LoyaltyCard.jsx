import React from 'react';
import { motion } from 'framer-motion';

const LoyaltyCard = ({
  customerName = 'Arjun Mehta',
  phone = '+91 98765 43210',
  tier = 'Gold',
  points = 1450,
  progress = 72,
  remaining = 550,
  recentActivity = 'Purchased ₹1,200 (+120 pts)',
  rewards = ['Free Dessert', '10% Off Next Order'],
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: '0 24px 80px rgba(245,158,11,0.15)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        background: 'linear-gradient(145deg, rgba(15,17,35,0.95) 0%, rgba(20,20,45,0.95) 100%)',
        border: '1px solid rgba(245,158,11,0.3)',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
        position: 'relative',
        overflow: 'hidden',
        color: 'var(--text)',
        minWidth: '320px',
      }}
      aria-label={`${customerName}'s Loyalty Profile`}
    >
      {/* Glow Effect */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px', width: '200px', height: '200px',
        background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.25rem', fontWeight: 800, boxShadow: '0 4px 16px rgba(245,158,11,0.4)',
          }}>
            {customerName.charAt(0)}
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.125rem', fontWeight: 700 }}>{customerName}</h4>
            <div style={{ color: 'var(--muted)', fontSize: '0.8125rem' }}>{phone}</div>
          </div>
        </div>
        
        {/* Tier Badge */}
        <div style={{
          background: 'rgba(245,158,11,0.15)', color: '#F59E0B', border: '1px solid rgba(245,158,11,0.3)',
          padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 800,
          boxShadow: '0 0 20px rgba(245,158,11,0.1)', letterSpacing: '0.05em', textTransform: 'uppercase',
        }}>
          {tier} Member
        </div>
      </div>

      {/* Points & Progress */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase' }}>Available Points</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>{points.toLocaleString()}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>{progress}% to Platinum</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{remaining} pts needed</div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            style={{ height: '100%', background: 'linear-gradient(90deg, #F59E0B, #FCD34D)', borderRadius: '4px' }}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Active Rewards */}
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>Active Rewards</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {rewards.map((r, i) => (
              <span key={i} style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981', border: '1px solid rgba(16,185,129,0.3)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>Recent Activity</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem' }}>
            {/* Pulse Indicator */}
            <motion.div
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366F1', boxShadow: '0 0 10px #6366F1' }}
            />
            {recentActivity}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoyaltyCard;
