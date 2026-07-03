import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

const FeatureTabs = () => {
  const [activeTab, setActiveTab] = useState('loyalty');

  const tabs = [
    { id: 'loyalty', label: 'Loyalty Dashboard' },
    { id: 'rules', label: 'Rule Engine' },
    { id: 'coupons', label: 'Smart Coupons' },
    { id: 'referral', label: 'Referral Program' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const panels = {
    loyalty: {
      caption: "Customer wallet showing tier badge, point balance, progress to next tier, and recent activity.",
      mock: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>12,450 pts</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>Lifetime balance</div>
            </div>
            <div style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#F59E0B', padding: '4px 12px', borderRadius: '16px', fontWeight: 'bold' }}>Gold Tier</div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.875rem' }}>
              <span>2,550 pts to Platinum</span>
              <span>83%</span>
            </div>
            <div style={{ height: '8px', background: 'var(--surface)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '83%', height: '100%', background: 'linear-gradient(90deg, #F59E0B, #E2E8F0)' }}></div>
            </div>
          </div>
        </div>
      )
    },
    rules: {
      caption: "A birthday rule automatically awards 500 bonus points and issues a BDAY20 coupon — no manual work.",
      mock: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Birthday Automation</div>
          <div style={{ background: 'var(--surface)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
            <strong>IF</strong> Customer Birthday is Today
          </div>
          <div style={{ background: 'var(--surface)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #10B981' }}>
            <strong>THEN</strong> Award 500 Points
          </div>
          <div style={{ background: 'var(--surface)', padding: '12px', borderRadius: '8px', borderLeft: '3px solid #10B981' }}>
            <strong>AND</strong> Issue Coupon: BDAY20
          </div>
        </div>
      )
    },
    coupons: {
      caption: "Smart coupons with category-specific applicability, usage tracking, and rule-gated eligibility.",
      mock: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(236, 72, 153, 0.2))', padding: '24px', borderRadius: '12px', border: '1px dashed var(--primary)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '2px', color: 'var(--text)' }}>BDAY20</div>
            <div style={{ color: 'var(--muted)', marginTop: '8px' }}>20% OFF Entire Bill</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
            <span style={{ color: 'var(--muted)' }}>Valid for 7 days</span>
            <span style={{ color: '#10B981', fontWeight: 'bold' }}>Active</span>
          </div>
        </div>
      )
    },
    referral: {
      caption: "Both the referrer and the new customer get independent, configurable rewards.",
      mock: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <div style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>Give 20%, Get 500 pts</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '16px', alignItems: 'center' }}>
            <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem' }}>🎁</div>
              <div style={{ fontSize: '0.875rem', marginTop: '8px' }}>Referrer gets 500 pts</div>
            </div>
            <div style={{ color: 'var(--muted)' }}>+</div>
            <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem' }}>🎟️</div>
              <div style={{ fontSize: '0.875rem', marginTop: '8px' }}>Friend gets 20% Off</div>
            </div>
          </div>
        </div>
      )
    },
    analytics: {
      caption: "Real-time cohort retention, reward ROI, and tier distribution — all filterable by date and outlet.",
      mock: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ background: 'var(--surface)', padding: '12px', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Reward ROI</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10B981' }}>4.2x</div>
            </div>
            <div style={{ background: 'var(--surface)', padding: '12px', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Retention Rate</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>64%</div>
            </div>
          </div>
          <div style={{ height: '120px', background: 'var(--surface)', borderRadius: '8px', position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', bottom: 0, left: '10%', width: '15%', height: '40%', background: 'var(--primary)' }}></div>
             <div style={{ position: 'absolute', bottom: 0, left: '30%', width: '15%', height: '60%', background: 'var(--primary)' }}></div>
             <div style={{ position: 'absolute', bottom: 0, left: '50%', width: '15%', height: '50%', background: 'var(--primary)' }}></div>
             <div style={{ position: 'absolute', bottom: 0, left: '70%', width: '15%', height: '90%', background: '#10B981' }}></div>
          </div>
        </div>
      )
    }
  };

  return (
    <section className="feature-tabs-section relative overflow-hidden" id="feature-tabs" style={{ padding: '80px 0' }}>
      <div className="container relative z-10">
        <div className="section-header text-center mb-12">
          <h2 className="headline" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>See ownRewards in action</h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '40px' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: activeTab === tab.id ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: activeTab === tab.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                color: activeTab === tab.id ? 'var(--primary)' : 'var(--text)',
                fontWeight: activeTab === tab.id ? '600' : '400',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', minHeight: '350px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard hoverEffect={false} style={{ padding: '40px' }}>
                <div style={{ marginBottom: '32px' }}>
                  {panels[activeTab].mock}
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', color: 'var(--muted)', textAlign: 'center', fontStyle: 'italic' }}>
                  "{panels[activeTab].caption}"
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-primary opacity-5 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default FeatureTabs;
