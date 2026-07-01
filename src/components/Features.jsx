import React from 'react';
import { Gift, Zap, Users, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      icon: <Gift size={32} className="feature-icon-svg" />,
      title: "Smart Loyalty System",
      description: "Build points-based or tiered loyalty programs that automatically reward your best customers and drive repeat purchases.",
      className: "bento-span-8"
    },
    {
      icon: <Zap size={32} className="feature-icon-svg" />,
      title: "Rule Engine",
      description: "Create complex, automated reward rules based on spending behavior or special dates.",
      className: "bento-span-4"
    },
    {
      icon: <Users size={32} className="feature-icon-svg" />,
      title: "Referral Programs",
      description: "Turn your customers into advocates with double-sided referral rewards that acquire new high-LTV users effortlessly.",
      className: "bento-span-5"
    },
    {
      icon: <PieChart size={32} className="feature-icon-svg" />,
      title: "Financial Analytics",
      description: "Track program liability, ROI, and customer lifetime value with enterprise-grade dashboards and reporting tools.",
      className: "bento-span-7"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="section-title">Everything you need to <span className="gradient-text">retain customers</span></h2>
          <p className="section-subtitle">A complete toolkit designed to increase customer lifetime value and drive organic growth.</p>
        </div>

        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featureList.map((feature, index) => (
            <motion.div key={index} className={feature.className} variants={itemVariants}>
              <GlassCard className="feature-card hover-lift">
                <div>
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
