import React from 'react';
import Head from '../components/Head';

const Projects = ({ custom , resetDirection }) => {
    return (
        <div>
            <Head
                title="PROJECTS" 
                description="I love making cool things with code." 
                image="/path/to/your/image.jpg" 
                url="/Projects/" 
                resetDirection={resetDirection}
                custom={custom}
            />
        </div>
    );
};

export default Projects;
