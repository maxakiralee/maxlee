import React, { useEffect, Suspense, useState } from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Home = React.lazy(() => import('./routes/Home'));
const About = React.lazy(() => import('./routes/About'));
const Projects = React.lazy(() => import('./routes/Projects'));
const Experience = React.lazy(() => import('./routes/Experience'));
import Frame from './components/frame';
import './styles/App.css'

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrollingAllowed, setIsScrollingAllowed] = useState(true);
  const [isKeyPressAllowed, setIsKeyPressAllowed] = useState(true);

  const pages = ['/', '/about', '/projects', '/experience'];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isKeyPressAllowed) return;

      const currentIndex = pages.indexOf(location.pathname);
      if (event.key === 'ArrowDown') {
        const nextPage = pages[(currentIndex + 1) % pages.length];
        navigate(nextPage);
      } else if (event.key === 'ArrowUp') {
        const prevPage = pages[(currentIndex - 1 + pages.length) % pages.length];
        navigate(prevPage);
      }

      setIsKeyPressAllowed(false);
      setTimeout(() => {
        setIsKeyPressAllowed(true);
      }, 2500); // Set delay to 2000 ms
    };

    const handleScroll = (event) => {
      event.preventDefault(); // Prevent the default scrolling behavior

      if (!isScrollingAllowed) return;

      const deltaY = event.deltaY;
      const currentIndex = pages.indexOf(location.pathname);
      if (deltaY > 0) {
        const nextPage = pages[(currentIndex + 1) % pages.length];
        navigate(nextPage);
      } else if (deltaY < 0) {
        const prevPage = pages[(currentIndex - 1 + pages.length) % pages.length];
        navigate(prevPage);
      }

      setIsScrollingAllowed(false);
      setTimeout(() => {
        setIsScrollingAllowed(true);
      }, 2500); // Set delay to 2000 ms
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
        <Frame/>
      </div>
      <div className='gridFront'>
        <Suspense fallback={<div>Loading...</div>}>
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
