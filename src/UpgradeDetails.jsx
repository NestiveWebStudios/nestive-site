import React from 'react';

const UpgradeDetails = () => {
  const handleCheckout = () => {
    // Replace with your actual Stripe link
    window.location.href = 'https://buy.stripe.com/eVqbJ2aS1ejb7ZQaVydby00';
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
      <h3> ✅ The $49 “Launch Package” </h3>
      <p style={{ fontSize: '18px', marginBottom: '20px', color: 'inherit' }}>
        Your Site, Live — <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>$49 Flat</span>
      </p>
      <p style={{ fontSize: '18px', marginBottom: '20px', color: 'inherit' }}>
        🚀 Your live site stays up <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>permanently.</span>
      </p>
      <p style={{ fontSize: '18px', marginBottom: '20px', color: 'inherit' }}>
        💻 Fully hosted — no tech skills or setup required
      </p>
      <p style={{ fontSize: '18px', color: 'inherit' }}>
        Need updates? <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Just email us.</span>
      </p>
    <div style={{ marginTop: '40px', textAlign: 'center' }}>
      <button
        style={{
          backgroundColor: '#8B5CF6',
          color: '#000',
          padding: '12px 24px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          fontFamily: 'inherit',
          borderRadius: '6px',
          transition: 'background-color 0.3s'
        }}
        onClick={handleCheckout}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#fff')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#8B5CF6')}
      >
        Launch Your Site – $49
      </button>
    </div>
</div>
  );
};

export default UpgradeDetails;
