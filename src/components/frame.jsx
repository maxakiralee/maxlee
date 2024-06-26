import React, { useEffect, useRef } from 'react';
import styles from '../styles/frame.module.css';
import anime from 'animejs/lib/anime.es.js';
import svgPath from '../assets/frame.svg';
import svgPath2 from '../assets/HiImMax.svg';
import { ReactSVG } from 'react-svg';

const Frame = () => {
  const svgRef = useRef(null);
  const animationRef = useRef(null);

  const runAnimation = () => {
    if (svgRef.current) {
      if (animationRef.current) {
        animationRef.current.pause();
      }
      animationRef.current = anime({
        targets: svgRef.current.querySelectorAll('path'),
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: 0, // (el, i) => i * 50,
        direction: 'alternate',
        loop: true,
      });
    }
  };

  useEffect(() => {
    // Adding a slight delay to ensure the DOM elements are fully available
    const timer = setTimeout(() => {
      runAnimation();
    }, 5);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div ref={svgRef}>
        <ReactSVG src={svgPath} />
      </div>
    </div>
  );
};

export default Frame;
