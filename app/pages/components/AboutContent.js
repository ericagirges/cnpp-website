import React from 'react'

function About() {
  return (
    <div>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
              <img
                className="h-56 w-full object-cover lg:absolute lg:col-span-2 lg:grid lg:h-full"
                src="https://i.ibb.co/mBcKms5/AOberstadt-Dallas03.jpg"
                alt="Woman sewing"
              />
            </div>
          </div>
          <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="lg:col-start-2 lg:pl-8">
              <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
                <h2 className="flex font-semibold uppercase leading-6 tracking-wide">
                  <span className="mr-5 w-7">
                    <img
                      className="h-7 w-7"
                      src="../irc_arrow_yellow.jpg"
                      alt="IRC logo black diagonal arrow on yellow square background"
                    ></img>
                  </span>
                  Who we are
                </h2>
                <h3 className="mt-4 border-l-4 border-sbaYellow pl-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  International Rescue Committee
                </h3>
                <p className="mt-8 text-lg text-gray-500">
                  The International Rescue Committee (IRC) helps people affected
                  by humanitarian crises—including the climate crisis—to
                  survive, recover and rebuild their lives. Founded at the call
                  of Albert Einstein in 1933, the IRC is now at work in over 40
                  crisis-affected countries as well as communities throughout
                  Europe and the Americas. We deliver a lasting impact by
                  providing health care, helping children learn, and empowering
                  individuals and communities to become self-reliant, always
                  seeking to address the inequalities facing women and girls.
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
                src="https://i.ibb.co/HxktwSk/AOberstadt-Washington-DC.jpg"
                alt="Man smiling"
              />
            </div>
          </div>
          <div className="relative px-4 pt-12 pb-16 sm:px-6 sm:pt-16 lg:mx-auto lg:mb-20 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div className="lg:col-end-2 lg:pr-8">
              <div className="mx-auto max-w-prose text-base lg:mr-auto lg:ml-0 lg:max-w-lg">
                <h2 className="flex items-center font-semibold uppercase leading-6 tracking-wide text-sbaBlue">
                  <span className="w-1/5">
                    <img
                      className="h-1/6"
                      src="../SBA-PoweredBy.jpg"
                      alt="IRC logo black diagonal arrow on yellow square background"
                    ></img>
                  </span>
                  Program overview
                </h2>
                <h3 className="mt-2 border-l-4 border-sbaBlue pl-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  Community Navigator Pilot Program
                </h3>
                <p className="mt-8 text-lg text-gray-500">
                  Part of a $100 million federal American Rescue Plan Act
                  initiative to support small business economic recovery, the
                  Community Navigator Pilot Program will help small business
                  owners build back resilient, thriving companies. The program
                  utilizes a “hub and spoke” model from public health care
                  federal programming, leveraging partnerships with trusted
                  community-based organizations to help small businesses
                  navigate government resources and critical resources. In the
                  two-year Community Navigator Pilot Program initiative, the IRC
                  will work with over 21 community-based partners across
                  Arizona, California, Georgia, Iowa, Kansas, and Utah to
                  support up to 3,000 diverse small business owners. With a
                  specific focus on refugee and immigrant business owners, the
                  IRC will help these businesses recover from the impacts of
                  COVID by providing counseling, technical assistance, and
                  support accessing up to $30 million in small business relief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
