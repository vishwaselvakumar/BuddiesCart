
import logo from "../assets/logo.png"
import CountUp from "react-countup";
import Section from './Section'
import Testimonials from './Testimonials'
import hero from "../assets/hero1.png"
import { Nav } from "./Nav"
import ScrollProgressBar from 'react-scroll-progress-bar'
import Rocket from "../assets/rocket.png"
import cart from "../assets/cart.png"
import { Tech } from "./Tech"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ProgressBar } from "./simple"

export const Hero = () => {


  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the vertical scroll position
      setScrollX(scrollPosition); // Update horizontal movement based on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      
   

      {/* <section className="bg-white dark:bg-gray-900 mt-[80px]" id="saheel">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">

          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-2 text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">

              Your Ultimate Destination for
            </h1>
            <h1 className="max-w-2xl mb-4 text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white pt-0">
              <span className="whitespace-nowrap">
                <span className="text-[#12b5d8]">E-commerce</span> Excellence!
              </span>

            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 text-center lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">

              At BuddiesCart, we do more than offer e-commerce services — we become your growth partner. From launching your store to scaling it to new heights, we craft innovative solutions that make your brand shine in the competitive digital marketplace
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-blue-800"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              className="sm: flex item-center md:inline-flex items-center justify-center px-2 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>

          <div className="hidden lg:mb-5 lg:col-span-5 gap-2 lg:flex relative">

            <img
              src={hero}
              alt="mockup"
              className="animate-smoothBounce  h-[70%] ml-10 mt-[60px]"
            />



          </div>
         

        </div>
       
      </section> */}

{/* 
<section className="bg-white dark:bg-gray-900 mt-[80px] overflow-x-hidden" id="saheel">
  <div className="grid max-w-screen-xl w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-2 text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Your Ultimate Destination for
      </h1>
      <h1 className="max-w-2xl mb-4 text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white pt-0">
        <span className="whitespace-nowrap">
          <span className="text-[#12b5d8]">E-commerce</span> Excellence!
        </span>
      </h1>
      <p className=" max-w-2xl mb-6 font-light  text-gray-500 text-left lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        At BuddiesCart, we do more than offer e-commerce services — we become your growth partner. From launching your store to scaling it to new heights, we craft innovative solutions that make your brand shine in the competitive digital marketplace.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-blue-800"
      >
        Get started
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a
        href="#"
        className="inline-flex items-center justify-center px-2 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Speak to Sales
      </a>
    </div>

    <div className="hidden lg:mb-5 lg:col-span-5 lg:flex relative overflow-hidden">
      <img
        src={hero}
        alt="mockup"
        className="animate-smoothBounce h-auto w-full sm:w-3/4 lg:h-[70%] ml-auto mt-[60px]"
      />
    </div>
  </div>
</section> */}


{/* <section className="bg-white dark:bg-gray-900 mt-[80px] overflow-x-hidden sm:h-[90px]" id="saheel">
  <div className="grid max-w-screen-xl w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-[80%] sm:max-w-[60%] lg:max-w-[80%] mb-2 mx-auto text-center lg:text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Your Ultimate Destination for
      </h1>
      <h1 className="max-w-[80%] sm:max-w-[60%] lg:max-w-[80%] mb-4 mx-auto text-center lg:text-left text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white pt-0">
        <span className="whitespace-nowrap">
          <span className="text-[#12b5d8]">E-commerce</span><br/> Excellence!
        </span>
      </h1>
      <p className="max-w-[70%] sm:max-w-[60%] mb-5 lg:max-w-[80%] mx-auto text-center lg:text-left font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        At BuddiesCart, we do more than offer e-commerce services — we become your growth partner. From launching your store to scaling it to new heights, we craft innovative solutions that make your brand shine in the competitive digital marketplace.
      </p>
      <div className="flex flex-wrap justify-center lg:justify-start gap-3 ml-12">
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-blue-800"
        >
          Get started
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center px-2 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Speak to Sales
        </a>
      </div>
    </div>

    <div className="hidden lg:mb-5 lg:col-span-5 lg:flex relative overflow-hidden">
      <img
        src={hero}
        alt="mockup"
        className="animate-smoothBounce h-auto w-full sm:w-3/4 lg:h-[70%] ml-auto mt-[60px]"
      />
    </div>
  </div>
</section> */}

<section
  className="bg-white  mt-[95px] overflow-x-hidden" 
  id="saheel"
>
  <div className="grid max-w-screen-xl w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-[80%] sm:max-w-[60%] lg:max-w-[80%] mb-2 mx-auto text-center lg:text-left text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
        Your Ultimate Destination for
      </h1>
      <h1 className="max-w-[80%] sm:max-w-[60%] lg:max-w-[80%] mb-4 mx-auto text-center lg:text-left text-3xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl  pt-0">
        <span className="whitespace-nowrap">
          <span className="text-[#12b5d8]">E-commerce</span><br /> Excellence!
        </span>
      </h1>
      <p className="max-w-[70%] sm:max-w-[60%] mb-5 lg:max-w-[80%] mx-auto text-center lg:text-left font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        At BuddiesCart, we do more than offer e-commerce services — we become your growth partner. From launching your store to scaling it to new heights, we craft innovative solutions that make your brand shine in the competitive digital marketplace.
      </p>
      <div className="flex flex-wrap justify-center lg:justify-center gap-6">
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-blue-800"
        >
          Get started
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center px-2 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  "
        >
          Speak to Sales
        </a>
      </div>
    </div>

    <div className="hidden lg:col-span-5 lg:flex relative overflow-hidden">
      <img
        src={hero}
        alt="mockup"
        className="animate-smoothBounce h-auto w-full sm:w-3/4 lg:h-[70%] ml-auto mt-[60px]"
      />
    </div>
  </div>
</section>





{/* stats */}




        
        {/* <div className="pb-12 mt-10 bg-gray-50 dark:bg-gray-900 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-gray-900" />
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-[#219ebc] dark:bg-gray-800 rounded-lg shadow-3xl sm:grid sm:grid-cols-3">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Stars on GitHub
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-white dark:text-indigo-100"
                    >
                      <CountUp end={900} duration={5} />
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Downloads
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-white dark:text-indigo-100"
                    >
                      <CountUp end={3000} duration={5} />
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Sponsors
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-white dark:text-indigo-100"
                    >
                      <CountUp end={122} duration={5} />
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div> */}

<>
  {/* Stats */}
  <div className="mt-2 mb-10">
    <div className="max-w-6xl  xl:px-0 py-5 mx-auto">
      <div className="border border-neutral-800 rounded-xl">
        <div className="p-5 lg:p-18  bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12 m-2">
            {/* Stats */}
            <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
              <svg
                className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
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
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
              <div className="mt-3 sm:mt-5">
                <h3 className="text-lg sm:text-3xl font-semibold text-white">
                  2,000+
                </h3>
                <p className="mt-1 text-sm sm:text-base text-neutral-400">
                  Preline partners
                </p>
              </div>
            </div>
            {/* End Stats */}
            {/* Stats */}
            <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
              <div className="flex justify-center items-center -space-x-5">
                <img
                  className="relative z-[2] shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                  src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <img
                  className="relative z-[1] shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7"
                  src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
                <img
                  className="relative shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                  src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="mt-3 sm:mt-5">
                <h3 className="text-lg sm:text-3xl font-semibold text-white">
                  85%
                </h3>
                <p className="mt-1 text-sm sm:text-base text-neutral-400">
                  Happy customers
                </p>
              </div>
            </div>
            {/* End Stats */}
            {/* Stats */}
            <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
              <svg
                className="shrink-0 size-6 sm:size-8 text-[#ff0] mx-auto"
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
                <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                <path d="m2 16 6 6" />
                <circle cx={16} cy={9} r="2.9" />
                <circle cx={6} cy={5} r={3} />
              </svg>
              <div className="mt-3 sm:mt-5">
                <h3 className="text-lg sm:text-3xl font-semibold text-white">
                  $55M+
                </h3>
                <p className="mt-1 text-sm sm:text-base text-neutral-400">
                  Ads managed yearly
                </p>
              </div>
            </div>
            {/* End Stats */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Stats */}
</>

      
    
  



        <div className="max-w-5xl max-md:max-w-xl mx-auto font-[sans-serif] my-4">
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-gray-800 text-3xl font-extrabold text-center mb-6">
      Our Exclusive Features
    </h2>
    <p className="text-gray-600 text-sm">
      Unlock a world of possibilities with our exclusive features. Explore how
      our unique offerings can transform your journey and empower you to achieve
      more.
    </p>
  </div>
  <div className="mt-16">
    <div className="grid md:grid-cols-2 items-center gap-16">
      <div>
        <img
          src="https://readymadeui.com/image-1.webp"
          className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
        />
      </div>
     
      <div className="p-5 items-center">
        <div className="flex items-center justify-center">
  <h3 className="text-gray-800 text-xl font-bold mb-4">Customization</h3>
  </div>
  <p className="text-gray-600 text-sm text-justify">
    Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
    consequat id. Dolore et sint mollit in nisi tempor culpa consectetur.
    Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
    consequat id.
  </p>
  <div className="flex justify-center items-center">
    <button
      type="button"
      className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
    >
      Read More
    </button>
  </div>
</div>


      <div className="max-md:order-1 p-5">
          <div className="flex items-center justify-center">
        <h3 className="text-gray-800 text-xl font-bold mb-4">Performance</h3>
        </div>
        <p className="text-gray-600 text-sm text-justify p-2">
          Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
          consequat id. Dolore et sint mollit in nisi tempor culpa consectetur.
          Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
          consequat id.
        </p>
        <div className="flex items-center justify-center">
        <button
          type="button"
          className="px-6 py-2 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-blue-600 bg-blue-600 hover:bg-transparent hover:text-black transition-all duration-300"
        >
          
          Read More
        </button>
        </div>
      </div>
      <div>
        <img
          src="https://readymadeui.com/contact.webp"
          className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]"
        />
      </div>
    </div>
  </div>
