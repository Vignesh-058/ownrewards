import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AnalyticsKPIs from '../components/analytics/AnalyticsKPIs';
import AnalyticsFeaturesGrid from '../components/analytics/AnalyticsFeaturesGrid';
import AnalyticsDashboard from '../components/analytics/AnalyticsDashboard';

/**
 * Page 5 — Analytics (analytics.html)
 * Sections per Handoff Document § 9:
 *  5.1  Analytics Hero
 *  5.2  Animated KPI Metric Cards
 *  5.3  Analytics Features Grid (6 cards)
 *  5.4  Live Analytics Dashboard mock
 */
const AnalyticsPage = () => {
  useEffect(() => {
    document.title = 'ownRewards Analytics — Loyalty ROI, Cohort & Retention Insights';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Track loyalty program ROI, reward conversion rates, cohort retention curves, tier distribution, product performance, and customer lifetime value in real time.'
      );
    }
    return () => {
      document.title = 'ownRewards — Smart Loyalty & Retention Platform for Growing Businesses';
      if (meta) {
        meta.setAttribute(
          'content',
          'Build a loyalty program that actually drives repeat business. Points, rewards, coupons, referrals, and automated rules — all in one intelligent platform.'
        );
      }
    };
  }, []);

  return (
    <>
      {/* ── 5.1 Analytics Hero ──────────────────────────────────── */}
      <section
        id="analytics-hero"
        style={{
          paddingTop: '140px',
          paddingBottom: '80px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
        aria-labelledby="analytics-h1"
      >
        {/* Background glows */}
        <div style={{
          position: 'absolute', top: '-150px', left: '50%', transform: 'translateX(-50%)',
          width: '900px', height: '600px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', bottom: '-50px', right: '-50px', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div style={{
              display: 'inline-block', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)',
              border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px',
              padding: '6px 18px', fontSize: '0.8125rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '24px',
            }}>Analytics</div>

            <h1
              id="analytics-h1"
              className="hero-title"
              style={{ fontSize: '3.25rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '24px', maxWidth: '800px', margin: '0 auto 24px' }}
            >
              Know exactly which customers are worth keeping —{' '}
              <span className="gradient-text">and why.</span>
            </h1>

            <p style={{
              color: 'var(--muted)', fontSize: '1.1875rem', maxWidth: '620px',
              margin: '0 auto 0', lineHeight: 1.7,
            }}>
              ownRewards' analytics engine tracks every transaction, every reward, every referral — and surfaces the insights that actually change business decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 5.2 Animated KPI Cards ──────────────────────────────── */}
      <AnalyticsKPIs />

      {/* ── 5.3 Analytics Features Grid ─────────────────────────── */}
      <AnalyticsFeaturesGrid />

      {/* ── 5.4 Live Dashboard Mock ──────────────────────────────── */}
      <AnalyticsDashboard />
    </>
  );
};

export default AnalyticsPage;
