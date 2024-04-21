import React, { useState } from "react";

function SignupModal({ isOpen, onClose }) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        {/* Add your signup form here */}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default SignupModal;
