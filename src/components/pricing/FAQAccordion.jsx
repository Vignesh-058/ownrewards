import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 'faq-1',
    q: 'Can I import my existing customers?',
    a: 'Yes. ownRewards supports bulk CSV customer import with automatic loyalty enrollment. Existing point balances can be migrated too.',
  },
  {
    id: 'faq-2',
    q: 'Does it work with Petpooja POS?',
    a: 'Yes. ownRewards natively integrates with Petpooja. Bills sync in real time and trigger automatic point calculation and rule evaluation.',
  },
  {
    id: 'faq-3',
    q: 'Can I run multiple referral programs at the same time?',
    a: 'Yes. Create seasonal, standard, invite-only, or campaign programs and run them in parallel. Each has independent reward configs and limits.',
  },
  {
    id: 'faq-4',
    q: 'Is OTP required for every redemption?',
    a: "It's optional and configurable per outlet. You can require a WhatsApp OTP before any points redemption to prevent fraud at the POS.",
  },
  {
    id: 'faq-5',
    q: 'Can I control how often a rule fires per customer?',
    a: 'Yes. Set maxExecutionsPerCustomer (e.g., birthday rule fires max once per year) and maxExecutionsTotal globally per rule.',
  },
  {
    id: 'faq-6',
    q: 'How does budget control work for rewards?',
    a: 'Set a maximum total discount value or maximum issuance count per reward. When the budget is exhausted, the reward auto-deactivates — no overspend is possible.',
  },
];

const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, type: 'spring', stiffness: 120 }}
      viewport={{ once: true }}
    >
      <details
        id={faq.id}
        open={open}
        onToggle={(e) => setOpen(e.target.open)}
        style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: '14px', overflow: 'hidden',
          transition: 'box-shadow 0.2s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 24px rgba(99,102,241,0.1)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--border)'; }}
      >
        <summary
          style={{
            padding: '20px 24px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            listStyle: 'none', outline: 'none',
          }}
          aria-expanded={open}
        >
          {faq.q}
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              width: '24px', height: '24px', borderRadius: '50%',
              background: open ? 'var(--primary)' : 'var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: open ? '#fff' : 'var(--muted)', fontWeight: 700,
              fontSize: '1rem', flexShrink: 0, transition: 'background 0.2s ease',
            }}
            aria-hidden="true"
          >+</motion.span>
        </summary>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <p style={{
                padding: '0 24px 20px', color: 'var(--muted)', lineHeight: 1.7,
                fontSize: '0.9375rem', margin: 0,
                borderTop: '1px solid var(--border)',
                paddingTop: '16px',
              }}>
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </details>
    </motion.div>
  );
};

const FAQAccordion = () => (
  <section
    id="pricing-faq"
    style={{ padding: '100px 0', background: 'var(--bg)' }}
    aria-labelledby="faq-heading"
  >
    <div className="container" style={{ maxWidth: '740px' }}>
      <h2
        id="faq-heading"
        style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '48px' }}
      >
        Frequently Asked Questions
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {faqs.map((faq, i) => (
          <FAQItem key={faq.id} faq={faq} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FAQAccordion;
