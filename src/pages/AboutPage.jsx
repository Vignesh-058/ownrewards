import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyIntro from '../components/about/CompanyIntro';
import OriginStory from '../components/about/OriginStory';
import ValuesSection from '../components/about/ValuesSection';
import ProductEcosystem from '../components/about/ProductEcosystem';
import AboutCTA from '../components/about/AboutCTA';

/**
 * Page 7 — About (about.html)
 * Sections per Handoff Document § 11:
 *  7.1  Company Intro
 *  7.2  Origin Story
 *  7.3  Values (4 cards)
 *  7.4  Product Ecosystem
 *  7.5  Final CTA
 */
const AboutPage = () => {
  useEffect(() => {
    document.title = 'About ownRewards — Built by iEyal Solutions';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', "Learn how ownRewards was built from real restaurant and retail frustrations — and why it's the only loyalty platform growing businesses need.");
    }
    return () => {
      document.title = 'ownRewards — Smart Loyalty & Retention Platform for Growing Businesses';
      if (meta) {
        meta.setAttribute('content', 'Build a loyalty program that actually drives repeat business. Points, rewards, coupons, referrals, and automated rules — all in one intelligent platform.');
      }
    };
  }, []);

  return (
    <>
      <AboutHero />
      <CompanyIntro />
      <OriginStory />
      <ValuesSection />
      <ProductEcosystem />
      <AboutCTA />
    </>
  );
};

export default AboutPage;
