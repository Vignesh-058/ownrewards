import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import Features from '../components/Features';
import ProductShowcase from '../components/ProductShowcase';
import HowItWorks from '../components/HowItWorks';
import DeveloperSection from '../components/DeveloperSection';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FinalCTA from '../components/FinalCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <DeveloperSection />
        <WhyChoose />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
