import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/svg.module.css'
import background from '../../assets/lightbulbBackground.png'

const sizeVariant = {
    enter: { scale: 1.3 },
    center: { scale: 1.3 }
};

const pathVariant = {
    enter: { pathLength: 0, pathOffset: 1, scale: 1 },
    center: { pathLength: 1, pathOffset: 0, scale: 1 }
};

const colorVariant = {
    enter: { x: '1.6vw', y: '-7vh', opacity: 0, scale: 0.53 },
    center: { x: '-1.4vw', y: '-7vh', opacity: 1, scale: 0.53 }
};

//motion.path variants={pathVariant} initial='enter' animate='center' transition={{ duration: 2, ease: [0.765, 0.005, 0.275, 1.000] }} strokeWidth="1.5"
//motion.img variants={colorVariant} initial='enter' animate='center' transition={{ delay: 1.5, type: 'tween' }}

export default function FaceSvgComp() {
    return (
        <motion.div className={styles.grid} variants={sizeVariant} initial='enter' animate='center'>
            <div className={styles.gridFront}>
                <svg width="362" height="311" viewBox="0 0 362 311" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path variants={pathVariant} initial='enter' animate='center' transition={{ duration: 2, ease: [0.765, 0.005, 0.275, 1.000] }} strokeWidth="1.5"
                    d="M0.5 299.5C0.500507 248 27.9969 327 138.997 306C249.997 285 123.997 281 155.997 293.5C187.997 306 177.497 263.5 164.497 264C151.497 264.5 127.497 261.5 127.997 269.5C128.497 277.5 137.497 282 183.497 278.5C204.497 276 200.997 237.5 169.997 238.5C138.997 239.5 119.997 237 118.497 251.5C116.997 266 201.997 266 201.997 242.5C201.997 219 172.497 210 127.997 214C105.997 219 113.997 243.5 189.497 230.5C203.497 228.1 204.997 205.833 203.997 195C233.997 165.167 280.197 89.7 224.997 26.5C201.997 2.50001 119.997 -26 73.997 48.5C45.997 98.5 74.997 159.5 106.997 179.5C118.497 188.5 101.497 211 123.997 218C146.497 225 140.497 137 135.997 125.5C131.497 114 122.497 86 106.997 100C91.497 114 112.997 130.5 148.997 120C184.997 109.5 170.997 82 155.997 88.5C140.997 95 129.497 116.5 201.997 120C233.497 116 194.497 52 177.997 135C176.497 138 170.997 292 189.497 290.5C226.497 292.5 300.997 292.2 302.997 275C304.164 271.167 304.197 262.9 294.997 260.5C283.497 257.5 251.997 293.5 360.997 290.5" stroke="black"/>
                </svg>
            </div>

            <div className={styles.gridBackground}>
                <motion.img variants={colorVariant} initial='enter' animate='center' transition={{ duration: 0.5, delay: 1.5, type: 'tween' }}
                src={background} alt="" />
            </div>
        </motion.div>
    );
};
