import { MapIcon, BookOpenIcon, ChatAlt2Icon } from '@heroicons/react/outline'

// This is to be used for the grid of content at the bottom of the home page
export const HomePageContent = [
  {
    title: 'Meet With a CNPP Business Counselor',
    icon: <ChatAlt2Icon />,
    description: [
      'Fill out a contact form to get in touch with a CNPP Business Counselor to answer all your small business questions',
    ],
    href: '/contact',
  },
  {
    title: 'Search for Community Navigators in your Region',
    icon: <MapIcon />,
    description: [
      'Learn about the organizations in your region that are home to CNPP Community Navigators',
      'See what additional resources are available within each state – currently IRC’s CNPP program serves communities in California, Arizona, Utah, Iowa, and Georgia',
    ],
    href: '/region',
  },
  {
    title: 'Access Small Business Resources',
    icon: <BookOpenIcon />,
    description: [
      'Find available business grants and other small business relief',
      'Learn about low-cost business loans available in your region',
      'Access trainings, workshops, and learning resources to strengthen your small business',
    ],
    href: '/resources',
  },
  // This is where you can add additional tiles
  /*
  {
    title: 'Content tile 4',
    icon: <BookOpenIcon />,
    description: [
      'Bullet point 1',
      'Bullet point 2',
      'Bullet point 3',
    ],
    href: '/resources',
  },
  */
]
