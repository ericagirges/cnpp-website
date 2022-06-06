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
      name: 'Elevator Pitch',
      description: 'This video walks you through the process of making an elevator pitch and demonstrates a time you might need it. Contact your local IRC office for information on activities to do during the pauses in the video to make your pitch alongside our actor!',
      hyperlink: 'https://www.youtube.com/watch?v=chws4qsJbfU&list=PLhvgEsDS0faMwcGgh4y2cth-ZiGFg855K&index=4',
      icon: VideoCameraIcon,
    },
    {
      name: 'Elevator Pitch (Swahili)',
      hyperlink: 'https://www.youtube.com/watch?v=Gt45X7SAV3Q&list=PLhvgEsDS0faNOIcI2I-JPXPBwVw2hGAI8&index=3',
      icon: VideoCameraIcon,
    },
    {
      name: 'Elevator Pitch (Dari)',
      hyperlink: 'https://www.youtube.com/watch?v=Vg8v-NoTsZo&list=PLhvgEsDS0faMbosV-rBlIKygCit_4SlQh&index=2',
      icon: VideoCameraIcon,
    },
     {
      name: 'What is Customer Service in the U.S.?',
      description: 'This video provides an introduction to customer service in the United States. Contact your local IRC office for information on activities to do during the pauses in the video!',
      hyperlink: 'https://www.youtube.com/watch?v=tP-FTp8MmdA&list=PLhvgEsDS0faMwcGgh4y2cth-ZiGFg855K&index=1',
      icon: VideoCameraIcon,
    },
    {
      name: 'What is Customer Service in the U.S.? (Swahili)',
      hyperlink: 'https://www.youtube.com/watch?v=AAB5eS-KIPw&list=PLhvgEsDS0faNOIcI2I-JPXPBwVw2hGAI8&index=4',
      icon: VideoCameraIcon,
    },
     {
      name: 'What is Customer Service in the U.S.? (Dari)',
      hyperlink: 'https://www.youtube.com/watch?v=VuDlcJJFCIU&list=PLhvgEsDS0faMbosV-rBlIKygCit_4SlQh&index=6',
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
