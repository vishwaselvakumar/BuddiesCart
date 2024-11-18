import { Link as ScrollLink} from 'react-scroll'

import Section from './Section'
import Testimonials from './Testimonials'
import hero from "../assets/hero1.png"
import Rocket from "../assets/rocket.png"

export const Hero = () => {
  return (
    <>


    <header className="sticky top-0 flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[80px] tracking-wide relative z-50 ">
  <div className="flex flex-wrap items-center gap-5 w-full">
    <a href="javascript:void(0)">
      <img
        src="https://readymadeui.com/readymadeui.svg"
        alt="logo"
        className="w-40 max-lg:mr-5"
      />
    </a>
    <div
      id="collapseMenu"
      className="max-lg:hidden lg:!flex lg:ml-auto max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
    >
      <button
        id="toggleClose"
        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 fill-black"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          />
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          />
        </svg>
      </button>
      <ul className="lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
        <li className="mb-6 hidden max-lg:block">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-40"
            />
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3 px-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]"
          >
            Home
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3 px-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
          >
            Team
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3 px-3">
            <ScrollLink
              to="section1"
              smooth={true}
              duration={500}
              className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
            >
              Stats
            </ScrollLink>
          </li>
        <li className="max-lg:border-b max-lg:py-3 px-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
          >
            Blog
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3 px-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
          >
            About
          </a>
        </li>
        <li className="max-lg:border-b max-lg:py-3 px-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-[#333] font-semibold block text-[15px]"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
    <div className="flex items-center max-lg:ml-auto space-x-6">
      <button className="px-4 py-2 text-[15px] rounded font-semibold text-[#007bff] border-2 border-[#007bff] hover:bg-[#007bff] transition-all ease-in-out duration-300 bg-transparent hover:text-white">
        Sign up
      </button>
      <button id="toggleOpen" className="lg:hidden">
        <svg
          className="w-7 h-7"
          fill="#333"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</header>

{/* <section className="bg-white dark:bg-gray-900 pb-44 mt-14">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Payments tool for software companies
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        From checkout to global sales tax compliance, companies around the world
        use Flowbite to simplify their payment stack.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Speak to Sales
      </a>
    </div>
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        alt="mockup"
      />
    </div>
  </div>
</section> */}

<section className="bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
        Payments tool for software companies
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 text-center lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        From checkout to global sales tax compliance, companies around the world
        use Flowbite to simplify their payment stack.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
        className="sm: flex item-center px-4 md:inline-flex items-center justify-center px-2 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        Speak to Sales
      </a>
    </div>

    <div className="hidden lg:mb-5 lg:col-span-5 gap-2 lg:flex relative">
     
      <img
        src={hero}
        alt="mockup"
        className="animate-smoothBounce  h-[70%] ml-10"
      />
      
    
    </div>
  </div>
</section>

<section class="bg-blue-900 " id='vishwa'>
  <div class="mx-auto grid max-w-lg gap-x-8 gap-y-12 px-4 py-32 md:max-w-screen-xl md:grid-cols-2 md:px-8 lg:grid-cols-3">
    <div>
      <h2 class="text-3xl font-medium text-white">
        Unmatched <br />
        Services.<br />
        Unmatched <br />
        Excellence.
      </h2>
    </div>

    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8" id="section1">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
      <p class="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
      <p class="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
      <p class="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
      <p class="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
    </div>
    <div class="border-white/40 relative border-4 px-4 pt-14 pb-8">
      <div class="absolute -top-8 left-8 bg-blue-900 px-4 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <p class="mb-3 font-medium uppercase text-white">Integrated Terminal</p>
      <p class="text-blue-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero ullam placeat molestiae aspernatur quasi, facere, aliquam ea quia maiores ipsum soluta cumque voluptates.</p>
    </div>
  </div>
</section>





<>
  {/* Features */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mb-20">
    {/* Grid */}
    <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div className="lg:col-span-7">
        {/* Grid */}
        <div data-aos="fade-up"  data-aos-delay="200">
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
            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-neutral-200">
              Collaborative tools to design user experience
            </h2>
            <p className="text-gray-500 dark:text-neutral-500">
              Use our tools to explore your ideas and make your vision come
              true. Then share your work easily.
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
                  <span className="font-bold">Less routine</span> – more
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
                  Scale budgets <span className="font-bold">efficiently</span>
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
<section/>


<Testimonials/>
<Section/>




    </>
  )
}
