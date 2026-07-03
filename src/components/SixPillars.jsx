import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { Medal, Workflow, Gift, Users, Rocket, BarChart3, ArrowDown, ChevronRight, UserPlus, Zap } from 'lucide-react';

const SixPillars = () => {
  return (
    <section className="six-pillars relative overflow-hidden" id="platform-capabilities" style={{ padding: '100px 0' }}>
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div style={{ display: 'inline-block', marginBottom: '16px' }}>
            <span style={{ 
              background: 'rgba(99, 102, 241, 0.1)', 
              color: 'var(--primary)', 
              padding: '6px 16px', 
              borderRadius: '20px', 
              fontSize: '0.875rem', 
              fontWeight: 'bold', 
              letterSpacing: '0.1em',
              border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
              PLATFORM CAPABILITIES
            </span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px' }}
          >
            Everything You Need to Build Customer Loyalty
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.125rem', color: 'var(--muted)', lineHeight: '1.6' }}
          >
            OwnRewards combines loyalty, automation, referrals, campaigns, rewards, and analytics into one intelligent customer retention platform.
          </motion.p>
        </div>

        {/* 6 Pillars Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px',
          '@media (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(3, 1fr)'
          }
        }}>
          
          {/* Pillar 1: Loyalty Points Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0 * 0.1 }}
          >
            <GlassCard className="hover-lift" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Medal size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Loyalty Points Engine</h3>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Customers earn points on every purchase using a dynamic 4-tier loyalty system.
              </p>
              
              {/* Visual Element */}
              <div style={{ background: 'var(--background)', borderRadius: '8px', padding: '16px', border: '1px solid var(--border)', marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text)' }}>Gold Tier</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 'bold' }}>2,450 pts</span>
                </div>
                <div style={{ height: '6px', background: 'var(--surface)', borderRadius: '3px', overflow: 'hidden', marginBottom: '12px' }}>
                  <div style={{ width: '70%', height: '100%', background: 'linear-gradient(90deg, var(--primary), #a78bfa)' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--muted)' }}>
                  <span>Bronze</span>
                  <span>Silver</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Gold</span>
                  <span>Platinum</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Pillar 2: Rule Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 1 * 0.1 }}
          >
            <GlassCard className="hover-lift" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Workflow size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Rule Engine</h3>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Automate customer engagement with 30+ event triggers and intelligent IF-THEN business rules.
              </p>
              
              {/* Visual Element */}
              <div style={{ background: 'var(--background)', borderRadius: '8px', padding: '16px', border: '1px solid var(--border)', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
                <div style={{ fontSize: '0.75rem', background: 'var(--surface)', padding: '6px 12px', borderRadius: '4px', borderLeft: '2px solid var(--primary)' }}>
                  <strong>IF:</strong> Birthday
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><ArrowDown size={14} color="var(--muted)" /></div>
                <div style={{ fontSize: '0.75rem', background: 'var(--surface)', padding: '6px 12px', borderRadius: '4px', borderLeft: '2px solid #10B981' }}>
                  <strong>THEN:</strong> Send Coupon
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}><ArrowDown size={14} color="var(--muted)" /></div>
                <div style={{ fontSize: '0.75rem', background: 'var(--surface)', padding: '6px 12px', borderRadius: '4px', borderLeft: '2px solid #F59E0B' }}>
                  <strong>AND:</strong> WhatsApp Notification
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Pillar 3: Smart Rewards & Coupons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
          >
            <GlassCard className="hover-lift" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Gift size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Smart Rewards & Coupons</h3>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Create flexible rewards using percentage discounts, free products, shipping offers, buy-one-get-one deals, and budget controls.
              </p>
              
              {/* Visual Element */}
              <div style={{ background: 'var(--background)', borderRadius: '8px', padding: '16px', border: '1px dashed var(--primary)', marginTop: 'auto', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '40px', height: '40px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '50%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: '900', color: 'var(--text)' }}>20% OFF</span>
                  <span style={{ fontSize: '0.7rem', background: 'var(--surface)', padding: '2px 6px', borderRadius: '4px', color: 'var(--muted)' }}>Gold Tier</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '12px' }}>Code: BDAY20</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem' }}>
                  <span style={{ color: '#10B981' }}>Budget: 45% used</span>
                  <span style={{ color: 'var(--muted)' }}>Expires in 3d</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Pillar 4: Referral Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 3 * 0.1 }}
          >
            <GlassCard className="hover-lift" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Referral Programs</h3>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Grow faster with dual-sided referral rewards, fraud protection, loyalty gates, and multiple referral strategies.
              </p>
              
              {/* Visual Element */}
              <div style={{ background: 'var(--background)', borderRadius: '8px', padding: '16px', border: '1px solid var(--border)', marginTop: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><UserPlus size={14} color="var(--primary)" /></div>
                    <span style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>Advocate</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#10B981' }}>+500 pts</span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1 }}>
                    <div style={{ height: '2px', width: '100%', background: 'linear-gradient(90deg, var(--surface), var(--primary), var(--surface))', position: 'relative' }}>
                      <motion.div 
                        animate={{ left: ['0%', '100%'] }} 
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        style={{ position: 'absolute', top: '-4px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 8px var(--primary)' }} 
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Users size={14} color="var(--primary)" /></div>
                    <span style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>Friend</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#10B981' }}>₹100 Off</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Pillar 5: Campaign Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 4 * 0.1 }}
          >
            <GlassCard className="hover-lift" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Rocket size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Campaign Management</h3>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Launch targeted campaigns using audience segmentation, customer tiers, A/B testing, and omnichannel delivery.
              </p>
              
              {/* Visual Element */}
              <div style={{ background: 'var(--background)', borderRadius: '8px', padding: '16px', border: '1px solid var(--border)', marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text)' }}>Diwali Special A/B Split</div>
                  <div style={{ fontSize: '0.75rem', color: '#10B981' }}>Active</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, background: 'var(--surface)', padding: '8px', borderRadius: '4px', textAlign: 'center', border: '1px solid var(--primary)' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '4px' }}>Variant A</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>20% OFF</div>
                  </div>
                  <div style={{ flex: 1, background: 'var(--surface)', padding: '8px', borderRadius: '4px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '4px' }}>Variant B</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>+500 Pts</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Pillar 6: Analytics & Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 5 * 0.1 }}
          >
            <GlassCard className="hover-lift" style={{ height: '100%', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <BarChart3 size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Analytics & Insights</h3>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.6' }}>
                Track business performance with reward ROI, customer retention, tier distribution, LTV prediction, and product intelligence.
              </p>
              
              {/* Visual Element */}
              <div style={{ background: 'var(--background)', borderRadius: '8px', padding: '16px', border: '1px solid var(--border)', marginTop: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>Reward ROI</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--text)' }}>342%</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10B981', fontSize: '0.75rem', fontWeight: 'bold' }}>
                    <Zap size={12} /> +12.4%
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '30px' }}>
                  {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      style={{ flex: 1, background: i === 6 ? 'var(--primary)' : 'var(--surface)', borderRadius: '2px 2px 0 0' }} 
                    />
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-primary opacity-5 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default SixPillars;
