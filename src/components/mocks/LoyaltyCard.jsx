import React from 'react';
import { motion } from 'framer-motion';

const LoyaltyCard = ({
  customerName = 'Arjun Mehta',
  phone = '+91 98765 43210',
  tier = 'Gold',
  points = '2,450',
  progress = 80,
  remaining = 550,
  lastActivity = { label: 'Birthday Rule', points: '+500 pts', time: '5 min ago' },
  rewards = ['10% OFF', 'Free Coffee', '₹100 Back'],
}) => {
  return (
    <motion.div
      id="mock-loyalty-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: '0 24px 80px rgba(245,158,11,0.15)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="glass-panel"
      style={{
        padding: '32px',
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
          {tier} Tier
        </div>
      </div>

      {/* Points & Progress */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase' }}>Points Balance</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>{points} <span style={{fontSize: '1.25rem'}}>pts</span></div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 700 }}>{progress}% to Platinum</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Need {remaining} more points</div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }} aria-label="Progress to Platinum" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
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
        {/* Last Activity */}
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>Last Activity</div>
          <div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{lastActivity.label}</div>
            <div style={{ fontSize: '0.875rem', color: '#10B981', fontWeight: 700 }}>{lastActivity.points}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{lastActivity.time}</div>
          </div>
        </div>

        {/* Active Rewards */}
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>Active Rewards</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {rewards.map((r, i) => (
              <span key={i} style={{ background: 'rgba(99,102,241,0.15)', color: '#A5B4FC', border: '1px solid rgba(99,102,241,0.3)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 600 }}>
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoyaltyCard;
