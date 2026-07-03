import React from 'react';
import { Card } from './Card';
import { IconWrapper } from './IconWrapper';

export const FeatureCard = ({ icon, title, description, className = '' }) => {
  return (
    <Card className={`flex flex-col gap-6 ${className}`} style={{ padding: 'var(--card-pad)' }}>
      {icon && (
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(109,74,255,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(109,74,255,0.2)' }}>
          {icon}
        </div>
      )}
      <div>
        <h3 style={{ fontSize: 'var(--font-card-title)', fontWeight: 700, marginBottom: '12px' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-body)', lineHeight: 1.6 }}>{description}</p>
      </div>
    </Card>
  );
};
