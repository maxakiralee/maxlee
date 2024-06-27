import React from 'react';
import ProjectsComp from '../../components/ProjectsComp';

import image1 from '../../assets/MauiStrong1.png';
import image2 from '../../assets/MauiStrong2.png';
import image3 from '../../assets/MauiStrong3.png';

const Projects3 = ({ custom, resetDirection }) => {
    const images = [ image1, image2, image3 ];
    const technologies = ["MongoDB", "Express.js", "React.js", "Node.js", "Vite"];

    return (
        <div>
            <ProjectsComp 
                title="Maui Strong" 
                description="The Heal One World Mission" 
                longDescription="website for workers in Maui" 
                images={images} 
                technologies={technologies} 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Projects3;
