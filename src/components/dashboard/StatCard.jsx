import React from 'react';
import './DashboardComponents.css';

const StatCard = ({ title, value, icon: Icon, trend, trendValue }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <h3 className="stat-title">{title}</h3>
        <div className="stat-icon-wrapper">
          <Icon size={20} className="stat-icon" />
        </div>
      </div>
      <div className="stat-value">{value}</div>
      {trend && (
        <div className={`stat-trend ${trend === 'up' ? 'positive' : 'negative'}`}>
          <span className="trend-value">{trend === 'up' ? '+' : '-'}{trendValue}</span>
          <span className="trend-label">vs last month</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
