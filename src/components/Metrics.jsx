import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import GlassCard from './GlassCard';
import './Metrics.css';

const AnimatedCounter = ({ from, to, suffix = "", duration = 2 }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};

const Metrics = () => {
  const metrics = [
    { label: "Active Programs", value: 200, suffix: "+", desc: "Trusted by growing brands" },
    { label: "Rewards Issued", value: 50, suffix: "M+", desc: "Points and perks distributed" },
    { label: "Average ROI", value: 300, suffix: "%", desc: "Return on loyalty investment" },
    { label: "API Uptime", value: 99.9, suffix: "%", desc: "Enterprise-grade reliability" }
  ];

  return (
    <section className="metrics-section relative overflow-hidden">
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="section-title">Delivering <span className="gradient-text">measurable</span> results</h2>
          <p className="section-subtitle mt-4">We don't just talk about retention, we deliver hard numbers.</p>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <GlassCard className="metric-card hover-lift">
                <div className="metric-value">
                  <AnimatedCounter from={0} to={metric.value} suffix={metric.suffix} />
                </div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-desc">{metric.desc}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[300px] bg-accent-cyan opacity-10 blur-[150px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default Metrics;
