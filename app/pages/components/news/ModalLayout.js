import React from 'react';

const businessImage1 = "https://i.ibb.co/w6mDdmL/Laan-Na-Thai.jpg"
const businessImage2 = "https://i.ibb.co/ZH0GXYv/Barwin-Aibesh-Aleppo-Kitchen.jpg"

const ModalLayout = ({setShowModal, titles, descriptions, activeIdx}) => {

    let index = parseInt(activeIdx)

    const getImage = () => {
      if(index === 0) {
        return businessImage1
      } else {
        return businessImage2
      }
    }

  return (
    <div
    className="fixed backdrop-blur-[1px] z-40 inset-0 bg-[#00000080]"
  >
    <div className="absolute inset-y-1/2 inset-x-1/2 -translate-x-1/2 -translate-y-1/2 bg-white max-h-fit w-4/5 lg:w-2/3 rounded-lg drop-shadow-lg text-white">
      <div className="flex-shrink-0">
        
      <img
        className="w-1/3 h-1/3 object-cover rounded-lg mx-auto pt-10"
        src={getImage()}
        alt={`${titles[index]} business owners`}
      />

      </div>
      <div className="flex flex-col text-center justify-center pt-4 md:pt-8 px-10">
        <h3 className="text-lg md:text-3xl font-bold text-sbaBlue drop-shadow-md mb-8">{titles[index]}</h3>
        <div className='object-contain max-h-72 overflow-auto'>
        <p className='bg-white text-black md:p-10 mt-4 text-sm md:text-lg text-left'>{descriptions[index]}</p>
        </div>
        <button
          className="absolute right-5 top-3 text-[20px] text-white"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
        >
          &#10006;
        </button>
      </div>
    </div>
  </div>
   
  )
};

export default ModalLayout;