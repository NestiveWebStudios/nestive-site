import React, { useState } from 'react';

const UpgradeDetails = () => {
  const [addons, setAddons] = useState({
    copywriting: false,
    analytics: false,
    extraPage: false,
  });

  const prices = {
    base: 9900, // $99.00
    copywriting: 2500,
    analytics: 1000,
    extraPage: 1500,
  };

  const getTotal = () => {
    let total = 0;
    Object.keys(addons).forEach(key => {
      if (addons[key]) total += prices[key];
    });
    return total;
  };

  const handleChange = (addon) => {
    setAddons(prev => ({ ...prev, [addon]: !prev[addon] }));
  };

  const handleCheckout = () => {
    // Replace with your real Stripe checkout link
    window.location.href = 'https://your-stripe-checkout-link.com';
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Like What You See?</h1>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Launch your full website today for just <strong>$99</strong>. No domain needed — we’ll host it for you under our Nestive Web Studios platform. 
        Want to use your own domain? Add it later or connect one anytime. Your site is fully managed by us, with edits and updates submitted directly to our team.
      </p>

      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Optional Add-Ons:</h2>
      <div style={{ marginBottom: '80px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={addons.copywriting}
            onChange={() => handleChange('copywriting')}
          />
          <span style={{ marginLeft: '10px' }}>📄 Professional Copywriting – $25</span>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={addons.analytics}
            onChange={() => handleChange('analytics')}
          />
          <span style={{ marginLeft: '10px' }}>📊 Analytics & Visitor Tracking – $10</span>
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input
            type="checkbox"
            checked={addons.extraPage}
            onChange={() => handleChange('extraPage')}
          />
          <span style={{ marginLeft: '10px' }}>📄 Extra Page (e.g. Contact/About) – $15</span>
        </label>
      </div>

      {/* Sticky Checkout Bar */}
      <div style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: '#fff',
        borderTop: '1px solid #ddd',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
        zIndex: '1000'
      }}>
        <button
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '12px 24px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onClick={handleCheckout}
        >
          Launch Your Site – ${( (prices.base + getTotal()) / 100 ).toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default UpgradeDetails;
