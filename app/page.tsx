"use client";

import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {});

  const Header: React.FC = () => {
    return (
      <header className="mx-auto w-full max-w-4xl xl:max-w-8xl p-4 sm:p-8 xl:px-12 flex justify-between items-center">
        <h1 className="logo font-semibold text-xl sm:text-2xl sm:-tracking-100 font-serif">
          <a href="/" className="block">
            jamestoone<span className="text-primary-500">.design</span>
          </a>
        </h1>
        <button type="button" className="text-sm sm:text-base bg-primary-500 text-zinc-950 rounded-full px-3 sm:px-4 -tracking-100 py-1.5 font-semibold border border-primary-400">
          Contact
        </button>
      </header>
    );
  };

  interface TitleProps {
    label: string;
    className?: string;
  }

  const Title: React.FC<TitleProps> = ({ label, className }) => {
    return (
      <h2 className={`font-serif text-4xl sm:text-6xl my-4 xl:my-8 leading-none ${className ? className : ""}`}>
        <span className="text-zinc-600 mr-0.5">/</span>
        <span className="text-primary-500">{label}</span>
      </h2>
    );
  };

  interface IntroProps {
    className?: string;
  }

  const Info: React.FC<IntroProps> = ({ className }) => {
    return (
      <section className={`mx-auto w-full max-w-4xl xl:max-w-8xl p-4 sm:p-8 xl:px-12 ${className ? className : ""}`}>
        <Title label="intro" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xl:grid-cols-12">
          <div className="max-xl:order-0 relative overflow-clip rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 p-4 sm:p-6 xl:col-span-4 xl:row-span-3 xl:grid xl:grid-rows-subgrid">
            <div className="h-[calc(theme(size[20])-theme(spacing[1]))] aspect-square relative mb-4 grid items-center xl:mb-0 p-0.5">
              <div className="animate-[spin_4s_linear_infinite] absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 to-primary-400 p-0.5"></div>

              <Image alt="James Toone" width={80} height={80} className="p-0.5 relative aspect-square object-cover  rounded-full object-center bg-zinc-950" src="/me.webp" />
            </div>
            <div className="max-xl:space-y-3 xl:grid xl:items-end xl:row-span-2">
              <Balancer ratio={0} className="!max-w-[22ch] font-medium -tracking-200 text-2xl xl:text-3xl text-zinc-50">
                Bridging the gap between design and development.
              </Balancer>
              <div className="sm:hidden text-base space-y-3 text-pretty">
                <p>I have a proven track record of leading teams to deliver user-focused products using an efficient UX process.</p>
                <p>I can discern users&apos; core issues and provide elegant solutions that work seamlessly across all devices.</p>
                <p>I specialise in designing and coding rapid prototypes using intuitive design components, facilitating fast, iterative development while promoting sustainable practices.</p>
              </div>
              <div className="max-xl:hidden text-base font-medium -tracking-100 text-zinc-500">James Toone, Lead Product Designer</div>
              <div className="xl:hidden space-y-px text-base font-medium -tracking-100 text-zinc-500">
                <div>James Toone, Lead Product Designer</div>
                <div>Based in Brighton, UK</div>
              </div>
            </div>
          </div>
          <div className="contents xl:col-span-4 xl:row-span-3 xl:grid xl:grid-cols-subgrid xl:grid-rows-subgrid">
            <div className="hidden xl:grid grid-cols-4 items-center gap-2 rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 py-6 pl-6 pr-1  2xl:pr-0 xl:col-span-4 xl:grid-cols-subgrid">
              <div className="col-span-3 -mt-1 space-y-1">
                <div className="text-base font-medium -tracking-100 text-zinc-500">Title</div>
                <div className="text-base font-medium -tracking-100 xl:text-lg">Lead Product Designer</div>
              </div>
              <div className="grid place-content-center">
                <svg className="size-7 sm:size-8 text-zinc-500 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.75 18.75V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V18.75"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="max-xl:hidden grid grid-cols-4 items-center gap-2 rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 py-6 pl-6 pr-1  2xl:pr-0 xl:col-span-4 xl:grid-cols-subgrid">
              <div className="col-span-3 -mt-1 space-y-1">
                <div className="text-base font-medium -tracking-100 text-zinc-500">Location</div>
                <div className="text-base font-medium -tracking-100 xl:text-lg">Brighton, UK</div>
              </div>
              <div className="grid place-content-center">
                <svg className="size-8 text-zinc-500  xl:size-9" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth=".75"
                    d="M18.25 11C18.25 15 12 19.25 12 19.25C12 19.25 5.75 15 5.75 11C5.75 7.5 8.68629 4.75 12 4.75C15.3137 4.75 18.25 7.5 18.25 11Z"
                  ></path>
                  <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75"></circle>
                </svg>
              </div>
            </div>
            <ol className="hidden xl:contents">
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M16.5 8C16.5 8.27614 16.2761 8.5 16 8.5C15.7239 8.5 15.5 8.27614 15.5 8C15.5 7.72386 15.7239 7.5 16 7.5C16.2761 7.5 16.5 7.72386 16.5 8Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15.25 13C15.25 14.7949 13.7949 16.25 12 16.25C10.2051 16.25 8.75 14.7949 8.75 13C8.75 11.2051 10.2051 9.75 12 9.75C13.7949 9.75 15.25 11.2051 15.25 13Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path d="M8.27136 6.5C11.0577 8.10042 14.9494 11.1596 17.1497 16.5" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M16 6.38916C14.3573 8.37479 10.6906 11.7113 5 11" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10.6876 18.9999C10.6876 18.9999 11.5 12.5001 18.7178 10.5001" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </li>
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path d="M10.75 11.75V16.25" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M7.75 11.75V16.25" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M7.75 8.75V9.25" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </li>
            </ol>
          </div>
          <div className="relative max-sm:hidden rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 p-4 sm:p-6  xl:col-span-4 xl:row-span-3">
            <div className="-mt-0.5 sm:mt-0.5">
              <span className="max-sm:hidden absolute top-[-1.95rem] left-0.5 text-primary-500 text-[7.5rem] leading-none [filter:drop-shadow(1px_2px_1px_rgba(1,1,1,0.25))]">&ldquo;</span>
              <div className="xl:pl-0.5 text-base space-y-3 text-pretty">
                <p>I have a proven track record of leading teams to deliver user-focused products using an efficient UX process.</p>
                <p>I can discern users&apos; core issues and provide elegant solutions that work seamlessly across all devices.</p>
                <p>I specialise in designing and coding rapid prototypes using intuitive design components, facilitating fast, iterative development while promoting sustainable practices.</p>
              </div>
              <span className="max-sm:hidden absolute bottom-[-5.25rem] right-0.5 text-primary-500 text-[7.5rem] leading-none [filter:drop-shadow(1px_2px_1px_rgba(1,1,1,0.25))]">&rdquo;</span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const JoinInTimetable: React.FC = () => {
    return (
      <div className="cursor-pointer relative bg-gradient-to-tl from-zinc-900/75 to-zinc-900 fade-in-out-scroll group rounded-2xl overflow-clip">
        <Image
          width={333}
          height={657}
          quality={100}
          alt="JoinIn Timetable"
          src="/joinin-timetable.png"
          className="relative mx-auto rounded-2xl rounded-b-none translate-y-1 group-hover:translate-y-0 duration-700 transition-transform"
        />
        <div className="relative p-4 sm:p-6 overflow-clip">
          <div className="absolute inset-0 bg-[url('/joinin-timetable.png')] brightness-125 blur-sm bg-no-repeat bg-[bottom_-2rem_center] duration-700 transition-transform -translate-y-2 group-hover:translate-y-1" />
          <div className="inset-0 absolute bg-gradient-to-b to-zinc-900 backdrop-blur-2xl backdrop-brightness-[.70]"></div>
          <div className="relative flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-base font-medium -tracking-100 xl:text-xl">JoinIn Timetable</div>
              <div className="text-sm sm:text-base font-medium -tracking-100 text-zinc-500">UI, UX, React</div>
            </div>
            <button
              aria-label="View project"
              className="max-sm:border-transparent max-sm:aspect-square transition-all duration-700 text-sm sm:text-base bg-transparent group-hover:bg-primary-500 text-zinc-300 group-hover:text-zinc-950 rounded-full max-sm:h-10 justify-center sm:px-4 -tracking-100 sm:py-1.5 font-semibold border border-zinc-500 group-hover:border-primary-500 inline-flex items-center gap-2"
            >
              <span className="max-sm:hidden">View</span>
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="opacity-75 group-hover:opacity-100 sm:-mr-1 rotate-45 transition-transform group-hover:rotate-0 duration-700">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" d="M17.25 15.25v-8.5h-8.5M17 7L6.75 17.25"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  interface WorkProps {
    className?: string;
  }

  const Work: React.FC<WorkProps> = ({ className }) => {
    return (
      <section className={`mx-auto w-full max-w-4xl xl:max-w-8xl p-4 sm:p-8 xl:px-12 ${className ? className : ""}`}>
        <Title label="work" />
        <div className="gap-2 grid md:grid-cols-2">
          <JoinInTimetable />
          <JoinInTimetable />
          <JoinInTimetable />
          <JoinInTimetable />
        </div>
      </section>
    );
  };

  interface ContactProps {
    className?: string;
  }

  const Contact: React.FC<ContactProps> = ({ className }) => {
    return (
      <section className={`mx-auto w-full max-w-4xl xl:max-w-8xl p-4 sm:p-8 xl:px-12 xl:min-h-screen ${className ? className : ""}`}>
        <Title label="contact" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xl:grid-cols-12">
          <div className="contents xl:col-span-4 xl:row-span-3 xl:grid xl:grid-cols-subgrid xl:grid-rows-subgrid">
            <div className="grid grid-cols-4 items-center gap-2 rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 py-6 pl-6 pr-1  2xl:pr-0 xl:col-span-4 xl:grid-cols-subgrid">
              <div className="col-span-3 -mt-1 space-y-1">
                <div className="text-base font-medium -tracking-100 text-zinc-500">Email</div>
                <div className="text-base font-medium -tracking-100 xl:text-lg">jamestoone@me.com</div>
              </div>
              <div className="grid place-content-center">
                <svg className="size-7 sm:size-8 text-zinc-500 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth=".75"
                    d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                  ></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".75" d="M5.5 6.5L12 12.25L18.5 6.5"></path>
                </svg>
              </div>
            </div>
            <ol className="grid grid-cols-4 gap-2 xl:contents">
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M16.5 8C16.5 8.27614 16.2761 8.5 16 8.5C15.7239 8.5 15.5 8.27614 15.5 8C15.5 7.72386 15.7239 7.5 16 7.5C16.2761 7.5 16.5 7.72386 16.5 8Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M15.25 13C15.25 14.7949 13.7949 16.25 12 16.25C10.2051 16.25 8.75 14.7949 8.75 13C8.75 11.2051 10.2051 9.75 12 9.75C13.7949 9.75 15.25 11.2051 15.25 13Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path d="M8.27136 6.5C11.0577 8.10042 14.9494 11.1596 17.1497 16.5" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M16 6.38916C14.3573 8.37479 10.6906 11.7113 5 11" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M10.6876 18.9999C10.6876 18.9999 11.5 12.5001 18.7178 10.5001" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </li>
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                    stroke="currentColor"
                    strokeWidth=".75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path d="M10.75 11.75V16.25" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M7.75 11.75V16.25" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M7.75 8.75V9.25" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </li>
            </ol>
          </div>
          <div className="hidden xl:block row-span-3 relative overflow-clip rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900  xl:col-span-8 p-4 sm:p-6">
            <form action="#" method="POST" className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 xl:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-base font-medium -tracking-100">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="ring-1 ring-inset ring-zinc-50/5 block w-full rounded-md border-0 bg-zinc-800/75 px-3.5 py-2 text-white shadow-sm  focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-base font-medium -tracking-100">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="ring-1 ring-inset ring-zinc-50/5 block w-full rounded-md border-0 bg-zinc-800/75 px-3.5 py-2 text-white shadow-sm  focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-base font-medium -tracking-100">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="ring-1 ring-inset ring-zinc-50/5 block w-full rounded-md border-0 bg-zinc-800/75 px-3.5 py-2 text-white shadow-sm  focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone-number" className="block text-base font-medium -tracking-100">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="ring-1 ring-inset ring-zinc-50/5 block w-full rounded-md border-0 bg-zinc-800/75 px-3.5 py-2 text-white shadow-sm  focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="xl:col-span-2">
                  <label htmlFor="message" className="block text-base font-medium -tracking-100">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="ring-1 ring-inset ring-zinc-50/5 block w-full rounded-md border-0 bg-zinc-800/75 px-3.5 py-2 text-white shadow-sm  focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button type="submit" className="text-sm sm:text-base bg-primary-500 text-zinc-950 rounded-full px-3 sm:px-4 -tracking-100 py-1.5 font-semibold border border-primary-400">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };

  return (
    <ReactLenis root>
      <div className="xl:space-y-6">
        <Header />
        <Info className="fade-in-out-scroll" />
        <Work className="fade-in-out-scroll" />
        <Contact className="fade-in-out-scroll" />
      </div>
    </ReactLenis>
  );
}
