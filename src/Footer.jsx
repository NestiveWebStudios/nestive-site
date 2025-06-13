import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      padding: '30px 20px',
      backgroundColor: '#fff',
      borderTop: '1px solid #ddd',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: '400',
      color: '#000'
    }}>
      <p style={{ margin: '0 0 6px' }}>
        Contact us at <a href="mailto:support@nestiveweb.com" style={{ color: '#8B5CF6', textDecoration: 'none' }}>support@nestiveweb.com</a>
      </p>
      <p style={{ margin: 0 }}>© 2025 Nestive Web Studios. All rights reserved.</p>
    </footer>
  );
};

export default Footer;