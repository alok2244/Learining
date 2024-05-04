import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Graduate, PostGraduate } from '../../../public/asset/Sample_Data/Courses/CoursesFields';
import { Button } from '@mantine/core';

const CourseDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [GraduateButton, setGraduateButton] = useState(false);
  const [PostGraduateButton, setPostGraduateButton] = useState(false);

  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setSelectedCourses([]);
    setGraduateButton(false);
    setPostGraduateButton(false);

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

  const handleGraduateClick = () => {
    if (GraduateButton) {
      setSelectedCourses([]);
      setGraduateButton(false);
    } else {
      setGraduateButton(true);
      setPostGraduateButton(false);
      setSelectedCourses(Graduate.map(course => course.title));
      setIsOpen(true);
    }
  };
  
  const handlePostGraduateClick = () => {
    if (PostGraduateButton) {
      setPostGraduateButton(false);
      setSelectedCourses([]);
    } else {
      setGraduateButton(false);
      setPostGraduateButton(true);
      setSelectedCourses(PostGraduate.map(course => course.title));
      setIsOpen(true);
    }
  };
  const handleItemClick = (course: string) => {
    navigate(`/course/${course}`);
    setIsOpen(false); // Close dropdown after item click
  };

  const renderCourses = () => {
    return selectedCourses.length > 0 ? (
      <ul className="nested-dropdown">
        {selectedCourses.map((course, index) => (
          <li key={index} className="dd_option" onClick={() => handleItemClick(course)}>
            {course}
          </li>
        ))}
      </ul>
    ) : null;
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="p-2">
        Course <span className="ml-1">&#9662;</span>
      </button>
      {isOpen && (
        <>
          <div className="dd_box ">
            <div className=''>
              <div>
                <div className="dd_option" onClick={handleGraduateClick}>
                  Graduate
                </div>
                <div className="dd_option" onClick={handlePostGraduateClick}>
                  Post-Graduate
                </div>
              </div>
            </div>

          </div>
          <div className='absolute ml-[196px] top-12 bg-gray-200 border-2  rounded border-t-0 rounded-t-none z-10'>
            {renderCourses()}
          </div>

        </>
      )}
    </div>
  );
};

export default CourseDropDown;
