import React from 'react';
import ProjectsComp from '../../components/ProjectsComp';

import image1 from '../../assets/MarbleMadness1.png';
import image2 from '../../assets/MarbleMadness2.png';
import image3 from '../../assets/MarbleMadness3.png';
import image4 from '../../assets/MarbleMadness4.png';

const Projects3 = ({ custom, resetDirection }) => {
    const images = [ image1, image2, image4 ];
    const technologies = ["C++", "Object Oriented Programming", "Polymorphism, Inheritance, Encapsulation, Data Abstraction"];

    return (
        <div>
            <ProjectsComp 
                title="Marble Madness" 
                description="Chaotic, Fast-Paced, Retro Shooter Game" 
                longDescription="bla bal"
                images={images} 
                technologies={technologies} 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Projects3;
