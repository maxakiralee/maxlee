import React from 'react';
import AboutComp from '../../components/AboutComp';

const AboutContact = ({ custom , resetDirection }) => {
    return (
        <div>
            <AboutComp 
                title="Contact" 
                description="Hear more about my skills and hobbies!" 
                image="/path/to/your/image.jpg" 
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default AboutContact;
