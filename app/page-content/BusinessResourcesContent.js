import {
  VideoCameraIcon,
  CloudDownloadIcon,
  DocumentDownloadIcon,
  ExclamationIcon,
} from '@heroicons/react/outline'


// This is to be used for the grid of content at the bottom of the small business page
const SmallBizContent = {
  //This is the video section!
  header: {
    title: 'Small Business Resources',
    description:
      'Strengthen your small business by finding available business grants, loans and other small business relief as well as trainings, workshops, and learning resources.',
    image: 'https://i.ibb.co/R6KCbXC/mechanic.jpg',
    imageAlt: 'Mechanic',
  },

  videos: [
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
  ],

  downloads: [
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
  ],

  documents: [
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
  ],
}

export default SmallBizContent
