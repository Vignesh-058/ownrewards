import React from 'react';
import { motion } from 'framer-motion';

const CouponCard = ({
  name = 'SUMMER20',
  status = 'ACTIVE',
  discount = '20%',
  maxDiscount = '₹500',
  category = 'Shoes',
  usage = 84,
  expiry = 'Aug 31 2026',
  eligibility = 'Gold+ Tier',
}) => {
  return (
    <motion.div
      id="mock-coupon-card"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(236,72,153,0.15)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="glass-panel"
      style={{
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

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', paddingLeft: '12px' }}>
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '0.05em', color: '#EC4899' }}>{name}</h4>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>Discount: {discount}</span>
            <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Max: {maxDiscount}</span>
          </div>
          <div style={{ fontSize: '0.875rem', color: 'var(--muted)', marginTop: '4px' }}>Category: {category}</div>
        </div>
        <div style={{ fontSize: '0.65rem', color: '#10B981', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', background: 'rgba(16,185,129,0.1)', padding: '4px 10px', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.3)' }}>
          {status}
        </div>
      </div>

      {/* Usage Progress */}
      <div style={{ paddingLeft: '12px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '8px', color: 'var(--muted)' }}>
          <span style={{ textTransform: 'uppercase', fontWeight: 700 }}>Usage Limit</span>
          <span style={{ fontWeight: 700, color: 'var(--text)' }}>{usage}%</span>
        </div>
        <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${usage}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            style={{ height: '100%', background: '#F59E0B', borderRadius: '4px' }}
          />
        </div>
      </div>

      <div style={{ paddingLeft: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed var(--border)', paddingTop: '16px' }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
          <span style={{ fontWeight: 700, color: 'var(--text)' }}>Expiry:</span> {expiry}
        </div>
        <div style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '0.8rem' }}>🔒</span>
          {eligibility}
        </div>
      </div>
    </motion.div>
  );
};

export default CouponCard;
