import React from 'react';
import styles from '../styles/head.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: '100vw' 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'inertia' }
    },
    exit: {
      y: "-100vh",
      transition: { ease: 'easeInOut' }
    }
  };

export default function Head({ title, description, image, url }) {
    return (
        <motion.div className={styles.container}
            initial={{ opacity: 0, y: '50vh' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'Inertia', duration: 0.5 }}
            exit={{ opacity: 0, y:'-50vh'}}
        >
            <div className={styles.left}>
                <h1>{title}</h1>
                <motion.div
                
                >
                    <p>{description}</p>
                    <li>
                        <Link to={url}>Home</Link>
                    </li>
                </motion.div>
            </div>
            
            <div className={styles.right}>
                <img src={image} alt={title} />
            </div>
        </motion.div>
    );
}
