import React from 'react';

const UpgradeDetails = () => {
  const handleCheckout = () => {
    // Replace with your actual Stripe link
    window.location.href = 'https://your-stripe-checkout-link.com';
  };

  return (
    <div style={{
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto',
      padding: '40px 20px',
      color: 'inherit'
    }}>
      <h2 style={{
        fontSize: '36px',
        fontWeight: '800',
        marginBottom: '30px',
        color: 'inherit',
        
        
      }}>
        🚀 Let’s Launch It.
      </h2>

      <p style={{ fontSize: '18px', marginBottom: '20px', color: 'inherit' }}>
        One payment and your preview goes live — <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>no domain needed.</span>
      </p>
      <p style={{ fontSize: '18px', marginBottom: '20px', color: 'inherit' }}>
        We host it. We manage it. <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>You relax.</span>
      </p>
      <p style={{ fontSize: '18px', marginBottom: '20px', color: 'inherit' }}>
        Want your own domain? <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Add it anytime.</span>
      </p>
      <p style={{ fontSize: '18px', color: 'inherit' }}>
        Need updates? <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Just email us.</span>
      </p>
    <div style={{ marginTop: '40px', textAlign: 'center' }}>
      <button
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '12px 24px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontFamily: 'inherit',
          borderRadius: '6px',
          transition: 'background-color 0.3s'
        }}
        onClick={handleCheckout}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#1f2937')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#000')}
      >
        Launch Your Site – $99
      </button>
    </div>
</div>
  );
};

export default UpgradeDetails;
