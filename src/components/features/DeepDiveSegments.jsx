import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassCard from '../GlassCard';
import { ArrowRight, HeartPulse, AlertTriangle, TrendingUp } from 'lucide-react';

const DeepDiveSegments = () => {
  const metrics = [
    {
      icon: <HeartPulse size={24} />,
      metric: "Health Score",
      description: "AI-calculated segment vitality based on engagement, spend, and visit frequency.",
      color: "var(--primary)"
    },
    {
      icon: <AlertTriangle size={24} />,
      metric: "Churn Risk",
      description: "Predict which customers are about to leave — before they do.",
      color: "#EF4444"
    },
    {
      icon: <TrendingUp size={24} />,
      metric: "Predicted LTV",
      description: "Forecast lifetime value per customer segment based on purchase patterns.",
      color: "#10B981"
    }
  ];

  return (
    <section className="deep-dive-segments relative overflow-hidden" id="deep-dive-segments" style={{ padding: '100px 0', background: 'var(--surface-dark, rgba(10, 10, 20, 0.8))' }}>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
          >
            Know exactly which customers are worth activating.
          </motion.h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {metrics.map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <GlassCard hoverEffect={false} style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', color: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {m.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{m.metric}</h3>
                <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>{m.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/analytics" style={{ color: 'var(--primary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', fontSize: '1.125rem' }}>
            See full analytics <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-primary opacity-5 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default DeepDiveSegments;
