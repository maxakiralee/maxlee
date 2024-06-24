import React from 'react';
import styles from '../styles/head.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Nav() {
    return (

        <motion.div className={styles.container}
            initial={{opacity: 0, y: 0}}
            animate={{opacity: 1, y: 0}}
            transition={{ type: 'tween', delay: 1 }}
        >
            <Link to='/'>Home</Link>
            <Link to='/about'>Home</Link>
            <Link to='/projects'>Home</Link>
            <Link to='/experience'>Home</Link>
        </motion.div>
    );
}
