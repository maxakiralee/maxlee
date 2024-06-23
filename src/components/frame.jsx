// Frame.js
import React, {Button} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/frame.module.css';
import background from '../assets/background.jpg';

const Frame = () => {

  const handleClick = () => {
    window.location.href = '/experience';
  };

  return (
    <div className={styles.container}>
      <img src={background} alt="image corrupted" className={styles.image} />
      <button onClick={handleClick}>
        {/*<img src={<url>} alt=<alt-string> width=<width> height=<height> onClick={() => handleClick}/>*/}
        Frame abutton HERE
      </button>
    </div>
  );
};

export default Frame;
