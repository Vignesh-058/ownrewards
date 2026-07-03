import React from 'react';
import { Brain, Trophy, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Brain size={28} />,
      title: "Rules That Think",
      description: "Not just \"earn 1 point per ₹100\". Set 30+ trigger events — birthday, nth visit, inactivity, feedback, referral — and automate any action: bonus points, reward grants, tier changes, coupon issuance."
    },
    {
      icon: <Trophy size={28} />,
      title: "Tiers That Mean Something",
      description: "Bronze → Silver → Gold → Platinum with dynamic progression, tier-based multipliers, and lifecycle stage tracking (active, at-risk, churned). Customers feel the difference."
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Analytics That Drive Decisions",
      description: "Track cohort retention curves, reward ROI, product correlations, and customer lifetime value — not just points totals."
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
    <section className="why-choose relative overflow-hidden" id="differentiators" style={{ padding: '80px 0' }}>
      <div className="container relative z-10">
        <div className="section-header text-center mb-12">
          <h2 className="headline" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Why businesses choose ownRewards</h2>
        </div>

        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="reason-card hover-lift" style={{ height: '100%', padding: '32px' }}>
                <div>
                  <div className="reason-icon" style={{ color: 'var(--primary)', marginBottom: '16px', display: 'inline-flex', padding: '12px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px' }}>
                    {reason.icon}
                  </div>
                  <h3 className="reason-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '12px' }}>{reason.title}</h3>
                  <p className="reason-description" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>{reason.description}</p>
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
