import React from 'react';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage = () => {
  return (
    <>
      <AnimatedSection animation="animate-fade-up">
        <Contact />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
    </>
  );
};

export default ContactPage;
