import React from 'react';
import Head from '../components/Head';
import svgPath from '../assets/Projects.svg';
import svgFill from '../assets/ProjectsFill.svg';

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
                svgPath={svgPath}
                svgFill={svgFill}
            />
        </div>
    );
};

export default Projects;
