import React from 'react';
import Head from '../components/Head';

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
            />
        </div>
    );
};

export default Home;
