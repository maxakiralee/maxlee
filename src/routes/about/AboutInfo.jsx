import React from 'react';
import AboutComp from '../../components/AboutComp';

import image from '../../assets/max.jpg';

const AboutInfo = ({ custom , resetDirection }) => {
    const programming = [ "C++", "HTML/CSS", " Tailwind CSS", "JavaScript", "Java", "Python", "Kotlin" ];
    const technologies = ["React.js", "React Native", "MongoDB", "Firebase", "PostgreSQL", "Express.js", "Node.js", "Next.js", "Git/Github"];

    return (
        <div>
            <AboutComp 
                title="About Me" 
                description="Software Developer and" 
                description2="2nd year Computer Science Student at UCLA."
                image={image}
                longDescription="Hello! I am currently a sophomore studying Computer Science at UCLA. I love all sorts of things, from baking sweets to playing soccer. But above all, I love to code! Below are some of the things I know. Welcome to my website and enjoy your stay. 😃"
                programming={programming}
                technologies={technologies} 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default AboutInfo;
