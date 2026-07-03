import React, { useEffect } from 'react';
import HowItWorksHero from '../components/how-it-works/HowItWorksHero';
import Timeline from '../components/how-it-works/Timeline';
import HowItWorksCTA from '../components/how-it-works/HowItWorksCTA';

/**
 * Page 3 — How It Works (how-it-works.html)
 * Sections per Handoff Document § 7:
 *  3.1  Hero
 *  3.2  Full Flow — 8-step vertical timeline
 *  3.3  CTA
 */
const HowItWorksPage = () => {
  useEffect(() => {
    document.title = 'How ownRewards Works — From First Visit to Loyal Customer';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'See exactly how ownRewards automates loyalty earning, reward issuance, coupon delivery, and referral rewards — triggered by real business events.'
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
      {/* 3.1 Hero */}
      <HowItWorksHero />

      {/* 3.2 Full Flow — 8-step vertical timeline */}
      <Timeline />

      {/* 3.3 CTA */}
      <HowItWorksCTA />
    </>
  );
};

export default HowItWorksPage;
