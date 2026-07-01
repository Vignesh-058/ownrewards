import React from 'react';
import Pricing from '../components/Pricing';
import AnimatedSection from '../components/AnimatedSection';

const PricingPage = () => {
  return (
    <AnimatedSection animation="animate-scale-in">
      <Pricing />
    </AnimatedSection>
  );
};

export default PricingPage;
