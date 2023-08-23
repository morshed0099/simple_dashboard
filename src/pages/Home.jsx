import React, { useState } from 'react';
import AnalysisCard from '../Components/AnalysisCard';
import LineChart from '../Components/LineChart';
import Analysis from '../Components/Analysis';
import Barchar from '../Components/Barchar';

const Home = () => {
    const [active, setactive] = useState('week')
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1'>
            <div className='lg:col-span-3 md:col-span-2 col-span-1'>
                <div className='grid gap-4 pb-8 lg:grid-cols-3 md:grid-cols-1 grid-cols-1'>
                    <AnalysisCard progress={30} share={300} />
                    <AnalysisCard progress={70} share={70} />
                    <AnalysisCard progress={20} share={300} />
                </div>

                <div className='p-4 rounded-xl border'>
                    <div>
                        <Analysis active={active} setactive={setactive} />
                    </div>
                    <LineChart />
                </div>
                
            </div>

            <div className='p-4 rounded-md min-h-screen bg-gray-200'>
               <div>
                <h2 className='text-2xl font-bold mb-4'>Daily Chart</h2>
                <Barchar />
               </div>
            </div>
        </div>
    );
};

export default Home;