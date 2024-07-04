import React from 'react';
import ProjectsComp from '../../components/ProjectsComp';

import image1 from '../../assets/MarbleMadness1.png';
import image2 from '../../assets/MarbleMadness2.png';
import image3 from '../../assets/MarbleMadness3.png';
import image4 from '../../assets/MarbleMadness4.png';

const Projects3 = ({ custom, resetDirection }) => {
    const images = [ image1, image2, image4 ];
    const technologies = ["cpp"];

    return (
        <div>
            <ProjectsComp 
                title="Marble Madness" 
                description="Chaotic, Fast-Paced, Retro Shooter Game" 
                longDescription="Marble Madness is a single player retro shooter game centered around an avatar who vanquishes enemies with its shooter. With limited ammunition, lives, and health, advancing to the next level is a mighty challenge."
                images={images} 
                technologies={technologies} 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Projects3;
