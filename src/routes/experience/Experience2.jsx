import React from 'react';
import Head from '../../components/ExperienceComp';

import image1 from '../../assets/MauiStrong1.png';
import image2 from '../../assets/MauiStrong2.png';
import image3 from '../../assets/MauiStrong3.png';

const Experience2 = ({ custom, resetDirection }) => {
    const images = [ image1, image2, image3 ];
    const technologies = ["MongoDB", "Express.js", "React.js", "Node.js", "Vite"];

    return (
        <div>
            <Head 
                title="FIRST Robotics" 
                description="Captain and Programmer" 
                longDescription="blah more blah blah" 
                images={images} 
                technologies={technologies} 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Experience2;
