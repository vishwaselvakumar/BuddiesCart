
import React from 'react';
import { useEffect } from 'react';

export const About = () => {

  useEffect(() => {
    // Scroll the window to the top whenever the component is rendered
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-[80px]">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold ">
            About Us
          </h2>
          <p className="mt-3 text-gray-800 ">
            The powerful and flexible theme for all kinds of businesses.
          </p>
        </div>

        {/* Features Section */}
        <div className="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="col-span-6 sm:col-span-4 text-center">
            <svg
              className="mx-auto h-auto w-7 md:w-9 text-gray-800 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="10" height="14" x="3" y="8" rx="2" />
              <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
              <path d="M8 18h.01" />
            </svg>
            <div className="mt-2 sm:mt-6">
              <h3 className="text-lg font-semibold text-gray-800 ">
                Responsive
              </h3>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-span-6 sm:col-span-4 text-center">
            <svg
              className="mx-auto h-auto w-7 md:w-9 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 7h-9" />
              <path d="M14 17H5" />
              <circle cx="17" cy="17" r="3" />
              <circle cx="7" cy="7" r="3" />
            </svg>
            <div className="mt-2 sm:mt-6">
              <h3 className="text-lg font-semibold text-gray-800 ">
                Customizable
              </h3>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-span-6 col-start-4 sm:col-span-4 text-center">
            <svg
              className="mx-auto h-auto w-7 md:w-9 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div className="mt-2 sm:mt-6">
              <h3 className="text-lg font-semibold text-gray-800 ">
                24/7 Support
              </h3>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8">
          <div className="hidden md:block col-span-4 md:col-span-3">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
              alt="Features Image"
            />
          </div>

          <div className="col-span-4 md:col-span-3">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
              alt="Features Image"
            />
          </div>

          <div className="col-span-4 md:col-span-3">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
              alt="Features Image"
            />
          </div>

          <div className="col-span-4 md:col-span-3">
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
              alt="Features Image"
            />
          </div>
        </div>
      </div>

      <div className="relative h-72 overflow-hidden bg-indigo-600 sm:px-20">
  <div className="z-10 flex h-full flex-col items-center justify-center space-y-4">
    <h1 className="text-center text-5xl font-bold text-white">
      A revolution in Heroes
    </h1>
    <p className="text-lg text-white">With background fillers</p>
  </div>
  <div className="-z-1 absolute bottom-3 left-3 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20" />
  <div className="-z-1 absolute -top-10 left-1/2 h-24 w-24 rounded-full bg-white bg-gradient-to-b from-white to-indigo-600 opacity-20" />
</div>


    </>
  );
};
