import React from 'react';

export const SectionHeader = ({ 
  title, 
  subtitle, 
  eyebrow, 
  align = 'center',
  className = ''
}) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  return (
    <div className={`mb-16 max-w-3xl ${alignmentClass[align]} ${className}`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold text-[var(--primary)] bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.25)] uppercase tracking-wider">
          {eyebrow}
        </span>
      )}
      <h2 className="h2 mb-6">{title}</h2>
      {subtitle && (
        <p className="body-lg text-[var(--muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
