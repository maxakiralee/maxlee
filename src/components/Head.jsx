import React from 'react';
import styles from '../styles/head.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
    enter: (direction) => {
        return {
            y: direction > 0 ? '20vh' : '-20vh',
            opacity: 0,
        };
    },
    center: {
        y: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            y: direction < 0 ? '20vh' : '-20vh',
            opacity: 0,
        };
    }
};

export default function Head({ title, description, image, url, custom }) {

    const formattedTitle = title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <motion.div className={styles.container}
            custom={custom}
            animate="center"
            transition={{ type: 'tween', duration: 0.25 }}
            exit="exit"
            variants={variants}
        >
            <div className={styles.left}>
                <div className={styles.leftSpacing}>
                    
                </div>
                <div className={styles.leftContent}>
                <motion.h1 className={styles.title}
                    custom={custom}
                    initial="enter"
                    animate={{y: 0, opacity: 1}}
                    transition={{type: 'tween', duration: 0.3, opacity: {delay: 0.2, duration: 0.5}}}
                    variants={variants}
                >
                    <div>
                        {formattedTitle}
                    </div>
                    <div className={styles.period}>
                        .
                    </div>
                </motion.h1>

                <motion.div
                    initial={{x: '-3vw', opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.2, delay: 0.25}}
                >
                    <p className={styles.description}>{description}</p>
                    <button className={styles.button}>
                        <Link to={url}>Home</Link>
                    </button>
                </motion.div>
                </div>
            </div>

            <div className={styles.right}>
                <img src={image} alt={title} />
            </div>
        </motion.div>
    );
}
