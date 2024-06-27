// index.js
import React from 'react';
import {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import App0 from './App0';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/nav/*" element={<App0 />} />
          <Route caseSensitive path="/About/*" element={<App2 />} />
          <Route caseSensitive path="/Projects/*" element={<App3 />} />
          <Route caseSensitive path="/Experience/*" element={<App4 />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>,
);
