// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing global styles
import App from './App';
import './styles/GlobalStyles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);