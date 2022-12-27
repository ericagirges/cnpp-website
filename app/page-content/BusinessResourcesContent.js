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
      name: 'Bettering Your Business Video Series',
      description: 'This video series walks you through the process of making an elevator pitch, communicating with your customer, interview tips, and more.',
      hyperlink: 'https://www.youtube.com/playlist?list=PLhvgEsDS0faMwcGgh4y2cth-ZiGFg855K',
      icon: VideoCameraIcon,
    },
    {
      name: 'Bettering Your Business Video Series (Swahili)',
       description: 'This video series walks you through the process of making an elevator pitch, communicating with your customer, interview tips, and more, provided in Swahili language.',
      hyperlink: 'https://www.youtube.com/playlist?list=PLhvgEsDS0faNOIcI2I-JPXPBwVw2hGAI8',
      icon: VideoCameraIcon,
    },
    {
      name: 'Bettering Your Business Video Series (Dari)',
       description: 'This video series walks you through the process of making an elevator pitch, communicating with your customer, interview tips, and more, provided in Dari language.',
      hyperlink: 'https://www.youtube.com/playlist?list=PLhvgEsDS0faMbosV-rBlIKygCit_4SlQh',
      icon: VideoCameraIcon,
    },
    // This is where you can add additional videos using the template below
    /*
    {
      name: 'Video 1',
      description: 'A description of the video',
      hyperlink: 'https://example.com',
      icon: VideoCameraIcon,
    },
    
    */
  ],

  //This is the downloads section!
  downloads: [
      {
      name: 'Business Plan Guide',
      hyperlink: 'https://rescue.box.com/s/xshwz28e8w2egdv699i4lrlpwxn3woo3',
      icon: CloudDownloadIcon,
      },
      {
      name: 'Business Model Canvas',
      hyperlink: 'https://rescue.box.com/s/jnk61b2azntvqi8kjqp9qzfkbgqdt2ii',
      icon: CloudDownloadIcon,
      },
     {
      name: 'National Resource Guide (English)',
      hyperlink: 'https://www.sba.gov/document/support-national-resource-guide-english?fbclid=IwAR2N8tNWsmLJAfbQu2U1m5PhjGGGHHhLRoAYYOQDT-wMbXkIUswMXGnhRFE',
      icon: CloudDownloadIcon,
      },
     {
      name: 'National Resource Guide (Spanish)',
      hyperlink: 'https://www.sba.gov/document/support-national-resource-guide-spanish',
      icon: CloudDownloadIcon,
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
