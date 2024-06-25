import React from 'react';
import Head from '../components/Head';

const Experience = ({ custom , resetDirection }) => {
    return (
        <div>
            <Head 
                title="EXPERIENCE" 
                description="Check some of my cool experiences here!" 
                image="/path/to/your/image.jpg" 
                url="/Experience/" 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Experience;
