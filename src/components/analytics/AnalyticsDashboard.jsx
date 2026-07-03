import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* ──────────────────────────────────────────────────────────────
   FILTER BAR
────────────────────────────────────────────────────────────── */
const FilterBar = ({ active, setActive }) => {
  const pills = ['Today', 'Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Custom Range'];
  const dropdowns = ['By Outlet ▾', 'By Tier ▾'];

  return (
    <div
      id="analytics-filters"
      role="toolbar"
      aria-label="Analytics filter controls"
      style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}
    >
      {pills.map((p) => (
        <button
          key={p}
          onClick={() => setActive(p)}
          aria-pressed={active === p}
          style={{
            padding: '8px 18px', borderRadius: '20px', border: active === p ? '1px solid #6366F1' : '1px solid rgba(255,255,255,0.12)',
            background: active === p ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.06)',
            color: active === p ? '#A5B4FC' : 'rgba(255,255,255,0.55)',
            fontWeight: 600, fontSize: '0.8125rem', cursor: 'pointer',
            transition: 'all 0.2s ease', whiteSpace: 'nowrap',
          }}
        >{p}</button>
      ))}
      {dropdowns.map((d) => (
        <button
          key={d}
          style={{
            padding: '8px 18px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)',
            fontWeight: 600, fontSize: '0.8125rem', cursor: 'pointer',
            transition: 'all 0.2s ease', whiteSpace: 'nowrap',
          }}
        >{d}</button>
      ))}
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────
   MINI KPI ROW
────────────────────────────────────────────────────────────── */
const miniKPIs = [
  { label: 'Completion Rate', value: '87.4%', color: '#10B981' },
  { label: 'Active Members', value: '12,450', color: '#6366F1' },
  { label: 'Overdue Rules', value: '2', color: '#EF4444' },
  { label: 'SLA Compliance', value: '94.2%', color: '#F59E0B' },
];

