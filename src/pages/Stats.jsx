import React from 'react';
import chart from '../assets/Group 12.png';
import contact from '../assets/contract.png';
import people from '../assets/Group 7.png';
import money from '../assets/Group.png';
import video from '../assets/Group (1).png';
import { CiStar } from 'react-icons/ci';

const Stats = () => {
    return (
            <div>
                <h1 className='text-center text-3xl lg:text-5xl font-semibold lg:w-1/2 mx-auto mb-8 lg:mb-0'>Comprehensive Care for Every Patient</h1>
                <div className='flex flex-col lg:flex-row gap-5 items-end lg:transform lg:-translate-y-20'>
                    <div className='h-80 flex flex-col p-5 gap-5 border rounded-xl w-full'>
                        <h2 className='text-3xl lg:text-4xl font-semibold text-[#020043]'>90%</h2>
                        <p className=''>Patient satisfaction rate, reflecting our commitment.</p>
                        <img className='h-32 w-32 mx-auto' src={chart} alt="" />
                    </div>
                    <div className='h-52 w-full flex flex-col p-5 border rounded-xl'>
                        <h2 className='text-3xl lg:text-4xl font-semibold text-[#020043]'>500+</h2>
                        <p className='w-3/4'>Board-certified doctors</p>
                        <img className='h-20 w-20 mx-auto lg:ml-auto mt-2' src={contact} alt="" />
                    </div>
                    <div className='h-40 w-full flex flex-col p-5 gap-2 border rounded-xl '>
                        <h2 className='text-3xl lg:text-4xl font-semibold text-[#020043] flex gap-1'>4.8 <CiStar className='text-[#FFE03D]' /></h2>
                        <p>Over 20,000 Patient</p>
                        <img className='h-10 w-2/4' src={people} alt="" />
                    </div>
                    <div className='h-52 w-full flex flex-col p-5 border rounded-xl'>
                        <h2 className='text-3xl lg:text-4xl font-semibold text-[#020043]'>$5000</h2>
                        <p className='w-3/4'>Money spend for poor patient</p>
                        <img className='h-20 w-20 mx-auto lg:ml-auto mt-2' src={money} alt="" />
                    </div>
                    <div className='h-80 w-full flex flex-col p-5 gap-5 border rounded-xl '>
                        <h2 className='text-3xl lg:text-4xl font-semibold text-[#020043]'>50+</h2>
                        <p>Free lesson video for patient</p>
                        <img className='h-32 w-32 mt-4 mx-auto' src={video} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default Stats;