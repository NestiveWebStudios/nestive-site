import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showN, setShowN] = useState(false);
  const [showEstive, setShowEstive] = useState(false);
  const [showWebStudios, setShowWebStudios] = useState(false);
  const [visibleWords, setVisibleWords] = useState([]);

  const topLine = ['Websites', 'that'];
  const bottomLine = ['Work.', 'Fast.'];

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setShowN(true), 100));
    timers.push(setTimeout(() => setShowEstive(true), 900));
    timers.push(setTimeout(() => setShowWebStudios(true), 1300));

    [...topLine, ...bottomLine].forEach((word, i) => {
      const delay = 1700 + i * 350 + (word === 'Fast.' ? 400 : 0);
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
      minHeight: 'calc(100vh - 240px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 10px 20px',
      textAlign: 'center',
      backgroundColor: '#fff',
    }}>

      {/* Animated Nestive Logo */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/nestive-favicon-large.png"
            alt="N icon"
            style={{
              width: '72px',
              height: '72px',
              transform: showN ? 'translateY(0)' : 'translateY(-30px)',
              opacity: showN ? 1 : 0,
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
              marginRight: showEstive ? '2px' : '0',
              transitionDelay: '0.1s',
            }}
          />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontSize: '40px',
              fontWeight: 800,
              color: '#0F0F0F',
              opacity: showEstive ? 1 : 0,
              transform: showEstive ? 'translateX(0)' : 'translateX(-4px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s',
              paddingBottom: '0px'
            }}>
              estive<span style={{ color: '#8B5CF6', right: '1px' }}>.</span>
            </span>

            {/* Web Studios aligned under right side */}
            <span style={{
              position: 'absolute',
              top: '36px',
              
              right: '2px',
              fontSize: '16px',
              fontFamily: `'Caveat', cursive`,
              color: '#0F0F0F',
              opacity: showWebStudios ? 1 : 0,
              transform: showWebStudios ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'all 0.6s ease-out'
            }}>
              Web Studios
            </span>
          </div>
        </div>
      </div>

      {/* Headline */}
      <div style={{ marginBottom: '20px', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.1 }}>
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
          padding: '12px 22px',
          borderRadius: '6px',
          textDecoration: 'none',
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
