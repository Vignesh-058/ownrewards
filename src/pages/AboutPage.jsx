import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import MissionVision from '../components/about/MissionVision';
import CoreValues from '../components/about/CoreValues';
import Timeline from '../components/about/Timeline';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import AnimatedSection from '../components/AnimatedSection';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Timeline />
      <CoreValues />
      <div className="about-why-choose">
        <AnimatedSection><WhyChoose /></AnimatedSection>
      </div>
      <AnimatedSection><Testimonials /></AnimatedSection>
    </>
  );
};

export default AboutPage;
