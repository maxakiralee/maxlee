import React from 'react';
import Head from '../components/Head';

const Experience = ({ custom }) => {
    return (
        <div>
            <Head 
                title="EXPERIENCE" 
                description="Check some of my cool experiences here!" 
                image="/path/to/your/image.jpg" 
                url="/" 
                custom={custom}

            />
        </div>
    );
};

export default Experience;
