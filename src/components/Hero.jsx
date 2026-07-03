import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Activity, Users, TrendingUp } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section 
      id="hero" 
      ref={containerRef}
      style={{
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        alignItems: 'center',
        padding: '20px 0 120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Hero Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{ marginBottom: '24px' }}>
              <span style={{ 
                background: 'rgba(109,74,255,0.1)', 
                color: 'var(--primary)', 
                padding: '6px 16px', 
                borderRadius: '99px', 
                fontSize: '14px', 
                fontWeight: 600,
                border: '1px solid rgba(109,74,255,0.2)'
              }}>
                ✨ AI-Powered Customer Retention
              </span>
            </div>
            <h1 className="h-hero" style={{ marginBottom: '24px', fontSize: 'var(--font-hero)', lineHeight: 1.1, fontWeight: 900, letterSpacing: '-0.02em' }}>
              Stop losing customers.<br/>
              <span className="gradient-text">Start rewarding loyalty.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6, marginBottom: '40px', maxWidth: '640px' }}>
              ownRewards gives your business a complete loyalty engine — points, tiers,
              smart rules, automated rewards, coupons, and referrals — all triggered
              by real customer behavior.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center' }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="primary" rightIcon={<ArrowRight size={18} />}>Get Started Free</Button>
              </Link>
              <Link to="/how-it-works" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" leftIcon={<Play size={18} />}>See How It Works</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
