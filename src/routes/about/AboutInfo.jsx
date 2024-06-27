import React from 'react';
import AboutComp from '../../components/AboutComp';

const AboutInfo = ({ custom , resetDirection }) => {
    return (
        <div>
            <AboutComp 
                title="About Me" 
                description="Hear more about my skills and hobbies!" 
                image="/path/to/your/image.jpg" 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default AboutInfo;
