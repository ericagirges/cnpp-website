import React from 'react'
import Link from 'next/link'
import { BsX, BsPlusSquareFill } from 'react-icons/bs'
import { useState } from 'react'

const GetConnected = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      {isOpen ? (
        <div className="fixed z-30 bottom-2 right-2 h-52 w-64 rounded-md border-t-8 border-sbaYellow px-4 pt-8 shadow-lg object-right-bottom	">
          <div className="fixed bottom-2 right-2 h-52 w-64 border-t-8 border-sbaYellow bg-white p-4 text-center opacity-60"></div>
          <div className="fixed bottom-2 right-2 mb-4 text-center">
            <button onClick={() => setIsOpen(false)} className="mr-56 mb-4">
              <BsX className="h-6 w-6 text-sbaBlue" />
            </button>
            <h6 className="mb-2 w-60 text-center text-xl font-semibold">
              Ready to meet with a Business Navigator?
            </h6>
            <Link href="/contact">
              <button className="my-2 inline-flex w-48 rounded-full border border-transparent bg-sbaBlue px-3.5 py-2 text-center text-sm font-medium leading-4 text-white shadow-sm hover:bg-sbaYellow hover:text-sbaBlue focus:outline-none focus:ring-2 focus:ring-sbaGray focus:ring-offset-2">
                Click here to get connected
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            setIsOpen(true)
          }}
          className="fixed z-30 bottom-80 right-0"
        >
          <BsPlusSquareFill className="h-10 w-10 text-sbaYellow" />
        </button>
      )}
    </>
  )
}

export default GetConnected
