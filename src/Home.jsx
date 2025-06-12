import React from 'react';

const Home = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: 'calc(100vh - 80px - 100px)',
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      boxSizing: 'border-box',
      color: 'inherit',
      backgroundColor: 'inherit',
      position: 'relative'
    }}>
      
      {/* Top Horizontal Lines */}
      <div style={{
        width: '1000px',
        height: '5px',
        backgroundColor: '#000',
        marginBottom: '8px'
      }} />
      <div style={{
        width: '1000px',
        height: '5px',
        backgroundColor: '#000',
        marginBottom: '30px'
      }} />

      

      <h1>✨Your Dream Site Starts Here✨</h1>

      <p style={{
        fontSize: '20px',
        marginBottom: '10px'
      }}>
        Fast. Simple. No stress.
      </p>

      <p style={{
        fontSize: '18px',
        marginBottom: '30px'
      }}>
        We build clean, modern websites for creators and small businesses.<br />
        No templates. No fluff. Just real design that works.
      </p>

      <a
        href="https://forms.gle/ReBhRS2XLh8zzhMq7"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '14px 30px',
          backgroundColor: '#8B5CF6',
          color: '000',
          fontSize: '18px',
          fontWeight: 'bold',
          textDecoration: 'none',
          borderRadius: '6px',
          transition: 'background-color 0.3s',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginTop: '20px'

        }}
        onMouseOver={e => e.target.style.backgroundColor = '#1f2937'}
        onMouseOut={e => e.target.style.backgroundColor = '#8B5CF6'}
      >
        Request a Free Preview
      </a>

      {/* Bottom Horizontal Lines */}
      <div style={{
        width: '1000px',
        height: '5px',
        backgroundColor: '#000',
        marginTop: '30px'
      }} />
      <div style={{
        width: '1000px',
        height: '5px',
        backgroundColor: '#000',
        marginTop: '8px'
      }} />
    </div>
  );
};

export default Home;