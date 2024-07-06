import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/svg.module.css'
import background from '../../assets/flowerBackground.png'

const sizeVariant = {
    enter: { scale: 1.3 },
    center: { scale: 1.3 }
};

const pathVariant = {
    enter: { pathLength: 0, scale: 1 },
    center: { pathLength: 1, scale: 1 }
};

const colorVariant = {
    enter: { x: '2.5vw', y: '-7.5vh', opacity: 0, scale: 0.52 },
    center: { x: '-0.5vw', y: '-7.5vh', opacity: 1, scale: 0.52 }
};

//motion.path variants={pathVariant} initial='enter' animate='center' transition={{ duration: 2, ease: [0.765, 0.005, 0.275, 1.000] }} strokeWidth="1.5"
//motion.img variants={colorVariant} initial='enter' animate='center' transition={{ delay: 1.5, type: 'tween' }}

export default function FaceSvgComp() {
    return (
        <motion.div className={styles.grid} variants={sizeVariant} initial='enter' animate='center'>
            <div className={styles.gridFront}>
                <svg width="261" height="473" viewBox="0 0 261 473" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path variants={pathVariant} initial='enter' animate='center' transition={{ duration: 2, ease: [0.765, 0.005, 0.275, 1.000] }} strokeWidth="1.5"
                d="M242.5 325.5C257.167 333.833 276.3 353.8 235.5 367C194.7 380.2 192.5 381.167 196.5 380C183.834 384.333 163.7 398.5 184.5 420.5C210.5 448 183 474 162 471.5C141 469 80.5004 462 104.5 334C107.5 315 125.7 276.2 174.5 273C235.5 269 195 295 174.5 299.5C158.1 303.1 136.667 303.667 128 303.5C111 303.333 82.5008 304.8 104.5 312C132 321 124 308 101 290.5C78 273 -37 252.5 45.5 303.5C128 354.5 120 265 124 236.5C124.5 229.5 125.802 217.342 112 214.5C95 211 63.5 187 58 182.5C52.7937 178.24 5.5 144 0.5 119.5C7.83333 130.333 27.4056 150.888 45.5 155C67.5 160 104.5 199 106 209C99.1667 204.5 83.5 187.9 75.5 157.5C81.8333 162.5 95.8 176.4 101 192C107.5 211.5 178 190 191.5 187C205 184 222 185 228.5 188.5C219.167 190.167 199.4 195.5 195 203.5C189.5 213.5 157.5 212 151 209C144.5 206 133.5 209.5 132 211C130.5 212.5 123 217 120 204C117 191 99.5 142.5 85 124.5C70.5 106.5 56.5 108 54 134.5C51.5 161 81 206 107.5 203.5C134 201 183 132 186 123.5C188.906 115.266 199 63 210 55C221 47 229 50 243.5 61.5C258 73 246.5 110.5 239 116C236 118.5 229 122 221.5 124.5C211.825 127.725 202.312 140.814 201 143C199.5 145.5 186.5 173 154 182.5C121.5 192 130 208.314 161.5 197.5C193 186.686 206 159.5 207 157.5C207.447 156.606 217.5 137 205.5 126.5C193.5 116 198 93 202.5 79C207 65 208 48.5 181 33.5C154 18.5 172 13 189.5 17C207 21 214.739 36.0573 216 39C217.5 42.5 216 48 231.5 48C247 48 260.5 67.5 231.5 93.5C202.5 119.5 208 108 170 155C132 202 80.5 178 94 165.5C107.5 153 142.37 128.065 145.5 126.5C148.5 125 238 55.5 184 41.5C130 27.5 91.1948 28.0901 84 42C76.5 56.5 63.5 80.5 96.5 106C129.5 131.5 162.5 77 137 42C111.5 7 61.5 41.5 103.5 81.5C145.5 121.5 176 62.5 174.5 48C173 33.5 134 14.5 112 52.5C90 90.5 168 97 160 60.5C152 24 104.809 1.78966 63.5 45.5C20.5 91 107 125.31 133.5 120.5C160 115.69 185 95.5 182 61.5C179 27.5 156 -2.05589e-06 107 0.499998C58 0.999998 73.5 30.5 43 45.5C12.5 60.5 20 94.5 49.5 110.5C79 126.5 117 167.5 113 208" stroke="black"/>
                </svg>
            </div>

            <div className={styles.gridBackground}>
                <motion.img variants={colorVariant} initial='enter' animate='center' transition={{ duration: 0.5, delay: 1.5, type: 'tween' }}
                src={background} alt="" />
            </div>
        </motion.div>
    );
};
