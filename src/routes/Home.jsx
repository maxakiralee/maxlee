import React from 'react';
import Head from '../components/Head';
import svgPath from '../assets/HiImMax.svg';
import svgFill from '../assets/HiImMaxFill.svg';

const Home = ({ custom, resetDirection }) => {
    return (
        <div>
            <Head 
                title="HI! I'M MAX"
                description="I love many things, but coding above all!" 
                image="/path/to/your/image.jpg" 
                url="/" 
                custom={custom}
                resetDirection={resetDirection}
                showButton={false} 
                svgPath={svgPath}
                svgFill={svgFill}
            />
        </div>
    );
};

export default Home;
