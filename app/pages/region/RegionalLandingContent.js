import React from 'react'
import Link from 'next/link'

function RegionalLanding() {
  return (
    <>
      <div className="relative bg-sbaGray">
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
        <div className="relative mx-auto max-w-7xl py-32 px-4 sm:py-48 sm:px-6 lg:px-8">
        </div>
      </div>
      <div className="mx-auto my-10 flex max-w-screen-2xl flex-col justify-between px-4 md:flex-row">
        <div className="md:mr-[100px] md:w-9/12">
          <h2 className="mt-6 pb-4 text-3xl md:text-4xl font-semibold">Regional Program</h2>
          <p className="pb-10 text-xl md:text-2xl font-semibold">
            Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non
            adipisicing elit distinctio.
          </p>
          <p className="md:text-xl">
            Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque
            lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut
            consectetur. Sit justo viverra non adipisicing elit distinctio. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="my-8 rounded-md border bg-sbaBlue py-4 px-6 text-white md:w-3/5">
          <h2 className="mb-6 text-2xl md:text-3xl font-semibold">Available Services</h2>
          <ul className="list-inside list-disc md:text-xl">
            <li className="pb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
            <li className="pb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
            <li className="pb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
            <li className="pb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </li>
          </ul>
        </div>
      </div>
      <h3 className='text-center text-2xl md:text-3xl font-semibold mb-10 lg:mb-20'>Select a state below to learn about regional support, upcoming events and more.</h3>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mx-10 justify-center content-center mb-10'>
          <Link href="/region/arizona">
      <button className='border-t-4 border-sbaYellow bg-white'>
          <div className='mx-auto shadow-lg'>
            <h4 className='text-xl pt-2 font-bold text-sbaBlue uppercase'>Arizona</h4>
            <p>Icon goes here</p>
            </div>
        </button>
        </Link>
        <Link href="/region/california">
        <button className='border-t-4 border-sbaYellow bg-white'>
          <div className='mx-auto shadow-lg'>
            <h4 className='text-xl pt-2 font-bold text-sbaBlue uppercase'>California</h4>
            <p>Icon goes here</p>
            </div>
        </button>
        </Link>
        <Link href="/region/georgia">
        <button className='border-t-4 border-sbaYellow bg-white'>
          <div className='mx-auto shadow-lg'>
            <h4 className='text-xl pt-2 font-bold text-sbaBlue uppercase'>Georgia</h4>
            <p>Icon goes here</p>
            </div>
        </button>
        </Link>
        <Link href="/region/iowa">
        <button className='border-t-4 border-sbaYellow bg-white'>
          <div className='mx-auto shadow-lg'>
            <h4 className='text-xl pt-2 font-bold text-sbaBlue uppercase'>Iowa</h4>
            <p>Icon goes here</p>
            </div>
        </button>
        </Link>
        <Link href="/region/kansas">
        <button className='border-t-4 border-sbaYellow bg-white'>
          <div className='mx-auto shadow-lg'>
            <h4 className='text-xl pt-2 font-bold text-sbaBlue uppercase'>Kansas</h4>
            <p>Icon goes here</p>
            </div>
        </button>
        </Link>
        <Link href="/region/utah">
        <button className='border-t-4 border-sbaYellow bg-white'>
          <div className='mx-auto shadow-lg'>
            <h4 className='text-xl pt-2 font-bold text-sbaBlue uppercase'>Utah</h4>
            <p>Icon goes here</p>
            </div>
        </button>
        </Link>
      </div>
    </>
  )
}

export default RegionalLanding
