import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Zap, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/* --- Mockups --- */

const ConfigMockup = () => (
  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="glass-panel" style={{ width: '100%', height: '100%', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: '18px', fontWeight: 800 }}>Rule Configuration</div>
      <div style={{ background: 'var(--success)', color: 'white', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 700 }}>Active</div>
    </div>
    <div style={{ background: 'rgba(255,255,255,0.5)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>WHEN</div>
      <div style={{ background: 'white', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Users size={16} color="var(--primary)" />
        <span style={{ fontSize: '14px', fontWeight: 600 }}>Customer Birthday</span>
      </div>
    </div>
    <div style={{ background: 'rgba(255,255,255,0.5)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 600 }}>THEN</div>
      <div style={{ background: 'white', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '14px', fontWeight: 600 }}>Issue Smart Coupon</span>
        <span style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: 700 }}>BDAY20</span>
      </div>
    </div>
  </motion.div>
);

const TriggerMockup = () => (
  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="glass-panel" style={{ width: '100%', height: '100%', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px' }}>Live Activity Feed</div>
    {[1, 2, 3].map((i) => (
      <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 }} style={{ display: 'flex', gap: '12px', padding: '12px', background: 'rgba(255,255,255,0.6)', borderRadius: '12px', border: '1px solid var(--border)', alignItems: 'center' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: i === 1 ? 'var(--lavender)' : 'var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Zap size={14} color="var(--primary)" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '13px', fontWeight: 700 }}>Rule Fired: Birthday Bonus</div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Just now • Sarah Jenkins</div>
        </div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--success)' }}>+500 pts</div>
      </motion.div>
    ))}
  </motion.div>
);

const AnalyticsMockup = () => (
  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="glass-panel" style={{ width: '100%', height: '100%', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <div style={{ fontSize: '18px', fontWeight: 800 }}>Cohort Retention</div>
    <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
      <div style={{ flex: 1, background: 'rgba(255,255,255,0.6)', padding: '16px', borderRadius: '12px' }}>
        <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>M1 Retention</div>
        <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary)' }}>42.8%</div>
      </div>
      <div style={{ flex: 1, background: 'rgba(255,255,255,0.6)', padding: '16px', borderRadius: '12px' }}>
        <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>M3 Retention</div>
        <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--success)' }}>28.4%</div>
      </div>
    </div>
    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '16px', background: 'rgba(255,255,255,0.4)', borderRadius: '12px' }}>
      {[42, 38, 35, 28, 25, 22].map((h, i) => (
        <div key={i} style={{ flex: 1, background: 'var(--lavender)', height: `${h}%`, borderRadius: '4px' }} />
      ))}
    </div>
  </motion.div>
);


const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Settings size={24} />,
      title: "Configure Rules & Rewards",
      description: "Set up point earning rules, tier thresholds, and reward templates using our visual builder. Import blueprints specifically tailored to retail or F&B.",
      Mockup: ConfigMockup
    },
    {
      icon: <Zap size={24} />,
      title: "Automate Triggers",
      description: "ownRewards connects to your POS/CRM and listens. When a customer hits a milestone, a birthday, or goes inactive, the exact right reward is deployed instantly.",
      Mockup: TriggerMockup
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Measure Real Growth",
      description: "Stop looking at vanity metrics. Track exactly how your loyalty rules impact month-over-month cohort retention and lifetime value.",
      Mockup: AnalyticsMockup
    }
  ];

  return (
    <section id="how-it-works-preview" style={{ padding: '60px 0', background: 'var(--background)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="h-section" style={{ marginBottom: '16px' }}>How it actually works</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            From setup to scaling, everything is designed to be fully autonomous.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          
          {/* Left: Scrollable Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '24px', top: '24px', bottom: '24px', width: '2px', background: 'var(--border)', zIndex: 0 }} />
            
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                onViewportEnter={() => setActiveStep(idx)}
                viewport={{ margin: "-40% 0px -40% 0px" }}
                style={{ display: 'flex', gap: '32px', position: 'relative', zIndex: 1, cursor: 'pointer' }}
                onClick={() => setActiveStep(idx)}
              >
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: activeStep === idx ? 'var(--primary)' : 'var(--surface)', 
                  border: `2px solid ${activeStep === idx ? 'var(--primary)' : 'var(--border)'}`, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  color: activeStep === idx ? 'white' : 'var(--text-secondary)',
                  transition: 'all 0.3s ease',
                  boxShadow: activeStep === idx ? '0 0 20px rgba(139,92,246,0.4)' : 'none'
                }}>
                  {step.icon}
                </div>
                <div style={{ paddingTop: '8px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', color: activeStep === idx ? 'var(--text)' : 'var(--text-secondary)', transition: 'color 0.3s ease' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Sticky Mockup Panel */}
          <div style={{ position: 'sticky', top: '120px', height: '500px', perspective: '1000px' }}>
            <AnimatePresence mode="wait">
              {steps.map((step, idx) => {
                if (idx !== activeStep) return null;
                const Mockup = step.Mockup;
                return <Mockup key={idx} />;
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
