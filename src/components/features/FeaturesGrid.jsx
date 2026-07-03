import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  {
    label: 'Loyalty Engine',
    cards: [
      {
        id: 'feat-tiers',
        icon: '🏆',
        title: '4-Tier Customer System',
        body: 'Bronze → Silver → Gold → Platinum with configurable spend thresholds, tier-specific multipliers, and full tier history per customer.',
        visual: 'tiers',
      },
      {
        id: 'feat-points',
        icon: '💰',
        title: 'Smart Points Earning',
        body: 'Award points on every purchase. Configure points-per-rupee ratio, tier multipliers, and track earned vs. bonus points separately.',
        visual: 'points',
      },
      {
        id: 'feat-expiry',
        icon: '⏳',
        title: 'Points Expiry Control',
        body: 'Set expiry windows, trigger automated WhatsApp expiry alerts, and let customers see their expiring balance in real time.',
        visual: 'expiry',
      },
      {
        id: 'feat-otp',
        icon: '🔑',
        title: 'OTP-Verified Redemption',
        body: 'Require WhatsApp OTP before any points redemption. Prevent fraud. Ensure the right customer is redeeming at the right outlet.',
        visual: 'otp',
      },
    ],
  },
  {
    label: 'Rule Engine',
    cards: [
      {
        id: 'feat-triggers',
        icon: '⚡',
        title: '30+ Event Triggers',
        body: 'Birthday, anniversary, inactivity, nth visit, referral, feedback, bill creation, cart validation, segment changes — any event fires any rule.',
        visual: 'triggers',
      },
      {
        id: 'feat-actions',
        icon: '🎯',
        title: '10 Action Types',
        body: 'Calculate points, add bonus, grant reward, issue coupon, change tier, send notification, add to segment, trigger workflow — all configurable per rule.',
        visual: 'actions',
      },
      {
        id: 'feat-rule-library',
        icon: '📚',
        title: 'Rule Library Templates',
        body: 'Pre-built rule blueprints by industry (restaurant, retail, ecommerce) and category (growth, retention, engagement). Install in one click.',
        visual: 'library',
      },
      {
        id: 'feat-ab-testing',
        icon: '🧪',
        title: 'A/B Testing Built-In',
        body: 'Test two rule variations against a control group. Measure which drives more conversions. Data-driven rule optimization, built-in.',
        visual: 'ab',
      },
    ],
  },
  {
    label: 'Rewards & Coupons',
    cards: [
      {
        id: 'feat-reward-modes',
        icon: '🎁',
        title: 'Dual Redemption Modes',
        body: 'Pre-Bill (instant cart discount) or Post-Issuance (wallet reward stored for later). Match the mode to your business workflow.',
        visual: 'modes',
      },
      {
        id: 'feat-coupons',
        icon: '🏷️',
        title: 'Smart Coupons',
        body: '5 discount types: percentage, fixed amount, free product, free shipping, buy-X-get-Y. Set applicability by product, category, or "all except".',
        visual: 'coupons',
      },
      {
        id: 'feat-budget',
        icon: '💳',
        title: 'Budget-Controlled Rewards',
        body: 'Set max total value, max issuances, or spending caps. Budget exhaustion auto-deactivates the reward — no overspend, ever.',
        visual: 'budget',
      },
      {
        id: 'feat-eligibility',
        icon: '🔗',
        title: 'Rule-Linked Eligibility',
        body: 'Gate coupon access using Rule Engine conditions. Only customers who meet specific criteria — tier, spend, visits — can validate a coupon.',
        visual: 'eligibility',
      },
    ],
  },
  {
    label: 'Referral Programs',
    cards: [
      {
        id: 'feat-dual-referral',
        icon: '👥',
        title: 'Dual-Sided Referral Rewards',
        body: 'Separate reward configs for referrer (sharer) and referee (new joiner). Points, percentage, flat discount, or cash — each side independently configured.',
        visual: 'referral',
      },
      {
        id: 'feat-referral-trigger',
        icon: '🎯',
        title: 'Referral Trigger Control',
        body: 'Award on signup, first purchase, nth purchase, or custom events. Set minimum purchase to qualify. Anti-fraud daily limits per customer.',
        visual: 'referral-trigger',
      },
      {
        id: 'feat-referral-gates',
        icon: '🔒',
        title: 'Loyalty-Gated Referrals',
        body: 'Require minimum tier, minimum points, minimum lifetime spend, or minimum days-as-member before a customer can create a referral code.',
        visual: 'gates',
      },
      {
        id: 'feat-campaigns',
        icon: '📣',
        title: '7 Campaign Types',
        body: 'Seasonal, event-based, milestone, feedback-driven, win-back, birthday, anniversary — with audience targeting, A/B testing, and omnichannel delivery.',
        visual: 'campaigns',
      },
    ],
  },
];

