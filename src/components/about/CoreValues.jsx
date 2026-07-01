import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Shield, Zap } from 'lucide-react';
import GlassCard from '../GlassCard';

const CoreValues = () => {
  const values = [
    {
      icon: <Lightbulb size={28} className="text-primary" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible in customer retention, prioritizing smart, data-driven solutions."
    },
    {
      icon: <Shield size={28} className="text-primary" />,
      title: "Built on Trust",
      description: "Enterprise-grade security and transparency are at the core of everything we build for our partners."
    },
    {
      icon: <Heart size={28} className="text-primary" />,
      title: "Customer Obsessed",
      description: "We succeed only when our clients succeed. We are fiercely dedicated to delivering measurable ROI."
    },
    {
      icon: <Zap size={28} className="text-primary" />,
      title: "Speed to Market",
      description: "We believe complex integrations shouldn't take months. Our API-first approach ensures rapid deployment."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="core-values relative">
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="section-title">Our <span className="gradient-text">Core Values</span></h2>
          <p className="section-subtitle mt-4">The principles that guide our product, our culture, and our partnerships.</p>
        </div>

        <motion.div 
          className="values-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="value-card hover-lift h-full">
                <div className="mv-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
