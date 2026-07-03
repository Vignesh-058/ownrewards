import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TimelineStep from './TimelineStep';

const steps = [
  {
    number: 1,
    icon: '🧾',
    title: 'Customer Makes a Purchase',
    body: 'A bill is created in the POS (Petpooja or custom). ownRewards receives the bill event via webhook — including order amount, items, and customer phone number.',
    pill: 'Event: bill_created',
    visual: 'purchase',
  },
  {
    number: 2,
    icon: '💰',
    title: 'Points Calculated Instantly',
    body: 'The system calculates points based on order total × points-per-rupee ratio, then applies the customer\'s tier multiplier. Bronze gets 1×, Gold gets 2×, Platinum gets 3×.',
    pill: 'Rule Type: loyalty_earning',
    visual: 'points',
  },
  {
    number: 3,
    icon: '⚡',
    title: 'Rule Engine Evaluates',
    body: 'All active rules for the bill_created event are evaluated in priority order. Each rule checks its conditions — customer tier, order amount, day of week, visit count, and more.',
    pill: 'Condition Logic: AND / OR',
    visual: 'rules',
  },
  {
    number: 4,
    icon: '🎯',
    title: 'Actions Fire Automatically',
    body: 'Matching rules execute their actions: bonus points added, rewards granted, coupons issued, tier upgraded, WhatsApp notification sent — all without any manual intervention.',
    pill: '10 Action Types Available',
    visual: 'actions',
  },
  {
    number: 5,
    icon: '👜',
    title: 'Customer Wallet Updated',
    body: "The customer's wallet shows the new balance, any newly issued rewards, and active coupons. Expiry dates are set. A WhatsApp message confirms the points earned.",
    pill: 'Channel: WhatsApp via ownChat',
    visual: 'wallet',
  },
  {
    number: 6,
    icon: '🔄',
    title: 'Customer Returns to Redeem',
    body: 'On next visit, the customer requests redemption. ownRewards checks minimum order value, point maturation days, cooldown hours, and blocked days. If OTP is required, a WhatsApp OTP is sent.',
    pill: 'Redemption Rules: 8 Controls',
    visual: 'redeem',
  },
  {
    number: 7,
    icon: '👥',
    title: 'Referral Code Shared',
    body: 'The customer shares their referral code with a friend. When the friend signs up and makes their first purchase, both the referrer and referee receive their configured rewards automatically.',
    pill: 'Program Type: Dual-Sided',
    visual: 'referral',
  },
  {
    number: 8,
    icon: '📊',
    title: 'Analytics Updated in Real Time',
    body: 'Every transaction updates cohort data, reward ROI calculations, segment health scores, and tier distribution. Your dashboard always reflects live business performance.',
    pill: 'Granularity: Hourly / Daily / Monthly',
    visual: 'analytics',
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="hiw-steps"
      style={{ padding: '40px 0 80px', background: 'var(--bg)' }}
      aria-labelledby="timeline-heading"
    >
      <div className="container">
        <div className="sr-only" id="timeline-heading">
          How ownRewards works — 8 automated steps
        </div>

        <div ref={containerRef} style={{ position: 'relative' }}>
          {/* ── Central animated vertical line (desktop) ── */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              background: 'var(--border)',
              zIndex: 0,
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: lineHeight,
                background: 'linear-gradient(180deg, var(--primary), #10B981)',
                borderRadius: '2px',
              }}
            />
          </div>

          {/* ── Steps ── */}
          <ol
            role="list"
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {steps.map((step, index) => (
              <li key={step.number}>
                <TimelineStep step={step} index={index} isLeft={index % 2 === 0} />
              </li>
            ))}
          </ol>
        </div>

        {/* ── Mobile: stacked layout override via CSS ── */}
        <style>{`
          @media (max-width: 767px) {
            #hiw-steps [style*="grid-template-columns: 1fr 64px 1fr"] {
              display: flex !important;
              flex-direction: column !important;
              align-items: stretch !important;
              padding-left: 52px;
              position: relative;
              margin-bottom: 32px;
            }
            #hiw-steps [style*="grid-template-columns: 1fr 64px 1fr"] > div:first-child,
            #hiw-steps [style*="grid-template-columns: 1fr 64px 1fr"] > div:last-child {
              padding: 0 !important;
              justify-content: flex-start !important;
            }
            #hiw-steps [style*="grid-template-columns: 1fr 64px 1fr"] > div:nth-child(2) {
              position: absolute !important;
              left: 0 !important;
              top: 0 !important;
            }
          }
          @media (max-width: 767px) {
            #hiw-steps [style*="left: 50%"] {
              left: 24px !important;
              transform: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Timeline;
