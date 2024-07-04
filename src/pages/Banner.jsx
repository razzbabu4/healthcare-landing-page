import React from 'react';
import banner from '../assets/Rectangle 5.png';
import chart from '../assets/Group 12.png';
import contact from '../assets/contract.png';
import people from '../assets/Group 7.png';
import money from '../assets/Group.png';
import video from '../assets/Group (1).png';

const Banner = () => {
    return (
        <div className='mt-10'>
            <img className='h-full w-full' src={banner} alt="banner" />
        </div>
    );
};

export default Banner;