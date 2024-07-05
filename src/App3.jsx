import React, { useEffect, Suspense, useState } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Projects1 = React.lazy(() => import('./routes/projects/Projects1'));
const Projects2 = React.lazy(() => import('./routes/projects/Projects2'));
const Projects3 = React.lazy(() => import('./routes/projects/Projects3'));

import Frame from './components/frame';
import NavButton from './components/NavButton';
import './styles/App.css';

const App2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrollingAllowed, setIsScrollingAllowed] = useState(true);
  const [isKeyPressAllowed, setIsKeyPressAllowed] = useState(true);
  const [direction, setDirection] = useState(0);

  const pages = ['/Projects/1', '/Projects/2', '/Projects/3'];

  useEffect(() => {
    const handleKeyDown = (event) => {
      event.preventDefault();
      if (!isKeyPressAllowed) return;

      const currentIndex = pages.indexOf(location.pathname);
      if (event.key === 'ArrowDown') {
        if (currentIndex < pages.length - 1) {
          const nextPage = pages[currentIndex + 1];
          navigate(nextPage);
          setDirection(1);
        }
      } else if (event.key === 'ArrowUp') {
        if (currentIndex > 0) {
          const prevPage = pages[currentIndex - 1];
          navigate(prevPage);
          setDirection(-1);
        }
      }

      setIsKeyPressAllowed(false);
      setTimeout(() => {
        setIsKeyPressAllowed(true);
      }, 500); // Set delay to 1000 ms
    };

    const handleScroll = (event) => {
      event.preventDefault(); // Prevent the default scrolling behavior

      if (!isScrollingAllowed) return;

      const deltaY = event.deltaY;
      const currentIndex = pages.indexOf(location.pathname);
      if (deltaY > 0) {
        if (currentIndex < pages.length - 1) {
          const nextPage = pages[currentIndex + 1];
          navigate(nextPage);
          setDirection(1);
        }
      } else if (deltaY < 0) {
        if (currentIndex > 0) {
          const prevPage = pages[currentIndex - 1];
          navigate(prevPage);
          setDirection(-1);
        }
      }

      setIsScrollingAllowed(false);
      setTimeout(() => {
        setIsScrollingAllowed(true);
      }, 1000); // Set delay to 1400 ms
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [location.pathname, navigate, pages, isScrollingAllowed, isKeyPressAllowed]);

  return (
    <div className="grid"> 
      <div className="gridBackground"> 
        <Frame /> 
      </div>
      <div className="gridFront">
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence mode='wait' custom={direction}>
            <Routes location={location} key={location.key}>
              <Route path="/1" element={<Projects1 custom={direction} />} />
              <Route path="/2" element={<Projects2 custom={direction} />} />
              <Route path="/3" element={<Projects3 custom={direction} />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
      <div className='gridButton'>
        <NavButton/>
      </div>
    </div>
  );
};

export default App2;
