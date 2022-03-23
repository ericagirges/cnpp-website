import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const mobileMenu = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Small Business Resources', href: '/about' },
  { name: 'News', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
]

const stateArr = [
  {
    name: 'Overview',
    description: "A nice description of what they'll find on this page",
    href: '#',
  },
  {
    name: 'Arizona',
    description: "A nice description of what they'll find on this page",
    href: '#',
  },
  {
    name: 'California',
    description: "A nice description of what they'll find on this page",
    href: '#',
  },
  {
    name: 'Georgia',
    description: "A nice description of what they'll find on this page",
    href: '#',
  },
  { name: 'Iowa', description: '', href: '#' },
  { name: 'Kansas', description: '', href: '#' },
  { name: 'Utah', description: '', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={`/`}>
                <a>
                  {' '}
                  <img
                    className="block h-16 w-auto lg:hidden"
                    src="https://i.ibb.co/XZpLBp9/SBA-Powered-By-2color-transparent-FINAL.png"
                    alt="SBA Logo"
                  />
                  <img
                    className="hidden h-24 w-auto lg:block"
                    src="https://i.ibb.co/XZpLBp9/SBA-Powered-By-2color-transparent-FINAL.png"
                    alt="SBA Logo"
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href={`/`}>
                <a>
                  <h2 className="text-sm font-bold text-sbaBlue lg:text-base">
                    COMMUNITY NAVIGATOR
                    <br />
                    PILOT PROGRAM
                  </h2>
                </a>
              </Link>
            </div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Link>
              <a
                href="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a>
              </Link>
              <Link>
              <a
                href="/about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </a>
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span>Regional Program</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-20 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {stateArr.map((item) => (
                              <Link>
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 block rounded-md p-3 hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Small Business Resources
              </a>
              </Link>
              <Link>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                News
              </a>
              </Link>
              <Link>
              <a
                href="/contact"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact us
              </a>
              </Link>
            </Popover.Group>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-16 w-auto"
                    src="https://i.ibb.co/XZpLBp9/SBA-Powered-By-2color-transparent-FINAL.png"
                    alt="Community Navigator Pilot Program"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {mobileMenu.map((item) => (
                    <Link>
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                        {item.name}
                    </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 pb-6">
              <p className="my-6  text-lg font-medium text-sbaBlue">
                Regional Program Pages
              </p>
              <div className="grid grid-cols-1 gap-4">
                {stateArr.map((item) => (
                  <Link>
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
