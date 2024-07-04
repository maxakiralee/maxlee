import React from 'react';
import Head from '../../components/ExperienceComp';

const Experience2 = ({ custom, resetDirection }) => {

    return (
        <div>
            <Head 
                title="FIRST Robotics" 
                description="Captain and Programmer" 
                longDescription="The FIRST Robotics Competition is the largest international high school robotics competition. Our mission is to inspire the next generation of innovators, promote diversity in STEM education, and explore the STEM industry." 
                url='https://alphagenesis6436.weebly.com/'
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Experience2;
