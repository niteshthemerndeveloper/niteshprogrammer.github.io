import html from './Images/svgs/html.svg';
import css from './Images/svgs/css.svg';
import javascript from './Images/svgs/javascript.svg';
import redux from './Images/svgs/redux.svg';
import mongodb from './Images/svgs/mongodb.svg';
import express from './Images/svgs/express.svg';
import react from './Images/svgs/react.svg';
import github from './Images/svgs/github.svg';
import reactrouter from './Images/svgs/reactrouter.png';
import frontend from './Images/svgs/frontend.svg';
import backend from './Images/svgs/backend.svg';
import dsa from './Images/svgs/dsa.svg';
import sicodewars from './Images/svgs/codewars.svg';

import sudoku from './Images/pngs/sudoku.png';
import unbounce from './Images/pngs/unbounce.png';
import travel from './Images/pngs/travel.png';
import policybazaar from './Images/pngs/policybazaar.png';

import { FaHackerrank } from 'react-icons/fa';

import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const skillArray = {
  technologies: [
    { title: 'HTML', image: html },
    { title: 'CSS', image: css },
    { title: 'Javascript', image: javascript },
    { title: 'Github', image: github },
    { title: 'MongoDB', image: mongodb },
    { title: 'Express', image: express },
    { title: 'React', image: react },
    { title: 'Redux', image: redux },
    { title: 'React Router', image: reactrouter },
  ],
  proficiencies: [
    { title: 'frontend', image: frontend },
    { title: 'backend', image: backend },
    { title: 'dsa', image: dsa },
  ],
};

export const projectArray = [
  {
    image: unbounce,
    title: 'Unbounce Clone',
    description: 'An online landing page building website.',
    codeLink: 'https://github.com/nehachatse/sulphur',
    demoLink: 'https://prashant-sharma-tws.github.io/sulphur',
    techStack: [
      { title: 'HTML', image: html },
      { title: 'CSS', image: css },
      { title: 'Javascript', image: javascript },
    ],
    type: 'A collaborative project built with 2 other developers',
    responsibilities: [
      'User sign-in and login page.',
      'Developed the Landing page.',
      'Use of animations for better user-experience.',
    ],
  },
  {
    image: policybazaar,
    title: 'Policybazaar Clone',
    description: 'An online mutli insurance company provider.',
    techStack: [
      { title: 'HTML', image: html },
      { title: 'CSS', image: css },
      { title: 'Javascript', image: javascript },
      { title: 'Github', image: github },
      { title: 'React', image: react },
      { title: 'Redux', image: redux },
    ],
    demoLink: 'https://prashant-sharma-tws.github.io/policybazaar/',
    codeLink: 'https://github.com/Prashant-Sharma-TWS/policybazaar',
    type: 'A collaborative project built by a team of 4 under 4 days.',
    responsibilities: [
      'User sign-in and login page.',
      'Developed the Insurance and Quotes page.',
      'Integrated the frontend with company database.',
    ],
  },
  {
    image: travel,
    title: 'Travel Clone',
    description: 'An online travel package booking website.',
    demoLink: 'https://prashant-sharma-tws.github.io/Travel/',
    codeLink: 'https://github.com/ansari-saif/Travel',
    techStack: [
      { title: 'HTML', image: html },
      { title: 'CSS', image: css },
      { title: 'Javascript', image: javascript },
    ],
    type: 'A collaborative project built with 3 other developers',
    responsibilities: [
      'Developed the Blog page.',
      "Use of transition, animations and window's screen effects.",
    ],
  },
  {
    image: sudoku,
    title: 'Sudoku',
    description:
      'A sudoku challenge for users, where they can solve and get them solved.',
    techStack: [
      { title: 'HTML', image: html },
      { title: 'CSS', image: css },
      { title: 'Javascript', image: javascript },
      { title: 'React', image: react },
    ],
    demoLink: 'https://prashant-sharma-tws.github.io/sudoku/',
    codeLink: 'https://github.com/Prashant-Sharma-TWS/sudoku',
    type: 'A solo project.',
    features: [
      'User can solve a puzzle.',
      'User can undo, redo and reset the puzzle.',
      'User can get solution for a puzzle using auto-solve.',
    ],
  },
];

export const contactArray = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/niteshthemerndeveloper/',
    icon: <BsLinkedin size='35px' fill='#0077b7' />,
    iconClass: 'linkedin',
  },
  {
    title: 'Github',
    link: 'https://github.com/niteshthemerndeveloper',
    icon: <BsGithub size='35px' />,
    iconClass: 'github',
  },
  // {
  //   title: 'CodeWars',
  //   link: 'https://www.codewars.com/users/niteshthemerndeveloper',
  //   icon: sicodewars,
  //   iconClass: 'sicodewars',
  // },
];
