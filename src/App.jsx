import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import FreePreview from './FreePreview';
import { FaBars } from 'react-icons/fa';
import { FaRedditAlien, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/nestive-icon.png" alt="Nestive Logo" style={{ height: '30px' }} />
            <span style={{ fontWeight: '700', fontSize: '1rem', color: '#000' }}>NESTIVE</span>
          </Link>

          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <FaBars size={20} />
          </button>

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
              gap: '10px'
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

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
