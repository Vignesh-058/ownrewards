import React from 'react';

export const Tag = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-[var(--radius-sm)] text-[10px] font-bold uppercase tracking-wider bg-[rgba(255,255,255,0.05)] text-[var(--muted)] border border-[var(--border)] ${className}`}>
      {children}
    </span>
  );
};
