import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Activity, Users, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '160px',
        paddingBottom: '80px'
      }}
    >
      {/* Main Content */}
      <motion.div 
        style={{ scale, opacity, position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '840px', padding: '0 24px' }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <div style={{ marginBottom: '32px' }}>
            <div className="glass-panel" style={{ 
              padding: '8px 20px', 
              borderRadius: '99px', 
              fontSize: '14px', 
              fontWeight: 700,
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              <Activity size={16} />
              Intelligent Loyalty & Retention Engine
            </div>
          </div>
          
          <h1 className="h-hero" style={{ marginBottom: '24px', letterSpacing: '-0.04em' }}>
            Turn one-time buyers into <br/>
            <span className="gradient-text">lifelong customers.</span>
          </h1>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '22px', lineHeight: 1.6, marginBottom: '48px', maxWidth: '680px', fontWeight: 400 }}>
            Automate tier progressions, trigger smart coupons, and track true revenue ROI. 
            The loyalty platform built for data-driven brands.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button variant="primary" rightIcon={<ArrowRight size={20} />} style={{ padding: '20px 40px', fontSize: '18px', borderRadius: '16px' }}>
                Start Free Trial
              </Button>
            </Link>
            <Link to="/how-it-works" style={{ textDecoration: 'none' }}>
              <Button variant="secondary" leftIcon={<Play size={20} />} style={{ padding: '20px 40px', fontSize: '18px', borderRadius: '16px', background: 'var(--surface)' }}>
                View Demo
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Bottom fade out gradient */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '150px', background: 'linear-gradient(to bottom, transparent, var(--background))', zIndex: 5, pointerEvents: 'none' }} />
    </section>
  );
};

export default Hero;
