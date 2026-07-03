import React from 'react';
import { motion } from 'framer-motion';

const RuleCard = ({
  ruleName = 'Birthday Bonus Rule',
  status = 'ACTIVE',
  trigger = 'customer_birthday',
  conditions = ['tier IN [Gold, Platinum]'],
  actions = [
    { label: 'add_bonus_points', val: '+500' },
    { label: 'issue_coupon', val: 'BDAY20' },
    { label: 'send_notification', val: 'WhatsApp' }
  ],
  priority = '10',
  limits = '1/customer/year',
  fired = '1,247'
}) => {
  return (
    <motion.div
      id="mock-rule-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(99,102,241,0.1)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="glass-panel"
      style={{
        padding: '28px',
        color: 'var(--text)',
        minWidth: '320px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '1.125rem', fontWeight: 800 }}>⚡ {ruleName}</h4>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', padding: '4px 10px', borderRadius: '12px', color: '#10B981', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
          <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
          {status}
        </div>
      </div>

      {/* Logic Flow */}
      <div style={{ background: 'var(--bg)', borderRadius: '12px', padding: '16px', border: '1px solid var(--border)', marginBottom: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
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
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Conditions</div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {actions.map((a, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>{i + 1}.</span>
                  <code style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8125rem' }}>
                    {a.label}
                  </code>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)' }}>{a.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Priority</div>
          <div style={{ fontSize: '1rem', fontWeight: 800 }}>{priority}</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Max</div>
          <div style={{ fontSize: '1rem', fontWeight: 800 }}>{limits}</div>
        </div>
        <div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700 }}>Fired</div>
          <div style={{ fontSize: '1rem', fontWeight: 800 }}>{fired}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default RuleCard;
