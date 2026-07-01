import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Timeline = () => {
  const milestones = [
    {
      year: "2020",
      title: "The Inception",
      description: "OwnRewards is founded by a team of ex-Stripe engineers determined to revolutionize loyalty programs."
    },
    {
      year: "2021",
      title: "Seed Funding",
      description: "Raised $4.5M in seed funding led by top-tier SaaS investors to scale our core API architecture."
    },
    {
      year: "2022",
      title: "Enterprise Engine",
      description: "Launched our advanced Rule Engine, allowing complex transactional triggers and conditions."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded our operations to Europe and Asia, crossing the milestone of 100M+ API requests per month."
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Introduced predictive analytics and AI-driven reward recommendations to maximize customer LTV."
    },
    {
      year: "2026",
      title: "The Future",
      description: "Reaching $50M ARR and continuously redefining the standard for customer retention software globally."
    }
  ];

  return (
    <section className="timeline-section relative overflow-hidden bg-surface-hover">
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="section-title">Our <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle mt-4">A brief history of how we got here and where we are heading.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content hover-lift">
                <div className="timeline-year">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-secondary">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
