import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Upgrade from './Upgrade';
import UpgradeDetails from './UpgradeDetails';
import Footer from './Footer';

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
          padding: '0 20px',
          backgroundColor: '#8B5CF6',
          borderBottom: '5px solid #000',
          height: '80px',
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

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/" style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#fff'
            }}>
              Home
            </Link>
            <Link to="/upgrade-details" style={{
              textDecoration: 'none',
              borderLeft: '2px solid #000',
              borderRight: '2px solid #000',
              padding: '0 10px',
              fontWeight: 'bold',
              color: '#fff'
            }}>
              Launch My Site
            </Link>
            <a href="mailto:support@nestiveweb.com" style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#fff'
            }}>
              Contact
            </a>
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
