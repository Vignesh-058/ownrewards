import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Button from './Button';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small businesses just getting started.",
      features: [
        "Up to 2,000 active members",
        "Basic points program",
        "Standard rewards catalog",
        "Email support"
      ],
      highlighted: false,
      cta: "Starter Plan"
    },
    {
      name: "Growth",
      price: "$149",
      description: "Everything you need to scale your retention strategy.",
      features: [
        "Up to 10,000 active members",
        "Advanced rule engine",
        "Referral programs",
        "WhatsApp integration",
        "Custom branding",
        "Priority support"
      ],
      highlighted: true,
      cta: "Growth Plan"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For high-volume merchants with complex needs.",
      features: [
        "Unlimited members",
        "Custom integrations",
        "Dedicated success manager",
        "SLA guarantee",
        "Custom POS integration",
        "API access"
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Simple, transparent <span className="text-primary">pricing</span></h2>
          <p className="section-subtitle">No hidden fees. Scale your plan as your business grows.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="price-amount" style={{ fontSize: plan.price === 'Custom' ? '2.2rem' : '3rem' }}>{plan.price}</span>
                  {plan.price !== "Custom" && <span className="price-period">/mo</span>}
                </div>
              </div>
              
              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={18} className="check-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-footer">
                {plan.cta === "Contact Sales" ? (
                  <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }} style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                    <Button variant={plan.highlighted ? 'primary' : 'outline'} className="w-full">
                      {plan.cta}
                    </Button>
                  </a>
                ) : (
                  <Link to="/register" style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
                    <Button variant={plan.highlighted ? 'primary' : 'outline'} className="w-full">
                      {plan.cta}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
