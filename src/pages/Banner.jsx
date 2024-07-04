import React from 'react';
import banner from '../assets/Rectangle 5.png';

const Banner = () => {
    return (
        <div className='mt-12 mb-20'>
            <img className='h-full w-full' src={banner} alt="banner" />
        </div>
    );
};

export default Banner;