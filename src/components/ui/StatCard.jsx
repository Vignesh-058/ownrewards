import React from 'react';
import { Card } from './Card';

export const StatCard = ({ label, value, sub, className = '' }) => {
  return (
    <Card className={`p-6 text-center ${className}`}>
      <div className="label text-[var(--muted)] mb-2">{label}</div>
      <div className="h2 text-[var(--primary)] mb-1">{value}</div>
      {sub && <div className="caption">{sub}</div>}
    </Card>
  );
};
