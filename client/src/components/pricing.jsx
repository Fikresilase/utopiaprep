import React from 'react';

function PricingSection  ()  {
  return (
    <div className=" mx-8 my-4 p-8 ">
        <hr className="border-t border-gray-300 my-4" />
      <div>
        <h2 className="text-3xl text-blue-950 font-semibold tracki text-center mt- sm:text-5xl ">Pricing</h2>
        <p className="max-w-3xl mx-auto mt-3 text-xl text-center text-gray-500 ">Get started on our free plan and upgrade when you are
            ready.</p>
      </div>
      
      <div className="mt-24 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1 text-gray-900">
            <h3 className="text-xl font-semibold text-blue-950 ">Free</h3>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight text-blue-950">$0</span><span className="ml-1 text-xl font-semibold text-blue-950">/month</span>
            </p>
            <p className="mt-6 ">You just want to discover</p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-950" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg><span className="ml-3 ">Unlimited practice questions</span></li>
              <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-950" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg><span className="ml-3 ">10 answer explanations/day</span></li>
              <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-950" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg><span className="ml-3 ">5 personal prompting/day </span></li>
            </ul>
          </div>
          <a
            className="bg-blue-50 text-blue-950 hover:bg-blue-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            href="/auth/login">Get started</a>
        </div>
        <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          <div className="flex-1 text-gray-900">
            <h3 className="text-xl font-semibold text-blue-950 ">Pro</h3>
            <p
              className="absolute top-0 py-1.5 px-4 bg-blue-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
              Most popular</p>
            <p className="mt-4 flex items-baseline ">
              <span className="text-5xl font-extrabold tracking-tight text-blue-950">$5</span><span className="ml-1 text-xl font-semibold text-blue-950">/month</span>
            </p>
            <p className="mt-6 ">You want to learn and have a personal assistant</p>
            <ul role="list" className="mt-6 space-y-6">
              <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-950" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg><span className="ml-3 ">Unlimited practice questions</span></li>
              <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-950" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg><span className="ml-3 ">Unlimited answer explanations/day</span></li>
              <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-950" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg><span className="ml-3 ">Unlimited personal prompting/day</span></li>
              <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-950" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg><span className="ml-3 ">Personal quizes </span></li>
              <li className="flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="flex-shrink-0 w-6 h-6 text-blue-950" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg><span className="ml-3 ">Analytics and perfomance tracking</span></li>
            </ul>
          </div>
          <a
            className="bg-blue-500 text-white  hover:bg-blue-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            href="/auth/login">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
