import React from 'react';
import Link from 'next/link';

const GetConnected = () => {

  return (
    <div className='fixed bottom-80 right-0 w-60 h-32 border-t-8 border-sbaYellow p-4 shadow-lg'>
        {/* <div className='w-full h-full opacity-40'></div> */}
        <h6 className='text-lg font-semibold text-center'>Ready to meet with a Counselor?</h6>
        <button>Click here to get connected</button>
    </div>
  )
}

export default GetConnected