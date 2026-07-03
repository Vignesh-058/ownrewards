import React, { useEffect } from 'react';
import UseCasesHero from '../components/use-cases/UseCasesHero';
import UseCaseSection from '../components/use-cases/UseCaseSection';
import { RestaurantMock, RetailMock, EcommerceMock } from '../components/use-cases/DashboardMocks';

/**
 * Page 4 — Use Cases (use-cases.html)
 * Sections per Handoff Document § 8:
 *  4.1  Hero
 *  4.2  Use Case 1 — Restaurants & Food Chains
 *  4.3  Use Case 2 — Retail & Fashion
 *  4.4  Use Case 3 — D2C & E-Commerce
 */
const UseCasesPage = () => {
  useEffect(() => {
    document.title = 'ownRewards Use Cases — Restaurants, Retail & E-Commerce';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Discover how restaurant chains, retail brands, and online stores use ownRewards to drive repeat purchases and grow customer lifetime value.'
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
      {/* Hero */}
      <UseCasesHero />

      {/* 4.1 — Restaurants & Food Chains */}
      <UseCaseSection
        id="usecase-restaurants"
        badge="🍽️ Restaurants & Food Chains"
        headline="Turn every table into a loyalty moment."
        painPoints={[
          'Customers visit once and never return',
          'Birthday promotions done manually — or forgotten',
          'Petpooja bill data goes to waste',
          'No insight into which customers are at churn risk',
        ]}
        solutions={[
          '<strong>Petpooja Integration</strong> — Bills auto-sync, points calculated in real time at every outlet',
          '<strong>Birthday Rule</strong> — <code>customer_birthday</code> → +500 bonus points + BDAY20 coupon → WhatsApp notification fires automatically',
          '<strong>Win-Back Campaign</strong> — <code>inactivity_detected</code> (30 days) → grant_reward (Free Dessert) → re-engagement WhatsApp',
          '<strong>4-Tier Loyalty</strong> — Bronze locals → Platinum VIPs with exclusive rewards and tier multipliers',
          '<strong>Multi-Outlet</strong> — Per-outlet loyalty configs with unified org-level analytics',
        ]}
        Mock={RestaurantMock}
        stat={{
          value: '34%',
          label: 'of churned restaurant customers re-activated in 90 days.',
        }}
        accentColor="#F59E0B"
      />

      {/* 4.2 — Retail & Fashion (reversed) */}
      <UseCaseSection
        id="usecase-retail"
        badge="👗 Retail & Fashion Brands"
        headline="Stop handing out coupons to customers who were going to buy anyway."
        painPoints={[
          'Coupons given to everyone regardless of behaviour',
          'No tier-based exclusivity — top customers feel no difference',
          'No idea which customer cohorts deliver the most LTV',
          'Seasonal campaigns exceed budget with no automated stop',
        ]}
        solutions={[
          '<strong>Rule-Gated Coupons</strong> — Only Gold+ tier customers can access exclusive early-access promotions',
          '<strong>Category-Specific Coupons</strong> — SHOE20 applies only to footwear category, not entire cart',
          '<strong>Budget-Controlled Campaigns</strong> — Set ₹50,000 max discount budget → auto-deactivates when depleted',
          '<strong>Cohort Analytics</strong> — See which acquisition month produces the highest LTV customers',
          '<strong>Segment Engine</strong> — predictedLTV, churnRisk, healthScore per segment',
        ]}
        Mock={RetailMock}
        reverse={true}
        accentColor="#6366F1"
      />

      {/* 4.3 — D2C & E-Commerce */}
      <UseCaseSection
        id="usecase-ecommerce"
        badge="🛒 D2C & E-Commerce Brands"
        headline="Make every happy customer your best marketing channel."
        painPoints={[
          'Customer acquisition cost is ₹300+ per new customer',
          'No viral growth mechanism in place',
          'Customers buy once and disappear',
          'No way to reward loyal customers differently from new ones',
        ]}
        solutions={[
          '<strong>Dual-Sided Referral</strong> — Referrer gets 500 points; Referee gets ₹100 flat discount on first order',
          '<strong>Loyalty-Gated Referral Access</strong> — Must be Silver+, 30+ days as member, ₹2,000+ lifetime spend',
          '<strong>nth Purchase Rule</strong> — 2nd visit → grant_reward (Free Sample) → drives the repeat purchase habit',
          '<strong>Win-Back Automation</strong> — <code>inactivity_detected</code> (60 days) → exclusive reward → WhatsApp outreach',
          '<strong>WhatsApp via ownChat</strong> — All notifications, OTPs, and campaign messages via high-open-rate WhatsApp channel',
        ]}
        Mock={EcommerceMock}
        stat={{
          value: '₹4.2L',
          label: 'in new customer revenue from referrals in month 1.',
        }}
        accentColor="#EC4899"
      />
    </>
  );
};

export default UseCasesPage;
