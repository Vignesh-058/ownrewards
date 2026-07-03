import React from 'react';

export const Card = ({ children, className = '', hover = true, ...props }) => {
  // Utilizing the premium glassmorphism classes from global.css
  const baseClass = hover ? 'glass-panel' : 'glass-panel hover:transform-none hover:shadow-[var(--shadow-glass)]';
  
  return (
    <div 
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
