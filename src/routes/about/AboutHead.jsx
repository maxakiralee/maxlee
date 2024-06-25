import React from 'react';
import Head from '../../components/Head';

const AboutHead = ({custom, resetDirection }) => {
    return (
        <div>
            <Head 
                title="HRRAY" 
                description="Check out our experience here." 
                image="/path/to/your/image.jpg" 
                url="/" 
                custom={custom}
                resetDirection={resetDirection}
                showButton={false} 
            />
        </div>
    );
};

export default AboutHead;
