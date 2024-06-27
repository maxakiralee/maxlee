import React from 'react';
import Head from '../components/Head';
import svgPath from '../assets/Experience.svg';
import svgFill from '../assets/ExperienceFill.svg';

const Experience = ({ custom , resetDirection }) => {
    return (
        <div>
            <Head 
                title="EXPERIENCE" 
                description="Check some of my cool experiences here!" 
                image="/path/to/your/image.jpg" 
                url="/Experience/1" 
                resetDirection={resetDirection}
                custom={custom}
                showButton={true} 
                svgPath={svgPath}
                svgFill={svgFill}
            />
        </div>
    );
};

export default Experience;
