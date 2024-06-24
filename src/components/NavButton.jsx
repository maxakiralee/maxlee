import React from 'react';
import styles from '../styles/navButton.module.css';

const NavButton = () => {

  const handleClick = () => {
    window.location.href = '/nav';
  };

  return (
    <div className={styles.container}>
        <button onClick={handleClick}>
          {/*<img src={<url>} alt=<alt-string> width=<width> height=<height> onClick={() => handleClick}/>*/}
          nav button HERE
        </button>
      </div>
  );
};

export default NavButton;
