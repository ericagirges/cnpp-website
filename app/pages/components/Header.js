/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import {useRouter} from 'next/router'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

export default function Header() {
  const router = useRouter();
  const path = router.pathname
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`flex h-32 items-center justify-between ${path === "/contact" && "mr-4"}`}>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/">
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
                    <Link href="/">
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
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300  hover:text-white" */}
                    <Link href="/">
                      <a className="rounded-md px-3 md:px-5 py-2 text-sm md:text-base font-medium text-gray-500 hover:text-gray-900">
                        Home
                      </a>
                    </Link>
                    <Link href="/about">
                      <a className="rounded-md px-3 md:px-5 py-2 text-sm md:text-base font-medium text-gray-500 hover:text-gray-900">
                        About
                      </a>
                    </Link>
                    <Link href="/contact">
                      <a className="rounded-md px-3 md:px-5 py-2 text-sm md:text-base font-medium text-gray-500 hover:text-gray-900">
                        Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300  hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
