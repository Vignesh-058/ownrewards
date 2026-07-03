import React from 'react';
import { motion } from 'framer-motion';

const FeaturesHero = () => {
  return (
    <section className="features-hero relative overflow-hidden" id="features-hero" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ marginBottom: '24px' }}
          >
            <span style={{ 
              background: 'rgba(109,74,255,0.1)', 
              color: 'var(--primary)', 
              padding: '8px 20px', 
              borderRadius: '99px', 
              fontSize: '14px', 
              fontWeight: 700,
              border: '1px solid rgba(109,74,255,0.25)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Platform Capabilities
            </span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: 'var(--font-hero)', fontWeight: 900, marginBottom: '24px', lineHeight: '1.15', letterSpacing: '-0.03em' }}
          >
            Every tool your business needs to <span className="gradient-text">keep customers coming back.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '640px', lineHeight: 1.6 }}
          >
            16 production-ready features. One integrated platform. Zero bloat. 
            Build a world-class loyalty program without writing a single line of code.
          </motion.p>
        </div>
      </div>
      
      {/* Background decoration */ }
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default FeaturesHero;
