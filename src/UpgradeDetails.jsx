import React from 'react';

const UpgradeDetails = () => {
  const handleCheckout = () => {
    // Replace this with your actual Stripe link when ready
    window.location.href = 'https://your-stripe-checkout-link.com';
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Let’s Do This.</h1>

      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Get your full website live today for just <strong>$99</strong>. No domain needed — we’ll host it for you under Nestive Web Studios.  
        Want your own domain? You can add or connect one later. Your site is fully built, hosted, and managed by our team.  
        Edits and updates? Just shoot us an email and we’ll take care of it.
      </p>

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
          Launch Your Site – $99
        </button>
      </div>
    </div>
  );
};

export default UpgradeDetails;
