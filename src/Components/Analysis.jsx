import React from 'react';

const Analysis = ({setactive,active}) => {
    return (
        <div>
             <div className='flex items-center gap-4'>
                <h2 className='text-1xl font-bold text-gray-800'>Analysis</h2>
                <div className='flex gap-2'>
                    <bottun onClick={()=>setactive('week')} className={` px-4 py-2 hover:bg-blue-600 cursor-pointer duration-500 font-semibold border rounded-xl ${active === 'week' ? 'bg-blue-600 text-white':" bg-white text-black "}`}>week</bottun>

                    <bottun onClick={()=>setactive('month')} className={` px-4 py-2 hover:bg-blue-600 cursor-pointer duration-500 font-semibold border rounded-xl ${active === 'month' ? 'bg-blue-600 text-white':" bg-white text-black "}`}>Month</bottun>
                </div>
            </div>
        </div>
    );
};

export default Analysis;