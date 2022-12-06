import React from 'react'
import Link from 'next/link'
import { StateData } from '../../page-content/StateContent'
import GetConnected from '../components/GetConnected'

function RegionalLanding() {
  return (
    <>
      <div className="relative mx-auto md:h-[600px] max-w-screen-2xl bg-sbaGray">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover object-top"
            src="https://i.ibb.co/j38LKz5/hero-1-1-1.jpg"
            alt="a woman and man sitting at a table looking at paperwork while another man is standing over them providing them with guidance through their documents"
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
          <p className="text-gray-500 md:text-xl">
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
          <ul className="list-disc px-8 md:text-xl">
            <li className="pb-4">
              One-on-One technical assistance and coaching with a business
              counselor
            </li>
            <li className="pb-4">Financial assistance and access to capital</li>
            <li className="pb-4">
              Live webinars and in-person workshops available throughout the
              year ona variety of topics to prepare you for growth. Check out
              your state’s page for more details.
            </li>
            <li className="pb-4">Support with contracting and procurement</li>
            <li className="pb-4">
              Assistance with marketing, operations, and sales
            </li>
            <li className="pb-4">Industry-specific training and resources</li>
          </ul>
        </div>
      </div>
      <h3 className="mb-10 text-center text-2xl font-semibold md:text-3xl lg:mb-20">
        Select a state below to learn about regional support, upcoming events
        and more.
      </h3>
      <div className="mx-auto mb-10 grid max-w-7xl grid-cols-1 content-center justify-center gap-10 px-10 sm:grid-cols-2 md:grid-cols-3">
        {Object.keys(StateData).map((key) => (
          <Link key={StateData[key].name} href={`/region/${key}`}>
            <button className="border-t-8 border-sbaYellow bg-white">
              <div className="mx-auto pb-2 shadow-lg hover:bg-gray-50 hover:underline hover:decoration-sbaBlue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <h4 className="pt-2 text-xl font-bold uppercase text-sbaBlue md:text-2xl">
                  {key}
                </h4>
                <img
                  className="mx-auto my-10 h-[200px] w-auto"
                  src={StateData[key].map}
                />
              </div>
            </button>
          </Link>
        ))}
      </div>
      <GetConnected />
    </>
  )
}

export default RegionalLanding
