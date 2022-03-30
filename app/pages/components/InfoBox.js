import Link from 'next/link'

import {HomePageContent} from "../../page-content/HomePageContent"

const InfoBox = () => {
  return (
    <ul>
      {HomePageContent.map((info) => {
        return (
          <div className="mt-8  bg-white pb-4 sm:mt-12 ">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Link href={info.href}>
                <div className="mx-auto max-w-lg overflow-hidden  border border-t-4 border-t-sbaYellow shadow-lg lg:flex lg:max-w-none">
                  <div className="flex-1 cursor-pointer bg-white px-6 py-8 hover:bg-gray-50 lg:p-12">
                    <h3 className="text-2xl font-extrabold text-sbaBlue sm:text-3xl">
                      {info.title}
                    </h3>
                    <div className="lg:mt-6 lg:flex">
                      {info.icon}
                      <ul role="list" className="pt-4 text-base text-gray-500 list-disc flex flex-col items-start">
                        {info.description.map((bullet) => (
                          <li
                            key={bullet}
                            className="ml-6 sm:ml-10 text-sm text-gray-700 lg:col-span-1 lg:text-lg"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )
      })}
    </ul>
  )
}
export default InfoBox
