
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  link: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ link, buttonText }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(link);
  };

  return (
    <div className="w-64 h-28 bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      <button onClick={handleItemClick} className="h-20 bg-black text-white rounded-md py-2 px-4 text-center hover:bg-gray-800">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;

// Export something else as a named export
export const someOtherThing = () => {
  // Some other functionality
};
