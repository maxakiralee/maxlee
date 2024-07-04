import React from 'react';
import About2Comp from '../../components/About2Comp';

import image from '../../assets/max.jpg';

const AboutContact = ({ custom , resetDirection }) => {
    return (
        <div>
            <About2Comp 
                title="Contact" 
                description="Get in touch with me!" 
                image={image}
                longDescription="Feel free to reach out! I'd love to connect. 😃"
                custom={custom}
                resetDirection={resetDirection}
            />
        </div>
    );
};

export default AboutContact;