const MiniKPIRow = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '20px' }}>
    {miniKPIs.map(({ label, value, color }) => (
      <div key={label} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${color}30`, borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
        <div style={{ fontSize: '1.25rem', fontWeight: 800, color }}>{value}</div>
      </div>
    ))}
  </div>
);

/* ──────────────────────────────────────────────────────────────
   COHORT HEATMAP
────────────────────────────────────────────────────────────── */
const cohortData = [
  { month: 'Jan 2026', values: ['100%', '74%', '61%', '55%'] },
  { month: 'Feb 2026', values: ['100%', '71%', '58%', '—'] },
  { month: 'Mar 2026', values: ['100%', '68%', '—', '—'] },
  { month: 'Apr 2026', values: ['100%', '—', '—', '—'] },
];

const heatColor = (val) => {
  if (val === '—') return { bg: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.2)' };
  const n = parseInt(val);
  if (n >= 60) return { bg: 'rgba(16,185,129,0.25)', color: '#10B981' };
  if (n >= 40) return { bg: 'rgba(245,158,11,0.25)', color: '#F59E0B' };
  return { bg: 'rgba(239,68,68,0.25)', color: '#EF4444' };
};

const CohortHeatmap = () => (
  <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
    <div style={{ marginBottom: '10px', fontSize: '0.8125rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
      📈 Cohort Retention Heatmap
    </div>
    <table
      role="table"
      aria-label="Cohort retention heatmap"
      style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem', minWidth: '320px' }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: 'left', padding: '8px 10px', color: 'rgba(255,255,255,0.45)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase' }}>Cohort</th>
          {['Month 0', 'Month 1', 'Month 2', 'Month 3'].map((h) => (
            <th key={h} style={{ padding: '8px 10px', color: 'rgba(255,255,255,0.45)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', textAlign: 'center' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {cohortData.map((row, ri) => (
          <motion.tr
            key={row.month}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: ri * 0.1 }}
            viewport={{ once: true }}
          >
            <td style={{ padding: '8px 10px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '0.75rem', whiteSpace: 'nowrap' }}>{row.month}</td>
            {row.values.map((val, ci) => {
              const { bg, color } = heatColor(val);
              return (
                <td key={ci} style={{ padding: '6px 4px', textAlign: 'center' }}>
                  <div style={{ background: bg, borderRadius: '6px', padding: '6px 4px', fontWeight: 700, color, fontSize: '0.8125rem' }}>
                    {val}
                  </div>
                </td>
              );
            })}
          </motion.tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ──────────────────────────────────────────────────────────────
   TIER DONUT (pure CSS conic-gradient)
────────────────────────────────────────────────────────────── */
const tierData = [
  { label: 'Bronze', pct: 45, color: '#CD7F32' },
  { label: 'Silver', pct: 30, color: '#94A3B8' },
  { label: 'Gold', pct: 18, color: '#F59E0B' },
  { label: 'Platinum', pct: 7, color: '#E2E8F0' },
];

const buildGradient = () => {
  let angle = 0;
  return tierData.map(({ pct, color }) => {
    const start = angle;
    angle += pct * 3.6;
    return `${color} ${start}deg ${angle}deg`;
  }).join(', ');
};

const TierDonut = () => (
  <div>
    <div style={{ marginBottom: '10px', fontSize: '0.8125rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
      🏆 Tier Distribution
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
        viewport={{ once: true }}
        style={{
          width: '140px', height: '140px', borderRadius: '50%',
          background: `conic-gradient(${buildGradient()})`,
          position: 'relative',
          boxShadow: '0 0 32px rgba(99,102,241,0.2)',
        }}
        aria-label="Tier distribution donut chart"
        role="img"
      >
        {/* Hole */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'rgba(15,17,35,0.97)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column',
        }}>
          <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)' }}>Total</div>
          <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>12.4k</div>
        </div>
      </motion.div>

      {/* Legend */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', width: '100%' }}>
        {tierData.map(({ label, pct, color }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: color, flexShrink: 0 }} />
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>{label}</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color, marginLeft: 'auto' }}>{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ──────────────────────────────────────────────────────────────
   PRODUCT TABLE
────────────────────────────────────────────────────────────── */
const products = [
  { name: 'Butter Chicken', revenue: '₹82,400', qty: 412, repeat: '67%', trend: '↑', tc: '#10B981' },
  { name: 'Paneer Tikka', revenue: '₹61,200', qty: 306, repeat: '54%', trend: '↑', tc: '#10B981' },
  { name: 'Cold Coffee', revenue: '₹24,800', qty: 248, repeat: '31%', trend: '→', tc: '#F59E0B' },
];

const ProductTable = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div>
      <div style={{ marginBottom: '10px', fontSize: '0.8125rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>
        🛒 Product Performance
      </div>
      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <table
          role="table"
          aria-label="Product performance table"
          style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem', minWidth: '400px' }}
        >
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'sticky', top: 0, background: 'rgba(15,17,35,0.97)' }}>
              {['Product', 'Revenue', 'Qty', 'Repeat %', 'Trend'].map((h) => (
                <th key={h} style={{ padding: '10px 12px', textAlign: h === 'Product' ? 'left' : 'center', color: 'rgba(255,255,255,0.45)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <motion.tr
                key={p.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  background: hovered === i ? 'rgba(99,102,241,0.08)' : 'transparent',
                  transition: 'background 0.2s ease',
                  cursor: 'default',
                }}
              >
                <td style={{ padding: '12px', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{p.name}</td>
                <td style={{ padding: '12px', textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>{p.revenue}</td>
                <td style={{ padding: '12px', textAlign: 'center', color: 'rgba(255,255,255,0.55)' }}>{p.qty}</td>
                <td style={{ padding: '12px', textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{p.repeat}</td>
                <td style={{ padding: '12px', textAlign: 'center', fontSize: '1.125rem', color: p.tc, fontWeight: 700 }}>{p.trend}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────
   DASHBOARD CONTAINER
────────────────────────────────────────────────────────────── */
const AnalyticsDashboard = () => {
  const [activeFilter, setActiveFilter] = useState('Last 30 Days');

  return (
    <section
      id="analytics-dashboard-mock"
      style={{ padding: '80px 0', background: 'var(--bg)' }}
      aria-labelledby="dashboard-heading"
    >
      <div className="container">
        <div className="section-header text-center" style={{ marginBottom: '48px' }}>
          <h2 id="dashboard-heading" style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
            A live look at your loyalty engine.
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.0625rem' }}>
            Real-time cohort data, reward ROI, and tier distribution — all in one place.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(15,17,35,0.97) 0%, rgba(25,20,55,0.97) 100%)',
            borderRadius: '24px',
            padding: '28px',
            border: '1px solid rgba(99,102,241,0.2)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle glow */}
          <div style={{
            position: 'absolute', top: '-100px', right: '-100px',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Header bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            {['#EF4444', '#F59E0B', '#10B981'].map((c) => (
              <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
            ))}
            <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', marginLeft: '8px' }}>
              ownRewards Analytics Dashboard
            </span>
          </div>

          {/* Filter Bar */}
          <FilterBar active={activeFilter} setActive={setActiveFilter} />

          {/* Mini KPIs */}
          <MiniKPIRow />

          {/* Middle: Heatmap + Donut */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginBottom: '20px',
          }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.07)' }}>
              <CohortHeatmap />
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.07)' }}>
              <TierDonut />
            </div>
          </div>

          {/* Bottom: Product Table */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(255,255,255,0.07)' }}>
            <ProductTable />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
