import {
  VideoCameraIcon,
  CloudDownloadIcon,
  DocumentDownloadIcon,
  ExclamationIcon,
} from '@heroicons/react/outline'


// This is to be used for the grid of content at the bottom of the small business page
const SmallBizContent = {

  header: {
    title: 'Small Business Resources',
    description:
      'Strengthen your small business by finding available business grants, loans and other small business relief as well as trainings, workshops, and learning resources.',
    image: 'https://i.ibb.co/R6KCbXC/mechanic.jpg',
    imageAlt: 'Mechanic',
  },

  //This is the video section!
  videos: [
    {
      name: 'Check Back Soon',
      description:
        'Sign up for our newsletter to get the latest updates on workshops and training videos',
      hyperlink: '/contact',
      icon: ExclamationIcon,
    },
    // This is where you can add additional videos using the template below
    /*
    {
      name: 'Video 1',
      description: 'A description of the video',
      hyperlink: 'https://example.com',
      icon: VideoCameraIcon,
    //},
    */
  ],

  //This is the downloads section!
  downloads: [
    {
      name: 'Check Back Soon',
      description:
        'Sign up for our newsletter to get the latest updates on downloadable learning resources',
      hyperlink: '/contact',
      icon: ExclamationIcon,
    },
    // This is where you can add additional downloadable learning resources using the template below
    /*
    {
      name: 'Download 1',
      description: 'A description of the downloadable content',
      hyperlink: 'https://example.com',
      icon: CloudDownloadIcon,
      },
    */
  ],

  //This is the Translated Documents section!
  documents: [
    {
      name: 'Check Back Soon',
      description:
        'Sign up for our newsletter to get the latest updates on translated documents and other resources',
      hyperlink: '/contact',
      icon: ExclamationIcon,
    },
    // This is where you can add additional translated documents using the template below
    /*
    {
      name: 'Document 1',
      description: 'A descption of the translated document',
      hyperlink: 'https://example.com',
      icon: DocumentDownloadIcon,
      },
    */
  ],
}

export default SmallBizContent
