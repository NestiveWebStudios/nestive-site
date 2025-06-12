import React from 'react';
import { Link } from 'react-router-dom';

const Upgrade = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: 'calc(100vh - 80px - 100px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        fontSize: '56px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: 'inherit'
      }}>
       🚀 Make Your Site a Reality 
      </h1>

      <p style={{
        fontSize: '20px',
        marginBottom: '40px',
        maxWidth: '600px',
        color: 'inherit'
      }}>
        You’ve seen the preview. Let’s turn it into your online home — fast, easy, and done for you.
      </p>

      <Link
        to="/upgrade-details"
        style={{
          display: 'inline-block',
          padding: '16px 36px',
          backgroundColor: '#8B5CF6',
          color: '#000',
          fontSize: '18px',
          fontWeight: 'bold',
          textDecoration: 'none',
          borderRadius: '6px',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#ffff'}
        onMouseOut={e => e.target.style.backgroundColor = '#8B5CF6'}
      >
        Launch My Site
      </Link>
    </div>
  );
};

export default Upgrade;