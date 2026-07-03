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
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--grid-gap)', alignItems: 'center' }}>
        
        {/* Left Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '20px', lineHeight: 1.6, marginBottom: '40px', maxWidth: '540px' }}>
              ownRewards gives your business a complete loyalty engine — points, tiers,
              smart rules, automated rewards, coupons, and referrals — all triggered
              by real customer behavior.
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="primary" rightIcon={<ArrowRight size={18} />}>Get Started Free</Button>
              </Link>
              <Link to="/how-it-works" style={{ textDecoration: 'none' }}>
                <Button variant="secondary" leftIcon={<Play size={18} />}>See How It Works</Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Dashboard Mock */}
        <div style={{ position: 'relative', height: '100%', perspective: '1200px', marginTop: '60px' }}>
          <motion.div 
            style={{ 
              x: mousePosition.x * -1, 
              y: mousePosition.y * -1,
              rotateY: -8,
              rotateX: 4,
              position: 'relative',
              zIndex: 2,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Main Dashboard Card */}
            <Card hover={false} style={{ padding: '24px', transformStyle: 'preserve-3d' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border)', transform: 'translateZ(20px)' }}>
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--danger)' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--warning)' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--success)' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px', transform: 'translateZ(30px)' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px' }}>
                    Total Revenue <TrendingUp size={16} color="var(--primary)" />
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 800 }}>$124,500</div>
                  <div style={{ color: 'var(--success)', fontSize: '12px', fontWeight: 700, marginTop: '4px' }}>+14.2%</div>
                </div>
                
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', transform: 'translateZ(40px)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px' }}>
                    Active Customers <Users size={16} color="var(--primary)" />
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 800 }}>8,240</div>
                  <div style={{ color: 'var(--success)', fontSize: '12px', fontWeight: 700, marginTop: '4px' }}>+5.8%</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>Wallet: Sarah Jenkins</div>
                  <div style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B', fontSize: '12px', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>Gold Tier</div>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Loyalty Points</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>4,250 pts</div>
                <div style={{ width: '100%', height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />
                </div>
              </div>
            </Card>

            {/* Floating Widgets */}
            <motion.div 
              style={{ y: y1, position: 'absolute', top: '-40px', right: '-40px', zIndex: 10, transform: 'translateZ(80px)' }}
            >
              <Card hover={false} style={{ padding: '16px', minWidth: '200px', background: 'rgba(255,255,255,0.85)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Zap size={20} color="var(--primary)" />
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Rule Triggered</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700 }}>Birthday Rule Fired</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Issued: BDAY20 Coupon</div>
              </Card>
            </motion.div>

            <motion.div 
              style={{ y: y2, position: 'absolute', bottom: '-20px', left: '-40px', zIndex: 10, transform: 'translateZ(60px)' }}
            >
              <Card hover={false} style={{ padding: '16px', minWidth: '220px', background: 'rgba(255,255,255,0.85)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Activity size={20} color="var(--primary)" />
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Referral Growth</span>
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>+240 this week</div>
                <div style={{ width: '100%', height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: '75%', height: '100%', background: 'var(--success)' }} />
                </div>
              </Card>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
