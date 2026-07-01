import React from 'react';
import { Settings, Infinity as InfinityIcon, MessageSquare, BarChart2, Zap, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import './WhyChoose.css';

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Settings size={28} />,
      title: "Automation First",
      description: "Set up triggers once and let the engine run your campaigns 24/7.",
      className: "bento-span-4"
    },
    {
      icon: <InfinityIcon size={28} />,
      title: "Unlimited Programs",
      description: "Create as many tiers, point systems, and referral programs as you need.",
      className: "bento-span-4"
    },
    {
      icon: <MessageSquare size={28} />,
      title: "WhatsApp Integration",
      description: "Reach customers where they are with automated WhatsApp notifications.",
      className: "bento-span-4"
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Deep Analytics",
      description: "Track every point issued, redeemed, and the resulting revenue impact.",
      className: "bento-span-6"
    },
    {
      icon: <Zap size={28} />,
      title: "Fast Setup",
      description: "Pre-built templates mean you can go live in under 15 minutes.",
      className: "bento-span-3"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Enterprise Security",
      description: "Bank-grade encryption ensures your customer data is always protected.",
      className: "bento-span-3"
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="why-choose relative overflow-hidden">
      <div className="container relative z-10">
        <div className="section-header text-center mb-8">
          <h2 className="section-title">Why choose <span className="text-primary">OwnRewards?</span></h2>
          <p className="section-subtitle">The most comprehensive loyalty platform built specifically for modern businesses.</p>
        </div>

        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} className={reason.className} variants={itemVariants}>
              <GlassCard className="reason-card hover-lift">
                <div>
                  <div className="reason-icon">
                    {reason.icon}
                  </div>
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan opacity-20 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default WhyChoose;
