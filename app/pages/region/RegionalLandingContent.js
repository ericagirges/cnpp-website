import React from 'react'
import Link from 'next/link'

function RegionalLanding() {
  return (
    <>
      <div className="relative bg-sbaGray">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/M1yjK8T/20210830-AOberstadt-Richmond-012.jpg"
            alt="need copy"
          />
          <div
            className="absolute inset-0 bg-sbaGray mix-blend-multiply"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio.
          </p>
        </div>
      </div>
      <div className="flex flex-col mx-auto md:flex-row justify-between px-4 my-10 max-w-screen-2xl">
        <div className="md:w-9/12 md:mr-[100px]">
          <h2 className="mt-6 pb-4 text-4xl font-semibold">Regional Program</h2>
          <p className="pb-10 text-2xl font-semibold">
            Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non
            adipisicing elit distinctio.
          </p>
          <p className="text-xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className='bg-sbaBlue border rounded-md my-8 text-white py-4 px-6 md:w-3/5'>
          <h2 className="text-3xl font-semibold mb-6">Available Services</h2>
          <ul className='list-disc list-inside text-xl'>
            <li className='pb-4'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
            <li className='pb-4'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
            <li className='pb-4'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
            <li className='pb-4'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default RegionalLanding
