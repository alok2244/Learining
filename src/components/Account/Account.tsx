import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

const Account = () => {
  const Navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const navigate = useNavigate(); // Obtain the navigation function

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleSignUp = () => {
    navigate('/sign-up'); // Navigate to the sign-up page
    setIsLoggedIn(true);
  };

  const handleSignIn = () => {
    // Logic to handle login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logic to handle logout
    setIsLoggedIn(false);
  };

  return (
    <div className="mr-5 mt-1.5 button_primary ">
      <button className="" onClick={toggleDropdown}>
        {isLoggedIn ? 'User Name' : 'Sign In'} {/* Conditionally render Sign In or User Name */}
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full left-1 px-2 text-black bg-white border border-gray-200 shadow-md mt-2 rounded-md z-40">
          {/* Dropdown content */}
          <ul>
            {isLoggedIn ? (
              <>
                <li className="px-4 py-2">
                  <Button onClick={()=>{
                    navigate('/dashboard/home');
                  }}>
                    Dasboard
                  </Button>
                </li>
                <li className="px-4 py-2">Settings</li>
                <li className="px-4 py-2" onClick={handleLogout}>Logout</li>
              </>
            ) : (
              <>
                <li className="px-4 py-2 " onClick={handleSignUp}>SignUp</li>
                <li className="px-4 py-2" onClick={handleSignIn}>SignIn</li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Account;
