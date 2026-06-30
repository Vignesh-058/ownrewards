import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import './DeveloperSection.css';
import Button from './Button';

const codeString = `// Award points for an order
const response = await fetch('https://api.ownrewards.io/v1/rewards', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer sk_live_...',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    customer_id: 'cus_8m2k1p',
    event_type: 'order_completed',
    properties: {
      order_id: 'ord_9142',
      amount_cents: 12500,
      currency: 'USD'
    }
  })
});

const data = await response.json();
console.log(\`Awarded \${data.points_earned} points!\`);`;

const DeveloperSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < codeString.length) {
        setDisplayedText(codeString.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 15);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="developer-section" id="developers">
      <div className="container">
        <div className="dev-grid">
          <div className="dev-content">
            <div className="badge-dev">
              <Terminal size={14} /> Developer
            </div>
            <h2 className="section-title">API First Architecture</h2>
            <p className="section-subtitle">
              Integrate OwnRewards into your custom stack in minutes. Our RESTful APIs and webhooks give you complete control over the loyalty experience.
            </p>
            <ul className="dev-features">
              <li>Comprehensive API Documentation</li>
              <li>Real-time Webhooks</li>
              <li>SDKs for Node.js, Python, and Ruby</li>
            </ul>
            <div className="dev-actions">
              <Button>Read the Docs</Button>
            </div>
          </div>

          <div className="dev-window-wrapper">
            <motion.div 
              className="code-window"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">award-points.js</div>
              </div>
              <div className="window-body">
                <pre>
                  <code className="language-javascript">
                    {displayedText}
                    {isTyping && <span className="typing-cursor"></span>}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
