import React from "react";
import hero from "../images/hero.svg";

function Hero({ onLoginOpen }) {
  return (
    <div
      id="home"
      className=" bg-blue-100 p-8 flex flex-col lg:flex-row items-center lg:py-3"
    >
      <div className="lg:w-1/2 lg:pr-12">
        <h1 className="text-4xl lg:text-6xl font-serif text-blue-950 font-medium leading-snug lg:leading-tight mb-4 lg:mb-6">
          AI-Guided Exam Preparation
        </h1>
        <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6 lg:mb-8">
          The ultimate resource for preparing for your exam with AI-guided
          assistance. Learn effectively with personalized explanations and
          guidance tailored to your needs.
        </p>
        <div className="text-center lg:text-left">
          <button
            onClick={onLoginOpen}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            Start Now
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img src={hero} alt="Hero" className="w-full" />
      </div>
    </div>
  );
}

export default Hero;
