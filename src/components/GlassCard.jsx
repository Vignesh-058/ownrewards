import React from 'react';

import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hoverEffect = true, ...props }) => {
  return (
    <motion.div 
      className={`glass-card ${className}`}
      whileHover={hoverEffect ? { y: -5, boxShadow: 'var(--shadow-lg)' } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
