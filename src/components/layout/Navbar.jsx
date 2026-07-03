import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import Logo from '../ui/Logo';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Analytics', path: '/analytics' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          position: 'fixed',
          top: scrolled ? '20px' : '40px',
          left: 0,
          right: 0,
          margin: '0 auto',
          width: 'calc(100% - 40px)',
          maxWidth: '1200px',
          zIndex: 50,
          background: scrolled ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '9999px',
          boxShadow: scrolled ? '0 20px 40px rgba(109, 74, 255, 0.08)' : '0 4px 12px rgba(0,0,0,0.02)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        aria-label="Main Navigation"
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', height: '72px' }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} aria-label="OwnRewards Home">
            <Logo size={28} />
          </Link>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="max-md:hidden">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  style={{
                    position: 'relative',
                    padding: '8px 16px',
                    color: isActive ? 'var(--text)' : 'var(--text-secondary)',
                    fontWeight: isActive ? 600 : 500,
                    textDecoration: 'none',
                    fontSize: '15px',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '9999px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                        zIndex: -1,
                      }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="max-md:hidden">
              <Link to="/login" style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '15px', marginRight: '16px' }}>Sign In</Link>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <Button variant="primary" style={{ padding: '10px 24px', fontSize: '15px' }}>Start Free &rarr;</Button>
              </Link>
            </div>
            
            <button 
              className="md:hidden"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', padding: '8px', color: 'var(--text)' }}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', padding: '24px', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <Logo size={28} />
              <button 
                onClick={() => setMobileMenuOpen(false)} 
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '8px', color: 'var(--text)' }}
              >
                <X size={28} />
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '24px', fontWeight: 600 }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  style={{ textDecoration: 'none', color: location.pathname === link.path ? 'var(--primary)' : 'var(--text)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div style={{ height: '1px', background: 'var(--border)', margin: '16px 0' }} />
              <Link to="/login" style={{ textDecoration: 'none', color: 'var(--text)' }}>Sign In</Link>
              <Link to="/register" style={{ textDecoration: 'none', color: 'var(--primary)' }}>Start Free &rarr;</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
