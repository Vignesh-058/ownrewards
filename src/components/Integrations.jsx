import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const integrations = [
  { icon: '🍽️', label: 'Petpooja', color: '#F59E0B' },
  { icon: '🖥️', label: 'Custom POS', color: '#6366F1' },
  { icon: '💬', label: 'ownChat (WhatsApp)', color: '#10B981' },
  { icon: '🔌', label: 'REST API', color: '#3B82F6' },
  { icon: '🔗', label: 'Webhooks', color: '#8B5CF6' },
  { icon: '🛒', label: 'ownCart', color: '#EC4899' },
  { icon: '📦', label: 'Shopify', color: '#95BF47' },
  { icon: '💳', label: 'Stripe', color: '#6366F1' }
];

const Integrations = () => {
  return (
    <section
      id="integrations"
      style={{ padding: '60px 0', background: 'var(--background)', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="integrations-heading"
    >
      {/* Background Mesh Gradient */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'var(--primary)', filter: 'blur(200px)', opacity: 0.05, borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div className="section-header text-center" style={{ marginBottom: '64px' }}>
          <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Integrations</div>
          <h2 id="integrations-heading" className="h-section" style={{ marginBottom: '16px' }}>
            Plug into your existing stack.
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Connect ownRewards to your POS, CRM, and marketing tools in clicks, not months.
          </p>
        </div>

        {/* Floating Cloud */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '400px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', gap: '24px', perspective: '1000px' }}>
          {integrations.map((item, i) => {
            // Give them slightly different animation speeds for a "floating" effect
            const duration = 4 + (i % 3) * 2;
            const yOffset = (i % 2 === 0) ? -15 : 15;
            
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
                style={{ position: 'relative', zIndex: 10 - (i % 3) }}
              >
                <motion.div
                  animate={{ y: [0, yOffset, 0] }}
                  transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.05, rotate: (i % 2 === 0) ? 2 : -2 }}
                  className="glass-panel"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 24px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '16px' }}>
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div style={{ marginTop: '40px' }}>
          <Link to="/features" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
            View all integrations <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Integrations;
