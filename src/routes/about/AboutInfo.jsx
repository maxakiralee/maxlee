import React from 'react';
import AboutComp from '../../components/AboutComp';

import image from '../../assets/max.jpg';

const AboutInfo = ({ custom , resetDirection }) => {
    const programming = [ "Python", "C", "C++", "Java", "Javascript", "Typescript", "HTML", "CSS", "Tailwind CSS", "SQL", "Kotlin", "Bash"];
    const technologies = ["React.js", "React Native", "Next.js", "Gatsby", "Node.js", "Express.js", "MongoDB", "Firebase", "MySQL", "PostgreSQL", "GraphQL", "Git", "GitHub", "OpenCV", "TensorFlow", "NumPy", "Pandas", "Matplotlib", "scikit-learn", "spaCy", "NLTK", "Docker", "Postman", "Amazon Web Services"];

    return (
        <div>
            <AboutComp 
                title="About Me" 
                description="Software Developer and" 
                description2="Computer Science Student at UCLA."
                image={image}
                longDescription="Hello! I am currently studying Computer Science at UCLA. I love all sorts of things, from baking sweets to playing soccer. But above all, I love to code! Below are some of the things I know. Welcome to my website and enjoy your stay. 😃"
                programming={programming}
                technologies={technologies} 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default AboutInfo;
