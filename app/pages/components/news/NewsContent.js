import React from 'react';
import Link from 'next/link';
import UpdatesAccordion from './UpdatesAccordion';

function News() {
  return (
    <div className="px-20 md:px-10">
      <div className="relative mx-auto mt-8 max-w-screen-2xl border-b-8 border-sbaBlue pb-8 md:mt-[100px]">
        <h2 className="text-4xl font-extrabold text-sbaBlue sm:text-5xl lg:text-6xl">
          CNPP NEWS
        </h2>
        <p className="py-5 font-bold md:w-7/12 md:text-xl lg:text-2xl">
          Get the latest news, updates and hear how a Community Navigator can
          help small businesses.
        </p>
        <div>
          {/* <input placeholder="Enter your email"></input> */}
          <Link href="/contact">
            <button className="flex items-center justify-center rounded-md border border-transparent bg-sbaYellow px-8 py-2 text-base font-medium text-sbaBlue hover:bg-sbaGray md:text-lg">
              Subscribe
            </button>
          </Link>
          {/* <p>Subscribed ✅</p> */}
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl py-36">
        <h3 className="text-3xl font-extrabold uppercase tracking-wide text-sbaBlue md:text-4xl lg:text-5xl">
          Small Business Owner Spotlight
        </h3>
        <p className="mt-8 font-bold md:text-xl lg:text-2xl">
          Learn about other Small Business Owners and their experiences with
          CNPP.
        </p>
        <div className="mt-10 flex w-full flex-col justify-between md:flex-row">
          <div className="relative h-[400px] w-11/12 lg:h-[700px]">
            <div className="absolute h-[400px] w-11/12 bg-black opacity-40 lg:h-[700px]"></div>
            <div className="h-[400px] w-11/12 bg-business-spotlight-1 bg-cover bg-center lg:h-[700px]">
              <p className="absolute left-2 bottom-10 py-8 text-2xl font-bold text-white">
                BUSINESS OWNER'S NAME
              </p>
              <p className="absolute left-2 bottom-7 text-2xl font-bold text-white">
                BUSINESS TITLE
              </p>
              <button className="absolute right-0 bottom-0 bg-sbaYellow py-3 px-10 font-bold text-sbaBlue hover:bg-sbaGray">
                Read more
              </button>
            </div>
          </div>
          <div className="relative h-[400px] w-11/12 lg:h-[700px]">
            <div className="absolute h-[400px] w-11/12 bg-black opacity-40 lg:h-[700px]"></div>
            <div className="w-11/12 bg-business-spotlight-2 bg-cover bg-center md:h-[400px] lg:h-[700px]">
              <p className="absolute left-2 bottom-10 py-8 text-2xl font-bold text-white">
                BUSINESS OWNER'S NAME
              </p>
              <p className="absolute left-2 bottom-7 text-2xl font-bold text-white">
                BUSINESS TITLE
              </p>
              <button className="absolute right-0 bottom-0 bg-sbaYellow py-3 px-10 font-bold text-sbaBlue hover:bg-sbaGray">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl border-t-8 border-sbaBlue py-3">
        <h3 className="pt-10 text-3xl font-extrabold uppercase tracking-wide text-sbaBlue md:text-4xl">
          Latest Updates
        </h3>
        <UpdatesAccordion />
      </div>
    </div>
  )
}

export default News
