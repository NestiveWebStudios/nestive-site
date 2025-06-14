import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import FreePreview from './FreePreview';
import { FaBars } from 'react-icons/fa';
import { FaRedditAlien, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <Router>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#fff'
      }}>
        {/* Navbar */}
        <nav style={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #ddd',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              textDecoration: 'none',
              height: '100px',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
          >
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              {/* N icon */}
              <img
                src="/nestive-favicon-large.png"
                alt="Nestive N Logo"
                style={{ height: '80px', transition: 'transform 0.3s ease-in-out' }}
              />

              {/* Hover-reveal text */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '-4px',
                marginBottom: '-24px',
                opacity: logoHovered ? 1 : 0,
                transform: logoHovered ? 'translateX(-10px)' : 'translateX(-20px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}>
                <span style={{ fontSize: '28px', fontWeight: '800', color: '#0F0F0F' }}>
                  estive<span style={{ color: '#8B5CF6' }}>.</span>
                </span>
                <span style={{
                  fontSize: '14px',
                  fontFamily: `'Caveat', cursive`,
                  color: '#0F0F0F',
                  marginTop: '-10px',
                  marginLeft: '10px'
                }}>
                  Web Studios
                </span>
              </div>
            </div>
          </Link>

          {/* Right Section: Socials + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="social-icons" style={{ display: 'flex', gap: '12px', marginRight: '12px' }}>
              <a href="https://www.tiktok.com/@nestiveweb" target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
                <FaTiktok size={20} />
              </a>
              <a href="https://x.com/nestiveweb" target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
                <FaXTwitter size={20} />
              </a>
              <a href="https://www.reddit.com/user/nestiveweb" target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
                <FaRedditAlien size={20} />
              </a>
              <a href="https://instagram.com/nestiveweb" target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>
                <FaInstagram size={20} />
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#000',
                WebkitTapHighlightColor: 'transparent'
              }}>
              <FaBars size={20} />
            </button>
          </div>

          {menuOpen && (
            <div style={{
              position: 'absolute',
              top: '60px',
              right: '24px',
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              padding: '10px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              zIndex: 10
            }}>
              <Link to="/" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#0F0F0F', fontWeight: 'bold' }}>Home</Link>
              <Link to="/free-preview" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#0F0F0F', fontWeight: 'bold' }}>Free Preview</Link>
              <a href="mailto:support@nestiveweb.com" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', color: '#0F0F0F', fontWeight: 'bold' }}>Contact</a>
            </div>
          )}
        </nav>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/free-preview" element={<FreePreview />} />
          </Routes>
        </div>

        <Footer />
      </div>

      {/* Hide socials on mobile */}
      <style>{`
        @media (max-width: 640px) {
          .social-icons {
            display: none;
          }
        }
      `}</style>
    </Router>
  );
};

export default App;