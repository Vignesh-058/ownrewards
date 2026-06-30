import React from 'react';
import './Button.css';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  leftIcon,
  rightIcon,
  onClick,
  ...props 
}) => {
  const baseClass = `btn btn-${variant} ${className}`;
  
  return (
    <motion.button 
      className={baseClass}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {leftIcon && <span className="btn-icon-left" style={{ marginRight: '8px', display: 'flex', alignItems: 'center' }}>{leftIcon}</span>}
      {icon && <span className="btn-icon" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {children}
      {rightIcon && <span className="btn-icon-right" style={{ marginLeft: '8px', display: 'flex', alignItems: 'center' }}>{rightIcon}</span>}
    </motion.button>
  );
};

export default Button;
