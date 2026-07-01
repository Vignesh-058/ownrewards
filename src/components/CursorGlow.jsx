import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [isVisible]);

  return (
    <motion.div
      className="cursor-glow hidden-mobile"
      animate={{ 
        x: mousePosition.x - 250, 
        y: mousePosition.y - 250,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.4 }}
    />
  );
};

export default CursorGlow;
