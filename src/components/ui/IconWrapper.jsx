import React from 'react';

export const IconWrapper = ({ 
  children, 
  size = 'md', 
  variant = 'primary',
  className = ''
}) => {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-xl',
    lg: 'w-16 h-16 text-2xl'
  };

  const variants = {
    primary: 'bg-[rgba(245,158,11,0.1)] text-[var(--primary)]',
    secondary: 'bg-[rgba(99,102,241,0.1)] text-[var(--secondary)]',
    accent: 'bg-[rgba(236,72,153,0.1)] text-[var(--accent)]',
    glass: 'bg-[rgba(255,255,255,0.05)] text-[var(--text)] backdrop-blur-sm border border-[var(--border)]'
  };

  return (
    <div className={`flex items-center justify-center rounded-[var(--radius-sm)] ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
