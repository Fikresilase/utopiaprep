import React from "react";

function Header() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header py-2 lg:py-4 px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center sticky top-0 bg-blue-100 z-10">
      <div className="logo mb-4 lg:mb-0">
        <h1 className="font-bold font-sans text-2xl lg:text-4xl text-blue-900">
          Up
        </h1>
      </div>
      <div className="navbar mb-4 lg:mb-0 flex flex-wrap justify-center lg:justify-start">
        <a onClick={() => scrollToSection('home')} href="#home" className="mx-2 lg:mx-4 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base text-blue-900 transition duration-300 hover:bg-blue-200 rounded-lg">Home</a>
        <a onClick={() => scrollToSection('features')} href="#features" className="mx-2 lg:mx-4 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base text-blue-900 transition duration-300 hover:bg-blue-200 rounded-lg">Features</a>
        <a onClick={() => scrollToSection('pricing')} href="#pricing" className="mx-2 lg:mx-4 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base text-blue-900 transition duration-300 hover:bg-blue-200 rounded-lg">Pricing</a>
      </div>
      <div className="registration flex flex-wrap justify-center lg:justify-end">
        <button className="mb-2 lg:mb-0 mr-2 lg:mr-4 px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base rounded font-sans border-none font-semibold text-blue-900 hover:text-white hover:bg-blue-600 hover:shadow-md duration-300 transition-colors">
          Login
        </button>
        <button className="px-3 lg:px-4 py-1 lg:py-2 text-sm lg:text-base rounded font-sans border-none font-semibold text-blue-900 hover:text-white hover:bg-blue-600 hover:shadow-md duration-300 transition-colors">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Header;
