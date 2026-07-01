import React from 'react';
import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import Metrics from '../components/Metrics';
import ProductShowcase from '../components/ProductShowcase';
import HowItWorks from '../components/HowItWorks';
import DeveloperSection from '../components/DeveloperSection';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <>
      <AnimatedSection animation="animate-fade-in"><Hero /></AnimatedSection>
      <AnimatedSection delay={200}><TrustedCompanies /></AnimatedSection>
      <AnimatedSection><Metrics /></AnimatedSection>
      <AnimatedSection><ProductShowcase /></AnimatedSection>
      <AnimatedSection animation="animate-slide-right"><HowItWorks /></AnimatedSection>
      <AnimatedSection animation="animate-scale-in"><DeveloperSection /></AnimatedSection>
      <AnimatedSection><FAQ /></AnimatedSection>
      <AnimatedSection><FinalCTA /></AnimatedSection>
    </>
  );
};

export default Home;
