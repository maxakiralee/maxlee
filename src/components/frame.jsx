import React, { useEffect, useRef } from 'react';
import styles from '../styles/frame.module.css';
import anime from 'animejs/lib/anime.es.js';
import svgPath from '../assets/frameSignature.svg';
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
        easing: 'cubicBezier(0.325, 0.095, 0.865, -0.225)',
        duration: 5000,
        delay: 0,
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
          <ReactSVG
            src={svgPath}
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 100vw; height: 99.37vh;');
            }}
        />
      </div>
    </div>
  );
};

export default Frame;
