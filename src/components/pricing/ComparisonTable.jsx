import React from 'react';
import { motion } from 'framer-motion';

const Check = ({ color = '#10B981' }) => (
  <span style={{ color, fontWeight: 700, fontSize: '0.875rem' }}>✓</span>
);
const Cross = () => (
  <span style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>✗</span>
);

const rows = [
  { feature: 'Loyalty Members', starter: '500', growth: '5,000', enterprise: 'Unlimited' },
  { feature: 'Loyalty Tiers', starter: '4', growth: '4', enterprise: 'Custom' },
  { feature: 'Rule Triggers', starter: '5', growth: '30+', enterprise: '30+' },
  { feature: 'Rule Actions', starter: 'Basic', growth: 'All 10', enterprise: 'All 10' },
  { feature: 'Rule Library', starter: false, growth: true, enterprise: true },
  { feature: 'Smart Coupons', starter: 'Basic', growth: 'Full', enterprise: 'Full' },
  { feature: 'Referral Programs', starter: false, growth: true, enterprise: true },
  { feature: 'Campaign A/B Testing', starter: false, growth: true, enterprise: true },
  { feature: 'Cohort Analytics', starter: false, growth: true, enterprise: '✓ + Export' },
  { feature: 'Product Intelligence', starter: false, growth: true, enterprise: true },
  { feature: 'POS Integration', starter: 'Petpooja', growth: 'All', enterprise: 'All + Custom' },
  { feature: 'WhatsApp (ownChat)', starter: false, growth: true, enterprise: true },
  { feature: 'Outlets', starter: '1', growth: '10', enterprise: 'Unlimited' },
  { feature: 'API Access', starter: false, growth: true, enterprise: true },
  { feature: 'Support', starter: 'Email', growth: 'Email', enterprise: 'Dedicated CSM' },
];

const CellValue = ({ val }) => {
  if (val === true) return <Check />;
  if (val === false) return <Cross />;
  return <span style={{ fontSize: '0.875rem', color: 'var(--text)', fontWeight: 500 }}>{val}</span>;
};

const ComparisonTable = () => (
  <section
    id="pricing-compare"
    style={{ padding: '0 0 100px', background: 'var(--surface)' }}
    aria-labelledby="compare-heading"
  >
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          id="compare-heading"
          style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '8px', paddingTop: '80px' }}
        >
          Compare all features
        </h2>
        <p style={{ color: 'var(--muted)', textAlign: 'center', marginBottom: '48px' }}>
          Every capability, clearly listed.
        </p>

        <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <table
            role="table"
            aria-label="Feature comparison between Starter, Growth, and Enterprise plans"
            style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px' }}
          >
            <thead>
              <tr style={{ background: 'var(--bg)' }}>
                <th scope="col" style={{ padding: '16px 20px', textAlign: 'left', fontWeight: 700, fontSize: '0.875rem', color: 'var(--muted)', borderBottom: '1px solid var(--border)', minWidth: '180px' }}>
                  Feature
                </th>
                {[
                  { label: 'Starter', highlight: false },
                  { label: 'Growth', highlight: true },
                  { label: 'Enterprise', highlight: false },
                ].map(({ label, highlight }) => (
                  <th
                    key={label}
                    scope="col"
                    style={{
                      padding: '16px 20px', textAlign: 'center',
                      fontWeight: 700, fontSize: '0.9375rem',
                      color: highlight ? 'var(--primary)' : 'var(--text)',
                      borderBottom: `2px solid ${highlight ? 'var(--primary)' : 'var(--border)'}`,
                      background: highlight ? 'rgba(245,158,11,0.04)' : 'transparent',
                    }}
                  >
                    {label}
                    {highlight && (
                      <div style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: 600, marginTop: '2px' }}>⭐ Most Popular</div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  viewport={{ once: true }}
                  style={{
                    borderBottom: '1px solid var(--border)',
                    transition: 'background 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.03)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  <td style={{ padding: '14px 20px', fontWeight: 500, fontSize: '0.9rem', color: 'var(--text)' }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                    <CellValue val={row.starter} />
                  </td>
                  <td style={{ padding: '14px 20px', textAlign: 'center', background: 'rgba(245,158,11,0.03)' }}>
                    <CellValue val={row.growth} />
                  </td>
                  <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                    <CellValue val={row.enterprise} />
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ComparisonTable;
