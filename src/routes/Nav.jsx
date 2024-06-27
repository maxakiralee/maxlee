import React from 'react';
import styles from '../styles/nav.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Nav() {
    return (

        <motion.div className={styles.container}
            initial={{x: '-3vw', opacity: 0, y: 0}}
            animate={{x: 0, opacity: 1, y: 0}}
            transition={{ type: 'tween', duration: 0.3, delay: 0.2 }}
        >
            <div className={styles.button}>
                <div className={styles.buttonLink}>
                    <Link to='/' style={{textDecoration: 'none', color: 'black' }}>HOME</Link>
                </div>
            </div>

            <div className={styles.button}>
                <div className={styles.buttonLink}>
                    <Link to='/about' style={{textDecoration: 'none', color: 'black' }}>ABOUT</Link>
                </div>
            </div>

            <div className={styles.button}>
                <div className={styles.buttonLink}>
                    <Link to='/projects' style={{textDecoration: 'none', color: 'black' }}>PROJECTS</Link>
                </div>
            </div>

            <div className={styles.button}>
                <div className={styles.buttonLink}>
                    <Link to='/experience' style={{textDecoration: 'none', color: 'black' }}>EXPERIENCE</Link>
                </div>
            </div>

            <div className={styles.button}>
                <div className={styles.buttonLink}>
                    <Link to='/resume' style={{textDecoration: 'none', color: 'black' }}>RESUME</Link>
                </div>
            </div>

        </motion.div>
    );
}
