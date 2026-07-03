import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 'analytic-reward-roi',
    icon: '📊',
    title: 'Reward Analytics & ROI',
    body: 'Per-reward: issued, redeemed, expired, conversion rate, avg redemption time, revenue impact, cost, ROI, unique customers, repeat customers. Granularity: hourly/daily/weekly/monthly/yearly.',
    visual: 'roi',
  },
  {
    id: 'analytic-cohort',
    icon: '📈',
    title: 'Cohort Retention Analysis',
    body: 'Group customers by first purchase month. Track month-by-month retention rates, revenue, churn rate, avg LTV, and avg order frequency per cohort.',
    visual: 'cohort',
  },
  {
    id: 'analytic-tiers',
    icon: '🏆',
    title: 'Tier Distribution & Movement',
    body: 'Visual breakdown of Bronze/Silver/Gold/Platinum customers. Track tier upgrades and downgrades over time. See how rule changes affect tier distribution.',
    visual: 'tiers',
  },
  {
    id: 'analytic-products',
    icon: '🛒',
    title: 'Product Intelligence',
    body: 'Top sellers, trending products, declining items, velocity scores. Product correlations — "frequently bought together" with association rule mining lift scores.',
    visual: 'products',
  },
  {
    id: 'analytic-lifecycle',
    icon: '👤',
    title: 'Customer Lifecycle',
    body: 'Prospect → active → at-risk → churned distribution. Segment health scores, churn risk, predicted LTV. Know who to activate before you lose them.',
    visual: 'lifecycle',
  },
  {
    id: 'analytic-campaigns',
    icon: '🎯',
    title: 'Campaign Performance',
    body: 'Targeted vs. actual participants, rewards granted vs. redeemed, revenue generated, ROI per campaign. A/B test variant comparison — see which offer wins.',
    visual: 'campaigns',
  },
];

const MiniBar = ({ pct, color }) => (
  <div style={{ height: '5px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden', flex: 1 }}>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${pct}%` }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
      style={{ height: '100%', background: color, borderRadius: '3px' }}
    />
  </div>
);

const CardVisual = ({ type }) => {
  const s = { marginTop: '14px', padding: '10px', borderRadius: '8px', background: 'rgba(99,102,241,0.04)', border: '1px solid var(--border)', fontSize: '0.75rem' };

  if (type === 'roi') return (
    <div style={s}>
      {[['Issued', 480, '#6366F1'], ['Redeemed', 312, '#10B981'], ['ROI', 284, '#F59E0B']].map(([l, v, c]) => (
        <div key={l} style={{ marginBottom: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
            <span style={{ color: 'var(--muted)' }}>{l}</span>
            <span style={{ color: c, fontWeight: 700 }}>{v}{l === 'ROI' ? '%' : ''}</span>
          </div>
          <MiniBar pct={(v / 500) * 100} color={c} />
        </div>
      ))}
    </div>
  );

  if (type === 'cohort') return (
    <div style={{ ...s, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px' }}>
      {[['100%', '#10B981'], ['74%', '#10B981'], ['61%', '#F59E0B'], ['55%', '#F59E0B'],
        ['100%', '#10B981'], ['71%', '#10B981'], ['58%', '#F59E0B'], ['—', '#94A3B8']].map(([v, c], i) => (
        <div key={i} style={{ textAlign: 'center', padding: '3px', background: `${c}18`, borderRadius: '4px', color: c, fontWeight: 700, fontSize: '0.65rem' }}>{v}</div>
      ))}
    </div>
  );

  if (type === 'tiers') return (
    <div style={{ ...s, display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {[['Bronze', 45, '#B45309'], ['Silver', 30, '#64748B'], ['Gold', 18, '#D97706'], ['Platinum', 7, '#6366F1']].map(([t, p, c]) => (
        <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '52px', color: c, fontWeight: 600, fontSize: '0.7rem', flexShrink: 0 }}>{t}</span>
          <MiniBar pct={p} color={c} />
          <span style={{ color: c, fontWeight: 700, fontSize: '0.7rem', flexShrink: 0 }}>{p}%</span>
        </div>
      ))}
    </div>
  );

  if (type === 'products') return (
    <div style={s}>
      {[['Butter Chicken', '₹82,400', '+12%', '#10B981'], ['Paneer Tikka', '₹61,200', '+8%', '#10B981'], ['Cold Coffee', '₹24,800', '→', '#F59E0B']].map(([p, r, t, c]) => (
        <div key={p} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: '1px solid var(--border)' }}>
          <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>{p}</span>
          <span style={{ fontWeight: 700, fontSize: '0.7rem', color: 'var(--text)' }}>{r}</span>
          <span style={{ fontWeight: 700, fontSize: '0.7rem', color: c }}>{t}</span>
        </div>
      ))}
    </div>
  );

  if (type === 'lifecycle') return (
    <div style={{ ...s, display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
      {[['Active', 62, '#10B981'], ['At-Risk', 21, '#F59E0B'], ['Churned', 12, '#EF4444'], ['New', 5, '#6366F1']].map(([l, p, c]) => (
        <div key={l} style={{ background: `${c}14`, border: `1px solid ${c}30`, borderRadius: '6px', padding: '4px 8px', textAlign: 'center', minWidth: '56px' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{l}</div>
          <div style={{ fontWeight: 800, color: c, fontSize: '0.875rem' }}>{p}%</div>
        </div>
      ))}
    </div>
  );

  if (type === 'campaigns') return (
    <div style={{ ...s, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
      {[['Variant A', '+18%', '#6366F1'], ['Variant B', '+11%', '#F59E0B'], ['Targeted', '2,840', '#10B981'], ['ROI', '312%', '#EC4899']].map(([l, v, c]) => (
        <div key={l} style={{ background: `${c}10`, border: `1px solid ${c}25`, borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>{l}</div>
          <div style={{ fontWeight: 800, color: c, fontSize: '0.8rem' }}>{v}</div>
        </div>
      ))}
    </div>
  );

  return null;
};

const AnalyticsFeaturesGrid = () => (
  <section id="analytics-features" style={{ padding: '80px 0', background: 'var(--surface)' }} aria-labelledby="analytics-features-heading">
    <div className="container">
      <div className="section-header text-center" style={{ marginBottom: '56px' }}>
        <h2 id="analytics-features-heading" style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '16px' }}>
          Every metric that matters to your business.
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto' }}>
          Six analytics modules purpose-built for loyalty programs — not generic BI tools.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', perspective: '1000px' }}>
        {features.map((f, i) => (
          <motion.article
            key={f.id}
            id={f.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 120 }}
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
            aria-label={f.title}
            style={{
              padding: '24px', cursor: 'default',
              transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              position: 'relative', overflow: 'hidden',
              transformStyle: 'preserve-3d'
            }}
            className="glass-panel"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(99,102,241,0.2)';
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            <div style={{ transform: 'translateZ(20px)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #6366F100, #6366F1, #6366F100)', opacity: 0.5 }} />
              <div style={{ fontSize: '1.75rem', marginBottom: '14px' }} aria-hidden="true">{f.icon}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, marginBottom: '10px' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>{f.body}</p>
            </div>
            <div style={{ transform: 'translateZ(30px)' }}>
              <CardVisual type={f.visual} />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default AnalyticsFeaturesGrid;
