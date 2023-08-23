import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineHome, AiOutlineLogin} from 'react-icons/ai'
import {MdOutlineDashboard} from 'react-icons/md'
import {BsPeople} from 'react-icons/bs'

const Header = ({setToggale}) => {

    return (
        <div className='flex flex-col sticky top-6 gap-4 md:gap-8 font-semibold '>
            <div onClick={()=>setToggale(false)} className='flex duration-700 hover:translate-x-2 hover:opacity-75 items-center  gap-2'>
                <AiOutlineHome size={24}  />
                <NavLink to='/Home' >Home</NavLink>
            </div>
            <div onClick={()=>setToggale(false)} className='flex duration-700 hover:translate-x-2 hover:opacity-75 items-center  gap-2'>
                <MdOutlineDashboard size={24}  />
                <NavLink to='/' >Dashborad</NavLink>
            </div>
            <div onClick={()=>setToggale(false)} className='flex duration-700 hover:translate-x-2 hover:opacity-75 items-center  gap-2'>
                <BsPeople size={24}  />
                <NavLink to='/profile' >Profile</NavLink>
            </div> 
            <div onClick={()=>setToggale(false)} className='flex duration-700 hover:translate-x-2 hover:opacity-75 items-center  gap-2'>
                <AiOutlineLogin size={24}  />
                <NavLink to='/login' >Login</NavLink>
            </div> 
        </div>
    );
};

export default Header;