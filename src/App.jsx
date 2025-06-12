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
        fontFamily: "'Urbanist', sans-serif" // Ensure fallback to Urbanist if style.css fails
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '0px',
          paddingRight: '20px',
          backgroundColor: '#8B5CF6',
          borderBottom: '5px solid #000',
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
              marginRight: '10px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}>
              Home
            </Link>
            <Link to="/upgrade" style={{
              marginRight: '10px',
              textDecoration: 'none',
              borderLeft: '2px solid #000',
              borderRight: '2px solid #000',
              paddingRight: '10px',
              paddingLeft: '10px',
              fontWeight: 'bold'
            }}>
              Upgrade
            </Link>
            <a href="mailto:support@nestiveweb.com" style={{
              textDecoration: 'none',
              fontWeight: 'bold'
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
