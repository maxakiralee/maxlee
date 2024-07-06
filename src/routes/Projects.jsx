import React from 'react';
import Head from '../components/Head';
import SvgPath from '../components/svgComps/ProjectsSvgComp';
import svgFill from '../assets/ProjectsFill.svg';
import ImagePath from '../components/svgComps/FlowerSvgComp'

const Projects = ({ custom , resetDirection }) => {
    return (
        <div>
            <Head
                title="PROJECTS" 
                description="I love making cool things with code." 
                image="/path/to/your/image.jpg" 
                url="/Projects/1" 
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

export default Projects;
