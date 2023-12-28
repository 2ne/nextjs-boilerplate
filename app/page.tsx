import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <>
      <header className="mx-auto w-full max-w-lg xl:max-w-7xl p-6 xl:px-12 flex justify-between items-center">
        <h1 className="font-semibold text-xl sm:text-2xl tracking-tighter sm:tracking-tight font-serif">
          jamestoone<span className=" bg-gradient-to-b from-emerald-400 to-emerald-300 text-transparent bg-clip-text">.design</span>
        </h1>
        <button
          type="button"
          className="text-sm sm:text-base from-emerald-400 to-emerald-300 bg-gradient-to-b text-zinc-950 rounded-full px-4 tracking-tight py-1.5 font-semibold border border-emerald-300"
        >
          Contact
        </button>
      </header>
      <section className="mx-auto w-full max-w-lg xl:max-w-7xl p-6 pt-3 xl:p-12">
        <h2 className="font-serif text-4xl sm:text-6xl my-6 leading-none">
          <span className="text-zinc-600 mr-0.5">/</span>
          <span className="bg-gradient-to-b from-emerald-400 to-emerald-500 text-transparent bg-clip-text">info</span>
        </h2>
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-12">
          <div className="max-xl:order-0 relative overflow-clip rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 p-6 ring-1 ring-inset ring-zinc-50/5 xl:col-span-4 xl:row-span-3 xl:grid xl:grid-rows-subgrid">
            <div className="relative mb-4 grid items-center xl:mb-0">
              <div className="absolute -top-1 -left-1 size-3.5 bg-emerald-400 rounded-full border border-zinc-950 ring-1 ring-zinc-50/10">
                <div className="absolute inset-px bg-gradient-to-br from-emerald-400 to-emerald-300 rounded-full animate-pulse"></div>
              </div>
              <Image alt="James Toone" width={80} height={80} className="object-cover object-left-top rounded-full size-20 bg-zinc-600 border border-zinc-950 ring-1 ring-zinc-50/10" src="/me.jpg" />
            </div>
            <div className="relative grid items-end gap-1.5 xl:row-span-2 xl:gap-0">
              <Balancer className="text-lg/6 font-medium tracking-tight sm:text-2xl xl:text-3xl">Bridging the gap between design and development.</Balancer>
              <div className="text-base sm:text-lg font-medium tracking-tight text-zinc-500">James Toone, Lead Product Designer.</div>
            </div>
          </div>
          <div className="contents xl:col-span-4 xl:row-span-3 xl:grid xl:grid-cols-subgrid xl:grid-rows-subgrid">
            <div className="max-xl:order-2 grid grid-cols-4 items-center gap-3 rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 py-6 pl-6 pr-1 ring-1 ring-inset ring-zinc-50/5 2xl:pr-0 xl:col-span-4 xl:grid-cols-subgrid">
              <div className="col-span-3 -mt-1 space-y-1">
                <div className="text-base sm:text-lg font-medium tracking-tight text-zinc-500">Title</div>
                <div className="text-base sm:text-lg font-medium tracking-tight xl:text-xl">Lead Product Designer</div>
              </div>
              <div className="grid place-content-center">
                <svg className="size-7 sm:size-8 text-zinc-500 " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.75 9.75C4.75 8.64543 5.64543 7.75 6.75 7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V9.75Z"
                    stroke="currentColor"
                    stroke-width=".75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M8.75 18.75V6.75C8.75 5.64543 9.64543 4.75 10.75 4.75H13.25C14.3546 4.75 15.25 5.64543 15.25 6.75V18.75"
                    stroke="currentColor"
                    stroke-width=".75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="max-xl:order-3 grid grid-cols-4 items-center gap-3 rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 py-6 pl-6 pr-1 ring-1 ring-inset ring-zinc-50/5 2xl:pr-0 xl:col-span-4 xl:grid-cols-subgrid">
              <div className="col-span-3 -mt-1 space-y-1">
                <div className="text-base sm:text-lg font-medium tracking-tight text-zinc-500">Location</div>
                <div className="text-base sm:text-lg font-medium tracking-tight xl:text-xl">Brighton, UK</div>
              </div>
              <div className="grid place-content-center">
                <svg className="size-8 text-zinc-500  xl:size-9" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width=".75"
                    d="M18.25 11C18.25 15 12 19.25 12 19.25C12 19.25 5.75 15 5.75 11C5.75 7.5 8.68629 4.75 12 4.75C15.3137 4.75 18.25 7.5 18.25 11Z"
                  ></path>
                  <circle cx="12" cy="11" r="2.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75"></circle>
                </svg>
              </div>
            </div>
            <ol className="max-xl:order-4 grid grid-cols-4 gap-3 xl:contents">
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ring-1 ring-inset ring-zinc-50/5">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                    stroke="currentColor"
                    stroke-width=".75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ring-1 ring-inset ring-zinc-50/5">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                    stroke="currentColor"
                    stroke-width=".75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.5 8C16.5 8.27614 16.2761 8.5 16 8.5C15.7239 8.5 15.5 8.27614 15.5 8C15.5 7.72386 15.7239 7.5 16 7.5C16.2761 7.5 16.5 7.72386 16.5 8Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M15.25 13C15.25 14.7949 13.7949 16.25 12 16.25C10.2051 16.25 8.75 14.7949 8.75 13C8.75 11.2051 10.2051 9.75 12 9.75C13.7949 9.75 15.25 11.2051 15.25 13Z"
                    stroke="currentColor"
                    stroke-width=".75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </li>
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ring-1 ring-inset ring-zinc-50/5">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
                    stroke="currentColor"
                    stroke-width=".75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M8.27136 6.5C11.0577 8.10042 14.9494 11.1596 17.1497 16.5" stroke="currentColor" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M16 6.38916C14.3573 8.37479 10.6906 11.7113 5 11" stroke="currentColor" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M10.6876 18.9999C10.6876 18.9999 11.5 12.5001 18.7178 10.5001" stroke="currentColor" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </li>
              <li className="grid aspect-square place-content-center rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 ring-1 ring-inset ring-zinc-50/5">
                <svg className="size-8 text-zinc-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                    stroke="currentColor"
                    stroke-width=".75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                    stroke="currentColor"
                    stroke-width=".75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M10.75 11.75V16.25" stroke="currentColor" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M7.75 11.75V16.25" stroke="currentColor" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M7.75 8.75V9.25" stroke="currentColor" stroke-width=".75" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </li>
            </ol>
          </div>
          <div className="max-xl:order-1 rounded-2xl bg-gradient-to-tl from-zinc-900/75 to-zinc-900 p-6 ring-1 ring-inset ring-zinc-50/5 xl:col-span-4 xl:row-span-3">
            <div className="-mt-1">
              <div className="text-base sm:text-lg font-medium tracking-tight text-zinc-500 mb-2.5">About</div>
              <Balancer className="text-base sm:text-lg space-y-3 text-balance">
                <p>I lead teams to deliver refined, user focused products while utilising a streamlined UX process.</p>
                <p>I specialise in design and coding protoypes using intuitive design systems and UI kits, fostering scalable teamwork and sustainable practices.</p>
              </Balancer>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-lg xl:max-w-7xl p-6 pt-3 xl:p-12">
        <h2 className="font-serif text-4xl sm:text-6xl my-6 leading-none">
          <span className="text-zinc-600 mr-0.5">/</span>
          <span className="bg-gradient-to-b from-emerald-400 to-emerald-500 text-transparent bg-clip-text">work</span>
        </h2>
      </section>
    </>
  );
}
