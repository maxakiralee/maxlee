import React from 'react';
import Head from '../components/Head';
import SvgPath from '../components/svgComps/ExperienceSvgComp';
import svgFill from '../assets/ExperienceFill.svg';
import ImagePath from '../components/svgComps/LightbulbSvgComp'

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
                svgPath={SvgPath}
                svgFill={svgFill}
                imagePath= {ImagePath}
            />
        </div>
    );
};

export default Experience;
