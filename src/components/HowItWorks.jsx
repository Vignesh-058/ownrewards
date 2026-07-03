import React, { useRef } from 'react';
import { Settings, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Settings size={28} />,
      badge: "01",
      title: "Configure Your Loyalty Rules",
      description: "Set up point earning rules, tier thresholds, and reward templates in minutes. Use our Rule Library to import pre-built blueprints for your industry — restaurant, retail, or e-commerce."
    },
    {
      icon: <Zap size={28} />,
      badge: "02",
      title: "Rules Fire on Real Events",
      description: "Every bill, birthday, referral, feedback, or inactivity — ownRewards listens and acts automatically. No manual work, no missed opportunities."
    },
    {
      icon: <TrendingUp size={28} />,
      badge: "03",
      title: "Watch Retention Grow",
      description: "Track cohort retention, reward ROI, customer lifecycle health, and tier movement — then adjust your rules based on real data."
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section className="how-it-works relative" id="how-it-works-preview" ref={containerRef} style={{ padding: '80px 0' }}>
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="headline" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Up and running in 3 simple steps</h2>
        </div>

        <div className="hiw-timeline" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline line */}
          <div className="hiw-line-track" style={{ borderLeft: '2px dashed var(--border)', position: 'absolute', top: 0, bottom: 0, left: '28px' }}></div>
          <motion.div 
            className="hiw-line-fill" 
            style={{ scaleY: scrollYProgress, transformOrigin: 'top', position: 'absolute', top: 0, bottom: 0, left: '28px', borderLeft: '2px solid var(--primary)', zIndex: 1 }}
          />
          
          <div className="hiw-steps" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="hiw-step"
                style={{ display: 'flex', gap: '32px', position: 'relative', zIndex: 2 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="hiw-icon-ring" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--surface)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--primary)', boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)' }}>
                  {step.icon}
                </div>
                <div className="hiw-card" style={{ background: 'var(--surface)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border)', flexGrow: 1 }}>
                  <div style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.875rem', marginBottom: '8px' }}>STEP {step.badge}</div>
                  <h3 className="hiw-title" style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '12px' }}>{step.title}</h3>
                  <p className="hiw-desc" style={{ color: 'var(--muted)', lineHeight: '1.6' }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/how-it-works" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            See the full flow <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary opacity-5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default HowItWorks;
