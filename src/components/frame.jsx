import React from 'react';
import styles from '../styles/frame.module.css';
import background2 from '../assets/background2.png';

const Frame = () => {
  return (
    <div className={styles.container}>
        <img src={background2} alt="image corrupted" className={styles.image} />
    </div>
  );
};

export default Frame;
