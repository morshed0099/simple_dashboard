import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai'
import { MdOutlineDashboard } from 'react-icons/md'
import { BsPeople } from 'react-icons/bs'

const Header = ({ setToggale }) => {
    const [active, setActive] = useState('home')

    return (
        <div className='flex flex-col sticky top-6 gap-4 md:gap-8 font-semibold '>
            <div className=''>
                <img className='w-24 hover:opacity-75 h-24 p-2 rounded-full bg-white shadow-md border mt-8 mb-4' src="https://th.bing.com/th/id/OIP.ms_ni44c-_TBsdHzF0W5awHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
            </div>
            <div onClick={() => setToggale(false)} className='flex duration-700 hover:translate-x-2 hover:opacity-75 items-center  gap-2'>

                <NavLink className={`flex flex-row-reverse gap-4 isActive ?'active':''}`} to='/home' >Home
                    <AiOutlineHome size={24} />
                </NavLink>
            </div>
            <div onClick={() => setToggale(false)} className='flex duration-700 hover:translate-x-2 hover:opacity-75 items-center  gap-2'>
                <NavLink className={`flex flex-row-reverse gap-4 isActive ?'active':''}`} to='/' >Dashborad
                    <MdOutlineDashboard size={24} />
                </NavLink>
            </div>
            <div onClick={() => setToggale(false)} className='flex duration-700 hover:translate-x-2 hover:opacity-75 items-center  gap-2'>
                <NavLink to='/profile' className={`flex flex-row-reverse gap-4 isActive ?'active':''}`} >Profile
                    <BsPeople size={24} />
                </NavLink>
            </div>
            <div onClick={() => setToggale(false)} className='flex duration-700 hover:translate-x-2 hover:opacity-75 items-center  gap-2'>
                <NavLink className={`flex flex-row-reverse gap-4 isActive ?'active':''}`} to='/login' >Login
                    <AiOutlineLogin size={24} />
                </NavLink>
            </div>
        </div>
    );
};

export default Header;