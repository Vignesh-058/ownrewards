import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Activity, Users, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

const FloatingCard = ({ children, initialX, initialY, yOffset = 20, delay = 0, style }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY + 40, x: initialX }}
      animate={{ opacity: 1, y: initialY, x: initialX }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'absolute',
        ...style
      }}
    >
      <motion.div
        animate={{ y: [0, -yOffset, 0] }}
        transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
        className="glass-panel"
        style={{ padding: '16px', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.6)' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '60px'
      }}
    >
      {/* 3D Background Elements */}
      <motion.div style={{ position: 'absolute', inset: 0, y: y1, pointerEvents: 'none', zIndex: 0 }}>
        
        {/* Left Side Floating Cards */}
        <FloatingCard initialX="-35vw" initialY={100} delay={0.2} style={{ left: '50%', transform: 'translateX(-50%) rotate(-12deg) scale(0.85)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={20} color="var(--primary)" />
            </div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Revenue Lift</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--success)' }}>+24.8%</div>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard initialX="-22vw" initialY={-80} delay={0.4} yOffset={30} style={{ left: '50%', transform: 'translateX(-50%) rotate(8deg) scale(0.9)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>Smart Coupon</div>
            <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--text)', letterSpacing: '-0.03em' }}>BDAY20</div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Used 142 times today</div>
          </div>
        </FloatingCard>

        {/* Right Side Floating Cards */}
        <FloatingCard initialX="22vw" initialY={50} delay={0.3} yOffset={25} style={{ left: '50%', transform: 'translateX(-50%) rotate(-6deg) scale(0.9)' }}>
          <div style={{ width: '240px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600 }}>Cohort Retention</span>
              <span style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 700 }}>Month 3</span>
            </div>
            <div style={{ display: 'flex', gap: '4px', height: '40px', alignItems: 'flex-end' }}>
              {[100, 85, 72, 68, 64].map((h, i) => (
                <div key={i} style={{ flex: 1, background: i === 3 ? 'var(--primary)' : 'var(--lavender)', height: `${h}%`, borderRadius: '4px' }} />
              ))}
            </div>
          </div>
        </FloatingCard>

        <FloatingCard initialX="35vw" initialY={-120} delay={0.5} yOffset={15} style={{ left: '50%', transform: 'translateX(-50%) rotate(14deg) scale(0.75)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={16} color="white" />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600 }}>Automated WhatsApp sent!</div>
          </div>
        </FloatingCard>

      </motion.div>

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
