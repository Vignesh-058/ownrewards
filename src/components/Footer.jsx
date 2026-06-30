import React from 'react';
import { MessageCircle, Briefcase, Globe } from 'lucide-react';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo size={28} />
            <p className="footer-description">
              The enterprise-grade customer loyalty and rewards platform built to scale your business and retain your best customers.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
              <a href="#" className="social-link"><Briefcase size={20} /></a>
              <a href="#" className="social-link"><Globe size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Product</h4>
            <a href="#features" onClick={(e) => handleScroll(e, '#features')}>Features</a>
            <a href="#pricing" onClick={(e) => handleScroll(e, '#pricing')}>Pricing</a>
            <a href="#developers" onClick={(e) => handleScroll(e, '#developers')}>API & Webhooks</a>
            <a href="#">Documentation</a>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Company</h4>
            <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About Us</a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
            <a href="#">Compliance</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} OwnRewards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
