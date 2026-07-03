import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="main-footer" style={{ background: 'var(--background)', paddingTop: '100px', paddingBottom: '40px', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      <div className="container relative z-10">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'space-between', marginBottom: '80px' }}>
          
          {/* Brand & Newsletter Column */}
          <div style={{ flex: '1 1 300px', maxWidth: '400px' }}>
            <div style={{ marginBottom: '24px' }}>
              <Logo size={32} />
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px' }}>
              Intelligent loyalty, rewards, and retention for growing businesses. Build a brand your customers love.
            </p>
            
            <div style={{ marginBottom: '16px', fontWeight: 600, fontSize: '14px', color: 'var(--text)' }}>
              Subscribe to our newsletter
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{ 
                  flex: 1, 
                  padding: '12px 16px', 
                  borderRadius: '12px', 
                  border: '1px solid var(--border)', 
                  background: 'var(--surface)',
                  outline: 'none',
                  fontSize: '14px',
                  color: 'var(--text)'
                }} 
              />
              <button style={{ 
                background: 'var(--primary)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '12px', 
                padding: '0 20px', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div style={{ flex: '2 1 400px', display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'space-between' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Product</h4>
              <Link to="/features" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Features</Link>
              <Link to="/how-it-works" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>How It Works</Link>
              <Link to="/analytics" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Analytics</Link>
              <Link to="/pricing" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Pricing</Link>
              <Link to="/changelog" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Changelog</Link>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resources</h4>
              <Link to="/use-cases" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Use Cases</Link>
              <Link to="/blog" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Blog</Link>
              <Link to="/help" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Help Center</Link>
              <Link to="/api" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>API Documentation</Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h4>
              <Link to="/about" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>About</Link>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Contact</Link>
              <Link to="/privacy" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Privacy Policy</Link>
              <Link to="/terms" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '15px', transition: 'color 0.2s ease' }}>Terms of Service</Link>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>&copy; 2026 iEyal Solutions. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: 'var(--surface)', padding: '4px 12px', borderRadius: '99px', border: '1px solid var(--border)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 10px var(--success)' }} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>All systems operational</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>Twitter</a>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>LinkedIn</a>
            <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600 }}>GitHub</a>
          </div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div style={{ position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'var(--primary)', filter: 'blur(200px)', opacity: 0.1, borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
    </footer>
  );
};
