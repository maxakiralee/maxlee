import React from 'react';
import ProjectsComp from '../../components/ProjectsComp';

import image1 from '../../assets/Stride1.png';
import image2 from '../../assets/Stride2.png';
import image3 from '../../assets/Stride3.png';
import image4 from '../../assets/Stride4.png';
import image5 from '../../assets/Stride5.png';


const Projects3 = ({ custom, resetDirection }) => {
    const images = [ image1, image2, image3, image4, image5 ];
    const technologies = ["React Native", "Expo", "Firebase", "Apple Maps"];

    return (
        <div>
            <ProjectsComp 
                title="Stride" 
                description="Fitness and Friendly Competition Wrapped into One" 
                longDescription="Solving fitness and providng a freidnly competitivee social atmosphere" 
                images={images} 
                technologies={technologies} 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Projects3;
