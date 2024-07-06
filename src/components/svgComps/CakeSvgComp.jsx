import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/svg.module.css'
import background from '../../assets/cakeBackground.png'

const sizeVariant = {
    enter: { scale: 1.3 },
    center: { scale: 1.3 }
};

const pathVariant = {
    enter: { pathLength: 0, pathOffset: 1, scale: 1 },
    center: { pathLength: 1, pathOffset: 0, scale: 1 }
};

const colorVariant = {
    enter: { x: '-0.5vw', y: '-1vh', opacity: 0, scale: 0.53 },
    center: { x: '-3.5vw', y: '-1vh', opacity: 1, scale: 0.53 }
};

//motion.path variants={pathVariant} initial='enter' animate='center' transition={{ duration: 2, ease: [0.765, 0.005, 0.275, 1.000] }} strokeWidth="1.5"
//motion.img variants={colorVariant} initial='enter' animate='center' transition={{ delay: 1.5, type: 'tween' }}

export default function FaceSvgComp() {
    return (
        <motion.div className={styles.grid} variants={sizeVariant} initial='enter' animate='center'>
            <div className={styles.gridFront}>
                <svg width="505" height="339" viewBox="0 0 505 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path variants={pathVariant} initial='enter' animate='center' transition={{ duration: 2, ease: [0.765, 0.005, 0.275, 1.000] }} strokeWidth="1.5"
                d="M1 338C9.33333 318.833 36 280.2 76 279C126 277.5 134.5 283.5 109 284.5C83.5 285.5 93.5 257 87 158.5C87.3333 151.5 90.6 138 101 140C110.5 141 133 141.4 147 135C164.5 127 169 151 169.5 153.5C170 156 180.5 166 178 149C175.5 132 195 127 195.5 149C196 171 195.5 204.5 210.5 177.5C225.5 150.5 213.5 126 226.5 135C236.9 142.2 238.5 136.667 238 133C239 127.5 245 117.2 261 120C281 123.5 304 99 331.5 106C335.167 119.5 337.3 145.9 316.5 143.5C290.5 140.5 290 139 277 148C264 157 258 151 246 150C234 149 214 147.5 245 161C276 174.5 280.5 151.5 294.5 151.5C308.5 151.5 318.5 163.5 335.5 153.5C339 151.5 352 191.5 313 179C274 166.5 278.5 200 253 195C227.5 190 226.5 179.5 198 200C169.5 220.5 151.5 189.5 135.5 190.5C119.5 191.5 87.5 235.5 120 214.5C152.5 193.5 173 235.5 199.5 211C226 186.5 239.5 212 264 208.5C288.5 205 296 176 335.5 197.5C341 199.5 338.5 231 329 225C319.5 219 288.5 222.5 285.5 231C283.1 237.8 254.167 237.833 240 237C228.5 235.167 203.3 235.5 194.5 251.5C183.5 271.5 139 239.5 124 263C109 286.5 133.5 283 335.5 231C355.5 225 355.5 185.5 351 156C346.5 126.5 352 91 283 79.5C263.5 75 295 61 270 83.5C245 106 210.5 89 210.5 67C210.5 49.4 219.833 52.3334 224.5 56C222.667 45.3333 223 21.9 239 13.5C263 7.50001 259 -11.5 243.5 13.5C243.5 14 231 33.5 232.5 51.5C234 66 225.5 50.5 235.5 52C245.5 53.5 255.5 58 253.5 72.5C251.5 87 231.5 99.5 193.5 87.5C155.5 75.5 177.5 97.5 186.5 102C195.5 106.5 225 120.5 168.5 105.5C145.5 101 114.5 104.5 139 117.5C163.5 130.5 121 129.5 115.5 129.5C110 129.5 77.5 129.5 98 114.5C118.5 99.5 203.5 44 217.5 40C231.5 36 355 52.5 355.5 85C356 117.5 356 144.5 348 161C340 177.5 327.5 244.5 377.5 226.5C427.5 208.5 473 234.5 447 243C421 251.5 405.5 201 504 237" stroke="black"/>
                </svg>
            </div>

            <div className={styles.gridBackground}>
                <motion.img variants={colorVariant} initial='enter' animate='center' transition={{ duration: 0.5, delay: 1.5, type: 'tween' }}
                src={background} alt="" />
            </div>
        </motion.div>
    );
};
