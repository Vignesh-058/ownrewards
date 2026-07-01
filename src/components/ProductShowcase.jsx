import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, TrendingUp, BellRing } from 'lucide-react';
import GlassCard from './GlassCard';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="product-showcase relative" id="solutions" ref={containerRef}>
      <div className="container relative z-10">
        
        {/* Row 1 */}
        <div className="showcase-row">
          <div className="showcase-content">
            <h2 className="showcase-title">Powerful Analytics at your fingertips</h2>
            <p className="showcase-description">
              Make data-driven decisions with real-time insights into customer behavior, reward redemptions, and program ROI. Our beautiful dashboards make complex data easy to understand.
            </p>
            <ul className="showcase-list">
              <li><CheckCircle2 className="text-primary" size={20} /> Real-time liability tracking</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Customer segmentation</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Exportable financial reports</li>
            </ul>
          </div>
          
          <div className="showcase-visual perspective-1000">
            <div className="visual-background-circle"></div>
            <motion.div style={{ y: y1 }} whileHover={{ rotateX: 2, rotateY: -5, scale: 1.02 }} className="transform-style-3d">
              <GlassCard className="main-mockup shadow-2xl" hoverEffect={false}>
                <div className="mockup-header">
                  <h3>Revenue Impact</h3>
                  <span className="badge-growth">+24.5%</span>
                </div>
                <div className="mockup-chart-large">
                  <svg viewBox="0 0 400 150" className="area-chart">
                    <defs>
                      <linearGradient id="gradientPrimary" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity="0.3"/>
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0 150 L0 100 Q 50 120, 100 80 T 200 60 T 300 40 T 400 20 L400 150 Z" fill="url(#gradientPrimary)" />
                    <path d="M0 100 Q 50 120, 100 80 T 200 60 T 300 40 T 400 20" fill="none" stroke="var(--primary)" strokeWidth="4" />
                  </svg>
                </div>
              </GlassCard>
            </motion.div>
            
            <motion.div 
              className="floating-card float-left"
              style={{ y: y3 }}
            >
              <GlassCard hoverEffect={false} className="mini-stat-card shadow-xl border-t border-white/20">
                <div className="mini-icon"><TrendingUp size={16} /></div>
                <div>
                  <div className="mini-label">LTV Increase</div>
                  <div className="mini-value">$42.50</div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="showcase-row reverse">
          <div className="showcase-content">
            <h2 className="showcase-title">Automated Engagement Campaigns</h2>
            <p className="showcase-description">
              Set it and forget it. Trigger personalized emails, SMS, or WhatsApp messages based on customer milestones, point balances, or inactivity periods.
            </p>
            <ul className="showcase-list">
              <li><CheckCircle2 className="text-primary" size={20} /> Birthday & Anniversary rewards</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Win-back campaigns</li>
              <li><CheckCircle2 className="text-primary" size={20} /> Tier upgrade notifications</li>
            </ul>
          </div>
          
          <div className="showcase-visual perspective-1000">
            <div className="visual-background-circle secondary"></div>
            <motion.div style={{ y: y2 }} whileHover={{ rotateX: -2, rotateY: 5, scale: 1.02 }} className="transform-style-3d">
              <GlassCard className="main-mockup workflow-mockup shadow-2xl" hoverEffect={false}>
                <div className="workflow-step">
                  <div className="step-icon">1</div>
                  <div className="step-content">
                    <h4>Customer spends $100</h4>
                    <p>Trigger event detected</p>
                  </div>
                </div>
                <div className="workflow-connector"></div>
                <div className="workflow-step">
                  <div className="step-icon">2</div>
                  <div className="step-content">
                    <h4>Award 100 Points</h4>
                    <p>Rule: 1 point per $1</p>
                  </div>
                </div>
                <div className="workflow-connector"></div>
                <div className="workflow-step highlight">
                  <div className="step-icon">3</div>
                  <div className="step-content">
                    <h4>Send WhatsApp Alert</h4>
                    <p>"You've unlocked Gold Tier!"</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>



          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;
