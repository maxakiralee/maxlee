import React from 'react';
import Head from '../components/Head';
import SvgPath from '../components/svgComps/AboutSvgComp';
import svgFill from '../assets/AboutFill.svg';
import ImagePath from '../components/svgComps/CakeSvgComp'

const About = ({ custom , resetDirection }) => {
    return (
        <div>
            <Head 
                title="ABOUT" 
                description="See my technical skills and personal interests!" 
                image="/path/to/your/image.jpg" 
                url="/About/" 
                custom={custom}
                resetDirection={resetDirection}
                showButton={true} 
                svgPath={SvgPath}
                svgFill={svgFill}
                imagePath= {ImagePath}
            />
        </div>
    );
};

export default About;
