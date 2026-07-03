import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PositioningStatement = () => {
  const chips = [
    "Loyalty Engine",
    "Smart Rule Engine",
    "Rewards & Coupons",
    "Referral Programs",
    "Campaign Automation",
    "Advanced Analytics"
  ];

  return (
    <section className="positioning-statement relative overflow-hidden" id="positioning" style={{ padding: '120px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'linear-gradient(180deg, var(--background) 0%, rgba(99, 102, 241, 0.05) 100%)' }}>
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <div style={{ display: 'inline-block', marginBottom: '24px' }}>
            <span style={{ 
              background: 'rgba(99, 102, 241, 0.1)', 
              color: 'var(--primary)', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontSize: '0.875rem', 
              fontWeight: 'bold', 
              letterSpacing: '0.1em',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
              WHY OWNREWARDS
            </span>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '32px', color: 'var(--muted)' }}
          >
            The Intelligent Customer Loyalty Platform for Growing Businesses
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{ 
              background: 'rgba(18, 18, 40, 0.6)', 
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '24px',
              padding: '48px',
              marginBottom: '48px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
            }}
          >
            <p style={{ fontSize: '1.75rem', lineHeight: '1.5', fontWeight: '500', color: 'var(--text)' }}>
              "ownRewards is the intelligent loyalty and retention platform for growing businesses—combining loyalty points, smart rewards, coupons, referrals, automated rule engines, campaigns, and real-time analytics in one powerful platform."
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {chips.map((chip, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 + (idx * 0.05) }}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  background: 'var(--surface)', 
                  border: '1px solid var(--border)',
                  padding: '8px 20px', 
                  borderRadius: '30px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--text)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                <Check size={16} color="var(--primary)" />
                {chip}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default PositioningStatement;
