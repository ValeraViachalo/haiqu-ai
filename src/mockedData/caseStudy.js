import { caseCategories } from '../constants';

export const caseStudy = [
  {
    id: 1,
    category: caseCategories.finance,
    company: 'SERN',
    description:
      'SERN is a global R&D organization, they’re the main antagonist faction in SteinsGate.',
    photo: '/mocked/cases/1.jpg',
    dark: true,
  },
  {
    id: 2,
    category: caseCategories.manufactoring,
    company: 'Qlloy',
    description:
      'Upgrading engineering with the most advanced metals in the world.',
    photo: '/mocked/cases/2.jpg',
    dark: false,
  },
  {
    id: 3,
    category: caseCategories.deep_tech,
    company: 'Agility Robotics’',
    description: 'Testing Digit in a live warehouse for SPANX operated by GXO.',
    photo: '/mocked/cases/3.jpg',
    dark: true,
  },
];
