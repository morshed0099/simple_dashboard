import React, { useState } from 'react';
import AnalysisCard from '../Components/AnalysisCard';
import LineChart from '../Components/LineChart';
import Analysis from '../Components/Analysis';

const Home = () => {
    const [active, setactive] = useState('week')
    return (
        <div className='flex gap-2'>
            <div className='flex-1'>
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

            <div className='min-w-[200px] p-4 rounded-md min-h-screen bg-gray-200'>
                side bar
            </div>
        </div>
    );
};

export default Home;