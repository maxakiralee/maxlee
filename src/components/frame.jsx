import React, { useEffect, useRef } from 'react';
import styles from '../styles/frame.module.css';
import background from '../assets/image.png';

const Frame = () => {
  return (
    <div className={styles.container}>
      <img 
        src={background} 
        alt="" 
        className={styles.backgroundImage} 
      />
    </div>
  );
};

export default Frame;