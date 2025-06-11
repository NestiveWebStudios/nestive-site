import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#222', color: '#fff', minHeight: '100vh' }}>
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
      <img
        src="/nestive-logo-transparent.png"
        alt="Nestive Logo"
        style={{ marginTop: '40px', maxWidth: '200px' }}
      />
    </div>
  );
};

export default Home;
