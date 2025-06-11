import React from 'react';

const Upgrade = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1>Upgrade to Your Full Site</h1>
      <p>
        Like what you see? Turn your free preview into a complete,
        custom-built website.
      </p>
      <ul>
        <li>✔️ Mobile-friendly, SEO-optimized design</li>
        <li>✔️ Fast turnaround (1–3 days)</li>
        <li>✔️ One-time payment, no hidden fees</li>
      </ul>
      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
        ⏳ Heads up: Your free preview will be removed within 24 hours if you don’t move forward.
        We do this to keep things fast and fair for everyone.
      </p>
      <a
        href="https://buy.stripe.com/test_dR63dq3cC62K9sIeUU"
        style={{
          display: 'inline-block',
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        Upgrade Now
      </a>
    </div>
  );
};

export default Upgrade;