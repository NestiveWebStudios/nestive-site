import React from 'react';

const Upgrade = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Upgrade to a Full Website</h1>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        ⏳ Heads up: Your free preview will be taken down in 24 hours if you don’t move forward. 
        We do this to keep things fast and fair for everyone.
      </p>
      <a href="https://buy.stripe.com/your-link" target="_blank" rel="noopener noreferrer"
         style={{ display: 'inline-block', backgroundColor: '#000', color: '#fff', padding: '12px 24px', textDecoration: 'none' }}>
        Click here to upgrade now
      </a>
    </div>
  );
};

export default Upgrade;