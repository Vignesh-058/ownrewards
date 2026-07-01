import React from 'react';
import { Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../GlassCard';

const MissionVision = () => {
  return (
    <section className="mission-vision relative">
      <div className="container relative z-10">
        <div className="mv-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="mv-card hover-lift">
              <div className="mv-icon">
                <Target size={24} />
              </div>
              <h3>Our Mission</h3>
              <p className="text-secondary">
                To democratize enterprise-grade loyalty mechanics, giving businesses of all sizes the tools they need to build lasting emotional connections with their customers through intelligent data.
              </p>
            </GlassCard>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="mv-card hover-lift">
              <div className="mv-icon">
                <Eye size={24} />
              </div>
              <h3>Our Vision</h3>
              <p className="text-secondary">
                A world where every brand transaction feels rewarding, and where loyalty is earned through personalized, frictionless experiences rather than aggressive discounting.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
