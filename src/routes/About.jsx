import React from 'react';
import Head from '../components/Head';

const About = ({ custom , resetDirection }) => {
    return (
        <div>
            <Head 
                title="ABOUT" 
                description="Learn a little more about me!" 
                image="/path/to/your/image.jpg" 
                url="/About/" 
                resetDirection={resetDirection}
                custom={custom}

            />
        </div>
    );
};

export default About;
