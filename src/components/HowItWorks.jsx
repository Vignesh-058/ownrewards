import React from 'react';
import { Link, Settings, MessageCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Link size={24} />,
      title: "1. Connect",
      description: "Integrate with Shopify, WooCommerce, or your custom POS in just a few clicks."
    },
    {
      icon: <Settings size={24} />,
      title: "2. Configure",
      description: "Set up your reward tiers, points logic, and referral rules using our visual builder."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "3. Engage",
      description: "Launch automated campaigns and notify customers via email or WhatsApp."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "4. Grow",
      description: "Watch your customer lifetime value and retention rates climb."
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Launch in <span className="text-primary">minutes</span>, not months</h2>
          <p className="section-subtitle">A seamless onboarding experience designed to get your loyalty program live instantly.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <div className="timeline-steps">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="timeline-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-icon-wrapper">
                  <div className="timeline-icon">{step.icon}</div>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
