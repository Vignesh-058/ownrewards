import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../GlassCard';
import { CheckCircle2 } from 'lucide-react';

const DeepDiveRules = () => {
  return (
    <section className="deep-dive-rules relative overflow-hidden" id="deep-dive-rules" style={{ padding: '80px 0' }}>
      <div className="container relative z-10">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '32px' }}>
              The brain of your loyalty program.
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Transactional</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> bill_created</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> cart_validated</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> payment_completed</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Behavioral</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> customer_first_visit</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> customer_nth_visit</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> milestone_reached</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Temporal</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> customer_birthday</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> inactivity_detected</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> loyalty_expiring_soon</li>
                </ul>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Engagement</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> feedback_submitted</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> customer_reviewed</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}><CheckCircle2 size={16} className="text-primary"/> customer_referred</li>
                </ul>
              </div>
            </div>
            
            <div style={{ background: 'var(--surface)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
              <p style={{ color: 'var(--muted)', lineHeight: '1.6', fontSize: '0.875rem' }}>
                Each trigger supports AND/OR condition logic. Set execution limits per customer and globally. Run A/B test variants (A/B/control) on any rule.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              whileHover={{ rotateY: -4, rotateX: 2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass-panel"
            >
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', transform: 'translateZ(30px)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px' }}>Win-Back Automation</div>
                
                <div style={{ background: 'rgba(255,255,255,0.4)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--primary)', transform: 'translateZ(10px)', transition: 'transform 0.3s' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '8px', letterSpacing: '0.05em' }}>TRIGGER (WHEN)</div>
                  <div style={{ fontSize: '1.125rem' }}><strong>inactivity_detected</strong> &gt; 45 days</div>
                </div>
                
                <div style={{ background: 'rgba(245,158,11,0.05)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #F59E0B', transform: 'translateZ(20px)', transition: 'transform 0.3s' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#F59E0B', marginBottom: '8px', letterSpacing: '0.05em' }}>CONDITION (AND)</div>
                  <div style={{ fontSize: '1.125rem' }}><strong>customer_tier</strong> is [Gold, Platinum]</div>
                </div>
                
                <div style={{ background: 'rgba(16,185,129,0.05)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #10B981', transform: 'translateZ(30px)', transition: 'transform 0.3s' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10B981', marginBottom: '8px', letterSpacing: '0.05em' }}>ACTION (THEN)</div>
                  <div style={{ fontSize: '1.125rem', marginBottom: '8px' }}>Issue Coupon: <strong>COMEBACK30</strong></div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>+ Send WhatsApp message template</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DeepDiveRules;
