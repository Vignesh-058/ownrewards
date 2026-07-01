import React, { useRef } from 'react';
import { Link, Settings, MessageCircle, TrendingUp } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Link size={28} />,
      title: "Connect",
      description: "Integrate with Shopify, WooCommerce, or your custom POS in just a few clicks."
    },
    {
      icon: <Settings size={28} />,
      title: "Configure",
      description: "Set up reward tiers, points logic, and referral rules using our visual builder."
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Engage",
      description: "Launch automated campaigns and notify customers via email or WhatsApp."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Grow",
      description: "Watch your customer lifetime value and retention rates climb steadily."
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="how-it-works relative" ref={containerRef}>
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="section-title">Launch in <span className="text-primary">minutes</span>, not months</h2>
          <p className="section-subtitle">A seamless onboarding experience designed to get your loyalty program live instantly.</p>
        </div>

        <div className="hiw-timeline">
          {/* Timeline line */}
          <div className="hiw-line-track"></div>
          <motion.div 
            className="hiw-line-fill" 
            style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
          />
          
          <div className="hiw-steps">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="hiw-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="hiw-icon-ring">
                  <div className="hiw-icon">{step.icon}</div>
                </div>
                <div className="hiw-card">
                  <h3 className="hiw-title">{index + 1}. {step.title}</h3>
                  <p className="hiw-desc">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary opacity-5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default HowItWorks;
