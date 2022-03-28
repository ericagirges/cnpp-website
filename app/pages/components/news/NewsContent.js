import React from 'react'
import Link from 'next/link'
import UpdatesAccordion from './UpdatesAccordion'
import ModalLayout from './ModalLayout';
import { useState } from 'react';

const businessDescription1 = `Wichai is the proud owner of a local Salt Lake City restaurant,Laan Na Thai,which opened in 2016. Like many business owners, COVID-19 impacted their operations through a reduction of dine-in customers and loss of sales. Fortunately, he was one of the business owners who were able to apply for and receive the Paycheck Protection Program (PPP) Loan. However, when the loan forgiveness application came out, Wichai found the application process difficult and confusing as a limited English speaker to navigate. The IRC CNPP small business team, with the help of an interpreter, assisted himto collect all the necessary documents and apply for forgiveness support to Wichai in the entire process. Wichai was approved, and because of the assistance he received through CNPP, the business was able to receive $33,644 in PPP loan forgiveness. Now, the familycan focus on business operations and recovery without further liability.`

const businessDescription2 = `Barwin is the owner and chef of Aleppo Kitchen in Atlanta, Georgia. Originally from Syria, she is a wife, mother of five, and former high school history teacher, passionate about bringing traditional Syrian food to her new community. Launched in 2018, Barwin worked with the IRC to get her business license, ServSafe certification,and develop her social media and website pages. Before COVID-19, Barwin enjoyed catering events and parties. However, when the pandemic hit Georgia, she pivoted her business to operate mainly through farmers’ market stalls around Atlanta. In December, Barwin needed new equipment to expand her business and provide new products to customers, like falafel. She worked with a CNPP business advisor to prepare her loan application and receive a $10,000 loan with no interest or fees through the IRC’s Center of Economic Opportunity. With this loan, Barwin purchased much-needed equipment for her 
kitchen to meet customer demands and increase business revenue. `

function News() {
  return (
    <div className="px-20 md:px-10">
      <div className="relative mx-auto mt-8 max-w-screen-2xl border-b-8 border-sbaBlue pb-8 md:mt-[100px]">
        <h2 className="text-4xl font-extrabold text-sbaBlue sm:text-5xl lg:text-6xl">
          CNPP NEWS
        </h2>
        <p className="py-5 font-bold md:w-7/12 md:text-xl lg:text-2xl">
          Get the latest news, updates and hear how a Community Navigator can
          help small businesses.
        </p>
        <div>
          {/* <input placeholder="Enter your email"></input> */}
          <Link href="/contact">
            <button className="flex items-center justify-center rounded-md border border-transparent bg-sbaYellow px-8 py-2 text-base font-medium text-sbaBlue hover:bg-sbaGray md:text-lg">
              Subscribe
            </button>
          </Link>
          {/* <p>Subscribed ✅</p> */}
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl py-36">
        <h3 className="text-3xl font-extrabold uppercase tracking-wide text-sbaBlue md:text-4xl lg:text-5xl">
          Small Business Owner Spotlight
        </h3>
        <p className="mt-8 font-bold md:text-xl lg:text-2xl">
          Learn about other Small Business Owners and their experiences with
          CNPP.
        </p>
        <div className="mt-10 flex w-full flex-col justify-between md:flex-row">
          <div className="relative h-[400px] w-11/12 lg:h-[700px]">
            <div className="relative h-[400px] w-11/12 bg-business-spotlight-1 bg-cover bg-center lg:h-[700px]">
              <div className="h-full w-full bg-black opacity-40"></div>
              <p
                className="absolute left-2 bottom-10 py-8 text-2xl font-bold text-white"
              >
                Paycheck Protection Program Loan Forgiveness Assistance
              </p>
              {/* <p className="absolute left-2 bottom-7 text-2xl font-bold text-white">
                BUSINESS TITLE
              </p> */}
              <button
                onClick={() => {
                  ;<ModalLayout title={"Paycheck Protection Program Loan Forgiveness Assistance"} description={businessDescription1}/>
                }}
                className="absolute right-0 bottom-0 bg-sbaYellow py-3 px-10 font-bold text-sbaBlue hover:bg-sbaGray"
              >
                Read more
              </button>
            </div>
          </div>
          <div className="relative h-[400px] w-11/12 lg:h-[700px]">
            <div className="relative w-11/12 bg-business-spotlight-2 bg-cover bg-center bg-blend-color-dodge md:h-[400px] lg:h-[700px]">
              <div className="h-full w-full bg-black opacity-40"></div>
              <p className="absolute left-2 bottom-10 py-8 text-2xl font-bold text-white">
                No Interest Recovery Loan Application Assistance
              </p>
              {/* <p className="absolute left-2 bottom-7 text-2xl font-bold text-white">
                BUSINESS TITLE
              </p> */}
              <button className="absolute right-0 bottom-0 bg-sbaYellow py-3 px-10 font-bold text-sbaBlue hover:bg-sbaGray">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl border-t-8 border-sbaBlue py-3">
        <h3 className="pt-10 text-3xl font-extrabold uppercase tracking-wide text-sbaBlue md:text-4xl">
          Latest Updates
        </h3>
        <UpdatesAccordion />
      </div>
    </div>
  )
}

export default News
