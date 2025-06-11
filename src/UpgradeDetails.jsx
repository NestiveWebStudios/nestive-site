import React from 'react';

const UpgradeDetails = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>What You Get With the Full Site</h2>
      <ul style={{ fontSize: '16px', marginBottom: '20px', lineHeight: '1.8' }}>
        <li>✅ Your own custom domain (or we help you set one up)</li>
        <li>✅ Mobile-optimized design that looks great on any screen</li>
        <li>✅ Contact forms, galleries, menus, and more — built for your business</li>
        <li>✅ Lightning-fast site speed with professional hosting</li>
        <li>✅ Full ownership and easy edits — we’ll walk you through it</li>
      </ul>
      <p><strong>⏳ Heads up:</strong> Your free preview will be taken down in 24 hours if you don’t upgrade. We do this to keep things fast and fair for everyone.</p>
      <br />
      <a
        href="https://buy.stripe.com/test_123abc456def"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '10px',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        Upgrade Now – $199 Flat Fee
      </a>
    </div>
  );
};

export default UpgradeDetails;
