import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Mini Mock UI Components ──────────────────────────────────── */

const MockRow = ({ label, value, highlight }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
    <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>{label}</span>
    <span style={{ fontWeight: 600, fontSize: '0.875rem', color: highlight ? 'var(--primary)' : 'var(--text)' }}>{value}</span>
  </div>
);

const MockBadge = ({ label, color, bg }) => (
  <span style={{ background: bg, color, border: `1px solid ${color}33`, borderRadius: '20px', padding: '4px 12px', fontSize: '0.75rem', fontWeight: 600 }}>{label}</span>
);

const MockCard = ({ children, title }) => (
  <div style={{ background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)', padding: '20px', width: '100%' }}>
    {title && <div style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '16px', color: 'var(--text)' }}>{title}</div>}
    {children}
  </div>
);

const ProgressBar = ({ value, color = 'var(--primary)' }) => (
  <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden', marginTop: '4px' }}>
    <div style={{ width: `${value}%`, height: '100%', background: color, borderRadius: '4px' }} />
  </div>
);

/* ─── Panel 1: Loyalty Dashboard ───────────────────────────────── */
const LoyaltyDashboardPanel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <MockCard title="Sarah Jenkins — Customer Wallet">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>4,250</div>
          <div style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Loyalty Points</div>
        </div>
        <MockBadge label="🥇 Gold Tier" color="#D97706" bg="rgba(245,158,11,0.1)" />
      </div>
      <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '6px' }}>Progress to Platinum — 750 pts away</div>
      <ProgressBar value={85} />
    </MockCard>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
      <MockCard title="Reward Redemptions">
        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>18</div>
        <div style={{ color: 'var(--muted)', fontSize: '0.8125rem' }}>Last 30 days</div>
      </MockCard>
      <MockCard title="Referral Growth">
        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>+3</div>
        <div style={{ color: 'var(--muted)', fontSize: '0.8125rem' }}>Friends referred</div>
      </MockCard>
    </div>
  </div>
);

/* ─── Panel 2: Rule Engine ──────────────────────────────────────── */
const RuleEnginePanel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <MockCard title="Rule: Birthday Bonus">
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <MockBadge label="Trigger: customer_birthday" color="#6366F1" bg="rgba(99,102,241,0.1)" />
        <MockBadge label="Active" color="#10B981" bg="rgba(16,185,129,0.1)" />
      </div>
      <MockRow label="Award Points" value="+500 pts" highlight />
      <MockRow label="Issue Coupon" value="BDAY20" highlight />
      <MockRow label="Max per customer/year" value="1" />
      <MockRow label="Total fired" value="482 times" />
    </MockCard>
    <MockCard title="Rule Trigger Events">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {['bill_created', 'customer_birthday', 'nth_visit', 'inactivity', 'referral', 'feedback_submitted', 'milestone'].map(t => (
          <MockBadge key={t} label={t} color="#6366F1" bg="rgba(99,102,241,0.06)" />
        ))}
      </div>
    </MockCard>
  </div>
);

/* ─── Panel 3: Smart Coupons ────────────────────────────────────── */
const SmartCouponsPanel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <MockCard title="Coupon: BDAY20">
      <MockRow label="Type" value="20% Off" />
      <MockRow label="Applicable On" value="Desserts, Beverages" highlight />
      <MockRow label="Min Bill" value="₹500" />
      <MockRow label="Used / Issued" value="142 / 500" />
      <MockRow label="Budget Remaining" value="₹28,400" highlight />
      <div style={{ marginTop: '12px' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '4px' }}>Budget Used</div>
        <ProgressBar value={28} color="#F59E0B" />
      </div>
    </MockCard>
    <MockCard title="Active Coupons">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[['WELCOME15', '15% off', '#10B981'], ['BDAY20', '20% off', '#F59E0B'], ['WINBACK30', '30% off', '#6366F1']].map(([code, disc, color]) => (
          <div key={code} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <code style={{ background: 'var(--border)', borderRadius: '6px', padding: '4px 10px', fontSize: '0.8125rem', fontWeight: 700 }}>{code}</code>
            <span style={{ color, fontWeight: 600, fontSize: '0.875rem' }}>{disc}</span>
          </div>
        ))}
      </div>
    </MockCard>
  </div>
);

/* ─── Panel 4: Referral Program ─────────────────────────────────── */
const ReferralPanel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <MockCard title="Referral Program: Standard">
      <MockRow label="Referrer Reward" value="+200 pts on activation" highlight />
      <MockRow label="Referee Reward" value="FREE100 coupon" highlight />
      <MockRow label="Anti-fraud Limit" value="5 referrals / month" />
      <MockRow label="Requires Loyalty Gate" value="Gold Tier" />
    </MockCard>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
      <MockCard title="Total Referrals">
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>1,284</div>
        <div style={{ color: 'var(--muted)', fontSize: '0.8125rem' }}>This quarter</div>
      </MockCard>
      <MockCard title="Revenue Generated">
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10B981' }}>₹4.2L</div>
        <div style={{ color: 'var(--muted)', fontSize: '0.8125rem' }}>First month</div>
      </MockCard>
    </div>
  </div>
);

