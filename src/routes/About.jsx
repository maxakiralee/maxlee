import React from 'react';
import Head from '../components/Head';
import SvgPath from '../components/svgComps/AboutSvgComp';
import svgFill from '../assets/AboutFill.svg';

const About = ({ custom , resetDirection }) => {
    return (
        <div>
            <Head 
                title="ABOUT" 
                description="Hear more about my skills and hobbies!" 
                image="/path/to/your/image.jpg" 
                url="/About/" 
                custom={custom}
                resetDirection={resetDirection}
                showButton={true} 
                svgPath={SvgPath}
                svgFill={svgFill}
            />
        </div>
    );
};

export default About;
