import React, { useState } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import { RxCross2, RxDashboard } from 'react-icons/rx'

const Main = () => {
    const [toggale, setToggale] = useState(false)

    return (
        <div>
            <div className='flex'>
                <div className={`min-w-[200px] duration-500 ease-linear md:block bg-gray-200 min-h-screen px-4 py-4 ${toggale ? "block ml-0 absolute z-50 md:static" : 'ml-[-200px] md:block md:ml-0  '}`}>
                    <div onClick={()=>setToggale(false)} className='flex md:hidden justify-end mb-4'>
                        <RxCross2 size={34} color='black' className='p-2 bg-white rounded-full hover:opacity-75 transition ' />
                    </div>
                    <Header setToggale={setToggale} />
                </div>
                <div onClick={() => setToggale(true)} className='md:hidden px-4 py-4 block'>
                    <RxDashboard size={34} className='text-gray-300 hover:text-gray-600 transition duration-300' />
                </div>
                <div className='flex-1 px-4 py-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Main;