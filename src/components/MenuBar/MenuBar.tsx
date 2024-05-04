import React, { useRef, useState, useEffect } from 'react';
import CourseDropDown from '../Drop Down/CourseDropDown';
import ArticalsDropDown from '../Drop Down/ArticalsDropDown';
import TopicsDropDown from '../Drop Down/TopicsDropDown';
import { computerScienceTopics } from '../../../public/asset/Sample_Data/Topic/easyscrolltopic.js'; // Import the list of topics
import { useNavigate } from 'react-router-dom';

const MenuBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);
  const navigate = useNavigate(); // Using useNavigate hook to get the navigation function


  useEffect(() => {
    if (containerRef.current) {
      // Set the maximum scrollable width of the container
      setMaxScrollWidth(containerRef.current.scrollWidth - containerRef.current.clientWidth);
    }
  }, []);

  // Function to handle scrolling when the button is clicked
  const handleScroll = (scrollAmount: number) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollAmount;
    }
  };

  const navigateToCategory = (sub,cat) => {
    navigate(`/${sub}/${cat}`);
  };

  return (
    <div className='flex justify-between border-b-2 pt-3 pb-2 mt-20 z-[998] relative w-full'>
      <div className='flex justify-evenly w-1/3 mr-5'>
        <CourseDropDown />
        <ArticalsDropDown />
        <TopicsDropDown />
      </div>
      <button onClick={() => handleScroll(-200)} className="arrow_button">
        {'<'}
      </button>
      <div className='flex w-full relative overflow-x-auto scrollbar-hide' ref={containerRef} style={{ overflowX: 'hidden' }}>
        <div className="flex">
          {/* Render the computer science topics */}
          {computerScienceTopics.map((topic, index) => (
            <h1
            key={index}
            onClick={() => navigateToCategory(topic, "Home")}
            className='flex-none center px-3 font-bold font-mono border-2 hover:bg-p-1 hover:cursor-pointer hover:text-white hover:border-[2px] hover:border-black bg-gray-200 rounded-md mx-2'
          >
            {topic}
          </h1>
          ))}
        </div>
      </div>
      <button onClick={() => handleScroll(200)} disabled={containerRef.current?.scrollLeft === maxScrollWidth} className="arrow_button mx-2 ">
        {'>'}
      </button>
    </div>
  );
};

export default MenuBar;
