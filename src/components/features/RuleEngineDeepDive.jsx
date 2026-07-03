import React from 'react';
import { motion } from 'framer-motion';

const triggerGroups = [
  {
    label: 'Transactional',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    triggers: ['bill_created', 'cart_validated', 'bill_refunded', 'payment_completed'],
  },
  {
    label: 'Behavioral',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.08)',
    triggers: ['customer_first_visit', 'customer_nth_visit', 'customer_milestone_reached'],
  },
  {
    label: 'Temporal',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    triggers: ['customer_birthday', 'customer_anniversary', 'customer_win_back', 'inactivity_detected', 'loyalty_expiring_soon'],
  },
  {
    label: 'Engagement',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.08)',
    triggers: ['customer_feedback_submitted', 'customer_reviewed', 'customer_referred'],
  },
];

const flowSteps = [
  { label: 'Trigger', icon: '⚡', desc: 'Event fires (e.g. birthday)' },
  { label: 'Conditions', icon: '🔍', desc: 'AND/OR logic check' },
  { label: 'Actions', icon: '🎯', desc: 'Award points · Issue coupon' },
  { label: 'Notifications', icon: '📱', desc: 'WhatsApp · Push · Email' },
  { label: 'Analytics', icon: '📊', desc: 'Track ROI & conversions' },
];

const RuleEngineDeepDive = () => {
  return (
    <section
      id="deep-dive-rules"
      style={{ padding: '100px 0', background: 'var(--surface)' }}
      aria-labelledby="rule-engine-heading"
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}>

          {/* ─── LEFT: Content ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'inline-block', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)',
              border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px', padding: '6px 18px',
              fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
              marginBottom: '20px',
            }}>Rule Engine</div>

            <h2
              id="rule-engine-heading"
              style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2 }}
            >
              The brain of your loyalty program.
            </h2>

            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '40px' }}>
              Each trigger supports AND/OR condition logic. Set execution limits per customer and globally. Run A/B test variants (A/B/control) on any rule.
            </p>

            {/* Trigger Groups */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {triggerGroups.map((group) => (
                <div key={group.label}>
                  <div style={{
                    fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.08em', color: group.color, marginBottom: '10px',
                  }}>{group.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {group.triggers.map((t) => (
                      <code
                        key={t}
                        style={{
                          background: group.bg, color: group.color,
                          border: `1px solid ${group.color}33`,
                          borderRadius: '6px', padding: '4px 10px',
                          fontSize: '0.75rem', fontWeight: 600,
                        }}
                      >{t}</code>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── RIGHT: Interactive Rule Mock ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true }}
          >
            {/* Automation Flow Card */}
            <div style={{
              background: 'var(--bg)', border: '1px solid var(--border)',
              borderRadius: '20px', padding: '28px',
              boxShadow: '0 8px 32px rgba(99,102,241,0.08)',
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '24px', color: 'var(--text)' }}>
                ⚡ Automation Flow
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {flowSteps.map((step, i) => (
                  <React.Fragment key={step.label}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.12, type: 'spring', stiffness: 140 }}
                      viewport={{ once: true }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '14px',
                        padding: '14px 16px', borderRadius: '12px',
                        background: 'var(--surface)', border: '1px solid var(--border)',
                      }}
                    >
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '10px',
                        background: 'rgba(99,102,241,0.1)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0,
                      }}>{step.icon}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{step.label}</div>
                        <div style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>{step.desc}</div>
                      </div>
                    </motion.div>
                    {i < flowSteps.length - 1 && (
                      <div style={{
                        marginLeft: '33px', width: '2px', height: '16px',
                        background: 'var(--border)', alignSelf: 'flex-start', marginLeft: '34px',
                      }} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Example Rule */}
              <div style={{
                marginTop: '24px', padding: '16px', borderRadius: '12px',
                background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Live Example
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[
                    ['Trigger', 'customer_birthday'],
                    ['Award', '+500 bonus points'],
                    ['Issue', 'Coupon: BDAY20'],
                    ['Notify', 'WhatsApp message'],
                    ['Limit', '1× per customer/year'],
                  ].map(([label, val]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem' }}>
                      <span style={{ color: 'var(--muted)' }}>{label}</span>
                      <span style={{ color: 'var(--text)', fontWeight: 600 }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RuleEngineDeepDive;
