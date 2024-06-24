import React from 'react';
import Head from '../components/Head';

const About = ({ custom }) => {
    return (
        <div>
            <Head 
                title="ABOUT" 
                description="Learn a little more about me!" 
                image="/path/to/your/image.jpg" 
                url="/aboutHead/head" 
                custom={custom}

            />
        </div>
    );
};

export default About;
