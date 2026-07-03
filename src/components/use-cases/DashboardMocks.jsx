import React from 'react';
import { motion } from 'framer-motion';

/* ─── Shared tiny primitives ──────────────────────────────────── */
const MiniRow = ({ label, value, valueColor = 'var(--text)' }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8125rem', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
    <span style={{ color: 'var(--muted)' }}>{label}</span>
    <span style={{ fontWeight: 700, color: valueColor }}>{value}</span>
  </div>
);

const MiniBar = ({ pct, color = 'var(--primary)' }) => (
  <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden', marginTop: '4px' }}>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${pct}%` }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
      style={{ height: '100%', background: color, borderRadius: '3px' }}
    />
  </div>
);

const DashCard = ({ children, style }) => (
  <div 
    className="glass-panel"
    style={{
      padding: '16px',
      ...style,
    }}
  >
    {children}
  </div>
);

const FlowStep = ({ label, color, isLast }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
    <div style={{
      background: `${color}14`, border: `1px solid ${color}30`,
      borderRadius: '8px', padding: '5px 14px',
      fontSize: '0.75rem', fontWeight: 700, color, whiteSpace: 'nowrap',
    }}>{label}</div>
    {!isLast && <div style={{ marginLeft: '16px', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1 }}>↓</div>}
  </div>
);

/* ─── Mock 1: Restaurant Loyalty Dashboard ────────────────────── */
export const RestaurantMock = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
  >
    {/* Wallet card */}
    <DashCard>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '2px' }}>Priya Sharma • Customer Wallet</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>3,420 pts</div>
        </div>
        <div style={{
          background: 'rgba(245,158,11,0.1)', color: '#D97706',
          border: '1px solid rgba(245,158,11,0.3)', borderRadius: '20px',
          padding: '4px 12px', fontSize: '0.75rem', fontWeight: 700,
        }}>🥇 Gold Tier</div>
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '4px' }}>Progress to Platinum · 580 pts away</div>
      <MiniBar pct={85} color="#D97706" />
    </DashCard>

    {/* Workflow */}
    <DashCard>
      <div style={{ fontSize: '0.8125rem', fontWeight: 700, marginBottom: '12px' }}>🔄 Petpooja → Loyalty Flow</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {[
          ['Customer Bill', '#F59E0B'],
          ['Petpooja Sync', '#6366F1'],
          ['Rule Engine', '#6366F1'],
          ['Bonus Points', '#10B981'],
          ['Coupon Issued', '#10B981'],
          ['WhatsApp Sent', '#10B981'],
        ].map(([label, color], i, arr) => (
          <FlowStep key={label} label={label} color={color} isLast={i === arr.length - 1} />
        ))}
      </div>
    </DashCard>

    {/* Recent rewards */}
    <DashCard>
      <div style={{ fontSize: '0.8125rem', fontWeight: 700, marginBottom: '10px' }}>Recent Rewards</div>
      <MiniRow label="Birthday Bonus" value="+500 pts" valueColor="#6366F1" />
      <MiniRow label="Coupon BDAY20" value="20% Off" valueColor="#10B981" />
      <MiniRow label="Win-Back Reward" value="Free Dessert" valueColor="#F59E0B" />
    </DashCard>
  </motion.div>
);

/* ─── Mock 2: Retail Analytics Dashboard ──────────────────────── */
export const RetailMock = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
  >
    {/* KPIs */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      {[
        { label: 'Predicted LTV', value: '₹12,400', color: '#6366F1' },
        { label: 'Churn Risk', value: '11%', color: '#F59E0B' },
        { label: 'Health Score', value: '92/100', color: '#10B981' },
        { label: 'Cohort LTV', value: '+34%', color: '#EC4899' },
      ].map(({ label, value, color }) => (
        <DashCard key={label} style={{ textAlign: 'center', padding: '12px' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '4px' }}>{label}</div>
          <div style={{ fontSize: '1.125rem', fontWeight: 800, color }}>{value}</div>
        </DashCard>
      ))}
    </div>

    {/* Coupon validation flow */}
    <DashCard>
      <div style={{ fontSize: '0.8125rem', fontWeight: 700, marginBottom: '12px' }}>🏷️ Coupon Validation Flow</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {[['Gold Tier Gate', '#D97706'], ['Validate SHOE20', '#6366F1'], ['Budget Check ₹50k', '#F59E0B'], ['Apply 20% Discount', '#10B981']].map(([label, color], i, arr) => (
          <FlowStep key={label} label={label} color={color} isLast={i === arr.length - 1} />
        ))}
      </div>
    </DashCard>

    {/* Campaign budget */}
    <DashCard>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '6px' }}>
        <span style={{ fontWeight: 700 }}>Campaign Budget</span>
        <span style={{ color: '#10B981', fontWeight: 700 }}>₹32k remaining</span>
      </div>
      <MiniBar pct={36} color="#EC4899" />
      <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '4px' }}>₹18,000 of ₹50,000 spent · auto-stops at limit</div>
    </DashCard>
  </motion.div>
);

/* ─── Mock 3: D2C Referral Dashboard ─────────────────────────── */
export const EcommerceMock = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
  >
    {/* Referral flow */}
    <DashCard>
      <div style={{ fontSize: '0.8125rem', fontWeight: 700, marginBottom: '12px' }}>👥 Referral Journey</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {[['Customer Shares Code', '#6366F1'], ['Friend Registers', '#F59E0B'], ['First Purchase Made', '#10B981'], ['Referrer: +500 pts', '#10B981'], ['Referee: ₹100 Off', '#10B981'], ['Analytics Updated', '#6366F1']].map(([label, color], i, arr) => (
          <FlowStep key={label} label={label} color={color} isLast={i === arr.length - 1} />
        ))}
      </div>
    </DashCard>

    {/* Referral stats */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      <DashCard style={{ padding: '12px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '4px' }}>Referral Code</div>
        <code style={{ fontWeight: 800, color: '#6366F1', fontSize: '0.9rem' }}>PRIYA2024</code>
      </DashCard>
      <DashCard style={{ padding: '12px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '4px' }}>Status</div>
        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10B981' }}>✓ Active</div>
      </DashCard>
    </div>

    {/* Recent referrals */}
    <DashCard>
      <div style={{ fontSize: '0.8125rem', fontWeight: 700, marginBottom: '10px' }}>Recent Referrals</div>
      <MiniRow label="Rahul K." value="+500 pts" valueColor="#6366F1" />
      <MiniRow label="Sneha M." value="+500 pts" valueColor="#6366F1" />
      <MiniRow label="Total earned" value="₹4.2L" valueColor="#10B981" />
    </DashCard>
  </motion.div>
);
