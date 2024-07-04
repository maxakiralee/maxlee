import React from 'react';
import ProjectsComp from '../../components/ProjectsComp';

import image1 from '../../assets/MauiStrong1.png';
import image2 from '../../assets/MauiStrong2.png';
import image3 from '../../assets/MauiStrong3.png';

const Projects3 = ({ custom, resetDirection }) => {
    const images = [ image1, image2, image3 ];
    const technologies = ["mongodb", "expressjs", "react", "node", "vite"];

    return (
        <div>
            <ProjectsComp 
                title="Maui Strong" 
                description="The Heal One World Mission" 
                longDescription="In light of the wildfire tragedies in Maui, I worked with the nonprofit Heal One World to create s digital platform called Maui Strong. Through this platform, Mauians can stay connected to a network of support classes, community events, and a space for interaction to aid and facilitate their recovery." 
                images={images} 
                technologies={technologies} 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Projects3;
