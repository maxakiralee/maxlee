import React from 'react';
import Head from '../components/Head';

const Projects = ({ custom }) => {
    return (
        <div>
            <Head
                title="PROJECTS" 
                description="I love making cool things with code." 
                image="/path/to/your/image.jpg" 
                url="/" 
                custom={custom}
            />
        </div>
    );
};

export default Projects;
