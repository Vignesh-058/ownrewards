import React, { useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import FeaturesHero from '../components/features/FeaturesHero';
import FeaturesGrid from '../components/features/FeaturesGrid';
import RuleEngineDeepDive from '../components/features/RuleEngineDeepDive';
import SegmentsDeepDive from '../components/features/SegmentsDeepDive';

/**
 * Page 2 — Features (features.html)
 * Sections per Handoff Document § 6:
 *  2.1  Features Hero
 *  2.2  Features Grid (16 cards, 4 groups)
 *  2.3  Deep Dive: Rule Engine
 *  2.4  Deep Dive: Customer Segments
 */
const FeaturesPage = () => {
  useEffect(() => {
    document.title = 'ownRewards Features — Loyalty, Rules, Coupons, Referrals & Analytics';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', "Explore ownRewards' full feature set: rule engine with 30+ triggers, 4-tier loyalty, smart coupons, dual-sided referrals, cohort analytics and more.");
    }
    return () => {
      document.title = 'ownRewards — Smart Loyalty & Retention Platform for Growing Businesses';
      if (meta) meta.setAttribute('content', "Build a loyalty program that actually drives repeat business. Points, rewards, coupons, referrals, and automated rules — all in one intelligent platform.");
    };
  }, []);

  return (
    <>
      {/* 2.1 Features Hero */}
      <AnimatedSection animation="animate-fade-in">
        <FeaturesHero />
      </AnimatedSection>

      {/* 2.2 Features Grid — 16 cards, 4 groups */}
      <AnimatedSection>
        <FeaturesGrid />
      </AnimatedSection>

      {/* 2.3 Deep Dive: Rule Engine */}
      <AnimatedSection>
        <RuleEngineDeepDive />
      </AnimatedSection>

      {/* 2.4 Deep Dive: Customer Segments */}
      <SegmentsDeepDive />
    </>
  );
};

export default FeaturesPage;
