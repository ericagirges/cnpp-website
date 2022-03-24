import NotFound from '../404'

const StateContent = ({ data, state }) => {
  if (!data[state]) {
    return <NotFound />
  }

  return (
    <div className="bg-white">
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
        <h1 className="border-l-8 border-sbaYellow pl-2 text-5xl font-extrabold tracking-tight text-sbaBlue lg:text-6xl">
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
      {data[state].partners[0] && (
        <section
          className="relative z-10 mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="mb-3 text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-3xl md:text-left">
            Partner Organizations
          </h2>
          <div className="grid auto-rows-fr grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-y-7 lg:gap-x-8">
            {data[state].partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col rounded-2xl bg-white shadow-xl "
              >
                <div className="relative flex flex-1 flex-col items-center px-6 pt-16 pb-8 md:px-8">
                  <h3 className="pb-8 text-xl font-medium text-gray-900">
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
      )}
      <div className="items-left relative mx-auto flex max-w-7xl flex-col justify-between py-4 px-4 sm:py-4 sm:px-6 lg:px-8 ">
        <div>
          <p className="text-lg text-gray-500">{data[state].body}</p>
        </div>
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl md:text-left">
            Upcoming Events
          </h2>
          <div className="grid auto-rows-fr grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-y-7 lg:gap-x-8">
            {data[state].events.map((event) => (
              // <div className="mb-12 text-lg text-gray-600">
              //   <p className="text-xl text-gray-900">{event.title}</p>
              //   <p>{`${event.date} ${event.time}`}</p>
              //   {event.language && <p>Language: {event.language}</p>}
              //   {event.type && <p>Type: {event.type}</p>}
              //   {event.address && <p>Address: {event.address}</p>}
              //   {event.link && (
              //     <p>
              //       Sign up here:{' '}
              // <a
              //   className="text-sbaBlue hover:underline"
              //   href={event.link}
              // >
              //   Link
              // </a>
              //     </p>
              //   )}
              // </div>

              <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {event.title}
                  </h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                      <dt className="text-base font-medium text-gray-500">
                        When:
                      </dt>
                      <dd className="mt-1 text-base text-gray-900 sm:col-span-2 sm:mt-0">
                        {`${event.date} ${event.time}`}
                      </dd>
                    </div>
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
            ))}
          </div>
        </div>
        <div className="my-12 pt-3">
          <a href={data[state].upcoming.link}>
            <p className="text-lg text-gray-500">{data[state].upcoming.text}</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default StateContent
