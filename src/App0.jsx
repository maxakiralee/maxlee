import React, { useEffect, Suspense, useState } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';

const Nav = React.lazy(() => import('./routes/Nav'));
import NavFrame from './components/NavFrame';
import NavButton from './components/NavButton';
import './styles/App.css';

const App = () => {

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
    };

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []); 

  return (
    <div className="grid"> 
      <div className="gridBackground"> 
        <NavFrame/>
      </div>
      <div className='gridFront'>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Nav />} />
            </Routes>
        </Suspense>
      </div>
      <div className='gridButton'>
        <NavButton/>
      </div>
    </div>
  );
};

export default App;
