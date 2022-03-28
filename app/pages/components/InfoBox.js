import Link from 'next/link'

import { MapIcon, BookOpenIcon, ChatAlt2Icon } from '@heroicons/react/outline'

const informationBox = [
  {
    title: 'Search for Community Navigators in your Region',
    icon: (
      <MapIcon className="invisible h-0 w-0 flex-initial text-sbaYellow lg:visible lg:h-32 lg:w-32" />
    ),
    description: [
      'Learn about the organizations in your region that are home to CNPP Community Navigators',
      'See what additional resources are available within each state – currently IRC’s CNPP program serves communities in California, Arizona, Utah, Iowa, and Georgia',
    ],
    href: '/region',
  },
  {
    title: 'Access Small Business Resources',
    icon: (
      <BookOpenIcon className="invisible h-0 w-0 flex-initial text-sbaYellow lg:visible lg:h-32 lg:w-32" />
    ),
    description: [
      'Find available business grants and other small business relief',
      'Learn about low-cost business loans available in your region',
      'Access trainings, workshops, and learning resources to strengthen your small business',
    ],
    href: '/resources',
  },
  {
    title: 'Meet With a CNPP Business Counselor',
    icon: (
      <ChatAlt2Icon className="invisible h-0 w-0 flex-initial text-sbaYellow lg:visible lg:h-32 lg:w-32" />
    ),
    description: [
      'Fill out a contact form to get in touch with a CNPP Business Counselor to answer all your small business questions',
    ],
    href: '/contact',
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
              <Link href={info.href}>
                <div className="mx-auto max-w-lg overflow-hidden  border border-t-4 border-t-sbaYellow shadow-lg lg:flex lg:max-w-none">
                  <div className="flex-1 cursor-pointer bg-white px-6 py-8 hover:bg-gray-50 lg:p-12">
                    <h3 className="text-2xl font-extrabold text-sbaBlue sm:text-3xl">
                      {info.title}
                    </h3>
                    <div className="lg:mt-6 lg:flex">
                      {info.icon}
                      <ul role="list" className="pt-4 text-base text-gray-500">
                        {info.description.map((bullet) => (
                          <li
                            key={bullet}
                            className="ml-10 flex items-start text-sm text-gray-700 lg:col-span-1 lg:text-lg"
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
