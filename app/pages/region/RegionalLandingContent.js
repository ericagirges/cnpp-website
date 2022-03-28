import React from 'react'
import Link from 'next/link'
import GetConnected from '../components/GetConnected';

function RegionalLanding() {
  return (
    <>
      <div className="relative bg-sbaGray max-w-screen-2xl mx-auto">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover object-top"
            src="https://i.ibb.co/6wj0nJJ/woman-selling-1.jpg"
            alt="need copy"
          />
          <div
            className="absolute inset-0 bg-sbaGray mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative mx-auto max-w-7xl py-32 px-4 sm:py-48 sm:px-6 lg:px-8"></div>
      </div>
      <div className="mx-auto my-10 flex max-w-screen-2xl flex-col justify-between px-8 md:flex-row">
        <div className="md:mr-[100px] md:w-9/12">
          <h2 className="mt-6 pb-4 text-3xl font-bold md:text-4xl">
            Regional Program
          </h2>
          {/* <p className="pb-10 text-xl font-semibold md:text-2xl">
            Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non
            adipisicing elit distinctio.
          </p> */}
          <p className="md:text-xl text-gray-500">
            The International Rescue Committee and regional partners help local
            small businesses recover and prosper by delivering no-cost business
            assistance through in-language technical assistance training and
            access to grants and loans to support entrepreneurs sustain and
            expand their businesses. The program is open to all business owners,
            with a focus on helping refugees, immigrants, and individuals from
            underserved communities. IRC’s CNPP offers various programs and
            assistance to help your business bounce back from the hardship
            caused by the pandemic. Available Services (Bullets):
          </p>
        </div>
        <div className="my-8 rounded-md border bg-sbaBlue py-4 px-6 text-white md:w-3/5">
          <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
            Available Services
          </h2>
          <ul className="list-disc md:text-xl px-8">
            <li className="pb-4">
            One-on-One technical assistance and coaching with a business counselor
            </li>
            <li className="pb-4">
            Financial assistance and access to capital
            </li>
            <li className="pb-4">
            Live webinars and in-person workshops available throughout the year ona variety of topics to prepare you for growth. Check out your state’s page for more details.
            </li>
            <li className="pb-4">
            Support with contracting and procurement
            </li>
            <li className="pb-4">
            Assistance with marketing, operations, and sales
            </li>
            <li className="pb-4">
            Industry-specific training and resources
            </li>
          </ul>
        </div>
      </div>
      <h3 className="mb-10 text-center text-2xl font-semibold md:text-3xl lg:mb-20">
        Select a state below to learn about regional support, upcoming events
        and more.
      </h3>
      <div className="mx-auto mb-10 grid grid-cols-1 sm:grid-cols-2 content-center justify-center gap-10 md:grid-cols-3 max-w-7xl">
        <Link href="/region/arizona">
          <button className="border-t-8 border-sbaYellow bg-white">
            <div className="mx-auto pb-2 shadow-lg hover:bg-gray-50 hover:underline hover:decoration-sbaBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <h4 className="pt-2 text-xl font-bold uppercase text-sbaBlue md:text-2xl">
                Arizona
              </h4>
              <img
                className="mx-auto my-10 h-[200px] w-auto"
                src="https://i.ibb.co/1QNPV9c/icons8-arizona-90.png"
              />
            </div>
          </button>
        </Link>
        <Link href="/region/california">
          <button className="border-t-8 border-sbaYellow bg-white">
            <div className="mx-auto pb-2 shadow-lg hover:bg-gray-50 hover:underline hover:decoration-sbaBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <h4 className="pt-2 text-xl font-bold uppercase text-sbaBlue md:text-2xl">
                California
              </h4>
              <img
                className="mx-auto my-10 h-[200px] w-auto"
                src="https://i.ibb.co/rkmGKh7/icons8-california-100.png"
              />
            </div>
          </button>
        </Link>
        <Link href="/region/georgia">
          <button className="border-t-8 border-sbaYellow bg-white">
            <div className="mx-auto pb-2 shadow-lg hover:bg-gray-50 hover:underline hover:decoration-sbaBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <h4 className="pt-2 text-xl font-bold uppercase text-sbaBlue md:text-2xl">
                Georgia
              </h4>
              <img
                className="mx-auto my-10 h-[200px] w-auto"
                src="https://i.ibb.co/KxzQw0q/icons8-georgia-100.png"
              />
            </div>
          </button>
        </Link>
        <Link href="/region/iowa">
          <button className="border-t-8 border-sbaYellow bg-white">
            <div className="mx-auto pb-2 shadow-lg hover:bg-gray-50 hover:underline hover:decoration-sbaBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <h4 className="pt-2 text-xl font-bold uppercase text-sbaBlue md:text-2xl">
                Iowa
              </h4>
              <img
                className="mx-auto my-10 h-[200px] w-auto"
                src="https://i.ibb.co/nM3LZ0B/icons8-iowa-100.png"
              />
            </div>
          </button>
        </Link>
        <Link href="/region/kansas">
          <button className="border-t-8 border-sbaYellow bg-white">
            <div className="mx-auto pb-2 shadow-lg hover:bg-gray-50 hover:underline hover:decoration-sbaBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <h4 className="pt-2 text-xl font-bold uppercase text-sbaBlue md:text-2xl">
                Kansas
              </h4>
              <img
                className="mx-auto my-10 h-[200px] w-auto"
                src="https://i.ibb.co/1qng885/icons8-kansas-100.png"
              />
            </div>
          </button>
        </Link>
        <Link href="/region/utah">
          <button className="border-t-8 border-sbaYellow bg-white">
            <div className="mx-auto pb-2 shadow-lg hover:bg-gray-50 hover:underline hover:decoration-sbaBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <h4 className="pt-2 text-xl font-bold uppercase text-sbaBlue md:text-2xl">
                Utah
              </h4>
              <img
                className="mx-auto my-10 h-[200px] w-auto"
                src="https://i.ibb.co/ck954WH/icons8-utah-100.png"
              />
            </div>
          </button>
        </Link>
      </div>
    </>
  )
}

export default RegionalLanding
