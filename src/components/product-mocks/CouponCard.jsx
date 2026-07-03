import React from 'react';
import { motion } from 'framer-motion';

const CouponCard = ({
  name = 'Summer Weekend 20%',
  status = 'Active',
  discountType = '20% OFF',
  maxDiscount = 'Max ₹500',
  categories = ['Apparel', 'Footwear'],
  usage = { current: 342, total: 500 },
  expiry = 'Expires in 12 days',
}) => {
  const pct = (usage.current / usage.total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(236,72,153,0.15)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      style={{
        background: 'var(--surface)',
        border: '1px solid rgba(236,72,153,0.3)',
        borderRadius: '20px',
        padding: '24px',
        color: 'var(--text)',
        position: 'relative',
        minWidth: '280px',
      }}
    >
      {/* Dashed edge illusion */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: '-4px', width: '8px',
        background: 'radial-gradient(circle, var(--bg) 4px, transparent 4px) repeat-y',
        backgroundSize: '10px 14px',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingLeft: '8px' }}>
        <div style={{ background: 'rgba(236,72,153,0.1)', color: '#EC4899', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
          {discountType}
        </div>
        <div style={{ fontSize: '0.65rem', color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {status}
        </div>
      </div>

      <div style={{ paddingLeft: '8px', marginBottom: '24px' }}>
        <h4 style={{ margin: '0 0 4px 0', fontSize: '1.25rem', fontWeight: 800 }}>{name}</h4>
        <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>{maxDiscount} • Applies to: {categories.join(', ')}</div>
      </div>

      {/* Usage Progress */}
      <div style={{ paddingLeft: '8px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '8px' }}>
          <span style={{ color: 'var(--muted)' }}>Redemptions</span>
          <span style={{ fontWeight: 700 }}>{usage.current} / {usage.total}</span>
        </div>
        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            style={{ height: '100%', background: '#EC4899', borderRadius: '3px' }}
          />
        </div>
      </div>

      <div style={{ paddingLeft: '8px', fontSize: '0.75rem', color: '#F59E0B', fontWeight: 600 }}>
        ⏳ {expiry}
      </div>
    </motion.div>
  );
};

export default CouponCard;
