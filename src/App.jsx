import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Upgrade from './Upgrade';
import UpgradeDetails from './UpgradeDetails';

const App = () => {
  return (
    <Router>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '0px',
        paddingRight: '20px',
        backgroundColor: 'black',
        height: '80px',
        overflow: 'hidden'
      }}>
        {/* Logo on the left */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/nestive-transparent-logo.png"
            alt="Nestive Logo"
            style={{ width: '50vw', height: 'auto', marginRight: '10px' }}
          />
        </Link>

        {/* Navigation on the right */}
        <div>
          <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/upgrade" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>
            Upgrade
          </Link>
          <a
            href="mailto:support@nestiveweb.com"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Contact
          </a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/upgrade-details" element={<UpgradeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
