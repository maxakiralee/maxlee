import React from 'react';
import Head from '../../components/ExperienceComp';

const Experience3 = ({ custom, resetDirection }) => {

    return (
        <div>
            <Head 
                title="UCLA" 
                description="ML/SWE on the AI Team" 
                longDescription="The University of California, Los Angeles (UCLA) stands at the forefront of higher education, dedicated to advancing knowledge, fostering creativity, and nurturing the leaders of tomorrow. Our mission is to provide an inclusive and rigorous academic environment that empowers students and researchers to push the boundaries of innovation." 
                url='https://www.ucla.edu/'
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default Experience3;
