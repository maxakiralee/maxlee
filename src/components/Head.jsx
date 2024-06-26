import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import styles from '../styles/head.module.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';

const getVerticalPosition = (direction) => {
    if (direction > 0) return '20vh';
    if (direction < 0) return '-20vh';
    return '0vh';
};

const drawVariant = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 0 }
};

export default function Head({ svgPath, svgFill, description, image, url, custom, showButton = true, resetDirection }) {
    const location = useLocation();
    const currentPath = location.pathname;
    const svgRef = useRef(null);

    const handleNavClick = () => {
        resetDirection();
    };

    const runAnimation = () => {
        if (svgRef.current) {
            anime({
                targets: svgRef.current.querySelectorAll('path'),
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 500,
                delay: 0 /* (el, i) => i * 50 */,
                direction: 'forward',
                loop: false
            });
        }
    };

    useEffect(() => {
        // Adding a slight delay to ensure the DOM elements are fully available
        const timer = setTimeout(() => {
            runAnimation();
        }, 5);

        return () => clearTimeout(timer);
    }, [currentPath]);

    return (
        <div className={styles.overall}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.leftSpacing}></div>
                    <div className={styles.leftContent}>
                        <h1 className={styles.title}>
                            <div className={styles.titleGrid}>
                                <motion.div className={styles.titleOutline}
                                    custom={custom}
                                    initial={{ y: getVerticalPosition(custom), opacity: 1 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: getVerticalPosition(custom), opacity: 0, transition: { opacity: { delay: 0, duration: 0.2 } } }}
                                    transition={{ type: 'tween', duration: 0.25}}
                                >
                                    <div ref={svgRef}>
                                        <ReactSVG src={svgPath} />
                                    </div>
                                </motion.div>
                                <motion.div className={styles.titleFill}
                                    custom={custom}
                                    initial={{ y: getVerticalPosition(custom), opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: getVerticalPosition(custom), opacity: 0, transition: { opacity: { delay: 0, duration: 0.25 } } }}
                                    transition={{ type: 'tween', duration: 0.25, opacity: { delay: 0.4, duration: 0.25 } }}
                                >
                                    <ReactSVG src={svgFill} />
                                </motion.div>
                            </div>
                            <motion.div
                                custom={custom}
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: getVerticalPosition(custom), opacity: 0, transition: { opacity: { duration: 0.25, delay: 0 } } }}
                                transition={{ type: 'tween', duration: 0.25, opacity: { delay: 0.6, duration: 0.25 } }}
                            >
                                <p className={styles.period}>.</p>
                            </motion.div>
                        </h1>

                        <motion.div
                            custom={custom}
                            initial={{ x: '-3vw', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ y: getVerticalPosition(custom), opacity: 0, transition: { duration: 0.25, delay: 0 } }}
                            transition={{ duration: 0.35, delay: 0.4 }}
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

                <motion.div className={styles.right}>
                    <p> COOL STUFF HERE </p>
                </motion.div>
            </div>

            <motion.div className={styles.navChannel}
                initial={{ x: '-3vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.25, delay: 0 } }}
                transition={{ duration: 0.35, delay: 0.4 }}
            >
                {['/', '/about', '/projects', '/experience'].map((path, index) => (
                    <React.Fragment key={index}>
                        {currentPath === path ? (
                            <div className={styles.currentButton}>
                                <motion.div className={styles.currentButtonOuter}
                                    initial={{ x: 0, opacity: 1, scale: 0 }}
                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.25, delay: 0, opacity: { delay: 0, duration: 0.25 } }, scale: { delay: 0, duration: 0.25 } }}
                                    transition={{ duration: 0.25, delay: 0.35, opacity: { delay: 0.6, duration: 0.25 }, scale: { delay: 0.6, duration: 0.25 } }}
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