/* ─── Panel 5: Analytics ────────────────────────────────────────── */
const AnalyticsPanel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
      {[
        { label: 'Reward ROI', value: '312%', color: '#10B981' },
        { label: '90-Day Retention', value: '68%', color: '#6366F1' },
        { label: 'Avg LTV', value: '₹8,400', color: '#F59E0B' },
        { label: 'Cohort Size', value: '2,840', color: 'var(--text)' },
      ].map(({ label, value, color }) => (
        <MockCard key={label}>
          <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '4px' }}>{label}</div>
          <div style={{ fontSize: '1.375rem', fontWeight: 800, color }}>{value}</div>
        </MockCard>
      ))}
    </div>
    <MockCard title="Tier Distribution">
      {[
        { tier: 'Platinum', pct: 8, color: '#6366F1' },
        { tier: 'Gold', pct: 22, color: '#D97706' },
        { tier: 'Silver', pct: 38, color: '#64748B' },
        { tier: 'Bronze', pct: 32, color: '#B45309' },
      ].map(({ tier, pct, color }) => (
        <div key={tier} style={{ marginBottom: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8125rem', marginBottom: '4px' }}>
            <span style={{ color: 'var(--muted)' }}>{tier}</span>
            <span style={{ color, fontWeight: 600 }}>{pct}%</span>
          </div>
          <ProgressBar value={pct} color={color} />
        </div>
      ))}
    </MockCard>
  </div>
);

/* ─── Tabs Definition ───────────────────────────────────────────── */
const tabs = [
  {
    id: 'loyalty',
    btnId: 'tab-btn-loyalty',
    panelId: 'tab-panel-loyalty',
    label: 'Loyalty Dashboard',
    caption: 'Customer wallet showing tier badge, point balance, progress to next tier, and recent activity.',
    Panel: LoyaltyDashboardPanel,
  },
  {
    id: 'rules',
    btnId: 'tab-btn-rules',
    panelId: 'tab-panel-rules',
    label: 'Rule Engine',
    caption: 'A birthday rule automatically awards 500 bonus points and issues a BDAY20 coupon — no manual work.',
    Panel: RuleEnginePanel,
  },
  {
    id: 'coupons',
    btnId: 'tab-btn-coupons',
    panelId: 'tab-panel-coupons',
    label: 'Smart Coupons',
    caption: 'Smart coupons with category-specific applicability, usage tracking, and rule-gated eligibility.',
    Panel: SmartCouponsPanel,
  },
  {
    id: 'referral',
    btnId: 'tab-btn-referral',
    panelId: 'tab-panel-referral',
    label: 'Referral Program',
    caption: 'Both the referrer and the new customer get independent, configurable rewards.',
    Panel: ReferralPanel,
  },
  {
    id: 'analytics',
    btnId: 'tab-btn-analytics',
    panelId: 'tab-panel-analytics',
    label: 'Analytics',
    caption: 'Real-time cohort retention, reward ROI, and tier distribution — all filterable by date and outlet.',
    Panel: AnalyticsPanel,
  },
];

/* ─── Main Component ────────────────────────────────────────────── */
const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState('loyalty');
  const active = tabs.find((t) => t.id === activeTab);

  return (
    <section
      id="feature-tabs"
      style={{ padding: '100px 0', background: 'var(--surface)' }}
      aria-labelledby="feature-tabs-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="section-header text-center" style={{ marginBottom: '56px' }}>
          <h2
            id="feature-tabs-heading"
            className="headline"
            style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}
          >
            See ownRewards in action
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.125rem', maxWidth: '520px', margin: '0 auto' }}>
            Explore every module of the platform — no signup required.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          role="tablist"
          aria-label="Feature preview tabs"
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '40px',
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={tab.btnId}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={tab.panelId}
              className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 22px',
                borderRadius: '24px',
                border: activeTab === tab.id ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: activeTab === tab.id ? 'var(--primary)' : 'var(--bg)',
                color: activeTab === tab.id ? '#fff' : 'var(--muted)',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            padding: '36px',
            minHeight: '360px',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={active.panelId}
              role="tabpanel"
              aria-labelledby={active.btnId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <active.Panel />
              <p
                style={{
                  textAlign: 'center',
                  color: 'var(--muted)',
                  fontSize: '0.875rem',
                  marginTop: '28px',
                  fontStyle: 'italic',
                }}
              >
                {active.caption}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
