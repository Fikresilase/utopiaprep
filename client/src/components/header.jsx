import React from "react";

function Header() {
  return (
    <div className="header container  mb-4 flex flex-col lg:flex-row justify-between items-center">
      <div className="logo">
        <h1 className="font-bold font-sans text-3xl lg:text-5xl text-blue-900">Up</h1>
      </div>
      <div className="navbar relative font-sans flex font-medium text-base lg:text-lg text-blue-900 mt-4 lg:mt-0">
        <h2 className="mr-6 group text-blue-900 transition duration-300">
          Features
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
        </h2>
        {/* <h2 className="mr-6 ml-6 group text-blue-900 transition duration-300">
          Resources{" "}
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
        </h2> */}
        <h2 className="ml-6 group text-blue-900 transition duration-300">
          Pricing
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
        </h2>
      </div>
      <div className="registration text-base lg:text-xl flex items-center mt-4 lg:mt-0">
        <button className="mr-4 px-3 lg:px-4 py-1 lg:py-2 rounded font-sans border-none font-semibold border-2 text-blue-900 hover:text-white hover:bg-blue-600 hover:shadow-md duration-300 transition-colors">
          Login
        </button>
        <button className="px-3 lg:px-4 py-1 lg:py-2 rounded font-sans border-none font-semibold border-2 text-blue-900 hover:text-white hover:bg-blue-600 hover:shadow-md duration-300 transition-colors">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Header;
