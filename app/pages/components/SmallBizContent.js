import {
    VideoCameraIcon,
    CloudDownloadIcon,
    DocumentDownloadIcon,
  } from '@heroicons/react/outline'
  
  const vids = [
    {
      name: 'Video 1',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: VideoCameraIcon,
    },
    {
      name: 'Video 2',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: VideoCameraIcon,
    },
    {
      name: 'Video 3',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: VideoCameraIcon,
    },
  ]

  const downloads = [
    {
        name: 'Download 1',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CloudDownloadIcon,
      },
      {
        name: 'Download 2',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CloudDownloadIcon,
      },
      {
        name: 'Download 3',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: CloudDownloadIcon,
      },
  ]

  const documents = [
    {
        name: 'Document 1',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: DocumentDownloadIcon,
      },
      {
        name: 'Document 2',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: DocumentDownloadIcon,
      },
      {
        name: 'Document 3',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: DocumentDownloadIcon,
      },
  ]

const gridComponent = (arr) => (
    <div className="mt-12">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {arr.map((feature) => (
        <div key={feature.name} className="pt-6">
          <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
            <div className="-mt-6">
              <div>
                <span className="inline-flex items-center justify-center rounded-md bg-sbaGray p-3 shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
              <p className="mt-5 text-base text-gray-500">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
const SbrContent = () => (
    <>
    <div className="relative bg-white mb-10">
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

        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-sbaBlue xl:inline">
                  Small Business Resources
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Strengthen your small business by finding available business grants, loans and other small business relief as well as trainings, workshops, and learning resources.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            </div>
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
  <div className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Learning Resources
        </h2>
        <p className="mx-auto mt-10 max-w-prose text-xl text-gray-500">
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

export default SbrContent