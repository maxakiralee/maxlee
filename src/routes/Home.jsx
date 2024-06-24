import React from 'react';
import Head from '../components/Head';

const Home = ({ custom }) => {
    return (
        <div>
            <Head 
                title="HI! IM MAX"
                description="I love many things, but coding above all!" 
                image="/path/to/your/image.jpg" 
                url="/" 
                custom={custom}

            />
        </div>
    );
};

export default Home;
