import React from 'react'
import Link from 'next/link'
import UpdatesAccordion from './UpdatesAccordion'
import ModalLayout from './ModalLayout'
import GetConnected from '../GetConnected'
import { useState } from 'react'

import { BizOwnerContent } from '../../../page-content/SmallBizOwnerContent'

function News() {
  const [showModal, setShowModal] = useState(false)
  const [activeIdx, setActiveIdx] = useState()
  return (
    <div className="px-10 max-w-7xl mx-auto">
      <div className="relative mx-auto mt-8 max-w-7xl border-b-8 border-sbaBlue pb-8 md:mt-12">
        <h2 className="text-4xl font-extrabold text-sbaBlue sm:text-5xl lg:text-6xl">
          CNPP NEWS
        </h2>
        <p className="py-5 font-bold md:w-7/12 md:text-xl lg:text-2xl">
          Get the latest news, updates and hear how a Community Navigator can
          help small businesses.
        </p>
        <div>
          <Link href="/contact">
            <button className="flex items-center justify-center rounded-md border border-transparent bg-sbaYellow px-8 py-2 text-base font-medium text-sbaBlue hover:bg-sbaGray md:text-lg">
              Subscribe
            </button>
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-screen-lg py-16 lg:py-24">
        <h3 className="text-2xl font-extrabold uppercase tracking-wide text-sbaBlue md:text-4xl lg:text-5xl">
          Small Business Owner Spotlight
        </h3>
        <p className="mt-8 font-bold md:mb-10 md:text-xl lg:text-2xl">
          Learn about other Small Business Owners and their experiences with
          CNPP.
        </p>
        <div className=" flex min-h-fit max-w-screen-lg flex-col flex-wrap content-between md:mt-0 md:flex-row md:flex-nowrap md:justify-between">
          {BizOwnerContent.map((item, i) =>  (
              <div className="relative mt-10 h-[300px] w-11/12 self-auto md:h-[400px] lg:h-[700px]">
                <div
                  className={`relative h-[300px] w-11/12 ${i === 0 ? 'bg-business-spotlight-1' : 'bg-business-spotlight-2'} bg-cover bg-center md:h-[400px] lg:h-[700px]`}
                >
                  <div className="h-full w-full bg-black opacity-40"></div>
                  <p className="absolute left-2 bottom-10 py-8 text-lg font-bold text-white sm:text-2xl">
                    {item.title}
                  </p>
                  <button
                    id="0"
                    onClick={(e) => {
                      e.preventDefault()
                      setShowModal(true)
                      setActiveIdx(item.id)
                    }}
                    className="absolute right-0 bottom-0 bg-sbaYellow py-2 px-8 font-bold text-sbaBlue hover:bg-sbaGray md:py-3 md:px-10"
                  >
                    Read more
                  </button>
                </div>
              </div>
            )
          )}
          {showModal && (
            <ModalLayout
              setShowModal={setShowModal}
              content={BizOwnerContent}
              activeIdx={activeIdx}
            />
          )}
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl border-t-8 border-sbaBlue py-3">
        <h3 className="pt-10 text-2xl font-extrabold uppercase tracking-wide text-sbaBlue md:text-4xl">
          Latest Updates
        </h3>
        <UpdatesAccordion />
      </div>
      <GetConnected />
    </div>
  )
}

export default News
