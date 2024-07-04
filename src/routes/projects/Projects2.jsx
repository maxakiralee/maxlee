import React from 'react';
import ProjectsComp from '../../components/ProjectsComp';

import image1 from '../../assets/Stride1.png';
import image2 from '../../assets/Stride2.png';
import image3 from '../../assets/Stride3.png';
import image4 from '../../assets/Stride4.png';
import image5 from '../../assets/Stride5.png';


const Projects3 = ({ custom, resetDirection }) => {
    const images = [ image1, image2, image3, image4, image5 ];
    const technologies = ["react-native", "firebase", "apple"];

    return (
        <div>
            <ProjectsComp 
                title="Stride" 
                description="Fitness and Friendly Competition Wrapped into One" 
                longDescription="Stride is a mobile app compatible with both Android and IOS, that offers a social way to stay fit. It allows users track their athletic endeavors and connect with friends, putting users in friendly communities that encourage fitness." 
                images={images} 
                technologies={technologies} 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Projects3;
