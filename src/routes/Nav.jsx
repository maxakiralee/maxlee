import React from 'react';
import styles from '../styles/nav.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Nav() {
    return (

        <motion.div className={styles.container}
            initial={{opacity: 0, y: 0}}
            animate={{opacity: 1, y: 0}}
            transition={{ type: 'tween'}}
        >
            <div>
                <Link to='/'>HOME</Link>
            </div>
            <div>
                <Link to='/About/'>ABOUT</Link>
            </div>
            <div>
                <Link to='/Projects'>PROJECTS</Link>
            </div>
            <div>
                <Link to='/Experience'>EXPERIENCE</Link>
            </div>
            <div>
                <Link to='/Resume'>RESUME</Link>
            </div>
        </motion.div>
    );
}
