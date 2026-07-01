import React from 'react';
import { motion } from 'framer-motion';
import { Check, Minus, Info } from 'lucide-react';
import './PricingComparison.css';

const PricingComparison = () => {
  const features = [
    {
      category: "Core Features",
      items: [
        { name: "Active Members", starter: "2,000", growth: "10,000", enterprise: "Unlimited", tooltip: "Number of active users in your program per month" },
        { name: "Points Program", starter: true, growth: true, enterprise: true, tooltip: "Basic earn and burn mechanics" },
        { name: "Custom Tiers", starter: "Up to 3", growth: "Up to 10", enterprise: "Unlimited", tooltip: "VIP tiering structure" },
        { name: "Rule Engine", starter: false, growth: true, enterprise: true, tooltip: "Automated trigger-based logic" }
      ]
    },
    {
      category: "Marketing & Integrations",
      items: [
        { name: "Email Campaigns", starter: true, growth: true, enterprise: true, tooltip: "Built-in email editor" },
        { name: "SMS/WhatsApp", starter: false, growth: true, enterprise: true, tooltip: "Omnichannel messaging" },
        { name: "Shopify Integration", starter: true, growth: true, enterprise: true, tooltip: "Native Shopify app" },
        { name: "Custom Webhooks", starter: false, growth: true, enterprise: true, tooltip: "Real-time event streaming" },
        { name: "API Access", starter: false, growth: false, enterprise: true, tooltip: "Full programmatic access" }
      ]
    },
    {
      category: "Support & Services",
      items: [
        { name: "Email Support", starter: "Standard", growth: "Priority", enterprise: "24/7 Priority", tooltip: "Response times vary by plan" },
        { name: "Dedicated Success Manager", starter: false, growth: false, enterprise: true, tooltip: "Your personal growth consultant" },
        { name: "Custom Onboarding", starter: false, growth: false, enterprise: true, tooltip: "White-glove setup process" },
        { name: "SLA Guarantee", starter: false, growth: false, enterprise: "99.9%", tooltip: "Enterprise uptime guarantee" }
      ]
    }
  ];

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? <Check size={20} className="icon-primary mx-auto" /> : <Minus size={20} className="icon-tertiary mx-auto" />;
    }
    return <span className="value-text">{value}</span>;
  };

  return (
    <div className="pricing-comparison mt-32">
      <div className="section-header text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Compare <span className="gradient-text">Plans</span></h2>
        <p className="section-subtitle mt-4">A detailed breakdown of everything included in each tier.</p>
      </div>

      <div className="comparison-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th className="feature-column text-left">Features</th>
              <th>Starter</th>
              <th>Growth</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {features.map((category, idx) => (
              <React.Fragment key={idx}>
                <tr className="category-row">
                  <td colSpan="4">{category.category}</td>
                </tr>
                {category.items.map((item, itemIdx) => (
                  <tr key={itemIdx} className="feature-row">
                    <td className="feature-column">
                      <div className="feature-name-wrapper">
                        <span>{item.name}</span>
                        <div className="tooltip-container" title={item.tooltip}>
                          <Info size={14} className="info-icon" />
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{renderValue(item.starter)}</td>
                    <td className="text-center">{renderValue(item.growth)}</td>
                    <td className="text-center">{renderValue(item.enterprise)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingComparison;
