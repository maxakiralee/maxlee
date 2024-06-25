// index.js
import React from 'react';
import {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import App0 from './App0';
import App2 from './App2';
import './styles/index.css';

const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));
const Projects = React.lazy(() => import('./routes/Projects'));
const Experience = React.lazy(() => import('./routes/Experience'));

const Nav = React.lazy(() => import('./routes/Nav'));

const AboutHead = React.lazy(() => import('./routes/about/AboutHead'));
const AboutInfo = React.lazy(() => import('./routes/about/AboutInfo'));
const AboutContact = React.lazy(() => import('./routes/about/AboutContact'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/nav/*" element={<App0 />} />
          <Route caseSensitive path="/About/*" element={<App2 />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>,
);
