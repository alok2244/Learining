import React, { useRef, useState, useEffect } from 'react';
import CourseDropDown from '../Drop Down/CourseDropDown';
import ArticalsDropDown from '../Drop Down/ArticalsDropDown';
import TopicsDropDown from '../Drop Down/TopicsDropDown';

const MenuBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

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

  return (
    <div className='flex justify-between border-b-2 pt-3  pb-2 mt-20 z-[998] relative w-full'>
      <div className='flex justify-evenly w-1/3  mr-5'>
        <CourseDropDown />
        <ArticalsDropDown />
        <TopicsDropDown />
      </div>
      <button onClick={() => handleScroll(-200)} className="arrow_button">
        {'<'}
      </button>
      <div className='flex w-full relative overflow-x-auto scrollbar-hide' ref={containerRef} style={{ overflowX: 'hidden' }}>
        <div className="flex">
          {Array.from({ length: 111 }, (_, index) => (
            <h1 key={index} className='flex-none center w-20 '>
              {`T${index + 1}`}
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