import {
  VideoCameraIcon,
  CloudDownloadIcon,
  DocumentDownloadIcon,
  ExclamationIcon,
} from '@heroicons/react/outline'

import Link from 'next/link'

const vids = [
  {
    name: 'Check Back Soon',
    description:
      'Sign up for our newsletter to get the latest updates on workshops and training videos',
    hyperlink: '/contact',
    icon: ExclamationIcon,
  },

  //{
  //  name: 'Video 1',
  //  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //  icon: VideoCameraIcon,
  //},
  //{
  //  name: 'Video 2',
  //  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //  icon: VideoCameraIcon,
  //},
  //{
  //  name: 'Video 3',
  //  description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //  icon: VideoCameraIcon,
  //},
]

const downloads = [
  {
    name: 'Check Back Soon',
    description:
      'Sign up for our newsletter to get the latest updates on downloadable learning resources',
    hyperlink: '/contact',
    icon: ExclamationIcon,
  },
  //{
  //    name: 'Download 1',
  //    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //    icon: CloudDownloadIcon,
  //  },
  //  {
  //    name: 'Download 2',
  //    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //    icon: CloudDownloadIcon,
  //  },
  //  {
  //    name: 'Download 3',
  //    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //    icon: CloudDownloadIcon,
  //  },
]

const documents = [
  {
    name: 'Check Back Soon',
    description:
      'Sign up for our newsletter to get the latest updates on translated documents and other resources',
    hyperlink: '/contact',
    icon: ExclamationIcon,
  },
  //{
  //   name: 'Document 1',
  //   description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //   icon: DocumentDownloadIcon,
  // },
  // {
  //   name: 'Document 2',
  //   description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //   icon: DocumentDownloadIcon,
  // },
  // {
  //   name: 'Document 3',
  //   description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  //   icon: DocumentDownloadIcon,
  // },
]



const TextComponent = () => (
  <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h1 className="font-extrabold text-sbaBlue text-2xl md:text-3xl">
      {' '}
      Available Small Business Grants &amp; Relief
    </h1>
    <p className="mt-9 text-base md:text-lg text-black">
    As America continues its economic recovery, there are a variety of federal, state, and local opportunities to access small business grants and relief. Because these options change regularly, the best way to learn about options available to you is through an IRC CNPP business counselor. Contact us today to <Link className="text-bold" href="/contact"><u>get connected</u></Link>.
    </p>
    <h2 className='mt-9 text-xl md:text-2xl font-bold text-black'>Small Business Relief Available through IRC's Center for Economic Opportunity (CEO)</h2>
    <p className="mt-9 text-base md:text-lg text-black">
        The International Rescue Committee's Center for Economic Opportunity (CEO) is a non-profit lender specializing in making small-dollar loans to refugees and immigrants. CEO is a certified by the U.S. Treasury as a national Community Development Financial Insitituion (CDFI) and currently has operations in 14 states. CEO does not charge any late fees and is flexible with modifying loans or deferring payments to help clients protect their credit and overcome financial turbulence. Some products and rates that are available CEO include:
        <ul className='pl-10 my-2 list-disc indent'>
            <li>
                Credit Building loans of up to $1,000 with 0% APR
            </li>
            <li>
                Business Recovery loans of up to $10,000 with 0% APR
            </li>
        </ul>
    </p>
    <p className="mt-3 text-base md:text-lg text-black">
    <Link className="text-bold" href="/contact"><u>Get connected</u></Link> with a business counselor today to learn more about how you can access available CEO loans.
    </p>
  </div>
)

const gridComponent = (arr) => (
  <div className="mt-12">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:grid-cols-1">
      {arr.map((feature) => (
        <div key={feature.name} className="pt-6">
          <Link href={feature.hyperlink}>
            <div className="flow-root rounded-lg bg-gray-200 px-6 pb-8 hover:ring hover:ring-sbaBlue">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center rounded-md bg-sbaGray p-3 shadow-lg">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
)
const ResourcesContent = () => (
  <>
    <div className="relative mb-10 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-sbaBlue xl:inline">
                  Small Business Resources
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Strengthen your small business by finding available business
                grants, loans and other small business relief as well as
                trainings, workshops, and learning resources.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://i.ibb.co/R6KCbXC/mechanic.jpg"
          alt="Mechanic"
        />
      </div>
    </div>
    <TextComponent />
    <div className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Learning Resources
        </h2>
        <p className="mx-auto mt-10 max-w-prose text-2xl text-gray-500 underline">
          Workshops &#38; Videos
        </p>
        {gridComponent(vids)}
        <p className="mx-auto mt-10 max-w-prose text-xl text-gray-500">
          Downloadable Learning Resources
        </p>
        {gridComponent(downloads)}
        <p className="mx-auto mt-10 max-w-prose text-xl text-gray-500">
          Translated Documents
        </p>
        {gridComponent(documents)}
      </div>
    </div>
  </>
)

export default ResourcesContent
