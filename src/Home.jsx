import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>
        Welcome to Nestive Web Studios
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>
        Your dream site starts here — fast, simple, no stress.
      </p>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        We build clean, modern websites for creators and small businesses.  
        No templates. No fluff. Just real design that works.
      </p>
      <a
        href="https://forms.gle/ReBhRS2XLh8zzhMq7"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#000',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        Request a Free Preview
      </a>
      <br />
      <img
        src="/nestive-transparent-logo.png"
        alt="Nestive Logo"
        style={{ marginTop: '40px', maxWidth: '200px' }}
      />
    </div>
  );
};

export default Home;
