import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import FreePreview from './FreePreview';
import { FaBars } from 'react-icons/fa';
import { FaRedditAlien, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Controls dropdown menu visibility
  const [logoHovered, setLogoHovered] = useState(false); // Controls hover animation of logo
  const menuRef = useRef(null); // Ref for detecting clicks outside of menu

  // Closes the dropdown menu when you click anywhere outside it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Router>
      <div style={{
        display: 'flex', // Main layout is flex column
        flexDirection: 'column',
        minHeight: '100vh', // Full viewport height
        backgroundColor: '#fff'
      }}>

        {/* NAVIGATION BAR */}
        <nav style={{
          backgroundColor: '#fff',
          borderBottom: '1px solid #ddd',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}>

          {/* LOGO SECTION */}
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/nestive-favicon-large.png"
                alt="Nestive N Logo"
                style={{ height: '72px', transition: 'transform 0.3s ease-in-out' }}
              />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                right: '15px',
                marginBottom: 'px',
                opacity: logoHovered ? 1 : 0,
                transform: logoHovered ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}>
                <span style={{ fontSize: '36px', fontWeight: '800', color: '#0F0F0F', marginLeft: '2px', marginBottom: '6px' }}>
                  estive<span style={{ color: '#8B5CF6' }}>.</span>
                </span>
                <span style={{
                  position: 'absolute',
                  top: '32px',
                  right: '4px',
                  fontSize: '16px',
                  fontFamily: `'Caveat', cursive`,
                  color: '#0F0F0F'
                }}>
                  Web Studios
                </span>
              </div>
            </div>
          </Link>

          {/* SOCIAL ICONS + HAMBURGER BUTTON */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="social-icons" style={{ display: 'flex', gap: '12px', marginRight: '12px' }}>
              {[
                { href: "https://www.tiktok.com/@nestiveweb", icon: <FaTiktok size={20} /> },
                { href: "https://x.com/nestiveweb", icon: <FaXTwitter size={20} /> },
                { href: "https://www.reddit.com/user/nestiveweb", icon: <FaRedditAlien size={20} /> },
                { href: "https://instagram.com/nestiveweb", icon: <FaInstagram size={20} /> },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#000' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#8B5CF6'}
                  onMouseLeave={e => e.currentTarget.style.color = '#000'}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* MENU BUTTON (hamburger) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              onMouseEnter={() => setMenuOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#000',
                WebkitTapHighlightColor: 'transparent'
              }}
              onMouseOver={e => e.currentTarget.style.color = '#8B5CF6'}
              onMouseOut={e => e.currentTarget.style.color = '#000'}
            >
              <FaBars size={20} />
            </button>
          </div>

          {/* DROPDOWN MENU CONTENT */}
          {menuOpen && (
            <div
              ref={menuRef}
              style={{
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
              }}
            >
              {[{
                label: 'Home', to: '/'
              }, {
                label: 'Free Preview', to: '/free-preview'
              }].map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: '#0F0F0F',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#8B5CF6'}
                  onMouseLeave={e => e.currentTarget.style.color = '#0F0F0F'}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:support@nestiveweb.com"
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: '#0F0F0F',
                  fontWeight: 'bold'
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#8B5CF6'}
                onMouseLeave={e => e.currentTarget.style.color = '#0F0F0F'}
              >
                Contact
              </a>
            </div>
          )}
        </nav>

        {/* PAGE CONTENT */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/free-preview" element={<FreePreview />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>

      {/* MEDIA QUERY: Hide social icons on mobile */}
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
