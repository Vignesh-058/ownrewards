import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Activity } from 'lucide-react';
import './Hero.css';
import Button from './Button';
import GlassCard from './GlassCard';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

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

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <span className="badge-new">New</span>
              <span>OwnRewards AI Rule Engine is live</span>
            </div>
            <h1 className="hero-title">
              Supercharge Customer Retention with <span className="gradient-text">Intelligent Rewards</span>
            </h1>
            <p className="hero-subtitle">
              Enterprise-grade loyalty, automated rule engines and referral programs built for growing businesses.
            </p>
            <div className="hero-actions">
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Button icon={<ArrowRight size={18} />}>Start Free Trial</Button>
              </Link>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Button variant="outline" icon={<Play size={18} />}>View Demo</Button>
              </Link>
            </div>
            <p className="hero-guarantee">No credit card required. 14-day free trial.</p>
          </motion.div>
        </div>

        <div className="hero-illustration">
          <motion.div 
            className="illustration-wrapper"
            style={{ 
              x: mousePosition.x * -1, 
              y: mousePosition.y * -1 
            }}
          >
            {/* Main Dashboard Card */}
            <GlassCard className="dashboard-main" hoverEffect={false}>
              <div className="dashboard-header">
                <div className="dashboard-nav">
                  <div className="nav-dot"></div>
                  <div className="nav-dot"></div>
                  <div className="nav-dot"></div>
                </div>
                <div className="dashboard-tabs">
                  <div className="tab active">Overview</div>
                  <div className="tab">Loyalty</div>
                  <div className="tab">Referrals</div>
                </div>
              </div>
              <div className="dashboard-body">
                <div className="stat-row">
                  <div className="stat-box">
                    <span className="stat-label">Total Revenue</span>
                    <span className="stat-value">$124,500</span>
                    <span className="stat-trend positive">+14.2%</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-label">Active Members</span>
                    <span className="stat-value">8,240</span>
                    <span className="stat-trend positive">+5.8%</span>
                  </div>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-bar" style={{height: '40%'}}></div>
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '50%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '70%'}}></div>
                  <div className="chart-bar" style={{height: '90%', background: 'var(--primary)'}}></div>
                  <div className="chart-bar" style={{height: '100%'}}></div>
                </div>
              </div>
            </GlassCard>

            {/* Floating Widgets */}
            <motion.div 
              className="floating-widget widget-1"
              style={{ y: y1 }}
            >
              <GlassCard hoverEffect={false}>
                <div className="widget-header">
                  <TrendingUp className="text-primary" size={24} />
                  <span>Conversion Rate</span>
                </div>
                <div className="widget-value">24.8%</div>
                <div className="widget-chart-mini">
                   <svg viewBox="0 0 100 30" className="sparkline">
                     <path d="M0 25 Q 10 15, 20 20 T 40 10 T 60 15 T 80 5 T 100 10" fill="none" stroke="var(--primary)" strokeWidth="3" />
                   </svg>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div 
              className="floating-widget widget-2"
              style={{ y: y2 }}
            >
              <GlassCard hoverEffect={false}>
                <div className="widget-header">
                  <Activity className="text-primary" size={24} />
                  <span>Reward Redemptions</span>
                </div>
                <div className="widget-value">1,492</div>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{width: '75%'}}></div>
                </div>
              </GlassCard>
            </motion.div>

          </motion.div>
        </div>
      </div>

      <div className="scroll-indicator">
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
