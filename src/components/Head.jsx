import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import styles from '../styles/head.module.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ReactSVG } from 'react-svg';


const titleOutlineVariant = {
    enter: (direction) => ({
        y: direction > 0 ? '20vh' : direction < 0 ? '-20vh' : '0vh',
        opacity: 1,
    }),
    exit: (direction) => ({
        y: direction < 0 ? '20vh' : direction > 0 ? '-20vh' : '0vh',
        opacity: 0, 
        transition: { opacity: { delay: 0, duration: 0.2 } },
    })
};
const titleFillVariant = {
    enter: (direction) => ({
        y: direction > 0 ? '20vh' : direction < 0 ? '-20vh' : '0vh',
        opacity: 0,
    }),
    exit: (direction) => ({
        y: direction < 0 ? '20vh' : direction > 0 ? '-20vh' : '0vh',
        opacity: 0, 
        transition: { opacity: { delay: 0, duration: 0.25 } },
    })
};

const drawVariant = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 }
};

export default function Head({ svgPath: SvgPath, svgFill, description, url, custom, showButton = true, resetDirection, imagePath: ImagePath }) {
    const location = useLocation();
    const currentPath = location.pathname;
    const svgRef = useRef(null);

    const handleNavClick = () => {
        resetDirection();
    };

    return (
        <div className={styles.overall}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.leftSpacing}></div>
                    <div className={styles.leftContent}>
                        <div className={styles.title}>
                            <div className={styles.titleGrid}>
                                <motion.div className={styles.titleOutline}
                                    custom={custom}
                                    variants={titleOutlineVariant}
                                    initial='enter'
                                    animate={{ y: 0, opacity: 1 }}
                                    exit='exit'
                                    transition={{ type: 'tween', duration: 0.25}}
                                >
                                    <div>
                                        <SvgPath/>
                                    </div>
                                </motion.div>
                                <motion.div className={styles.titleFill}
                                    custom={custom}
                                    variants={titleFillVariant}
                                    initial='enter'
                                    animate={{ y: 0, opacity: 1 }}
                                    exit='exit'
                                    transition={{ type: 'tween', duration: 0.25, opacity: { delay: 0.4, duration: 0.4 } }}
                                >
                                    <ReactSVG src={svgFill} />
                                </motion.div>
                            </div>
                            <motion.div
                                custom={custom}
                                variants={titleFillVariant}
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit='exit'
                                transition={{ type: 'tween', duration: 0.25, opacity: { delay: 0.6, duration: 0.25 } }}
                            >
                                <p className={styles.period}>.</p>
                            </motion.div>
                        </div>

                        <motion.div
                            custom={custom}
                            variants={titleFillVariant}
                            initial={{ x: '-3vw', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit='exit'
                            transition={{ duration: 0.35, delay: 0.4 }}
                        >
                            <p className={styles.description}>{description}</p>
                            {showButton && (
                                <div className={styles.button}>
                                    <div className={styles.buttonLink}>
                                        <Link to={url} style={{textDecoration: 'none', color: 'rgb(100, 100, 100)' }}>Learn More</Link>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>

                <motion.div className={styles.right}
                    custom={custom}
                    variants={titleOutlineVariant}
                    initial='enter'
                    animate={{ y: 0, opacity: 1 }}
                    exit='exit'
                    transition={{ type: 'tween', duration: 0.25}}
                >
                    <div className={styles.rightSpacing}></div>
                    <div className={styles.rightContent}>
                        <ImagePath/>
                    </div>
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
