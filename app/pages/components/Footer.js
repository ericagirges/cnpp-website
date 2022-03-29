import Link from 'next/link'
import { MailIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Regional Program', href: '/region' },
  { name: 'Small Business Resources', href: '/resources' },
  { name: 'News', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-sbaBlue">
      <div className="mx-auto flex max-w-7xl flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="footer-mobile sm:footer text-center flex flex-wrap justify-center">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className="inline-block text-white text-base font-medium hover:text-gray-300 pl-6 pr-6 pb-6 sm:pb:3 md:pb-0 ">{item.name}</a>
            </Link>
          ))}
        </div>
        <div className="mt-8 w-full flex items-center flex-col">
          <div className="flex mb-6">
            <div className="flex-shrink-0">
              <MailIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div className="ml-3 text-base font-medium text-white hover:text-gray-300 block">
              <a
                href="mailto:sbacommunity.navigators@rescue.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>sbacommunity.navigators@rescue.org</p>
              </a>
            </div>
          </div>
          <div className="flex h-10 items-center justify-center mt-8 md:mt-0">
            <a
              href="https://www.rescue.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="mr-5 h-10 w-auto"
                src="https://i.ibb.co/gJF8KBX/irc-horizontal-lockup-rgb.jpg"
                alt="IRC logo"
              ></img>
            </a>
            <a
              href="https://www.sba.gov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-10 w-auto"
                src="https://i.ibb.co/X3PW3h6/variations-horizontal-two-color-reversed.png"
                alt="SBA logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
