import { MailIcon, FolderOpenIcon } from '@heroicons/react/outline'

export default function Contact() {
  return (
    <div className="bg-white mb-32">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg md:grid md:max-w-none md:grid-cols-2 md:gap-8">
          <div>
            <div className="flex h-10">
              <span className="mr-5 w-auto">
                <img
                  className="h-7 w-auto"
                  src="../irc_arrow_yellow.jpg"
                  alt="IRC logo black diagonal arrow on yellow square background"
                ></img>
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              International Rescue Committee
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </div>
            <div className="mt-9">
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <FolderOpenIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <a
                    href="https://forms.office.com/r/CZ0JZ9dQ5P"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>IRC CNPP Outreach Information</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <div className="flex h-10">
              <span className="mr-5 w-auto">
                <img
                  className="h-7 w-auto"
                  src="https://i.ibb.co/S6T2sPW/SBA-Logo-Horizontal-RGB.png"
                  alt="SBA logo"
                ></img>
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              U.S. Small Business Administration
            </h2>
            <div className="mt-3">
              <p className="text-lg text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
                repellat error corporis doloribus similique, voluptatibus
                numquam quam.
              </p>
            </div>
            <div className="mt-9">
              <div className="mt-6 flex">
                <div className="flex-shrink-0">
                  <MailIcon
                    className="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 text-base text-gray-500">
                  <a
                    href="mailto:sbacommunity.navigators@rescue.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>sbacommunity.navigators@rescue.org</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
