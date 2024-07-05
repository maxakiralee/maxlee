import React, { useEffect, useRef } from 'react';
import styles from '../styles/frame.module.css';
import background from '../assets/image.png';

const Frame = () => {
  return (
    <div className={styles.container}>
      <img 
        src={background} 
        alt="" 
        style={{ 
          width: '100vw', 
          height: '100vh', 
          objectFit: 'cover',
          position: 'absolute', 
          top: 0, 
          left: 0 
        }} 
      />
    </div>
  );
};

export default Frame;
