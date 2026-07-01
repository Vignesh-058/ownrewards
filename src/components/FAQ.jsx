import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to get set up?",
      answer: "With our pre-built templates and API-first approach, most businesses go live in under 15 minutes. Custom integrations might take 1-2 days depending on complexity."
    },
    {
      question: "Do you integrate with my existing POS system?",
      answer: "We offer native integrations with Shopify, WooCommerce, Magento, and PetPooja. For custom systems, our robust API and webhooks make integration seamless."
    },
    {
      question: "Can I customize the rewards program to my brand?",
      answer: "Absolutely! From colors and logos to custom point structures, VIP tiers, and referral rules, every aspect of your loyalty program can be tailored to match your brand identity."
    },
    {
      question: "What kind of support do you offer?",
      answer: "Starter and Growth plans include 24/7 email and chat support. Enterprise customers get a dedicated Customer Success Manager, priority phone support, and a guaranteed SLA."
    },
    {
      question: "Is there a limit on how many rewards I can create?",
      answer: "No, you can create unlimited reward tiers, points rules, and referral bonuses on all our paid plans."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section relative overflow-hidden">
      <div className="container relative z-10 max-w-3xl mx-auto">
        <div className="section-header text-center mb-12">
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-subtitle mt-4">Everything you need to know about the product and billing.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="faq-answer-container"
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default FAQ;
