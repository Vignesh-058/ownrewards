import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

/* ─── Billing Toggle ───────────────────────────────────────────── */
const BillingToggle = ({ billing, setBilling }) => (
  <div
    id="billing-toggle"
    role="group"
    aria-label="Select billing period"
    style={{
      display: 'inline-flex', alignItems: 'center', gap: '0',
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: '50px', padding: '4px', marginTop: '28px',
    }}
  >
    {['Monthly', 'Annual'].map((opt) => (
      <button
        key={opt}
        onClick={() => setBilling(opt)}
        aria-pressed={billing === opt}
        style={{
          padding: '8px 22px', borderRadius: '50px', border: 'none',
          background: billing === opt ? 'var(--primary)' : 'transparent',
          color: billing === opt ? '#fff' : 'var(--muted)',
          fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}
      >
        {opt}
        {opt === 'Annual' && (
          <span style={{
            marginLeft: '6px', background: 'rgba(16,185,129,0.2)', color: '#10B981',
            borderRadius: '10px', padding: '1px 7px', fontSize: '0.65rem', fontWeight: 700,
          }}>Save 20%</span>
        )}
      </button>
    ))}
  </div>
);

/* ─── Feature Row ──────────────────────────────────────────────── */
const FeatureRow = ({ text, included }) => (
  <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '5px 0', borderBottom: '1px solid var(--border)' }}>
    <span style={{
      flexShrink: 0, width: '18px', height: '18px', borderRadius: '50%',
      background: included ? 'rgba(16,185,129,0.12)' : 'rgba(100,116,139,0.1)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '0.65rem', fontWeight: 700,
      color: included ? '#10B981' : 'var(--muted)',
      marginTop: '2px',
    }}>
      {included ? '✓' : '✗'}
    </span>
    <span style={{ fontSize: '0.875rem', color: included ? 'var(--text)' : 'var(--muted)', lineHeight: 1.5 }}>{text}</span>
  </li>
);

/* ─── Pricing Card ─────────────────────────────────────────────── */
const PricingCard = ({ plan, index }) => {
  const isGrowth = plan.id === 'plan-growth';

  return (
    <motion.div
      id={plan.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, type: 'spring', stiffness: 100 }}
      viewport={{ once: true }}
      whileHover={{ y: isGrowth ? -4 : -6 }}
      style={{
        background: 'var(--surface)',
        backdropFilter: 'blur(30px)',
        borderRadius: '24px',
        padding: '32px 28px',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
        border: isGrowth ? '1px solid rgba(109,74,255,0.8)' : '1px solid var(--border)',
        boxShadow: isGrowth ? '0 0 40px rgba(109,74,255,0.3), 0 8px 32px rgba(0,0,0,0.08)' : 'var(--shadow-sm)',
        transform: isGrowth ? 'scale(1.04)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        zIndex: isGrowth ? 2 : 1,
      }}
    >
      {/* Most Popular badge */}
      {plan.badge && (
        <div style={{
          position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--primary)', color: '#fff', borderRadius: '20px',
          padding: '4px 16px', fontSize: '0.78rem', fontWeight: 700, whiteSpace: 'nowrap',
        }}>
          {plan.badge}
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.375rem', fontWeight: 800, marginBottom: '4px' }}>{plan.title}</h3>
        <div style={{
          fontSize: plan.price === 'Free' ? '2.75rem' : '1.875rem',
          fontWeight: 900, color: isGrowth ? 'var(--primary)' : 'var(--text)',
          marginBottom: '8px', lineHeight: 1,
        }}>
          {plan.price}
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>{plan.sub}</p>
      </div>

      {/* CTA */}
      <Link to={plan.ctaLink} style={{ textDecoration: 'none', marginBottom: '24px' }}>
        <Button
          variant={plan.ctaVariant}
          style={{ width: '100%', justifyContent: 'center' }}
          icon={<ArrowRight size={16} />}
        >
          {plan.cta}
        </Button>
      </Link>

      {/* Features list */}
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
        {plan.features.map((f, i) => (
          <FeatureRow key={i} text={f.text} included={f.included} />
        ))}
      </ul>
    </motion.div>
  );
};

/* ─── Plans data ───────────────────────────────────────────────── */
const plans = [
  {
    id: 'plan-starter',
    title: 'Starter',
    price: 'Free',
    sub: 'Perfect for single-outlet businesses getting started',
    badge: null,
    cta: 'Get Started Free',
    ctaVariant: 'outline',
    ctaLink: '/register',
    features: [
      { text: 'Up to 500 loyalty members', included: true },
      { text: '4-tier loyalty system (Bronze → Platinum)', included: true },
      { text: 'Points earning & redemption', included: true },
      { text: '5 active rules', included: true },
      { text: 'Basic reward templates', included: true },
      { text: 'Petpooja POS integration', included: true },
      { text: '1 outlet', included: true },
      { text: 'Email support', included: true },
      { text: 'Rule Library', included: false },
      { text: 'Referral programs', included: false },
      { text: 'Campaign A/B testing', included: false },
      { text: 'Cohort analytics', included: false },
      { text: 'Multi-outlet', included: false },
    ],
  },
  {
    id: 'plan-growth',
    title: 'Growth',
    price: 'Contact Us',
    sub: 'For growing brands with multiple locations and advanced loyalty needs',
    badge: '⭐ Most Popular',
    cta: 'Get Started',
    ctaVariant: 'primary',
    ctaLink: '/contact',
    features: [
      { text: 'Up to 5,000 loyalty members', included: true },
      { text: 'Full 4-tier system + custom multipliers', included: true },
      { text: '30+ event triggers (all)', included: true },
      { text: 'All 10 action types', included: true },
      { text: 'Rule Library templates', included: true },
      { text: 'Smart coupons (all 5 discount types)', included: true },
      { text: 'Dual-sided referral programs', included: true },
      { text: 'Campaign A/B testing', included: true },
      { text: 'Cohort analytics', included: true },
      { text: 'Up to 10 outlets', included: true },
      { text: 'All POS integrations', included: true },
      { text: 'WhatsApp via ownChat', included: true },
      { text: 'Email support', included: true },
    ],
  },
  {
    id: 'plan-enterprise',
    title: 'Enterprise',
    price: 'Contact Us',
    sub: 'For large chains and enterprise brands with custom requirements',
    badge: null,
    cta: 'Talk to Sales',
    ctaVariant: 'outline',
    ctaLink: '/contact',
    features: [
      { text: 'Unlimited loyalty members', included: true },
      { text: 'Custom tier names & logic', included: true },
      { text: 'All 30+ triggers + custom events', included: true },
      { text: 'All 10 action types', included: true },
      { text: 'Advanced segmentation & LTV prediction', included: true },
      { text: 'Unlimited referral programs', included: true },
      { text: 'Full cohort + product analytics + export', included: true },
      { text: 'Unlimited outlets', included: true },
      { text: 'Custom POS integration', included: true },
      { text: 'Dedicated CSM', included: true },
      { text: 'SLA-backed uptime', included: true },
      { text: 'API access + webhooks', included: true },
    ],
  },
];

/* ─── Pricing Cards Section ────────────────────────────────────── */
const PricingCards = () => {
  const [billing, setBilling] = useState('Monthly');

  return (
    <section id="pricing-cards" style={{ padding: '0 0 100px' }} aria-label="Pricing plans">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          alignItems: 'start',
          paddingTop: '20px',
        }}>
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { BillingToggle, PricingCards, plans };
export default PricingCards;
