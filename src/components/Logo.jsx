import React from 'react';
import logoImg from '../assets/Ownreward icon.svg'; // Path to your logo image

const Logo = ({ className = "", size = 32 }) => {
  return (
    <div className={`logo-wrapper ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src={logoImg} alt="Logo" style={{ width: size, height: size, objectFit: 'contain' }} />
      <span style={{ fontSize: `${size * 0.55}px`, fontWeight: '700', color: 'var(--text)', lineHeight: 1 }}>
        OwnRewards
      </span>
    </div>
  );
};

export default Logo;
