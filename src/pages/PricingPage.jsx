import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BillingToggle, PricingCards } from '../components/pricing/PricingCards';
import ComparisonTable from '../components/pricing/ComparisonTable';
import FAQAccordion from '../components/pricing/FAQAccordion';

/**
 * Page 6 — Pricing (pricing.html)
 * Sections per Handoff Document § 10:
 *  6.1  Pricing Hero + Billing Toggle
 *  6.2  Pricing Cards (3 plans)
 *  6.3  Feature Comparison Table
 *  6.4  FAQ Accordion
 *  6.5  CTA
 */
const PricingPage = () => {
  const [billing, setBilling] = useState('Monthly');

  useEffect(() => {
    document.title = 'ownRewards Pricing — Loyalty Plans That Scale With Your Business';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Start free with core loyalty features. Scale to advanced rules, referrals, and analytics as your customer base grows.');
    }
    return () => {
      document.title = 'ownRewards — Smart Loyalty & Retention Platform for Growing Businesses';
      if (meta) meta.setAttribute('content', 'Build a loyalty program that actually drives repeat business. Points, rewards, coupons, referrals, and automated rules — all in one intelligent platform.');
    };
  }, []);

  return (
    <>
      {/* ── 6.1 Pricing Hero ──────────────────────────────────── */}
      <section
        id="pricing-hero"
        style={{ paddingTop: '140px', paddingBottom: '80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="pricing-h1"
      >
        <div style={{
          position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{
              display: 'inline-block', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)',
              border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px',
              padding: '6px 18px', fontSize: '0.8125rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px',
            }}>Pricing</div>

            <h1
              id="pricing-h1"
              className="hero-title"
              style={{ fontSize: '3.25rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px' }}
            >
              Transparent pricing.{' '}
              <span className="gradient-text">No surprises.</span>
            </h1>

            <p style={{ color: 'var(--muted)', fontSize: '1.1875rem', marginBottom: '0', lineHeight: 1.6 }}>
              Start free. Add the features you need. No lock-in.
            </p>

            <BillingToggle billing={billing} setBilling={setBilling} />
          </motion.div>
        </div>
      </section>

      {/* ── 6.2 Pricing Cards ─────────────────────────────────── */}
      <PricingCards billing={billing} />

      {/* ── 6.3 Comparison Table ──────────────────────────────── */}
      <ComparisonTable />

      {/* ── 6.4 FAQ Accordion ─────────────────────────────────── */}
      <FAQAccordion />

      {/* ── 6.5 CTA ───────────────────────────────────────────── */}
      <section
        id="pricing-cta"
        style={{
          padding: '100px 0',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(245,158,11,0.06) 100%)',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
        }}
        aria-labelledby="pricing-cta-heading"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 id="pricing-cta-heading" style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '16px' }}>
              Ready to launch your loyalty program?
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1.0625rem', marginBottom: '36px' }}>
              Start with the free plan or contact our team for a customized enterprise solution.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="primary" icon={<ArrowRight size={16} />}>
                  Get Started Free
                </Button>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="outline" icon={<ArrowRight size={16} />}>
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
