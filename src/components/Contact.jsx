import React from 'react';
import { Mail, MapPin, Phone, Clock, MessageCircle, Briefcase, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';
import GlassCard from './GlassCard';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact pt-32 pb-16" id="contact">
      <div className="container relative z-10">
        <div className="section-header text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p 
            className="section-subtitle mt-4 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have questions about our enterprise plans, API integrations, or custom development? Our team is here to help.
          </motion.p>
        </div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-methods">
              <GlassCard className="contact-method">
                <div className="method-icon"><Mail size={24} /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>hello@ownrewards.io</p>
                  <p className="text-sm text-primary mt-1">We aim to reply within 2 hours</p>
                </div>
              </GlassCard>

              <GlassCard className="contact-method">
                <div className="method-icon"><Phone size={24} /></div>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                  <p className="text-sm text-primary mt-1">Available during business hours</p>
                </div>
              </GlassCard>

              <GlassCard className="contact-method">
                <div className="method-icon"><Clock size={24} /></div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9 AM - 6 PM PST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </GlassCard>

              <GlassCard className="contact-method">
                <div className="method-icon"><MapPin size={24} /></div>
                <div>
                  <h4>Headquarters</h4>
                  <p>123 Loyalty Lane, Tech District<br/>San Francisco, CA 94105</p>
                  
                  {/* Google Map Placeholder */}
                  <div className="map-placeholder mt-4">
                    <div className="map-inner">
                      <MapPin size={32} className="text-primary mb-2" />
                      <span>View on Google Maps</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="contact-social mt-8 text-center">
              <h4 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-4">Connect With Us</h4>
              <div className="flex justify-center gap-4">
                <a href="#" className="social-icon-btn"><MessageCircle size={20} /></a>
                <a href="#" className="social-icon-btn"><Briefcase size={20} /></a>
                <a href="#" className="social-icon-btn"><Globe size={20} /></a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
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
                <label>Company Size</label>
                <select className="contact-select" required defaultValue="">
                  <option value="" disabled>Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="How can we help you?" rows="4" required></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full mt-4">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary opacity-10 blur-[150px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default Contact;
