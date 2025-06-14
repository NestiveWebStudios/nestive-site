import React, { useEffect, useState } from 'react';

const FreePreview = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200); // slightly delayed load
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delay = 0) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.9s ease-in-out ${delay}ms, transform 0.9s ease-in-out ${delay}ms`
  });

  return (
    <div style={{
      padding: '80px 20px 60px',
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'center',
      fontFamily: 'Urbanist, sans-serif',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 900,
        marginBottom: '30px',
        ...fadeIn(0)
      }}>
        <span style={{ color: '#0F0F0F' }}>How It </span>
        <span style={{ color: '#8B5CF6' }}>Works</span>
      </h1>

      <p style={{
        fontSize: '18px',
        lineHeight: 1.6,
        marginBottom: '20px',
        color: '#0F0F0F',
        fontWeight: 500,
        ...fadeIn(400)
      }}>
        Fill out our quick form, and we’ll send you a working preview of your future website in <span style={{ color: '#8B5CF6' }}>24–48 hours</span>.
      </p>

      <p style={{
        fontSize: '18px',
        lineHeight: 1.6,
        marginBottom: '40px',
        color: '#0F0F0F',
        fontWeight: 500,
        ...fadeIn(800)
      }}>
        If you’re happy, you’ll get a unique payment link to unlock your full site + ongoing support.
      </p>

      <a
        href="https://forms.gle/ReBhRS2XLh8zzhMq7"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
        style={{
          display: 'inline-block',
          backgroundColor: '#8B5CF6',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '16px',
          padding: '14px 26px',
          borderRadius: '6px',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, opacity 0.9s ease-in-out 1200ms',
          transform: loaded ? 'scale(1)' : 'scale(0.95)',
          opacity: loaded ? 1 : 0
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Fill Out the Form
      </a>
    </div>
  );
};

export default FreePreview;