import React from 'react';
import { motion } from 'framer-motion';

const FeaturesHero = () => {
  return (
    <section className="features-hero relative overflow-hidden" id="features-hero" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '24px', lineHeight: '1.2' }}
          >
            Every tool your business needs to keep customers coming back.
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '600px', mx: 'auto' }}
          >
            16 production-ready features. One integrated platform. Zero bloat.
          </motion.p>
        </div>
      </div>
      
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default FeaturesHero;
