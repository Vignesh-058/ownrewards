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
          >
            <GlassCard hoverEffect={false} style={{ padding: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Win-Back Automation</div>
                
                <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '8px' }}>TRIGGER (WHEN)</div>
                  <div style={{ fontSize: '1rem' }}><strong>inactivity_detected</strong> &gt; 45 days</div>
                </div>
                
                <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #F59E0B' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#F59E0B', marginBottom: '8px' }}>CONDITION (AND)</div>
                  <div style={{ fontSize: '1rem' }}><strong>customer_tier</strong> is [Gold, Platinum]</div>
                </div>
                
                <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #10B981' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#10B981', marginBottom: '8px' }}>ACTION (THEN)</div>
                  <div style={{ fontSize: '1rem', marginBottom: '8px' }}>Issue Coupon: <strong>COMEBACK30</strong></div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>+ Send WhatsApp message template</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DeepDiveRules;
