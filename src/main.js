import "./style.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure this matches your file name
import './style.css'; // Optional but good to keep if you already have it

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);