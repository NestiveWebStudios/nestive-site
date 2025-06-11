import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Upgrade from './Upgrade';

const App = () => {
  return (
    <Router>
      <nav style={{ padding: '20px', backgroundColor: '#000' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
        <Link to="/upgrade" style={{ color: 'white' }}>Upgrade</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </Router>
  );
};

export default App;