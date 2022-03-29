import React from 'react';
import { BsX } from 'react-icons';

const ModalLayout = ({setShowModal, titles, descriptions, activeIdx}) => {

    let index = parseInt(activeIdx)

  return (
    <div
    className="fixed backdrop-blur-[1px] z-50 inset-0 bg-[#00000080]"
  >
    <div className="absolute inset-y-1/2 inset-x-1/2 -translate-x-1/2 -translate-y-1/2 bg-sbaBlue h-2/4 w-4/5 lg:w-2/3 w-rounded-lg drop-shadow-lg text-white overflow-auto">
      <div className="flex flex-col text-center justify-center pt-14 px-10">
        <h3 className="text-lg md:text-3xl text-white drop-shadow-md">{titles[index]}</h3>
        <p className='bg-white rounded-lg text-black p-10 mt-8 h-1/2 text-sm md:text-lg drop-shadow-lg'>{descriptions[index]}</p>
        <button
          className="absolute right-5 top-3 text-[20px] text-white"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
        >
            {/* <BsX className="text-white"/> */}
          &#10006;
        </button>
      </div>
    </div>
  </div>
   
  )
};

export default ModalLayout;