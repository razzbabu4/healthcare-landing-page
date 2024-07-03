import React from 'react';
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/Shared/NavBar';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;