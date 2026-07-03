import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ownRewards' birthday automation brought back 34% of churned customers in just 90 days. Nothing else we tried came close.",
      name: "Arjun Mehta",
      role: "Marketing Head",
      company: "QSR Chain",
      metric: "+34% Reactivation",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
      quote: "Our referral program generated ₹4.2L in new customer revenue in the first month. Setup took exactly one afternoon.",
      name: "Priya Sharma",
      role: "Founder",
      company: "D2C Brand",
      metric: "₹4.2L Revenue",
      image: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
      quote: "Finally, a platform that doesn't just collect points but actually segments our customers intelligently. We've cut promotional waste entirely.",
      name: "Rohan Desai",
      role: "CMO",
      company: "Fashion Retailer",
      metric: "-40% Promo Waste",
      image: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    }
  ];

  return (
    <section className="testimonials relative overflow-hidden" id="testimonials" style={{ padding: '60px 0', background: 'var(--background)' }}>
      <div className="container relative z-10">
        
        <div className="section-header text-center mb-16" style={{ marginBottom: '60px' }}>
          <h2 className="h-section" style={{ marginBottom: '16px' }}>Trusted by forward-thinking brands.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            See how top companies are using ownRewards to drive real, measurable revenue growth.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-panel"
              style={{ 
                padding: '40px', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Metric Badge */}
              <div style={{ display: 'flex', marginBottom: '24px' }}>
                <div style={{ background: 'var(--lavender)', color: 'var(--primary)', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <TrendingUp size={16} />
                  {t.metric}
                </div>
              </div>

              {/* Quote */}
              <p style={{ color: 'var(--text)', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', fontWeight: 500, letterSpacing: '-0.01em' }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src={t.image} alt={t.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border)' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {t.name}
                    <CheckCircle size={14} color="var(--success)" />
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500 }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
