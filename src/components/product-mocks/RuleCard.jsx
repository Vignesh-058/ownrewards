import React from 'react';
import { motion } from 'framer-motion';

const RuleCard = ({
  ruleName = 'Birthday Bonus Rule',
  status = 'ACTIVE',
  trigger = 'customer_birthday',
  conditions = ['has_tier >= Bronze', 'account_age_days > 30'],
  actions = ['grant_points(500)', 'issue_coupon("BDAY20")', 'send_whatsapp("bday_template")'],
  priority = 'High',
  limits = 'Max 1 per year per customer',
  stats = { executions: '1,420', revenue: '₹4.2L' }
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(99,102,241,0.1)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        background: 'var(--surface)',
        border: '1px solid rgba(99,102,241,0.25)',
        borderRadius: '20px',
        padding: '28px',
        color: 'var(--text)',
        minWidth: '320px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '1.125rem', fontWeight: 800 }}>{ruleName}</h4>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Priority: {priority} • {limits}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', padding: '4px 10px', borderRadius: '12px', color: '#10B981', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
          {status}
        </div>
      </div>

      {/* Logic Flow */}
      <div style={{ background: 'var(--bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--border)', marginBottom: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          
          {/* Trigger */}
          <div>
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Trigger</div>
            <code style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8125rem' }}>
              {trigger}
            </code>
          </div>

          <div style={{ color: 'var(--muted)', marginLeft: '12px', fontSize: '0.8rem' }}>↓</div>

          {/* Conditions */}
          <div>
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Conditions (AND)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {conditions.map((c, i) => (
                <code key={i} style={{ background: 'rgba(99,102,241,0.1)', color: '#A5B4FC', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8125rem', width: 'fit-content' }}>
                  {c}
                </code>
              ))}
            </div>
          </div>

          <div style={{ color: 'var(--muted)', marginLeft: '12px', fontSize: '0.8rem' }}>↓</div>

          {/* Actions */}
          <div>
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {actions.map((a, i) => (
                <code key={i} style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8125rem', width: 'fit-content' }}>
                  {a}
                </code>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Executions</div>
          <div style={{ fontSize: '1.125rem', fontWeight: 800 }}>{stats.executions}</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Revenue Driven</div>
          <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#10B981' }}>{stats.revenue}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default RuleCard;
