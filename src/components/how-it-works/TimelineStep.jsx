import React from 'react';
import { motion } from 'framer-motion';

/* ─── Small reusable flow diagram ─────────────────────────────── */
const FlowDiagram = ({ steps, color = 'var(--primary)' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', marginTop: '14px' }}>
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div style={{
          background: `${color}14`, border: `1px solid ${color}30`,
          borderRadius: '8px', padding: '5px 14px',
          fontSize: '0.75rem', fontWeight: 600, color,
          whiteSpace: 'nowrap',
        }}>
          {step}
        </div>
        {i < steps.length - 1 && (
          <div style={{ marginLeft: '18px', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1, userSelect: 'none' }}>↓</div>
        )}
      </React.Fragment>
    ))}
  </div>
);

/* ─── Action pill grid ─────────────────────────────────────────── */
const ActionGrid = ({ actions }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '14px' }}>
    {actions.map(({ label, color }) => (
      <motion.span
        key={label}
        whileHover={{ scale: 1.05 }}
        style={{
          background: `${color}14`, border: `1px solid ${color}30`,
          borderRadius: '20px', padding: '4px 12px',
          fontSize: '0.7rem', fontWeight: 700, color,
        }}
      >
        {label}
      </motion.span>
    ))}
  </div>
);

/* ─── Analytics mini dashboard ─────────────────────────────────── */
const AnalyticsMini = () => {
  const kpis = [
    { label: 'Revenue', value: '+22%', color: '#10B981' },
    { label: 'Retention', value: '68%', color: '#6366F1' },
    { label: 'ROI', value: '312%', color: '#F59E0B' },
    { label: 'LTV', value: '₹8.4k', color: '#EC4899' },
  ];
  return (
    <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
      {kpis.map(({ label, value, color }) => (
        <div key={label} style={{
          background: `${color}10`, border: `1px solid ${color}25`,
          borderRadius: '8px', padding: '8px 10px', textAlign: 'center',
        }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: '2px' }}>{label}</div>
          <div style={{ fontSize: '1rem', fontWeight: 800, color }}>{value}</div>
        </div>
      ))}
      <div style={{
        gridColumn: '1 / -1', background: 'var(--border)', borderRadius: '4px',
        height: '6px', overflow: 'hidden', marginTop: '2px',
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '75%' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          style={{ height: '100%', background: 'linear-gradient(90deg,#6366F1,#10B981)', borderRadius: '4px' }}
        />
      </div>
      <div style={{ gridColumn: '1 / -1', fontSize: '0.65rem', color: 'var(--muted)', textAlign: 'center' }}>
        Tier Distribution
      </div>
    </div>
  );
};

/* ─── Step visual renderer ─────────────────────────────────────── */
const StepVisual = ({ visual }) => {
  if (visual === 'purchase') return <FlowDiagram steps={['POS Bill', 'Webhook', 'ownRewards']} color="#F59E0B" />;
  if (visual === 'points') return <FlowDiagram steps={['Purchase Amount', 'Tier Multiplier', 'Points Earned']} color="#6366F1" />;
  if (visual === 'rules') return <FlowDiagram steps={['Trigger', 'Conditions', 'Validation', 'Execution']} color="#6366F1" />;
  if (visual === 'actions') return (
    <ActionGrid actions={[
      { label: 'Bonus Points', color: '#6366F1' },
      { label: 'Reward', color: '#10B981' },
      { label: 'Coupon', color: '#F59E0B' },
      { label: 'Tier Upgrade', color: '#D97706' },
      { label: 'WhatsApp', color: '#10B981' },
      { label: 'Notification', color: '#EC4899' },
    ]} />
  );
  if (visual === 'wallet') return <FlowDiagram steps={['Wallet', 'Reward', 'Coupon', 'Message']} color="#10B981" />;
  if (visual === 'redeem') return <FlowDiagram steps={['Customer', 'OTP', 'Validation', 'Reward Redeemed']} color="#F59E0B" />;
  if (visual === 'referral') return <FlowDiagram steps={['Customer', 'Friend', 'Purchase', 'Rewards']} color="#EC4899" />;
  if (visual === 'analytics') return <AnalyticsMini />;
  return null;
};

/* ─── Highlight Pill ────────────────────────────────────────────── */
const HighlightPill = ({ text, color = 'var(--primary)' }) => (
  <span style={{
    display: 'inline-block',
    background: 'rgba(99,102,241,0.08)', color,
    border: `1px solid ${color}30`,
    borderRadius: '20px', padding: '4px 14px',
    fontSize: '0.78rem', fontWeight: 700, marginBottom: '12px',
    whiteSpace: 'nowrap',
  }}>
    {text}
  </span>
);

/* ─── Single Timeline Step ─────────────────────────────────────── */
const TimelineStep = ({ step, index, isLeft }) => {
  const isEven = index % 2 === 0;
  // On desktop: even = left, odd = right. Always left on mobile.
  const pillColors = [
    '#F59E0B', '#6366F1', '#6366F1', '#10B981',
    '#10B981', '#F59E0B', '#EC4899', '#6366F1',
  ];
  const color = pillColors[index] || 'var(--primary)';

  return (
    <div
      id={`step-${step.number}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 64px 1fr',
        alignItems: 'start',
        gap: '0',
        marginBottom: '0',
      }}
      role="listitem"
      aria-label={`Step ${step.number}: ${step.title}`}
    >
      {/* LEFT CONTENT (desktop even steps) */}
      <div style={{
        padding: '0 40px 60px 0',
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
        {isEven ? (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            style={{
              maxWidth: '380px', width: '100%',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '20px', padding: '28px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
            }}
            whileHover={{ boxShadow: `0 12px 40px ${color}22`, borderColor: `${color}55` }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }} aria-hidden="true">{step.icon}</div>
            <HighlightPill text={step.pill} color={color} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3 }}>{step.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{step.body}</p>
            <StepVisual visual={step.visual} />
          </motion.div>
        ) : <div />}
      </div>

      {/* CENTER: Number circle + line */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
          viewport={{ once: true, margin: '-60px' }}
          style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: color, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 800, fontSize: '1rem',
            boxShadow: `0 0 0 4px ${color}25, 0 4px 20px ${color}40`,
            flexShrink: 0, zIndex: 2, position: 'relative',
          }}
        >
          {String(step.number).padStart(2, '0')}
        </motion.div>
      </div>

      {/* RIGHT CONTENT (desktop odd steps) */}
      <div style={{
        padding: '0 0 60px 40px',
        display: 'flex',
        justifyContent: 'flex-start',
      }}>
        {!isEven ? (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            style={{
              maxWidth: '380px', width: '100%',
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '20px', padding: '28px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
            }}
            whileHover={{ boxShadow: `0 12px 40px ${color}22`, borderColor: `${color}55` }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }} aria-hidden="true">{step.icon}</div>
            <HighlightPill text={step.pill} color={color} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3 }}>{step.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{step.body}</p>
            <StepVisual visual={step.visual} />
          </motion.div>
        ) : <div />}
      </div>
    </div>
  );
};

export default TimelineStep;
