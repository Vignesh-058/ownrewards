import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import Button from './Button';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Get in <span className="text-primary">touch</span></h2>
            <p className="section-subtitle">
              Have questions about our enterprise plans, API integrations, or custom development? Our team is here to help.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@ownrewards.io</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Headquarters</h4>
                  <p>123 Loyalty Lane, Tech District<br/>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>
              <div className="form-group">
                <label>Work Email</label>
                <input type="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="How can we help you?" rows="4" required></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full mt-4">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
