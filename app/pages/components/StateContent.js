import NotFound from '../404'
import Link from 'next/link';
import GetConnected from './GetConnected';

const StateContent = ({ data, state }) => {
  if (!data) {
    return null
  } else if (!state){
    return null
  }

  return (
    <div className="bg-white max-w-screen-2xl mx-auto">
      <div className="relative h-96 bg-white pb-32 md:h-[34rem]">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co/mFfkCZ0/20130919-dalberico-bushra-mg-5463.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between pt-12 pb-8 px-4 sm:pt-20 sm:pb-12 sm:px-6 md:flex-row lg:px-8 ">
        <h1 className="border-l-8 border-sbaYellow pl-2 text-6xl font-extrabold tracking-tight text-sbaBlue lg:text-7xl">
          {data[state].name}
        </h1>

        {/* ===== ECOSYSTEM MAP BUTTON ==== */}
        {/* <div className="mt-6 bg-sbaYellow md:mt-0">
          <a
            href="#"
            className="block px-20 py-4 text-xl font-bold text-sbaBlue"
          >
            ECO SYSTEM MAP
          </a>
        </div> */}

      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:px-6 md:flex-row lg:px-8 ">
          <p className="text-lg sm:text-xl text-gray-500">{data[state].body}</p>
        </div>
        <div className="items-left relative mx-auto flex max-w-7xl flex-col justify-between py-4 px-4 sm:py-4 sm:px-6 lg:px-8 ">
        <div className="mt-8 sm:mt-14">
          <h2 className="mb-8 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-left">
            Upcoming Events
          </h2>
          <div className="grid auto-rows-fr grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-y-7 lg:gap-x-8">
            {data[state].events.map((event, i) => {
              return !event.title ? (
                <p className="-mt-7 text-lg text-gray-500">
                  Check back soon! Sign up for our{' '}
                  <Link href="/contact">
                    <span className="cursor-pointer text-sbaBlue">
                      newsletter
                    </span>
                  </Link>{' '}
                  to get the latest updates on upcoming events.
                </p>
              ) : (
                <div key={`${event.title} ${i}`} className="overflow-hidden bg-white shadow sm:rounded-lg">
                  <div className="bg-gray-50 px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {event.title}
                    </h3>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      {event.date && (
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-base font-medium text-gray-500">
                            When:
                          </dt>
                          <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                            {`${event.date} ${event.time}`}
                          </dd>
                        </div>
                      )}
                      {event.language && (
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-base font-medium text-gray-500">
                            Language:
                          </dt>
                          <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                            {event.language}
                          </dd>
                        </div>
                      )}
                      {event.type && (
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-base font-medium text-gray-500">
                            Event type:
                          </dt>
                          <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                            {event.type}
                          </dd>
                        </div>
                      )}
                      {event.address && (
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-base font-medium text-gray-500">
                            Where:
                          </dt>
                          <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                            {event.address}
                          </dd>
                        </div>
                      )}
                      {event.link && (
                        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-base font-medium text-gray-500">
                            Sign-up here:
                          </dt>
                          <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                            <a
                              className="text-sbaBlue hover:underline"
                              href={event.link}
                            >
                              Link
                            </a>
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="my-12 pt-3">
          <a href={data[state].upcoming.link}>
            <p className="text-lg text-gray-500">{data[state].upcoming.text}</p>
          </a>
        </div>
      </div>
      {data[state].partners[0] && (
        <section
          className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="mb-3 text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-left">
            Partner Organizations
          </h2>
          <div className="grid auto-rows-fr grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-y-7 lg:gap-x-8">
            {data[state].partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col rounded-2xl bg-white shadow-xl "
              >
                <div className="flex w-full basis-24 items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-gray-50 px-10 py-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    {partner.name}
                  </h3>
                </div>
                <div className="relative flex flex-1 flex-col items-center px-6 py-6 md:px-8">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="m-auto h-auto w-1/2 align-middle sm:w-3/4"
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
      )}
      <GetConnected />
    </div>
  )
}

export default StateContent
