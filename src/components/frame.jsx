// Frame.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/frame.module.css';

const Frame = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Frame;
