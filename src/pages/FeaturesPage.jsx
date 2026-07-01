import React from 'react';
import Features from '../components/Features';
import AnimatedSection from '../components/AnimatedSection';

const FeaturesPage = () => {
  return (
    <AnimatedSection animation="animate-fade-in">
      <Features />
    </AnimatedSection>
  );
};

export default FeaturesPage;
