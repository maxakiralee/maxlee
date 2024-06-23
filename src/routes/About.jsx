import React from 'react';
import Head from '../components/Head';

const About = () => {
    return (
        <div>
            <Head 
                title="about" 
                description="Check out our about here." 
                image="/path/to/your/image.jpg" 
                url="/aboutHead/head" 
            />
        </div>
    );
};

export default About;


/*
import React, { useEffect, Suspense, useState } from 'react';
import { Routes, Route, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

import Head from '../components/Head';

const AboutHead = React.lazy(() => import('./about/AboutHead'));
const AboutInfo = React.lazy(() => import('./about/AboutInfo'));
const AboutContact = React.lazy(() => import('./about/AboutContact'));

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isKeyPressAllowed, setIsKeyPressAllowed] = useState(true);

  const pages = ['/about/head', '/about/info', '/about/contact'];

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
      }, 2500); // Set delay to 2500 ms
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [location.pathname, navigate, isKeyPressAllowed, pages]);

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="head">About Head</Link></li>
          <li><Link to="info">About Info</Link></li>
          <li><Link to="contact">About Contact</Link></li>
        </ul>
      </nav>

      <Head 
        title="About" 
        description="Check out our about PAGEGEGE here." 
        image="/path/to/your/image.jpg" 
        url="/" 
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default About;
*/