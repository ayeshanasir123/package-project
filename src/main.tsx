// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Path to your App component

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Router>
    <App />
  </Router>
);
