import React from 'react';

const stats = [
  { number: '30+', label: 'Rule Triggers' },
  { number: '4', label: 'Loyalty Tiers' },
  { number: '10', label: 'Reward Actions' },
  { label: 'Dual-Sided Referrals' },
  { label: 'Real-Time ROI Analytics' },
];

const StatsStrip = () => {
  return (
    <section
      id="stats-strip"
      aria-label="Platform statistics"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '20px 0',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
          }}
        >
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 24px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {stat.number && (
                  <span
                    style={{
                      color: 'var(--primary)',
                      fontWeight: 700,
                      fontSize: '0.9375rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stat.number}
                  </span>
                )}
                <span
                  style={{
                    color: 'var(--muted)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    width: '1px',
                    height: '20px',
                    background: 'var(--border)',
                    flexShrink: 0,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
