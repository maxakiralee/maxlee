import React, { useEffect } from 'react';
import styles from '../styles/experienceComp.module.css';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const leftContentVariant = {
    enter: { x: '-3vw', opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.1, delay: 0 } },
};

const rightContentVariant = {
    enter: { y: '3vh', opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.1, delay: 0, opacity: { delay: 0, duration: 0.1 } } },
}

export default function ExperienceComp({ title, description, longDescription, url, custom, resetDirection }) {
    const location = useLocation();
    const currentPath = location.pathname;

    const handleNavClick = () => {
        resetDirection();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            // Assuming runAnimation is defined elsewhere
            runAnimation();
        }, 5);

        return () => clearTimeout(timer);
    }, [currentPath]);

    const getBackgroundColor = (path) => {
        switch (path) {
            case '/Experience/1':
                return '#FFCCFF';
            case '/Experience/2':
                return '#FFE5CC';
            default:
                return 'white';
        }
    };

    return (
        <div className={styles.overall}>
            <div className={styles.container}>
                <motion.div className={styles.left}
                    style={{ backgroundColor: getBackgroundColor(currentPath) }}
                    custom={custom}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0, transition: { duration: 0.3 , delay: 0} }}
                    transition={{ type: "tween", ease: 'easeInOut', duration: 0.3, delay: 0.15 }}
                >
                    <div className={styles.leftSpacing}></div>
                    <motion.div className={styles.leftContent}
                        custom={custom}
                        variants={leftContentVariant}
                        initial='enter'
                        animate='center'
                        exit='exit'
                        transition={{ duration: 0.35, delay: 0.3 }}
                    >
                        <div className={styles.title}>
                            <div>{title}</div>
                            <div className={styles.period}>.</div>
                        </div>
                        <p className={styles.description}>{description}</p>
                    </motion.div>
                </motion.div>

                <div className={styles.right}>
                    <div className={styles.rightSpacing}></div>
                    <div className={styles.rightContent}>
                        <motion.p className={styles.longDescription}
                            variants={rightContentVariant}
                            initial='enter'
                            animate='center'
                            exit='exit'
                            transition={{ duration: 0.2, delay: 0.4 }}
                        >{longDescription}</motion.p>
                        <motion.div className={styles.button}
                            variants={rightContentVariant}
                            initial='enter'
                            animate='center'
                            exit='exit'
                            transition={{ duration: 0.2, delay: 0.45 }}
                        >
                            <div className={styles.buttonLink}>
                                <Link to={url} style={{textDecoration: 'none', color: 'rgb(100, 100, 100)' }}>Learn More</Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div className={styles.navChannel}
                variants={leftContentVariant}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.35, delay: 0.3 }}
            >
                {['/Experience/1', '/Experience/2'].map((path, index) => (
                    <React.Fragment key={index}>
                        {currentPath === path ? (
                            <div className={styles.currentButton}>
                                <motion.div className={styles.currentButtonOuter}
                                    initial={{ x: 0, opacity: 1, scale: 0 }}
                                    animate={{ x: 0, opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.25, delay: 0, opacity: { delay: 0, duration: 0.25 } }, scale: { delay: 0, duration: 0.1 } }}
                                    transition={{ duration: 0.25, delay: 0.2, opacity: { delay: 0.4, duration: 0.25 }, scale: { delay: 0.4, duration: 0.25 } }}
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
                        {index < 1 && <span className={styles.navLine}></span>}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
}
