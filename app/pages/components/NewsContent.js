import React from 'react'
import Link from 'next/link'

function News() {
  return (
    <>
      <div className="relative mx-auto mt-8 max-w-screen-2xl border-b-8 border-sbaBlue pb-8 md:mt-[100px]">
        <h2 className="text-4xl font-extrabold text-sbaBlue sm:text-5xl">
          CNPP NEWS
        </h2>
        <p className="py-5 font-bold md:w-1/3 md:text-xl">
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
      <div className="mx-auto max-w-screen-2xl border-b-8 border-sbaBlue py-36">
        <h3 className="text-3xl font-extrabold uppercase tracking-wide text-sbaBlue md:text-4xl">
          Small Business Owner Spotlight
        </h3>
        <p className="mt-8 font-bold md:text-xl">
          Learn about other Small Business Owners and their experiences with
          CNPP.
        </p>
        <div>
            <div>
                <p>BUSINESS OWNER'S NAME</p>
                <p>BUSINESS TITLE</p>
            </div>
            <div>
            </div>
        </div>
      </div>
      <div className='mx-auto max-w-screen-2xl py-36'>
        <h3 className="text-3xl font-extrabold uppercase tracking-wide text-sbaBlue md:text-4xl">
          Latest Updates
        </h3>
      </div>
    </>
  )
}

export default News
