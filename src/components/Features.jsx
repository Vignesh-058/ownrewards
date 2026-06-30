import React from 'react';
import { Gift, Zap, Users, PieChart } from 'lucide-react';
import GlassCard from './GlassCard';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      icon: <Gift size={32} className="feature-icon-svg" />,
      title: "Smart Loyalty System",
      description: "Build points-based or tiered loyalty programs that automatically reward your best customers and drive repeat purchases."
    },
    {
      icon: <Zap size={32} className="feature-icon-svg" />,
      title: "Rule Engine",
      description: "Create complex, automated reward rules based on spending behavior, special dates, or specific product purchases."
    },
    {
      icon: <Users size={32} className="feature-icon-svg" />,
      title: "Referral Programs",
      description: "Turn your customers into advocates with double-sided referral rewards that acquire new high-LTV users effortlessly."
    },
    {
      icon: <PieChart size={32} className="feature-icon-svg" />,
      title: "Financial Analytics",
      description: "Track program liability, ROI, and customer lifetime value with enterprise-grade dashboards and reporting tools."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Everything you need to <br/> <span className="gradient-text">retain customers</span></h2>
          <p className="section-subtitle">A complete toolkit designed to increase customer lifetime value and drive organic growth.</p>
        </div>

        <div className="features-grid">
          {featureList.map((feature, index) => (
            <GlassCard key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
