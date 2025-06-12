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
        backgroundColor: '#EDE9FE' // Matches footer and global theme
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '0px',
          paddingRight: '20px',
          backgroundColor: '#8B5CF6',
          height: '80px',
          overflow: 'hidden'
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/nestive-transparent-logo.png"
              alt="Nestive Logo"
              style={{
                height: '100%',
                width: 'auto',
                maxWidth: '33%',
                objectFit: 'contain',
                marginRight: '10px'
              }}
            />
          </Link>

          <div>
            <Link to="/" style={{
              color: '#1e293b',
              marginRight: '20px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Home
            </Link>
            <Link to="/upgrade" style={{
              color: '#1e293b',
              marginRight: '20px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Upgrade
            </Link>
            <a href="mailto:support@nestiveweb.com" style={{
              color: '#1e293b',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Contact
            </a>
          </div>
        </nav>

        {/* Main page content expands to fill remaining space */}
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