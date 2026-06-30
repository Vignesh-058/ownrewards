import React from 'react';
import { Star } from 'lucide-react';
import GlassCard from './GlassCard';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Marketing Director",
      company: "Brew & Co.",
      content: "OwnRewards completely transformed our customer retention. The automated WhatsApp campaigns have a 45% conversion rate. It's almost like magic.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    {
      name: "David Chen",
      role: "Founder",
      company: "Peak Athletics",
      content: "The API-first approach allowed us to integrate the loyalty program seamlessly into our custom headless Shopify build in just a few days.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager",
      company: "Urban Greens",
      content: "We've seen a 30% increase in repeat purchases since launching our VIP tiers. The dashboard makes it incredibly easy to track our ROI.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title text-center mb-60">Loved by <span className="text-primary">thousands</span></h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
