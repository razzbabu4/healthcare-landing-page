import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import about from '../assets/Rectangle 24.png'

const AboutUs = () => {
    return (
        <div className='my-20'>
            <div className='flex flex-col gap-5 lg:flex-row'>
                <div className='lg:w-1/2 space-y-4 lg:space-y-8'>
                    <button className='btn border border-[#343268] rounded-full py-2 px-4 flex items-center gap-2'>Who we are <FiArrowUpRight /></button>
                    <h2 className='text-3xl text-[#020043] font-semibold lg:w-2/3'>We Help To Get Solutions</h2>
                    <p className='w-full lg:w-4/5 text-[#4D4C7B]'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <button className='btn bg-[#FFC637] text-black rounded-lg py-2 px-4 flex items-center gap-2'>Learn More <FiArrowUpRight /></button>
                </div>
                <div>
                    <div><img className='h-full w-full' src={about} alt="about" /></div>
                    <div className='bg-[#343268] text-white px-6 py-10 rounded-3xl mt-6 space-y-5 lg:w-3/5 lg:transform lg:-translate-x-20 lg:-translate-y-40'>
                        <h3 className='text-2xl font-medium'>Our mission is simple</h3>
                        <p className='text-[#FFFFFFCC]'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;