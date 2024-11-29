import React, { useEffect } from "react";
import { Nav } from "../Nav";

const Intro = () => {


  return (
    <>

  
  {/* Masonry Cards */}
  <div className="max-w-6xl px-4 py-10 mt-[80px] sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Grid */}
    <div className="grid sm:grid-cols-12 gap-6">
      <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Workplace personalities
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Women in engineering
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-span-12 md:col-span-4">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Pride 2021
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-span-12 sm:col-span-6 md:col-span-4">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Data at Preline
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-span-12 sm:col-span-6 md:col-span-4">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Empowered management
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Masonry Cards */}




  <>
  {/* Icon Blocks */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-4xl mx-auto">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
        <div className="space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <svg
              className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width={18} height={10} x={3} y={11} rx={2} />
              <circle cx={12} cy={5} r={2} />
              <path d="M12 7v4" />
              <line x1={8} x2={8} y1={16} y2={16} />
              <line x1={16} x2={16} y1={16} y2={16} />
            </svg>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Creative minds
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We choose our teams carefully. Our people are the secret to
                great work.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <svg
              className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7.5 4.27 9 5.15" />
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Effortless updates
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Benefit from automatic updates to all boards any time you need
                to make a change to your website.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <svg
              className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Strong empathy
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We've user tested our own process by shipping over 1k products
                for clients.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
        {/* End Col */}
        <div className="space-y-6 lg:space-y-10">
          {/* Icon Block */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <svg
              className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Conquer the best
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We stay lean and help your product do one thing well.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <svg
              className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Designing for people
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We actively pursue the right balance between functionality and
                aesthetics, creating delightful experiences.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 sm:gap-x-8">
            <svg
              className="shrink-0 mt-2 size-8 text-gray-800 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Simple and affordable
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                From boarding passes to movie tickets, there's pretty much
                nothing you can't store with Preline.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End Icon Blocks */}
</>






<div class="bg-indigo-700 p-4">
    <h2 class="text-3xl text-white font-bold mb-12 text-center">Work Flows</h2>
    <div class="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div class="flex md:contents flex-row-reverse">
            <div
                class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">New Event 1</h3>
                <p class="mt-2 leading-6">Description of the first event.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 1</span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
        </div>

        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold lg:text-xl">New Event 2</h3>
                <p class="mt-2 leading-6">Description of the second event.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span>
            </div>
        </div>

        <div class="flex md:contents flex-row-reverse">
            <div
                class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 class="text-lg font-semibold lg:text-xl">New Event 3</h3>
                <p class="mt-2 leading-6">Description of the first event.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span>
            </div>
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300 rounded-t-full bg-gradient-to-b from-indigo-400 to-indigo-300">
                    </div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
        </div>

        <div class="flex md:contents">
            <div class="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div class="flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-indigo-300"></div>
                </div>
                <div class="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2"></div>
            </div>
            <div class="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 class="text-lg font-semibold lg:text-xl">New Event 4</h3>
                <p class="mt-2 leading-6">Description of the second event.</p>
                <span class="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">Date 4</span>
            </div>
        </div>

    </div>
</div>

</>

  );
};

export default Intro;
