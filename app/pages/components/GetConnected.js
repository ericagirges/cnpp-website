import React from 'react'
import Link from 'next/link'

const GetConnected = () => {
  return (
    <div className="fixed bottom-80 right-0 h-48 w-60 border-t-8 border-sbaYellow bg-white p-4 shadow-lg">
      <div className='opacity-40'></div>
      <h6 className="text-center text-lg font-semibold pb-4">
        Ready to meet with a Counselor?
      </h6>
      <Link href="/contact">
        <button
          type="button"
          className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-sbaBlue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Click here to get connected
        </button>
      </Link>
    </div>
  )
}

export default GetConnected
