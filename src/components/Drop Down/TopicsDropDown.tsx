import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
//@ts-ignore
import { TopicTable } from './../../../public/asset/Sample_Data/Topic/TopicTable';

const TopicsDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleItemClick = (topicName: string, topicCategory: string) => {
        // const formattedTopicName = encodeURIComponent(topicName.replace(/ /g, '+')); // Replace spaces with '+' and encode special characters
        navigate(`/${topicName}/${topicCategory}`); // Navigate using the topic name and topicName
        setIsOpen(false);
    };
    
    

    return (
        <div className="relative inline-block">
            <button onClick={toggleDropdown} className="p-2">
                Topics <span className="ml-1">&#9662;</span>
            </button>
            {isOpen && (
                <div ref={dropdownRef} className="dd_box">
                    {Object.entries(TopicTable[0]).map(([topicName]) => (
                        <button
                            key={topicName}
                            className="dd_option"
                            onClick={() => handleItemClick(topicName, "Home")}
                        >
                            {topicName}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TopicsDropDown;
