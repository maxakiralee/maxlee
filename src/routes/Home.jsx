import React from 'react';
import Head from '../components/Head';

const Home = ({ custom }) => {
    return (
        <div>
            <Head 
                title="HI! IM MAX"
                description="Check out our Home here." 
                image="/path/to/your/image.jpg" 
                url="/" 
                custom={custom}

            />
        </div>
    );
};

export default Home;
