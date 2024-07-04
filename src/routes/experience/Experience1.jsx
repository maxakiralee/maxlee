import React from 'react';
import Head from '../../components/ExperienceComp';

const Experience1 = ({ custom, resetDirection }) => {
    return (
        <div>
            <Head 
                title="ACM at UCLA" 
                description="Intern to Officer" 
                longDescription="The Association for Computing Machinery (ACM) is the largest Computer Science student organization at UCLA and in Southern California, with the mission of empowering our community to build amazing things through code." 
                url='https://hack.uclaacm.com/'
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Experience1;
