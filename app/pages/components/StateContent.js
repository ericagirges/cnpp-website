import Link from 'next/link'

import NotFound from '../404'

const StateContent = ({ data, state }) => {
  if (!data[state]) {
    return <NotFound />
  }

  //   return (
  // <div>
  //   <h1>{data[state].name}</h1>
  //   {data[state].partners.map((partner) => (
  //     <p key={partner.name}>{partner.name}</p>
  //   ))}
  // </div>

  /* This example requires Tailwind CSS v2.0+ */

  const supportLinks = [
    {
      name: 'Sales',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    },
    {
      name: 'Technical Support',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    },
    {
      name: 'Media Inquiries',
      href: '#',
      description:
        'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative h-96 bg-white pb-32 md:h-[34rem]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/mFfkCZ0/20130919-dalberico-bushra-mg-5463.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between py-12 px-4 sm:py-24 sm:px-6 md:flex-row lg:px-8 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-sbaBlue lg:text-6xl">
          <span className="mr-4 hidden align-top text-sbaYellow md:inline-block">
            |
          </span>
          {data[state].name}
        </h1>
        <div className="mt-6 bg-sbaYellow md:mt-0">
          <a
            href="#"
            className="block px-20 py-4 text-xl font-bold text-sbaBlue"
          >
            ECO SYSTEM MAP
          </a>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-y-7 lg:gap-x-8">
          {data[state].partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col rounded-2xl bg-white shadow-xl"
            >
              <div className="relative flex flex-1 flex-col items-center px-6 pt-16 pb-8 md:px-8">
                <h3 className="text-xl font-medium text-gray-900">
                  {partner.name}
                </h3>

                <img
                  src={partner.image}
                  alt=""
                  className="m-auto align-middle"
                />
              </div>
              <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-sbaBlue hover:text-sbaLiteBlue"
                >
                  Learn More<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default StateContent
