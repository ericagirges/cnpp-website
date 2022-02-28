import {
  MapIcon,
  BookOpenIcon,
  ChatAlt2Icon,
  CalendarIcon,
} from '@heroicons/react/outline'

const informationBox = [
  //{
  //  title: 'Search for Community Navigators in your Region',
  //  icon: (
  //    <MapIcon className="invisible h-0 w-0 flex-initial text-sbaYellow lg:visible lg:h-32 lg:w-32" />
  //  ),
  //  description: [
  //    'Learn about the participating organizations',
  //    'See what resources are available within each state',
  //    "Locate services throug CNPP's ecosystem map",
  //  ],
  //},
  {
    title: 'Access Small Business Resources',
    icon: (
      <BookOpenIcon className="invisible h-0 w-0 flex-initial text-sbaYellow lg:visible lg:h-32 lg:w-32" />
    ),
    description: [
      'Find available business grants and loans',
      'Learn about CEO Lending',
      'Watch workshop presentations',
      'Download small business templates',
    ],
  },
  {
    title: 'Meet with a Business Counselor',
    icon: (
      <ChatAlt2Icon className="invisible h-0 w-0 flex-initial text-sbaYellow lg:visible lg:h-32 lg:w-32" />
    ),
    description: [
      'Fill out a contact form to get in touch with a business counselor to answer all your small businss questions',
    ],
  },
 // {
 //   title: 'Participate in upcoming events',
 //   icon: (
 //     <CalendarIcon className="invisible h-0 w-0 flex-initial text-sbaYellow lg:visible lg:h-32 lg:w-32" />
 //   ),
 //   description: [
 //     "Visit CNPP'S calendar of events to see what's comint up this month",
 //   ],
 // },
]

const InfoBox = () => {
  return (
    <ul>
      {informationBox.map((info) => {
        return (
          <div className="mt-8  bg-white pb-4 sm:mt-12 ">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-lg overflow-hidden  border border-t-4 border-t-sbaYellow shadow-lg lg:flex lg:max-w-none">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-sbaBlue sm:text-3xl">
                    {info.title}
                  </h3>
                  <div className="lg:mt-6 lg:flex">
                    {info.icon}
                    <ul
                      role="list"
                      className="pt-4 text-base text-gray-500"
                    >
                      {info.description.map((bullet) => (
                        <li
                          key={bullet}
                          className="ml-10 flex items-start text-sm text-gray-700 lg:text-lg lg:col-span-1"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </ul>
  )
}
export default InfoBox