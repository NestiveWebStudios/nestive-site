import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [visibleWords, setVisibleWords] = useState([]);

  const topLine = ['Websites', 'that'];
  const bottomLine = ['Work.', 'Fast.'];

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setShowLogo(true), 100));

    [...topLine, ...bottomLine].forEach((word, i) => {
      const delay = 800 + i * 350 + (word === 'Fast.' ? 400 : 0);
      timers.push(setTimeout(() => {
        setVisibleWords(prev => [...prev, word]);
      }, delay));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  const fadeStyle = (word) => ({
    opacity: visibleWords.includes(word) ? 1 : 0,
    transition: 'opacity 1s ease-out',
    marginRight: '8px',
    color: word === 'Fast.' ? '#8B5CF6' : '#0F0F0F'
  });

  return (
    <div style={{
      width: '100%',
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px 60px',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}>
      {/* N Logo */}
      <img
        src="/nestive-icon-large.png"
        alt="Nestive Logo"
        style={{
          marginTop: '-200px',
          width: '84px',
          height: '84px',
          marginBottom: '20px',
          opacity: showLogo ? 1 : 0,
          transform: showLogo ? 'translateY(0)' : 'translateY(-30px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        }}
      />

      {/* Animated headline */}
      <div style={{ marginBottom: '20px', fontSize: '3rem', fontWeight: 900, lineHeight: 1.2 }}>
        <div>
          {topLine.map((word, i) => (
            <span key={i} style={fadeStyle(word)}>{word}</span>
          ))}
        </div>
        <div>
          {bottomLine.map((word, i) => (
            <span key={i} style={fadeStyle(word)}>{word}</span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link
        to="/free-preview"
        className="btn"
        style={{
          backgroundColor: '#8B5CF6',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '16px',
          padding: '14px 26px',
          borderRadius: '6px',
          textDecoration: 'none',
          marginTop: '10px',
          transition: 'transform 0.2s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        GET STARTED FOR FREE
      </Link>
    </div>
  );
};

export default Home;
