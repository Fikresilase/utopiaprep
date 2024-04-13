import React from "react";
import Signup from "./signup"; // Assuming Signup is the correct import path

function Hero({ isOpen, onClose }) { // Rename prop to `onClose` for clarity

  const handleCloseModal = () => {
    onClose(); // Call the function passed as a prop
  };

  return (
    <>
      <div className="header container flex justify-between">
        <h1>Logo</h1>
        <div>
          <button className="mx-4 bg-white text-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full border border-blue-500 hover:border-blue-700">
            Login
          </button>
          <button className="mx-4 bg-white text-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full border border-blue-500 hover:border-blue-700">
            Sign Up
          </button>
          {isOpen && ( // Conditionally render the Signup component
            <Signup isOpen={isOpen} onClose={handleCloseModal} /> // Pass the close function
          )}
        </div>
      </div>
      <div className="flex items-center">
        {/* ... Text and Image content for the Hero section */}
      </div>
    </>
  );
}

export default Hero;