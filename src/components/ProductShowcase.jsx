import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, BellRing } from 'lucide-react';
import GlassCard from './GlassCard';
import './ProductShowcase.css';

const ProductShowcase = () => {
  return (
    <section className="product-showcase" id="solutions">
      <div className="container">
        
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
          
          <div className="showcase-visual">
            <div className="visual-background-circle"></div>
            <GlassCard className="main-mockup" hoverEffect={false}>
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
            
            <motion.div 
              className="floating-card float-left"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard hoverEffect={false} className="mini-stat-card">
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
          
          <div className="showcase-visual">
            <div className="visual-background-circle secondary"></div>
            <GlassCard className="main-mockup workflow-mockup" hoverEffect={false}>
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

            <motion.div 
              className="floating-card float-right"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <GlassCard hoverEffect={false} className="notification-card">
                <BellRing className="text-primary" size={20} />
                <div>
                  <div className="notif-title">Message Sent</div>
                  <div className="notif-desc">Sarah reached VIP status.</div>
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
