import React, { useState } from 'react';
//@ts-ignore

export function StatsRingCard({ cardTitle, completed, total, inprocess }) {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    const items = () => {
        return (
            <div className='w-32 flex justify-between'>
                <div>
                    <p className="font-bold">{total - completed}</p>
                    <p className="text-xs text-gray-500">Remaining</p>
                </div>
                <div>
                    <p className="font-bold">{inprocess}</p>
                    <p className="text-xs text-gray-500">In Process</p>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white border border-gray-200 rounded-md shadow-lg p-6 w-2/3 flex justify-between">
            <div className="relative">
                <p className="font-bold text-lg flex justify-between items-center">
                    {cardTitle}
                    <ExclamationCircleIcon onClick={toggleInfo} />
                </p>
                {showInfo && (
                    <div className='absolute z-10 bg-gray-400 rounded-md border-2 p-4'>
                        <p className="text-xs italic">Over All Status complition</p>
                        <p className="text-xs"> - Completed: All the courses</p>
                        <p className="text-xs"> - Remaining: Courses which are yet to complete</p>
                        <p className="text-xs"> - In Process: On-going courses</p>
                    </div>
                )}
                <div className="mt-4">
                    <p className="font-bold text-3xl">{completed}</p>
                    <p className="text-xs text-gray-500">Completed</p>
                </div>
                <div className="mt-8">
                    {items()}
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <div className="w-32 h-32">
                    <svg viewBox="0 0 36 36" className="w-32 h-32">
                        <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="3.8" stroke="gray"  />
                        <circle cx="18" cy="18" r="15.9155" fill="none" strokeWidth="3.8" strokeDasharray={`${(completed / total) * 100} 100`} strokeDashoffset="0" strokeLinecap="round" stroke="#333" />
                        <text x="50%" y="50%" textAnchor="middle"  dy=".3em" className="text-xs">{((completed / total) * 100).toFixed(0)}%</text>
                    </svg>
                </div>
            </div>
        </div>
    );
}
//@ts-ignore

function ExclamationCircleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="13" x2="12" y2="7" />
            <circle cx="12" cy="17" r="0.5" fill="currentColor" />
        </svg>
    );
}
