import React from 'react';
import Head from '../../components/Head';

const AboutHead = ({custom, resetDirection }) => {
    return (
        <div>
            <Head 
                title="Read Descr" 
                description="Make transforming navi button, and navi guide bottom left" 
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
