import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-ignore
import { sampleArticles} from '../../../public/asset/Sample_Data/Articles/ArticlesList.js';

const ArticlesDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Specify the type of the ref

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
  const navigate = useNavigate();

    const handleItemClick = (id: number) => {
        navigate(`/article/${id}`);
    };

  return (
    <div className="relative inline-block ">
      <button onClick={toggleDropdown} className="p-2">
        Articles <span className="ml-1">&#9662;</span>
      </button>
      {isOpen && (
        <div ref={dropdownRef} className="dd_box">
          {sampleArticles.map(//@ts-ignore 
            article => (
              <button key={article.id} className="dd_option" onClick={() => {
                handleItemClick(article.id);
                toggleDropdown();
              }}>{article.name}</button>
            ))}
        </div>
      )}
    </div>
  );
};

export default ArticlesDropDown;
