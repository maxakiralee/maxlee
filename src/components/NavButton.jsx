// NavButton.js

import React, { useEffect } from 'react';
import styles from '../styles/navButton.module.css';
import { motion } from 'framer-motion';

const NavButton = () => {

  const handleClick = () => {
    window.location.href = '/nav';
  };

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ rotateZ: 0}}
        animate={{ rotateZ: 180}}
        exit={{ rotateZ: 0}}
        transition={{ duration: 0.5}}
      >
        <button onClick={handleClick}>
          {/* Use CSS to create a plus sign icon */}
          <span className={styles.plusIcon}></span>
        </button>
      </motion.div>
    </div>
  );
};

export default NavButton;
