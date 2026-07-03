import React from 'react';

export const Badge = ({ children, tier = 'default', className = '' }) => {
  const tiers = {
    bronze: 'bg-[rgba(205,127,50,0.15)] text-[#CD7F32] border border-[rgba(205,127,50,0.3)]',
    silver: 'bg-[rgba(148,163,184,0.15)] text-[#94A3B8] border border-[rgba(148,163,184,0.3)]',
    gold: 'bg-[rgba(245,158,11,0.15)] text-[#F59E0B] border border-[rgba(245,158,11,0.3)]',
    platinum: 'bg-[rgba(226,232,240,0.15)] text-[#E2E8F0] border border-[rgba(226,232,240,0.3)]',
    default: 'bg-[rgba(255,255,255,0.05)] text-[var(--muted)] border border-[var(--border)]'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${tiers[tier]} ${className}`}>
      {children}
    </span>
  );
};