const tierColors = {
  Bronze: { color: '#B45309', bg: 'rgba(180,83,9,0.12)' },
  Silver: { color: '#64748B', bg: 'rgba(100,116,139,0.12)' },
  Gold: { color: '#D97706', bg: 'rgba(245,158,11,0.12)' },
  Platinum: { color: '#6366F1', bg: 'rgba(99,102,241,0.12)' },
};

const FlowStep = ({ label, isLast }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
    <div style={{
      background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)',
      borderRadius: '6px', padding: '4px 10px', fontSize: '0.7rem', fontWeight: 600,
      color: 'var(--primary)', whiteSpace: 'nowrap',
    }}>{label}</div>
    {!isLast && <div style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1 }}>↓</div>}
  </div>
);

const CardVisual = ({ type }) => {
  const base = { marginTop: '16px', padding: '12px', borderRadius: '10px', background: 'rgba(99,102,241,0.04)', border: '1px solid var(--border)' };

  if (type === 'tiers') return (
    <div style={{ ...base, display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
      {Object.entries(tierColors).map(([tier, { color, bg }]) => (
        <span key={tier} style={{ background: bg, color, border: `1px solid ${color}44`, borderRadius: '20px', padding: '3px 10px', fontSize: '0.7rem', fontWeight: 700 }}>{tier}</span>
      ))}
    </div>
  );

  if (type === 'points') return (
    <div style={base}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '4px' }}>
        <span style={{ color: 'var(--muted)' }}>Points Balance</span>
        <span style={{ color: 'var(--primary)', fontWeight: 700 }}>4,250 pts</span>
      </div>
      <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ width: '70%', height: '100%', background: 'var(--primary)', borderRadius: '3px' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--muted)', marginTop: '4px' }}>
        <span>Earned: 3,200</span><span>Bonus: 1,050</span>
      </div>
    </div>
  );

  if (type === 'expiry') return (
    <div style={{ ...base, display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ fontSize: '1.5rem' }}>📱</div>
      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#F59E0B' }}>Expiry Alert</div>
        <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>850 pts expire in 7 days</div>
      </div>
    </div>
  );

  if (type === 'otp') return (
    <div style={{ ...base, display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{ display: 'flex', gap: '4px' }}>
        {[3,7,'_','_'].map((d, i) => (
          <div key={i} style={{ width: '24px', height: '32px', border: '2px solid var(--primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 700, color: d === '_' ? 'var(--border)' : 'var(--text)' }}>{d}</div>
        ))}
      </div>
      <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>WhatsApp OTP</div>
    </div>
  );

  if (type === 'triggers') return (
    <div style={{ ...base, display: 'flex', flexDirection: 'column', gap: '3px' }}>
      {['Purchase', 'Birthday', 'Referral', 'Inactivity'].map((t, i) => (
        <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{t}</span>
          {i === 0 && <span style={{ marginLeft: 'auto', fontSize: '0.65rem', background: 'rgba(16,185,129,0.1)', color: '#10B981', borderRadius: '4px', padding: '1px 6px', fontWeight: 600 }}>Active</span>}
        </div>
      ))}
    </div>
  );

  if (type === 'actions') return (
    <div style={{ ...base, display: 'flex', flexDirection: 'column', gap: '3px' }}>
      <FlowStep label="Trigger: Purchase" />
      <FlowStep label="Award +200 pts" />
      <FlowStep label="Issue COUPON" />
      <FlowStep label="Notify via WhatsApp" isLast />
    </div>
  );

  if (type === 'library') return (
    <div style={{ ...base, display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {[['🍽️ Restaurant', '#F59E0B'], ['🛒 Retail', '#6366F1'], ['📦 E-commerce', '#10B981']].map(([label, color]) => (
        <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 8px', background: `${color}10`, borderRadius: '6px' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color }}>{label}</span>
        </div>
      ))}
    </div>
  );

  if (type === 'ab') return (
    <div style={{ ...base, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
      {[['Variant A', '+12%', '#6366F1'], ['Variant B', '+8%', '#F59E0B'], ['Control', 'Base', '#64748B'], ['Winner', 'A', '#10B981']].map(([label, val, color]) => (
        <div key={label} style={{ textAlign: 'center', padding: '6px', background: `${color}10`, borderRadius: '6px', border: `1px solid ${color}30` }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{label}</div>
          <div style={{ fontSize: '0.875rem', fontWeight: 700, color }}>{val}</div>
        </div>
      ))}
    </div>
  );

  if (type === 'modes') return (
    <div style={{ ...base, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
      {[['Pre-Bill', 'Instant Discount', '#10B981'], ['Post-Issuance', 'Wallet Reward', '#6366F1']].map(([label, sub, color]) => (
        <div key={label} style={{ padding: '8px', background: `${color}10`, borderRadius: '6px', border: `1px solid ${color}30`, textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color }}>{label}</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '2px' }}>{sub}</div>
        </div>
      ))}
    </div>
  );

  if (type === 'coupons') return (
    <div style={{ ...base, display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <code style={{ background: 'var(--border)', borderRadius: '4px', padding: '2px 8px', fontSize: '0.75rem', fontWeight: 700 }}>BDAY20</code>
        <span style={{ color: '#10B981', fontSize: '0.75rem', fontWeight: 700 }}>20% Off</span>
      </div>
      <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ width: '42%', height: '100%', background: '#F59E0B' }} />
      </div>
      <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>Budget: 42% used · 142/500 issued</div>
    </div>
  );

  if (type === 'budget') return (
    <div style={base}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '6px' }}>
        <span style={{ color: 'var(--muted)' }}>Budget Used</span>
        <span style={{ color: '#10B981', fontWeight: 700 }}>₹71,600 left</span>
      </div>
      <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
        <div style={{ width: '28%', height: '100%', background: 'linear-gradient(90deg, #10B981, #F59E0B)' }} />
      </div>
      <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: '4px' }}>₹28,400 spent of ₹100,000</div>
    </div>
  );

  if (type === 'eligibility') return (
    <div style={{ ...base, display: 'flex', flexDirection: 'column', gap: '3px' }}>
      {[['Gold Tier', '✓'], ['3+ Visits', '✓'], ['Spend ≥ ₹2000', '✗']].map(([cond, status]) => (
        <div key={cond} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
          <span style={{ color: 'var(--muted)' }}>{cond}</span>
          <span style={{ color: status === '✓' ? '#10B981' : '#EF4444', fontWeight: 700 }}>{status}</span>
        </div>
      ))}
    </div>
  );

  if (type === 'referral') return (
    <div style={{ ...base, display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
        <span style={{ color: 'var(--muted)' }}>Referrer</span>
        <span style={{ color: '#6366F1', fontWeight: 700 }}>+200 pts</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
        <span style={{ color: 'var(--muted)' }}>Referee</span>
        <span style={{ color: '#10B981', fontWeight: 700 }}>FREE100</span>
      </div>
    </div>
  );

  if (type === 'referral-trigger') return (
    <div style={{ ...base, display: 'flex', flexDirection: 'column', gap: '3px' }}>
      <FlowStep label="Invite Sent" />
      <FlowStep label="First Purchase" />
      <FlowStep label="Reward Issued" isLast />
    </div>
  );

  if (type === 'gates') return (
    <div style={{ ...base, display: 'flex', flexDirection: 'column', gap: '3px' }}>
      {[['Min Tier', 'Gold'], ['Min Points', '1,000'], ['Min Spend', '₹5,000']].map(([label, val]) => (
        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
          <span style={{ color: 'var(--muted)' }}>{label}</span>
          <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{val}</span>
        </div>
      ))}
    </div>
  );

  if (type === 'campaigns') return (
    <div style={{ ...base, display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
      {['Seasonal', 'Win-Back', 'Birthday', 'Milestone', 'Feedback', 'Event', 'Anniversary'].map((c) => (
        <span key={c} style={{ background: 'rgba(99,102,241,0.08)', color: 'var(--primary)', borderRadius: '4px', padding: '2px 8px', fontSize: '0.65rem', fontWeight: 600 }}>{c}</span>
      ))}
    </div>
  );

  return null;
};

const groupColors = {
  'Loyalty Engine': { color: '#D97706', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
  'Rule Engine': { color: '#6366F1', bg: 'rgba(99,102,241,0.1)', border: 'rgba(99,102,241,0.25)' },
  'Rewards & Coupons': { color: '#10B981', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' },
  'Referral Programs': { color: '#EC4899', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.25)' },
};

const FeaturesGrid = () => {
  return (
    <section id="features-grid" style={{ padding: '80px 0', background: 'var(--bg)' }} aria-labelledby="features-grid-heading">
      <div className="container">
        <h2 id="features-grid-heading" className="sr-only">All Features</h2>
        {groups.map((group, gi) => {
          const gc = groupColors[group.label];
          return (
            <div key={group.label} style={{ marginBottom: gi < groups.length - 1 ? '72px' : 0 }}>
              {/* Group Label */}
              <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{
                  background: gc.bg, color: gc.color, border: `1px solid ${gc.border}`,
                  borderRadius: '20px', padding: '6px 18px', fontSize: '0.8125rem',
                  fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>{group.label}</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ perspective: '1000px' }}>
                {group.cards.map((card, ci) => {
                  // Create a bento pattern: 8-4, 4-8
                  const colSpanClass = (ci % 4 === 0 || ci % 4 === 3) ? 'md:col-span-8' : 'md:col-span-4';
                  
                  return (
                  <motion.article
                    key={card.id}
                    id={card.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: ci * 0.08, type: 'spring', stiffness: 120 }}
                    viewport={{ once: true, margin: '-40px' }}
                    whileHover={{ y: -10, rotateX: 4, rotateY: -4, scale: 1.02 }}
                    aria-label={card.title}
                    className={`glass-panel ${colSpanClass}`}
                    style={{
                      padding: '24px',
                      cursor: 'default',
                      position: 'relative',
                      overflow: 'hidden',
                      transformStyle: 'preserve-3d'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 12px 40px ${gc.color}22`;
                      e.currentTarget.style.borderColor = `${gc.color}55`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    {/* Subtle top glow stripe */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                      background: `linear-gradient(90deg, ${gc.color}00, ${gc.color}, ${gc.color}00)`,
                      opacity: 0.5,
                    }} />

                    <div style={{ fontSize: '1.75rem', marginBottom: '14px' }} aria-hidden="true">{card.icon}</div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', lineHeight: 1.3 }}>{card.title}</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>{card.body}</p>
                    <CardVisual type={card.visual} />
                  </motion.article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesGrid;
