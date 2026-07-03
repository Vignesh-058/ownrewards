import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ownRewards' birthday automation brought back 34% of churned customers in just 90 days. Nothing else we tried came close.",
      attribution: "— Marketing Head, QSR Chain (6 outlets)"
    },
    {
      quote: "The rule engine replaced 3 different tools we were using. Our entire loyalty, campaign, and notification stack is now one system.",
      attribution: "— Head of CX, Retail Brand"
    },
    {
      quote: "Our referral program generated ₹4.2L in new customer revenue in the first month. Setup took one afternoon.",
      attribution: "— Founder, D2C Brand"
    },
    {
      quote: "Finally, a platform that doesn't just collect points but actually segments our customers intelligently. We've cut promotional waste by 40%.",
      attribution: "— CMO, Fashion Retailer"
    },
    {
      quote: "The Petpooja integration is flawless. Zero extra steps for our cashiers, yet every customer gets their points instantly.",
      attribution: "— Operations Manager, Cafe Network"
    }
  ];

  return (
    <section className="testimonials relative overflow-hidden" id="testimonials" style={{ padding: '80px 0' }}>
      <div className="container relative z-10">
        <h2 className="headline text-center mb-16" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Trusted by businesses across India</h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ breakInside: 'avoid' }}
            >
              <div 
                className="glass-panel"
                style={{ 
                  padding: '32px', 
                  borderLeft: '4px solid var(--primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                <p style={{ color: 'var(--text)', fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '24px', fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
                <div style={{ color: 'var(--muted)', fontSize: '0.875rem', fontWeight: '600' }}>
                  {t.attribution}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-primary opacity-10 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default Testimonials;
