import React from 'react';
import darkLogo from '../../assets/logo dark.png'
import { FiArrowUpRight } from 'react-icons/fi';

const NavBar = () => {
    const navLinks = <>
        <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us</a></li>
    </>
    return (
        <div className="navbar mt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <img className='h-6' src={darkLogo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='border border-[#343268] rounded-lg py-2 px-4 flex items-center gap-2'>Appointment <FiArrowUpRight /></button>
            </div>
        </div>
    );
};

export default NavBar;