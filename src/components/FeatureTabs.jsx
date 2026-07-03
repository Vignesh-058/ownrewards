import React from 'react';
import { motion } from 'framer-motion';

const BentoCard = ({ children, title, subtitle, colSpan = 1, rowSpan = 1, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: 'spring', stiffness: 100 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transformStyle: 'preserve-3d',
      }}
      className="glass-panel"
    >
      <div style={{ position: 'relative', zIndex: 10 }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0, maxWidth: '280px' }}>
          {subtitle}
        </p>
      </div>
      <div style={{ flexGrow: 1, marginTop: '32px', position: 'relative', zIndex: 1, transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

/* ─── Bento UI Blocks ──────────────────────────────────── */

const RuleEngineBlock = () => (
  <div style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(139,92,246,0.1)' }}>
    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
      <span style={{ background: 'var(--lavender)', color: 'var(--primary)', padding: '4px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 700 }}>Trigger: Customer Birthday</span>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'rgba(255,255,255,0.7)', borderRadius: '8px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Action 1</span>
        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--success)' }}>+500 Points</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: 'rgba(255,255,255,0.7)', borderRadius: '8px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Action 2</span>
        <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)' }}>Issue Coupon BDAY20</span>
      </div>
    </div>
  </div>
);

const RetentionChartBlock = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', justifyContent: 'flex-end' }}>
    <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '120px' }}>
      {[95, 82, 74, 68, 62, 58].map((val, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${val}%` }}
          transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
          viewport={{ once: true }}
          style={{ flex: 1, background: i === 0 ? 'var(--lavender)' : 'var(--primary)', borderRadius: '6px 6px 0 0', opacity: i === 0 ? 0.5 : 1 }}
        />
      ))}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 600 }}>
      <span>M1</span>
      <span>M2</span>
      <span>M3</span>
      <span>M4</span>
      <span>M5</span>
      <span>M6</span>
    </div>
  </div>
);

const WalletBlock = () => (
  <div style={{ background: 'rgba(255,255,255,0.5)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.8)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
      <div>
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Current Balance</div>
        <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>12,450</div>
      </div>
      <div style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 700 }}>
        Gold Tier
      </div>
    </div>
    <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
      <div style={{ width: '75%', height: '100%', background: 'var(--primary)' }} />
    </div>
    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '8px', textAlign: 'right' }}>
      2,550 pts to Platinum
    </div>
  </div>
);

const FeatureTabs = () => {
  return (
    <section
      id="bento-features"
      style={{ padding: '60px 0', background: 'var(--background)' }}
      aria-labelledby="bento-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="section-header text-center" style={{ marginBottom: '80px' }}>
          <h2
            id="bento-heading"
            className="h-section"
            style={{ marginBottom: '16px' }}
          >
            A complete loyalty operating system.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Replace 5 different tools with one cohesive, intelligent platform designed for growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gridAutoRows: 'minmax(320px, auto)',
            gap: '24px',
            perspective: '1200px'
          }}
        >
          {/* Card 1: Rule Engine */}
          <BentoCard 
            title="Intelligent Rule Engine" 
            subtitle="Trigger any reward or coupon based on real customer behavior. Set it and forget it."
            colSpan={2}
            delay={0.1}
          >
            <RuleEngineBlock />
          </BentoCard>

          {/* Card 2: Wallet */}
          <BentoCard 
            title="Digital Customer Wallets" 
            subtitle="Let your customers track their points and tier progress in real-time."
            delay={0.2}
          >
            <WalletBlock />
          </BentoCard>

          {/* Card 3: Analytics */}
          <BentoCard 
            title="Deep Cohort Analytics" 
            subtitle="Stop guessing. See exactly how your loyalty rules impact month-over-month retention."
            delay={0.3}
          >
            <RetentionChartBlock />
          </BentoCard>

          {/* Card 4: Campaigns */}
          <BentoCard 
            title="Smart Campaigns" 
            subtitle="Run A/B tested promotions targeted at specific customer segments."
            colSpan={2}
            delay={0.4}
          >
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Variant A</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--success)' }}>+18.4%</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Conversion Rate</div>
              </div>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.4)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Variant B</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary)' }}>+11.2%</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Conversion Rate</div>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
