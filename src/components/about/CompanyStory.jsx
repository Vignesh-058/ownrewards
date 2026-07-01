import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../GlassCard';

const CompanyStory = () => {
  return (
    <section className="company-story relative overflow-hidden">
      <div className="container relative z-10">
        <div className="story-grid">
          <motion.div 
            className="story-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Story</h2>
            <div>
              <p>
                Founded in 2020, OwnRewards is an API-first loyalty engine that helps businesses shift from expensive customer acquisition to sustainable, profitable retention by creating personalized programs that truly resonate.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="story-image-wrapper"
          >
            <div className="story-image-bg">
              <GlassCard className="text-center w-full h-full flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold mb-4">The Shift to Retention</h3>
                <p className="text-secondary mt-2">Acquiring a new customer is 5-25x more expensive than retaining an existing one. We're here to solve that.</p>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
