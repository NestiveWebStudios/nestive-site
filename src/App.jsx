import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Upgrade from './Upgrade';
import UpgradeDetails from './UpgradeDetails';
import Footer from './Footer';
import { FaXTwitter, FaRedditAlien, FaInstagram } from 'react-icons/fa6';

const App = () => {
  return (
    <Router>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'inherit',
        fontFamily: "'Urbanist', sans-serif"
      }}>
        <nav style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          backgroundColor: '#8B5CF6',
          borderBottom: '5px solid #000',
          borderTop: '5px solid #000',
          boxSizing: 'border-box',
          position: 'relative'
        }}>
          {/* Logo + Quote block */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="/nestive-transparent-logo.png"
                alt="Nestive Logo"
                className="nav-logo"
              />
            </Link>

            {/* Quote below the logo */}
            <div className="quote" style={{
              fontWeight: 'bold',
              color: '#000',
              fontSize: '1rem',
              whiteSpace: 'nowrap',
              marginTop: '5px'
            }}>
              Launch <span style={{ color: '#E7E47C' }}>fast.</span>{' '}
              Look <span style={{ color: '#E7E47C' }}>great.</span>{' '}
              Stress <span style={{ color: '#E7E47C' }}>less.</span>
            </div>
          </div>

          {/* Social + Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', height: '100%' }}>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://x.com/nestiveweb"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#E7E47C', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#E7E47C'}
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://www.reddit.com/user/nestiveweb"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#E7E47C', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#E7E47C'}
              >
                <FaRedditAlien size={20} />
              </a>
              <a
                href="https://instagram.com/nestiveweb"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#E7E47C', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#E7E47C'}
              >
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Navigation Links */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              height: '100%'
            }}>
              {/* Home Link */}
              <Link to="/" style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: '#E7E47C',
                borderLeft: '2px solid #000',
                padding: '6px 10px',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                height: '100%'
              }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#E7E47C'}
              >
                Home
              </Link>

              {/* Launch My Site */}
              <Link to="/upgrade-details" style={{
                textDecoration: 'none',
                borderLeft: '2px solid #000',
                borderRight: '2px solid #000',
                padding: '6px 14px',
                minWidth: '85px',
                fontWeight: 'bold',
                color: '#E7E47C',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                transition: 'color 0.2s'
              }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#E7E47C'}
              >
                Launch My<br />Site
              </Link>

              {/* Contact Link */}
              <a
                href="mailto:support@nestiveweb.com"
                style={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: '#E7E47C',
                  borderRight: '2px solid #000',
                  padding: '6px 10px',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%'
                }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#E7E47C'}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/upgrade-details" element={<UpgradeDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;