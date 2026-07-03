import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Settings, Award, Gift, Users, TrendingUp } from 'lucide-react';
import GlassCard from './GlassCard';

const AnimatedCounter = ({ from, to, suffix = "", duration = 2 }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView && to !== null) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, suffix]);

  if (to === null) return <span>{from}{suffix}</span>;
  return <span ref={nodeRef}>{from}{suffix}</span>;
};

const Metrics = () => {
  const metrics = [
    { value: 30, textValue: null, suffix: "+", label: "Rule Triggers", desc: "Automate actions", icon: <Settings size={28} className="text-primary mb-3" /> },
    { value: 4, textValue: null, suffix: "", label: "Loyalty Tiers", desc: "Dynamic levels", icon: <Award size={28} className="text-primary mb-3" /> },
    { value: 10, textValue: null, suffix: "", label: "Reward Actions", desc: "Points & coupons", icon: <Gift size={28} className="text-primary mb-3" /> },
    { value: null, textValue: "2-Sided", suffix: "", label: "Referrals", desc: "Reward everyone", icon: <Users size={28} className="text-primary mb-3" /> },
    { value: null, textValue: "Live", suffix: "", label: "ROI Analytics", desc: "Real-time data", icon: <TrendingUp size={28} className="text-primary mb-3" /> }
  ];

  return (
    <section className="metrics-section relative overflow-hidden" id="stats-strip" style={{ padding: '60px 0' }}>
      <div className="container relative z-10">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <GlassCard className="metric-card hover-lift" style={{ height: '100%', padding: '24px', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>{metric.icon}</div>
                <div className="metric-value" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text)', marginBottom: '8px' }}>
                  {metric.value !== null ? (
                    <AnimatedCounter from={0} to={metric.value} suffix={metric.suffix} />
                  ) : (
                    <span>{metric.textValue}</span>
                  )}
                </div>
                <div className="metric-label" style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '4px' }}>{metric.label}</div>
                <div className="metric-desc" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{metric.desc}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-primary opacity-5 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default Metrics;
