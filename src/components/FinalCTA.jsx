import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section
      id="cta-banner"
      style={{
        padding: '160px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--background)'
      }}
    >
      {/* Mesh Gradient Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.8 }}>
        <div style={{ position: 'absolute', top: '-20%', left: '10%', width: '600px', height: '600px', background: 'var(--lavender)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.6 }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '10%', width: '600px', height: '600px', background: 'var(--sky)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: '20%', left: '40%', width: '400px', height: '400px', background: 'var(--accent)', borderRadius: '50%', filter: 'blur(180px)', opacity: 0.2 }} />
      </div>

      <div className="container relative z-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(40px)',
            border: '1px solid var(--border)',
            padding: '80px 40px',
            borderRadius: '40px',
            width: '100%',
            maxWidth: '1000px',
            boxShadow: '0 40px 100px rgba(139, 92, 246, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Internal Glow */}
          <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--primary), transparent)', opacity: 0.5 }} />

          <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '32px', color: '#F59E0B' }}>
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="currentColor" />)}
          </div>

          <h2 style={{ fontSize: '64px', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '24px', color: 'var(--text)' }}>
            Stop guessing.<br/>
            <span style={{ color: 'var(--primary)' }}>Start retaining.</span>
          </h2>
          
          <p style={{ fontSize: '22px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6 }}>
            Join 1,000+ businesses using ownRewards to turn anonymous buyers into loyal, lifelong advocates.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button variant="primary" rightIcon={<ArrowRight size={20} />} style={{ padding: '24px 48px', fontSize: '18px', borderRadius: '20px' }}>
                Start your 14-day free trial
              </Button>
            </Link>
          </div>
          <div style={{ marginTop: '24px', fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500 }}>
            No credit card required • Cancel anytime • 5-minute setup
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
