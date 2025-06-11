import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Upgrade from './Upgrade';
import UpgradeDetails from './UpgradeDetails';

const App = () => {
  return (
    <Router>
      <nav style={{ padding: '20px', backgroundColor: '#000' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
        <Link to="/upgrade" style={{ color: 'white', marginRight: '20px' }}>Upgrade</Link>
        <a href="mailto:support@nestiveweb.com" style={{ color: 'white' }}>Contact</a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/upgrade-details" element={<UpgradeDetails />} />
      </Routes>

      <footer style={{
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        fontSize: '14px',
        color: '#555'
      }}>
        &copy; 2025 Nestive Web Studios — All rights reserved. |{' '}
        <a href="mailto:support@nestiveweb.com" style={{ color: '#555' }}>
          support@nestiveweb.com
        </a>
      </footer>
    </Router>
  );
};



export default App;
