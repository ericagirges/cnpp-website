import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-sbaBlue">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-1">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <a className="text-white hover:text-gray-500">{item.name}</a>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex h-10 items-center justify-center md:order-2 md:mt-0">
          <a href="https://www.rescue.org/" target="_blank" rel="noopener noreferrer">
            <img
              className="mr-5 h-10 w-auto"
              src="https://i.ibb.co/gJF8KBX/irc-horizontal-lockup-rgb.jpg"
              alt="IRC logo"
            ></img>
          </a>
          <a href="https://www.sba.gov/" target="_blank" rel="noopener noreferrer">
            <img
              className="h-10 w-auto"
              src="https://i.ibb.co/X3PW3h6/variations-horizontal-two-color-reversed.png"
              alt="SBA logo"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  )
}
