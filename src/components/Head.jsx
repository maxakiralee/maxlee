import React from 'react';
import styles from '../styles/head.module.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
    enter: (direction) => ({
        y: direction > 0 ? '20vh' : direction < 0 ? '-20vh' : '0vh',
        opacity: 0,
    }),
    center: {
        y: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        y: direction < 0 ? '20vh' : direction > 0 ? '-20vh' : '0vh',
        opacity: 0,
    })
};

export default function Head({ title, description, image, url, custom, showButton = true, resetDirection }) {
    const location = useLocation();
    const currentPath = location.pathname;

    const formattedTitle = title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    const handleNavClick = () => {
        resetDirection();
    };

    return (
        <div className={styles.overall}>
            <motion.div className={styles.container}
                custom={custom}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{ type: 'tween', duration: 0.25 }}
            >
                <div className={styles.left}>
                    <div className={styles.leftSpacing}></div>
                    <div className={styles.leftContent}>
                        <motion.h1 className={styles.title}
                            custom={custom}
                            initial="enter"
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: 'tween', duration: 0.3, opacity: { delay: 0.2, duration: 0.5 } }}
                            variants={variants}
                        >
                            <div>
                                {formattedTitle}
                            </div>
                            <div className={styles.period}>.</div>
                        </motion.h1>

                        <motion.div
                            initial={{ x: '-3vw', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.25 }}
                        >
                            <p className={styles.description}>{description}</p>
                            {showButton && (
                                <button className={styles.button}>
                                    <Link to={url}>Home</Link>
                                </button>
                            )}
                        </motion.div>
                    </div>
                </div>

                <div className={styles.right}>
                    <img src={image} alt={title} />
                </div>
            </motion.div>

            <motion.div className={styles.navChannel}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                exit={{ opacity: 0}}
                transition={{ duration: 0.1}}
            >
                {['/', '/about', '/projects', '/experience'].map((path, index) => (
                    <React.Fragment key={index}>
                        {currentPath === path ? (
                            <div className={styles.currentButton}>
                                <motion.div className={styles.currentButtonOuter}
                                    initial={{ opacity: 0, scale: 0}}
                                    animate={{ opacity: 1, scale: 1}}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.25}}
                                >
                                    <Link to={path} className={styles.navButton} onClick={handleNavClick}></Link>
                                </motion.div>
                                <div className={styles.currentButtonInner}>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.currentButton}>
                                <motion.div className={styles.currentButtonOuter}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <Link to={path} className={styles.navButton} onClick={handleNavClick}></Link>
                                </motion.div>
                                <div className={styles.currentButtonInner}>
                                </div>
                            </div>
                        )}
                        {index < 3 && <span className={styles.navLine}></span>}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
}
