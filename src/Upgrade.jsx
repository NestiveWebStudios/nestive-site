import React from 'react';
import { Link } from 'react-router-dom';

const Upgrade = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>Upgrade Your Site</h2>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Love what you see? Unlock the full experience with a complete, professionally designed site tailored to your brand.
      </p>
      <Link
        to="/upgrade-details"
        style={{
          display: 'inline-block',
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#000',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        See What's Included
      </Link>
    </div>
  );
};


export default Upgrade;
