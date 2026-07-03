import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const metrics = [
  {
    icon: '💚',
    metric: 'Health Score',
    description: 'AI-calculated segment vitality based on engagement, spend, and visit frequency.',
    value: '87',
    unit: '/100',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.1)',
    bar: 87,
  },
  {
    icon: '⚠️',
    metric: 'Churn Risk',
    description: 'Predict which customers are about to leave — before they do.',
    value: '14%',
    unit: 'at-risk',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.1)',
    bar: 14,
  },
  {
    icon: '📈',
    metric: 'Predicted LTV',
    description: 'Forecast lifetime value per customer segment based on purchase patterns.',
    value: '₹8,400',
    unit: 'avg/customer',
    color: '#6366F1',
    bg: 'rgba(99,102,241,0.1)',
    bar: 68,
  },
];

const SegmentsDeepDive = () => {
  return (
    <section
      id="deep-dive-segments"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, rgba(15,17,35,0.97) 0%, rgba(25,20,55,0.97) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="segments-heading"
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          className="section-header text-center"
          style={{ marginBottom: '64px' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div style={{
            display: 'inline-block', background: 'rgba(99,102,241,0.15)', color: '#A5B4FC',
            border: '1px solid rgba(99,102,241,0.3)', borderRadius: '20px', padding: '6px 18px',
            fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
            marginBottom: '20px',
          }}>Customer Segments</div>

          <h2
            id="segments-heading"
            style={{ fontSize: '2.25rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}
          >
            Know exactly which customers are worth activating.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.0625rem', maxWidth: '540px', margin: '0 auto' }}>
            AI-powered segmentation that tells you who to retain, when to act, and what it's worth.
          </p>
        </motion.div>

        {/* Metric Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.metric}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid ${m.color}33`,
                borderRadius: '20px',
                padding: '28px',
                transition: 'box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 12px 40px ${m.color}22`; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '16px' }} aria-hidden="true">{m.icon}</div>
              <div style={{ fontSize: '1.875rem', fontWeight: 800, color: m.color, marginBottom: '4px', lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: '14px' }}>{m.unit}</div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{m.metric}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{m.description}</p>

              {/* Mini progress indicator */}
              <div style={{ marginTop: '20px', height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${m.bar}%` }}
                  transition={{ duration: 1, delay: i * 0.15 + 0.3, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  style={{ height: '100%', background: m.color, borderRadius: '2px' }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link to="/analytics" style={{ textDecoration: 'none' }}>
            <Button variant="outline" icon={<ArrowRight size={16} />}>
              See full analytics
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SegmentsDeepDive;
