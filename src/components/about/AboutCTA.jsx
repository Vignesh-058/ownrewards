import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section
      id="about-cta"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(245,158,11,0.06) 100%)',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
      }}
      aria-labelledby="about-cta-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="about-cta-heading" style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '24px' }}>
            Ready to make loyalty your growth engine?
          </h2>
          <div style={{ marginBottom: '32px' }}>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button variant="primary" icon={<ArrowRight size={18} />}>
                Get Started Free
              </Button>
            </Link>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.9375rem', margin: 0 }}>
            No credit card required. Set up in minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
