import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';


const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      priceMonthly: 49,
      priceAnnual: 39,
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
      priceMonthly: 149,
      priceAnnual: 119,
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
      priceMonthly: "Custom",
      priceAnnual: "Custom",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="pricing relative overflow-hidden" id="pricing">
      <div className="container relative z-10">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">Simple, transparent <span className="gradient-text">pricing</span></h2>
          <p className="section-subtitle mt-4">No hidden fees. Scale your plan as your business grows.</p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-primary' : 'text-secondary'}`}>Monthly</span>
          <div 
            className="w-16 h-8 bg-surface border border-border rounded-full p-1 cursor-pointer flex items-center relative"
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <motion.div 
              className="w-6 h-6 bg-primary rounded-full shadow-md"
              animate={{ x: isAnnual ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </div>
          <span className={`text-sm font-semibold transition-colors flex items-center gap-2 ${isAnnual ? 'text-primary' : 'text-secondary'}`}>
            Annually <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Save 20%</span>
          </span>
        </div>

        <motion.div 
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} className={`pricing-card hover-lift ${plan.highlighted ? 'highlighted' : ''}`} variants={cardVariants}>
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="price-amount" 
                      style={{ fontSize: plan.priceMonthly === 'Custom' ? '2.2rem' : '3rem' }}
                    >
                      {plan.priceMonthly === 'Custom' ? 'Custom' : `$${isAnnual ? plan.priceAnnual : plan.priceMonthly}`}
                    </motion.span>
                  </AnimatePresence>
                  {plan.priceMonthly !== "Custom" && <span className="price-period">/mo</span>}
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
              
              <div className="pricing-footer mt-auto pt-6 border-t border-border/50">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-magenta opacity-10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default Pricing;

