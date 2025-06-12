import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#8B5CF6',
      padding: '20px',
      textAlign: 'center',
      fontSize: '14px',
      fontWeight: 'lighter',
      color: 'inherit',
      borderTop: '5px solid #000',
      marginTop: 'auto'  // ⬅️ this is the key for a "sticky-to-bottom-only-if-needed" footer
    }}>
      <p>
        Contact us at <a href="mailto:support@nestiveweb.com" style={{ color: 'inherit' }}>support@nestiveweb.com</a>
      </p>
      <p>© 2025 Nestive Web Studios. All rights reserved.</p>
    </footer>
  );
};

export default Footer;