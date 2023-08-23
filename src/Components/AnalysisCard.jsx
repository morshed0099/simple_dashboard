import React, { useState } from 'react';
import { FaShare } from 'react-icons/fa'
import Analysis from './Analysis';

const AnalysisCard = ({ progress, share, content, lineprogess }) => {
    const [active, setactive] = useState('week')
    return (
        <div className={`p-4  rounded-2xl shadow-sm hover:scale-105 duration-500 border ${lineprogess ? 'flex gap-4' : ''}`}>
            <div>
                <Analysis setactive={setactive} active={active} />
                <div className={`${progress ? 'flex flex-row-reverse mt-6 justify-between gap-2' : 'mt-6'}`}>
                    <div className={`${progress ? 'w-2/3' : 'w-full'}`}>
                        <div>
                            <div>
                                <p className='letter font-light'>02 ipsum dolor sit amet consectetur adipisicing elit. Animi harum eius, voluptate accusantium consequuntur nihil recusandae voluptatum temporibus officia ipsum?</p>
                            </div>

                        </div>
                    </div>
                    {
                        progress && (
                            <div className="radial-progress text-blue-600 font-semibold" value='500'
                                style={{ "--value": `${progress}` }}>{progress}%
                            </div>
                        )
                    }
                </div>
                <div className='flex cursor-pointer items-center justify-end'>
                    <div className='px-4 py-2 border rounded-xl mt-4'>
                        <p>{share}</p>
                    </div>
                    <FaShare size={34} className='text-blue-600 mt-3' />
                </div>
            </div>
            {
                lineprogess && (
                    <div className='mt-12'>
                        <progress className="progress progress-info w-56" value={0} max="100"></progress>
                        <progress className="progress progress-info w-56" value="10" max="100"></progress>
                        <progress className="progress progress-info w-56" value="40" max="100"></progress>
                        <progress className="progress progress-info w-56" value="70" max="100"></progress>
                        <progress className="progress progress-info w-56" value="100" max="100"></progress>

                    </div>
                )
            }
        </div>
    );
};

export default AnalysisCard;