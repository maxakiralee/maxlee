// Frame.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/frame.module.css';
import background from '../assets/background.jpg';

const Frame = () => {
  return (
    <div className={styles.container}>
      <img src={background} alt="image corrupted" className={styles.image} />
    </div>
  );
};

export default Frame;
