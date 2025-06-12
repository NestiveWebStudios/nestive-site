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
          padding: '10px 20px', // Added vertical padding
          backgroundColor: '#8B5CF6',
          borderBottom: '5px solid #000',
          borderTop: '5px solid #000',
          boxSizing: 'border-box',
          position: 'relative'
        }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/nestive-transparent-logo.png"
              alt="Nestive Logo"
              className="nav-logo"
            />
          </Link>

          {/* Quote Centered in Banner */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontWeight: 'bold',
            color: '#000',
            fontSize: '1rem',
            whiteSpace: 'nowrap'
          }}>
            Launch fast. Look great. Stress less.
          </div>

          {/* Social + Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://x.com/nestiveweb"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#fff'}
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://www.reddit.com/user/nestiveweb"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#fff'}
              >
                <FaRedditAlien size={20} />
              </a>
              <a
                href="https://instagram.com/nestiveweb"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#fff'}
              >
                <FaInstagram size={20} />
              </a>
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link to="/" style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: '#fff',
                borderLeft: '2px solid #000',
                paddingLeft: '10px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color = '#ddd'}
              onMouseLeave={e => e.target.style.color = '#fff'}
              >
                Home
              </Link>
              <Link to="/upgrade-details" style={{
                textDecoration: 'none',
                borderLeft: '2px solid #000',
                borderRight: '2px solid #000',
                padding: '0 10px',
                fontWeight: 'bold',
                color: '#fff',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color = '#ddd'}
              onMouseLeave={e => e.target.style.color = '#fff'}
              >
                Launch My Site
              </Link>
              <a
                href="mailto:support@nestiveweb.com"
                style={{
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: '#fff',
                  borderRight: '2px solid #000',
                  paddingRight: '10px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={e => e.target.style.color = '#ddd'}
                onMouseLeave={e => e.target.style.color = '#fff'}
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