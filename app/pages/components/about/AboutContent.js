import React from 'react'
import GetConnected from '../GetConnected'
import PageContent from '../../../page-content/AboutPageContent'

function About() {
  return (
    <div>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:col-span-2 lg:grid lg:h-full"
                src={PageContent.section1.image}
                alt={PageContent.section1.imageAlt}
              />
            </div>
          </div>
          <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                <h2 className="flex font-semibold uppercase leading-6 tracking-wide text-sbaBlue">
                  <span className="mr-5 w-7">
                    <img
                      className="h-7 w-7"
                      src={PageContent.section1.taglineImage}
                      alt={PageContent.section1.taglineImageAlt}
                    ></img>
                  </span>
                  {PageContent.section1.tagline}
                </h2>
                <h3 className="mt-4 border-l-4 border-sbaYellow pl-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {PageContent.section1.title}
                </h3>
                <p className="mt-8 text-lg text-gray-500">
                  {PageContent.section1.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:py-12"></div>
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:h-full"
                src={PageContent.section2.image}
                alt={PageContent.section2.imageAlt}
              />
            </div>
          </div>
          <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:mb-20 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="lg:col-end-2 lg:pr-8">
              <div className="mx-auto max-w-prose text-base lg:mr-auto lg:ml-0 lg:max-w-lg">
                <h2 className="flex items-center font-semibold uppercase leading-6 tracking-wide text-sbaBlue">
                  <span className="mr-5 w-12">
                    <img
                      className="h-auto w-12"
                      src={PageContent.section2.taglineImage}
                      alt={PageContent.section2.taglineImageAlt}
                    ></img>
                  </span>
                  {PageContent.section2.tagline}
                </h2>
                <h3 className="mt-2 border-l-4 border-sbaBlue pl-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {PageContent.section2.title}
                </h3>
                <p className="mt-8 text-lg text-gray-500">
                  {PageContent.section2.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetConnected />
    </div>
  )
}

export default About
