import React from 'react';

const UpgradeDetails = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>
        Upgrade to a Premium Site
      </h1>

      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        When you're ready to go pro, we’re ready to build something powerful.
        Your free preview becomes a fully developed website — hosted, managed, and truly yours.
      </p>

      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>
        ⚡ What’s Included in the Upgrade:
      </h2>
      <ul style={{ marginTop: '10px', lineHeight: '1.8', paddingLeft: '20px' }}>
        <li>✅ Full React + Vite rebuild (from static HTML to modern app)</li>
        <li>✅ Lightning-fast site performance</li>
        <li>✅ Clean, modular code structure (easy to maintain + expand)</li>
        <li>✅ Lifetime hosting + custom domain setup</li>
        <li>✅ Email/contact form integration</li>
        <li>✅ Ongoing revisions + support</li>
      </ul>

      <p style={{ marginTop: '20px', fontSize: '16px' }}>
        Upgrading your site doesn’t just unlock premium features — it transforms your build from basic static HTML
        into a real React + Vite web application. That means better speed, stability, and a foundation you can build on for years.
      </p>

      <a
        href="https://buy.stripe.com/test_YOUR_PAYMENT_LINK_HERE"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '30px',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Purchase Upgrade – $99 Flat Fee
      </a>
    </div>
  );
};

export default UpgradeDetails;
