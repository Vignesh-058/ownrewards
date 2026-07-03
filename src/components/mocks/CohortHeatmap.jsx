import React from 'react';
import { motion } from 'framer-motion';

const CohortHeatmap = ({
  data = [
    { month: 'Jan 2026', values: ['100%', '74%', '61%', '55%'] },
    { month: 'Feb 2026', values: ['100%', '71%', '58%', '—'] },
    { month: 'Mar 2026', values: ['100%', '69%', '—', '—'] },
    { month: 'Apr 2026', values: ['100%', '—', '—', '—'] },
  ],
  columns = ['Month 0', 'Month 1', 'Month 2', 'Month 3']
}) => {
  const getCellColor = (val) => {
    if (val === '—') return { bg: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.2)' };
    const num = parseInt(val, 10);
    if (num > 60) return { bg: 'rgba(16,185,129,0.2)', color: '#10B981' };
    if (num >= 40) return { bg: 'rgba(245,158,11,0.2)', color: '#F59E0B' };
    return { bg: 'rgba(239,68,68,0.2)', color: '#EF4444' };
  };

  return (
    <motion.div
      id="mock-cohort-heatmap"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(99,102,241,0.1)' }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="glass-panel"
      style={{
        padding: '28px',
        color: 'var(--text)',
        minWidth: '320px',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ margin: '0 0 4px 0', fontSize: '1.125rem', fontWeight: 800 }}>Cohort Retention</h4>
        <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>User retention over 90 days</div>
      </div>

      <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: '24px' }}>
        <table role="table" aria-label="Cohort Heatmap" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '4px' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px', color: 'var(--muted)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>Cohort</th>
              {columns.map(col => (
                <th key={col} style={{ textAlign: 'center', padding: '8px', color: 'var(--muted)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase' }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, ri) => (
              <motion.tr
                key={row.month}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: ri * 0.1 }}
                viewport={{ once: true }}
              >
                <td style={{ padding: '8px', color: 'var(--text)', fontWeight: 600, fontSize: '0.8125rem', whiteSpace: 'nowrap' }}>
                  {row.month}
                </td>
                {row.values.map((val, ci) => {
                  const { bg, color } = getCellColor(val);
                  return (
                    <td key={ci} style={{ padding: '0', textAlign: 'center' }}>
                      <div style={{ background: bg, color: color, padding: '8px 4px', borderRadius: '8px', fontSize: '0.8125rem', fontWeight: 700, border: val !== '—' ? `1px solid ${color}40` : '1px solid transparent' }}>
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

      {/* Legend */}
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.4)' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>High Retention</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>Medium</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '4px', background: 'rgba(239,68,68,0.2)', border: '1px solid rgba(239,68,68,0.4)' }} />
          <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>Low</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CohortHeatmap;
