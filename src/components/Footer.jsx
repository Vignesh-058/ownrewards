import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageCircle, Briefcase, Globe } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer relative overflow-hidden">
      <div className="container relative z-10">
        
        <div className="footer-top">
          <div className="footer-brand">
            <Logo size={28} />
            <p className="footer-description">
              The enterprise-grade customer loyalty and rewards platform built to scale your business and retain your best customers.
            </p>
            <div className="footer-social mt-6">
              <a href="#" className="social-link" aria-label="Twitter"><MessageCircle size={18} /></a>
              <a href="#" className="social-link" aria-label="Github"><Briefcase size={18} /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><Globe size={18} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/features">Integrations</Link>
            <Link to="/features">Changelog</Link>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Resources</h4>
            <Link to="/about">Documentation</Link>
            <Link to="/about">API Reference</Link>
            <Link to="/about">Blog</Link>
            <Link to="/about">Community</Link>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-item">
              <Mail size={16} className="text-primary" />
              <span>hello@ownrewards.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} className="text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} className="text-primary" />
              <span>123 SaaS Avenue, NY 10001</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} OwnRewards. All rights reserved.</p>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary opacity-5 blur-[150px] rounded-full pointer-events-none -z-10" />
    </footer>
  );
};

export default Footer;
