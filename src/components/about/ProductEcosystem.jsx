import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    icon: '💬',
    name: 'ownChat',
    status: 'Connected',
    statusColor: '#10B981',
    statusBg: 'rgba(16,185,129,0.12)',
    body: 'The WhatsApp-native messaging layer powering all ownRewards notifications — OTPs, reward alerts, expiry reminders, and campaign messages.',
    highlight: false,
    accentColor: '#10B981',
  },
  {
    icon: '🏆',
    name: 'ownRewards',
    status: 'You Are Here',
    statusColor: '#6366F1',
    statusBg: 'rgba(99,102,241,0.15)',
    body: 'The complete loyalty and retention engine — points, tiers, rules, coupons, referrals, and analytics — built for real businesses.',
    highlight: true,
    accentColor: '#6366F1',
  },
  {
    icon: '🛒',
    name: 'ownCart',
    status: 'Integration Available',
    statusColor: '#F59E0B',
    statusBg: 'rgba(245,158,11,0.12)',
    body: 'E-commerce cart and checkout management with native loyalty integration — apply points, validate coupons, and track order-level reward performance.',
    highlight: false,
    accentColor: '#F59E0B',
  },
  {
    icon: '✅',
    name: 'ownTask',
    status: 'Integration Available',
    statusColor: '#F59E0B',
    statusBg: 'rgba(245,158,11,0.12)',
    body: 'Team task and workflow management for business operations — issue tasks triggered by loyalty events, SLA tracking, and team performance dashboards.',
    highlight: false,
    accentColor: '#EC4899',
  },
];

const ProductEcosystem = () => (
  <section
    id="about-ecosystem"
    style={{ padding: '100px 0', background: 'var(--surface)' }}
    aria-labelledby="ecosystem-heading"
  >
    <div className="container">
      <div className="section-header text-center" style={{ marginBottom: '56px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(99,102,241,0.1)', color: 'var(--primary)',
          border: '1px solid rgba(99,102,241,0.25)', borderRadius: '20px',
          padding: '6px 18px', fontSize: '0.8125rem', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px',
        }}>Product Family</div>
        <h2 id="ecosystem-heading" style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
          Part of the iEyal Product Family
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.0625rem' }}>
          ownRewards works best as part of an integrated ecosystem.
        </p>
      </div>

      {/* Connector line behind cards */}
      <div style={{ position: 'relative' }}>
        {/* Horizontal connector (desktop) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', top: '48px', left: '12.5%', right: '12.5%', height: '2px',
            background: 'linear-gradient(90deg, #10B981, #6366F1, #F59E0B, #EC4899)',
            opacity: 0.25, zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          position: 'relative', zIndex: 1,
        }}>
          {products.map((product, i) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 110 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              aria-label={`${product.name} — ${product.status}`}
              style={{
                background: 'var(--bg)',
                border: product.highlight
                  ? `2px solid ${product.accentColor}`
                  : '1px solid var(--border)',
                borderRadius: '20px',
                padding: '24px',
                cursor: 'default',
                transition: 'box-shadow 0.3s ease',
                boxShadow: product.highlight
                  ? `0 0 40px ${product.accentColor}22, 0 8px 32px rgba(0,0,0,0.05)`
                  : '0 4px 16px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 40px ${product.accentColor}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = product.highlight
                  ? `0 0 40px ${product.accentColor}22, 0 8px 32px rgba(0,0,0,0.05)`
                  : '0 4px 16px rgba(0,0,0,0.04)';
              }}
            >
              {/* Glow stripe */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: product.highlight ? '4px' : '2px',
                background: `linear-gradient(90deg, ${product.accentColor}00, ${product.accentColor}, ${product.accentColor}00)`,
              }} />

              {/* Icon */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '14px',
                background: `${product.accentColor}14`, border: `1px solid ${product.accentColor}25`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: '14px',
              }} aria-hidden="true">
                {product.icon}
              </div>

              {/* Name */}
              <h3 style={{
                fontSize: '1.0625rem', fontWeight: 800, marginBottom: '8px',
                color: product.highlight ? product.accentColor : 'var(--text)',
              }}>
                {product.name}
              </h3>

              {/* Status badge */}
              <div style={{ marginBottom: '12px' }}>
                <span style={{
                  background: product.statusBg, color: product.statusColor,
                  border: `1px solid ${product.statusColor}35`,
                  borderRadius: '20px', padding: '3px 10px',
                  fontSize: '0.72rem', fontWeight: 700,
                }}>
                  {product.status === 'Connected' ? '● ' : ''}{product.status}
                </span>
              </div>

              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: 1.65, margin: 0 }}>
                {product.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductEcosystem;
