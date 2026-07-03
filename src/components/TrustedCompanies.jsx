import React from 'react';

const IntegrationStrip = () => {
  const integrations = [
    "🧾 Petpooja",
    "📱 Custom POS",
    "💬 ownChat (WhatsApp)",
    "🔗 REST API",
    "📡 Webhooks",
    "🛒 ownCart"
  ];

  const marqueeContent = [...integrations, ...integrations, ...integrations];

  return (
    <section className="trusted-companies" id="integrations" style={{ padding: '60px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <p className="trusted-title" style={{ fontSize: '0.875rem', fontWeight: 'bold', color: 'var(--muted)', textAlign: 'center', marginBottom: '32px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Built to connect with your stack
        </p>
        
        <div className="marquee-container" style={{ display: 'flex', overflow: 'hidden', position: 'relative' }}>
          {/* Fading edges */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '100px', background: 'linear-gradient(to right, var(--background), transparent)', zIndex: 2 }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '100px', background: 'linear-gradient(to left, var(--background), transparent)', zIndex: 2 }} />
          
          <div className="marquee-content" style={{ display: 'flex', gap: '48px', animation: 'marquee 30s linear infinite' }}>
            {marqueeContent.map((item, index) => (
              <div key={index} className="company-logo" style={{ display: 'flex', alignItems: 'center', fontSize: '1.125rem', fontWeight: '500', color: 'var(--text)', whiteSpace: 'nowrap', opacity: 0.8 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
};

export default IntegrationStrip;
