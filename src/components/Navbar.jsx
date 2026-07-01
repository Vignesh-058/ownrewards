import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { clsx } from 'clsx';
import Button from './Button';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={clsx('navbar', scrolled && 'navbar-scrolled')}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo">
            <Logo size={32} />
          </Link>
          
          <div className="navbar-desktop-links">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={clsx('nav-link', location.pathname === link.path && 'active')}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text)', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link to="/login" className="hidden-mobile">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link to="/register">
              <Button variant="primary">Get Started</Button>
            </Link>
            
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={clsx('mobile-drawer-overlay', mobileMenuOpen && 'open')} onClick={() => setMobileMenuOpen(false)} />
      <div className={clsx('mobile-drawer', mobileMenuOpen && 'open')}>
        <div className="mobile-drawer-header">
          <Logo size={28} />
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text)', display: 'flex', alignItems: 'center' }}>
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
            <button onClick={() => setMobileMenuOpen(false)} className="close-drawer">
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="mobile-drawer-links">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={clsx('mobile-link', location.pathname === link.path && 'active')}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mobile-drawer-divider" />
          <Link to="/login" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact Support</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
