import React from 'react';

const HorizontalRow = ({progress}) => {
    
    return (
        <div>
            <div className='w-[20px]  relative h-[90px] border-gray-700 border rounded-full'>
             
             {/* <div className={`
             ${progress ===100 && 'bg-blue-600 h-[100%]'}
             `}>               
             </div>
             <div className={`
             ${progress ===90 && 'bg-blue-600 h-[90%]'}
            //  `}>                */}

            {
                progress === 100 &&(
                    <div className='absolute rounded-full  w-full h-full bg-blue-600'>
                    </div>
                )
            }
            {
                progress === 90 &&(
                    <div className='absolute rounded-full w-full h-[90%] bg-blue-600'>
                    </div>
                )
            }
            {
                progress === 60 &&(
                    <div className='absolute w-full rounded-full h-[60%] bg-blue-600'>
                    </div>
                )
            }
            {
                progress === 80 &&(
                    <div className='absolute w-full rounded-full h-[80%] bg-blue-600'>
                    </div>
                )
            }
            {
                progress === 10 &&(
                    <div className='absolute rounded-full w-full h-[10%] bg-blue-600'>
                    </div>
                )
            }
            {
                progress === 30 &&(
                    <div className='absolute rounded-full w-full h-[30%] bg-blue-600'>
                    </div>
                )
            }
          
             <div className='flex flex-col font-light mt-10 gap-4'>
         
   
             </div>
            </div>
        </div>
    );
};

export default HorizontalRow;