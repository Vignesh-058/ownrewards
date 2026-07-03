import React from 'react';

export const Divider = ({ className = '', vertical = false }) => {
  if (vertical) {
    return <div className={`w-[1px] h-full bg-[var(--border)] ${className}`} />;
  }
  return <hr className={`w-full border-t border-[var(--border)] ${className}`} />;
};
