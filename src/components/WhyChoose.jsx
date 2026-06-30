import React from 'react';
import { Settings, Infinity as InfinityIcon, MessageSquare, BarChart2, Zap, ShieldCheck } from 'lucide-react';
import './WhyChoose.css';

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Settings size={28} />,
      title: "Automation First",
      description: "Set up triggers once and let the engine run your campaigns 24/7."
    },
    {
      icon: <InfinityIcon size={28} />,
      title: "Unlimited Programs",
      description: "Create as many tiers, point systems, and referral programs as you need."
    },
    {
      icon: <MessageSquare size={28} />,
      title: "WhatsApp Integration",
      description: "Reach customers where they are with automated WhatsApp notifications."
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Deep Analytics",
      description: "Track every point issued, redeemed, and the resulting revenue impact."
    },
    {
      icon: <Zap size={28} />,
      title: "Fast Setup",
      description: "Pre-built templates mean you can go live in under 15 minutes."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Enterprise Security",
      description: "Bank-grade encryption ensures your customer data is always protected."
    }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why choose <span className="text-primary">OwnRewards?</span></h2>
          <p className="section-subtitle">The most comprehensive loyalty platform built specifically for modern businesses.</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
