import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Hero from '../components/Hero';
import StatsStrip from '../components/StatsStrip';
import Differentiators from '../components/Differentiators';
import FeatureTabs from '../components/FeatureTabs';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Integrations from '../components/Integrations';

/**
 * Page 1 — Home (index.html)
 *
 * Sections per Handoff Document § 5:
 *  1.1  Hero
 *  1.2  Stats Strip
 *  1.3  Differentiators ("Why businesses choose ownRewards")
 *  1.4  Feature Preview Tabs
 *  1.5  How It Works (3 Steps)
 *  1.6  Testimonials
 *  1.7  Integrations
 *  1.8  CTA Banner  ← rendered globally by MainLayout
 */
const Home = () => {
  return (
    <>
      {/* 1.1 Hero */}
      <AnimatedSection animation="animate-fade-in">
        <Hero />
      </AnimatedSection>

      {/* 1.2 Stats Strip */}
      <StatsStrip />

      {/* 1.3 Differentiators */}
      <AnimatedSection>
        <Differentiators />
      </AnimatedSection>

      {/* 1.4 Feature Preview Tabs */}
      <AnimatedSection>
        <FeatureTabs />
      </AnimatedSection>

      {/* 1.5 How It Works */}
      <AnimatedSection animation="animate-slide-right">
        <HowItWorks />
      </AnimatedSection>

      {/* 1.6 Testimonials */}
      <AnimatedSection animation="animate-scale-in">
        <Testimonials />
      </AnimatedSection>

      {/* 1.7 Integrations */}
      <AnimatedSection>
        <Integrations />
      </AnimatedSection>

      {/* 1.8 CTA Banner is rendered globally by MainLayout.jsx */}
    </>
  );
};

export default Home;
