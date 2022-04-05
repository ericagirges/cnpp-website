import React from 'react'

const ModalLayout = ({ setShowModal, content, activeIdx }) => {
  if (activeIdx === undefined) {
    return null
  }
  let index = parseInt(activeIdx)

  return (
    <div className="fixed inset-0 z-40 flex h-screen items-center justify-center bg-[#00000080] backdrop-blur-[1px]">
      <div className="overflow-hidden flex flex-col justify-center h-full max-h-[60%] w-4/5 rounded-lg bg-white text-white drop-shadow-lg lg:w-2/3">
        <img
          className="mx-auto mt-10 h-1/3 w-autorounded-lg object-contain"
          src={content[index].image}
          alt={`${content[index].title} business owners`}
        />

        <div className="flex flex-col justify-center px-10 pt-4 text-center md:pt-8">
          <h3 className="mb-8 text-lg font-bold text-sbaBlue md:text-3xl">
            {content[index].title}
          </h3>
          <div className="max-h-72 overflow-auto object-contain">
            <p className="mt-4 bg-white text-left text-sm text-black md:p-10 md:text-lg">
              {content[index].description}
            </p>
          </div>
          <button
            className="absolute right-5 top-3 text-[20px] text-gray-800"
            onClick={(e) => {
              e.preventDefault()
              setShowModal(false)
            }}
          >
            &#10006;
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalLayout
