import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const HowItWorksCTA = () => {
  return (
    <section
      id="hiw-cta"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(245,158,11,0.06) 100%)',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
      }}
      aria-labelledby="hiw-cta-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            id="hiw-cta-heading"
            style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '20px' }}
          >
            Ready to automate your loyalty program?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.0625rem', marginBottom: '36px' }}>
            Set up ownRewards in minutes — no dev team, no complex migrations.
          </p>
          <Link to="/#cta-banner" style={{ textDecoration: 'none' }}>
            <Button variant="primary" icon={<ArrowRight size={18} />}>
              Get Started Free
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksCTA;
