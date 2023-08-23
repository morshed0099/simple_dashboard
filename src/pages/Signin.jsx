import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordFill } from 'react-icons/ri'


const Signin = () => {
    return (
        <div className='pt-14'>
        <div className='mt-12 flex p-4  mx-auto lg:w-[40%] md:w-[70%] sm:w-[90%] gap-8 flex-col'>
                <h2 className='text-3xl font-bold'>SignIn From </h2>
                <form >
                    <div className='flex w-full  xl:mb-8 md:mb-6 mb-4  relative'>
                        <CgProfile size={24} className='text-green-600 absolute ' />
                        <input name='name' className='outline-none w-full px-8 focus:outline-none border-b-2 border-b-black' placeholder='Your Name' type='text' />
                    </div>
                    <div className='flex  xl:mb-8 md:mb-6 mb-4 w-full relative'>
                        <AiOutlineMail size={24} className='text-green-600 absolute ' />
                        <input name='email' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your Email' type='text' />
                    </div>
                    <div className='flex xl:mb-8 md:mb-6 mb-4  w-full relative'>
                        <RiLockPasswordFill size={24} className='text-green-600 absolute ' />
                        <input name='password' className='outline-none w-full px-8 focus:outline-none border-b-black border-b-2' placeholder='Your password' type='password' />
                    </div>
                    <button className='w-full rounded-full border px-4 py-2 bg-green-600 hover:opacity-75 transition text-white font-semibold'>Signin</button>
                </form>
                <div>
                    <span className='text-gray-800'>You Have Alredy Account ? </span> <Link to='/login'><span className='text-black font-semibold hover:underline cursor-pointer'>Login</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Signin;