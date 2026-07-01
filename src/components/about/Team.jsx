import React from 'react';
import { motion } from 'framer-motion';
import { User, Globe, MessageCircle } from 'lucide-react';
import GlassCard from '../GlassCard';

const Team = () => {
  const team = [
    {
      name: "Sarah Jenkins",
      role: "CEO & Co-founder",
      bio: "Former VP Product at Stripe."
    },
    {
      name: "David Chen",
      role: "CTO & Co-founder",
      bio: "Distributed systems architect."
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Customer Officer",
      bio: "15+ years in enterprise CS."
    },
    {
      name: "Marcus Johnson",
      role: "VP of Engineering",
      bio: "Ex-Shopify, scaling infrastructure."
    }
  ];

  return (
    <section className="team-section relative">
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <h2 className="section-title">Meet the <span className="gradient-text">Leadership</span></h2>
          <p className="section-subtitle mt-4">The experienced team driving the future of loyalty.</p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="team-member hover-lift h-full">
                <div className="team-avatar">
                  <User size={48} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <p className="text-secondary mt-3 text-sm">{member.bio}</p>
                
                <div className="flex justify-center gap-4 mt-6 text-text-tertiary">
                  <a href="#" className="hover:text-primary transition-colors"><Globe size={18} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><MessageCircle size={18} /></a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-cyan opacity-5 blur-[100px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
};

export default Team;
