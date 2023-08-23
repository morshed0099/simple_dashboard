import React, { useState } from 'react';
import AnalysisCard from '../Components/AnalysisCard';
import LineChart from '../Components/LineChart';
import Analysis from '../Components/Analysis';
import Barchar from '../Components/Barchar';
import Radarchart from '../Components/Radarchart';
import HorizontalRow from '../Components/HorizontalRow';
import Table from '../Components/Table';

const Home = () => {
    const [active, setactive] = useState('week')
    return (
        <div className='grid pt-14 lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1'>
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

                <div className='mt-8 flex-col flex lg:flex-row gap-4'>
                    <div className='w-full'>
                        <AnalysisCard lineprogess={true} share={400} />
                    </div>
                    <div className='p-4 flex flex-col  border rounded-xl hover:scale-105 duration-500 ease-linear'>
                        <div className='mt-4 mb-6'>
                            <div className='mb-4'>
                                <Analysis active={active} setactive={setactive} />
                            </div>
                            <Table />
                        </div>

                        <div className='flex lg:w-1/2 md:w-full gap-8'>
                            <HorizontalRow progress={100} />
                            <HorizontalRow progress={30} />
                            <HorizontalRow progress={60} />
                            <HorizontalRow progress={10} />
                            <HorizontalRow progress={80} />
                            <HorizontalRow progress={90} />
                        </div>
                    </div>
                </div>

            </div>


            {/* side menu  */}
            <div className='p-4 col-span-1 md:col-span-2 lg:col-span-1 rounded-md min-h-screen '>
                <div>
                    <h2 className='text-2xl font-bold  mb-4'>Daily Chart</h2>
                    <Barchar />
                    <div>
                        <Table />
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-4'>
                        <h2 className='text-2xl font-bold mt-8 mb-4'>Type Of Load</h2>
                        <div>
                            <select className='border mt-4 py-1 px-2' name="" id="">
                                <option selected disabled>Month</option>
                                <option value="">jan</option>
                                <option value="">feb</option>
                                <option value="">march</option>
                                <option value="">april</option>
                                <option value="">may</option>
                                <option value="">jun</option>
                                <option value="">july</option>
                                <option value="">aug</option>
                                <option value="">sept</option>
                                <option value="">oct</option>
                                <option value="">nov</option>
                                <option value="">dec</option>
                            </select>
                        </div>
                    </div>
                    <Radarchart />
                </div>
            </div>
        </div>
    );
};

export default Home;