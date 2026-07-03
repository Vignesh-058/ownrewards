import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { Store, ShoppingBag, ShoppingCart, Code2, X, Check } from 'lucide-react';

const WhoWeServe = () => {
  const audiences = [
    {
      title: "Restaurant Chains",
      icon: <Store size={24} />,
      description: "Manage loyalty programs across multiple outlets while rewarding repeat diners automatically.",
      challenges: [
        "Low repeat visits",
        "Manual loyalty tracking",
        "Multiple branch management"
      ],
      benefits: [
        "Automatic points",
        "Tier-based rewards",
        "Birthday campaigns",
        "Referral programs"
      ]
    },
    {
      title: "Retail Brands",
      icon: <ShoppingBag size={24} />,
      description: "Reward shoppers consistently across all retail stores with centralized campaign management.",
      challenges: [
        "Customer retention",
        "Store-wide promotions",
        "Reward consistency"
      ],
      benefits: [
        "Unified loyalty",
        "Multi-store analytics",
        "Smart promotions"
      ]
    },
    {
      title: "D2C & E-Commerce",
      icon: <ShoppingCart size={24} />,
      description: "Increase repeat purchases with personalized rewards, referral campaigns, and automated customer journeys.",
      challenges: [
        "Cart abandonment",
        "Low repeat purchases",
        "Customer acquisition cost"
      ],
      benefits: [
        "Referral automation",
        "Smart coupons",
        "Customer segmentation"
      ]
    },
    {
      title: "IT & Digital Teams",
      icon: <Code2 size={24} />,
      description: "Integrate ownRewards with existing POS, e-commerce platforms, and internal systems using APIs and webhooks.",
      challenges: [
        "Integration complexity",
        "Data synchronization",
        "Scalability"
      ],
      benefits: [
        "REST APIs",
        "Webhooks",
        "Easy integration",
        "Enterprise-ready architecture"
      ]
    }
  ];

  return (
    <section className="who-we-serve relative overflow-hidden" id="audience" style={{ padding: '100px 0' }}>
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div style={{ display: 'inline-block', marginBottom: '16px' }}>
            <span style={{ 
              background: 'rgba(99, 102, 241, 0.1)', 
              color: 'var(--primary)', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontSize: '0.875rem', 
              fontWeight: 'bold', 
              letterSpacing: '0.1em',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
              WHO WE SERVE
            </span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px' }}
          >
            Built for Businesses That Want Customers to Keep Coming Back
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: '1.6' }}
          >
            Whether you manage one location or hundreds, ownRewards helps you automate loyalty, increase repeat purchases, and build long-term customer relationships.
          </motion.p>
        </div>

        {/* 2x2 Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px',
          '@media (min-width: 768px)': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          }
        }}>
          {audiences.map((audience, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="hover-lift" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {audience.icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{audience.title}</h3>
                </div>
                
                <p style={{ color: 'var(--text)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  {audience.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: 'auto' }}>
                  <div style={{ flex: 1, minWidth: '150px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                      Challenges
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {audience.challenges.map((challenge, cIdx) => (
                        <li key={cIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: '1.4' }}>
                          <X size={16} color="#EF4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ flex: 1, minWidth: '150px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                      Benefits
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {audience.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--text)', lineHeight: '1.4' }}>
                          <Check size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[50vw] h-[500px] bg-primary opacity-5 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default WhoWeServe;
