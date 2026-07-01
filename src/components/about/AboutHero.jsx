import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../GlassCard';

const AboutHero = () => {
  return (
    <section className="about-hero relative overflow-hidden">
      <div className="container relative z-10">
        <div className="section-header text-center">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Redefining <span className="gradient-text">Customer Loyalty</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle mx-auto mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We are on a mission to empower brands to build meaningful, long-lasting relationships with their customers through intelligent, data-driven rewards.
          </motion.p>
        </div>
        
        <motion.div 
          className="bento-grid mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bento-span-4">
            <GlassCard className="about-stat-card text-center">
              <h3 className="about-stat-number gradient-text">2020</h3>
              <p className="text-secondary">Founded</p>
            </GlassCard>
          </div>
          <div className="bento-span-4">
            <GlassCard className="about-stat-card text-center">
              <h3 className="about-stat-number gradient-text">500+</h3>
              <p className="text-secondary">Global Brands</p>
            </GlassCard>
          </div>
          <div className="bento-span-4">
            <GlassCard className="about-stat-card text-center">
              <h3 className="about-stat-number gradient-text">10M+</h3>
              <p className="text-secondary">Rewards Issued</p>
            </GlassCard>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default AboutHero;