</div>

  

{/* stats */}








      <>
        {/* Features */}
        <div className="max-w-[74rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-20">
          {/* Grid */}
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
              {/* Grid */}
              <div data-aos="fade-up" data-aos-delay="200">
                <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">

                  <div className="col-span-4">
                    <img
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                      alt="Features Image"
                    />
                  </div>
                  {/* End Col */}
                  <div className="col-span-3">
                    <img
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                      alt="Features Image"
                    />
                  </div>
                  {/* End Col */}
                  <div className="col-span-5">
                    <img
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
                      alt="Features Image"
                    />
                  </div>
                  {/* End Col */}
                </div>
              </div>
              {/* End Grid */}
            </div>
            {/* End Col */}




            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
              <div className="space-y-6 sm:space-y-8">
                {/* Title */}
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">


                    Why E-commerce Businesses Trust BuddiesCart

                  </h2>
                  <p className="text-black ">
                    We believe in creating long-term partnerships. Our clients value us because we:
                    Help reduce operational challenges so they can focus on growth. <br />
                    Keep up with evolving e-commerce trends to ensure their success.<br />
                    Deliver measurable results through continuous optimization.<br />

                  </p>
                </div>
                {/* End Title */}
                {/* List */}
                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        <span className="font-bold text-[#12B5D8]">Less routine</span> – more
                        creativity
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Hundreds of thousands saved
                      </span>
                    </div>
                  </li>
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg
                        className="shrink-0 size-3.5"
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                        Scale budgets <span className="font-bold text-[#12B5D8]">efficiently</span>
                      </span>
                    </div>
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Features */}
      </>

      <Tech/>

      <section className="relatve">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Heading Div */}
          <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
            <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
              The Website You Want Without The{" "}
              <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">
                Dev Time
              </span>
              .
            </h1>
            <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
              purus sit amet luctus venenatis, lectus
            </p>
            {/* Button Wrap */}
            <div className="flex justify-center">
              <a
                href="#"
                className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6"
              >
                Get Started
              </a>
              <a
                href="#"
                className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]"
              >
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
                  alt=""
                  className="mr-2 inline-block w-6"
                />
                <p className="text-black">View Showreel</p>
              </a>
            </div>
          </div>
          {/* Image Div */}
          {/* <div className="relative mx-auto h-[512px]">
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d247ab06a755ee4aaee_magicpattern-KfFmwa7m5VQ-unsplash.jpg"
        alt=""
        className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl"
      />
      <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black" />
    </div> */}
        </div>
        {/* BG Images */}
        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
          alt=""
          className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
        />
        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
          alt=""
          className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block"
        />
      </section>




      <h1 className=' text-3xl text-center font-bold text-black'>OUR STATS </h1>

      <section />
      {/* Card Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card */}
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                  Total users
                </p>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    72,540
                  </h3>
                  <span className="flex items-center gap-x-1 text-green-600">
                    <svg
                      className="inline-block size-5 self-center"
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
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    <span className="inline-block text-lg">1.7%</span>
                  </span>
                </div>
              </div>
              <div className="shrink-0 flex justify-center items-center size-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                <svg
                  className="shrink-0 size-5"
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
              </div>
            </div>
            <a
              className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-b-xl dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              View reports
              <svg
                className="shrink-0 size-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                  Sessions
                </p>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-neutral-200">
                    29.4%
                  </h3>
                </div>
              </div>
              <div className="shrink-0 flex justify-center items-center size-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                <svg
                  className="shrink-0 size-5"
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
                  <path d="M5 22h14" />
                  <path d="M5 2h14" />
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                </svg>
              </div>
            </div>
            <a
              className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-b-xl dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              View reports
              <svg
                className="shrink-0 size-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                  Avg. Click Rate
                </p>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
                    56.8%
                  </h3>
                  <span className="flex items-center gap-x-1 text-red-600">
                    <svg
                      className="inline-block size-4 self-center"
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
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                    <span className="inline-block text-lg">1.7%</span>
                  </span>
                </div>
              </div>
              <div className="shrink-0 flex justify-center items-center size-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                <svg
                  className="shrink-0 size-5"
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
                  <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                  <path d="m12 12 4 10 1.7-4.3L22 16Z" />
                </svg>
              </div>
            </div>
            <a
              className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-b-xl dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              View reports
              <svg
                className="shrink-0 size-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                  Pageviews
                </p>
                <div className="mt-1 flex items-center gap-x-2">
                  <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-neutral-200">
                    92,913
                  </h3>
                </div>
              </div>
              <div className="shrink-0 flex justify-center items-center size-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                <svg
                  className="shrink-0 size-5"
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
                  <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" />
                  <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
                  <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
                </svg>
              </div>
            </div>
            <a
              className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-b-xl dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              href="#"
            >
              View reports
              <svg
                className="shrink-0 size-4"
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Section */}
      <section />


      <Testimonials />
      <Section />




    </>
  )
}
