import React from 'react';
import { Link } from 'react-router-dom';

const Upgrade = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h2 style={{ fontSize: '30px', marginBottom: '10px' }}>Do you like this site?</h2>
      <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>
        Satisfied with the preview you requested?
      </p>
      <p style={{ fontSize: '16px', marginBottom: '30px' }}>
        Tap below to upgrade and make it yours.
      </p>
      <Link
        to="/upgrade-details"
        style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: 'bold'
        }}
      >
        Upgrade My Site
      </Link>
    </div>
  );
};

export default Upgrade;
