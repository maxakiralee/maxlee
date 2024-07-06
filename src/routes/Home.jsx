import React from 'react';
import Head from '../components/Head';
import SvgPath from '../components/svgComps/HiImMaxComp';
import svgFill from '../assets/HiImMaxFill.svg';
import ImagePath from '../components/svgComps/FaceSvgComp'

const Home = ({ custom, resetDirection }) => {
    return (
        <div>
            <Head 
                title="HI! I'M MAX"
                description="Coder, Developer, Innovator, Brownie Lover..." 
                image="/path/to/your/image.jpg" 
                url="/" 
                custom={custom}
                resetDirection={resetDirection}
                showButton={false} 
                svgPath={SvgPath}
                svgFill={svgFill}
                imagePath= {ImagePath}
            />
        </div>
    );
};

export default Home;
