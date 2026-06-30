import React from 'react';
import { LifeBuoy, MessageCircle, Mail } from 'lucide-react';
import Button from '../../components/Button';
import './Help.css';

const Help = () => {
  return (
    <div className="help-page">
      <div className="page-header">
        <div>
          <h2 className="section-title">Help & Support</h2>
          <p className="section-subtitle">Need assistance? We're here to help.</p>
        </div>
      </div>

      <div className="help-grid">
        <div className="help-card">
          <div className="help-icon-wrapper">
            <LifeBuoy size={24} />
          </div>
          <h3>Help Center</h3>
          <p>Browse our knowledge base for detailed guides and tutorials.</p>
          <Button variant="outline" className="w-full mt-auto">Visit Help Center</Button>
        </div>

        <div className="help-card">
          <div className="help-icon-wrapper">
            <MessageCircle size={24} />
          </div>
          <h3>Live Chat</h3>
          <p>Chat with our support team in real-time (Available 9 AM - 6 PM).</p>
          <Button variant="outline" className="w-full mt-auto">Start Chat</Button>
        </div>

        <div className="help-card">
          <div className="help-icon-wrapper">
            <Mail size={24} />
          </div>
          <h3>Email Support</h3>
          <p>Send us an email and we'll get back to you within 24 hours.</p>
          <Button variant="outline" className="w-full mt-auto">Contact Us</Button>
        </div>
      </div>

      <div className="faq-section">
        <h3 className="section-title">Frequently Asked Questions</h3>
        <div className="faq-list">
          <div className="faq-item">
            <h4>How do I redeem my points?</h4>
            <p>You can redeem points from the Rewards page. Select any available reward and click the Redeem button. Points will be automatically deducted from your wallet.</p>
          </div>
          <div className="faq-item">
            <h4>When do my points expire?</h4>
            <p>Points typically expire 12 months from the date they were earned, unless specified otherwise by the merchant. You will receive a notification 30 days before any points expire.</p>
          </div>
          <div className="faq-item">
            <h4>How does the referral program work?</h4>
            <p>Share your unique referral code with friends. Once they sign up and make their first purchase, you'll instantly receive 500 bonus points in your wallet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
