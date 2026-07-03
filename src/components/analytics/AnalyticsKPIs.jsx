import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* ─── Animated counter using rAF + IntersectionObserver ─────── */
const useCounter = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = null;
          const step = (ts) => {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [ref, count];
};

const kpis = [
  {
    id: 'metric-roi',
    icon: '📊',
    label: 'Loyalty Program ROI',
    target: 284,
    prefix: '',
    suffix: '%',
    sub: 'Revenue generated vs. discount cost',
    color: '#6366F1',
  },
  {
    id: 'metric-retention',
    icon: '📈',
    label: 'Avg Retention Rate',
    target: 67,
    prefix: '',
    suffix: '%',
    sub: 'Month-3 cohort retention',
    color: '#10B981',
  },
  {
    id: 'metric-members',
    icon: '👥',
    label: 'Active Members',
    target: 12450,
    prefix: '',
    suffix: '',
    sub: 'Across all outlets',
    color: '#F59E0B',
  },
  {
    id: 'metric-ltv',
    icon: '💰',
    label: 'Avg Customer LTV',
    target: 4800,
    prefix: '₹',
    suffix: '',
    sub: '12-month average',
    color: '#EC4899',
  },
];

const KPICounter = ({ kpi, index }) => {
  const [ref, count] = useCounter(kpi.target, 1800);

  return (
    <motion.div style={{ perspective: '1000px' }}>
      <motion.div
        ref={ref}
        id={kpi.id}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
        whileHover={{ rotateY: 5, rotateX: -5, scale: 1.05 }}
        style={{
          padding: '32px',
          textAlign: 'center',
          cursor: 'default',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          transformStyle: 'preserve-3d'
        }}
        className="glass-panel"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 20px 50px ${kpi.color}25`;
          e.currentTarget.style.borderColor = `${kpi.color}66`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.borderColor = 'var(--border)';
        }}
      >
      {/* Top glow stripe */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: `linear-gradient(90deg, ${kpi.color}00, ${kpi.color}, ${kpi.color}00)`,
      }} />

      <div style={{ transform: 'translateZ(30px)' }}>
        <div style={{ fontSize: '2rem', marginBottom: '12px' }} aria-hidden="true">{kpi.icon}</div>
        <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {kpi.label}
        </div>
        <div
          style={{ fontSize: '2.75rem', fontWeight: 900, color: kpi.color, lineHeight: 1, marginBottom: '8px' }}
          aria-label={`${kpi.label}: ${kpi.prefix}${count.toLocaleString()}${kpi.suffix}`}
        >
          {kpi.prefix}{count.toLocaleString()}{kpi.suffix}
        </div>
        <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>{kpi.sub}</div>
      </div>
      </motion.div>
    </motion.div>
  );
};

const AnalyticsKPIs = () => (
  <section id="analytics-metrics" style={{ padding: '0 0 80px' }} aria-label="Key analytics metrics">
    <div className="container">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
      }}>
        {kpis.map((kpi, i) => (
          <KPICounter key={kpi.id} kpi={kpi} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default AnalyticsKPIs;
