import { nanoid } from 'nanoid';
// import { ResponsiveEmbed } from 'react-bootstrap';

// HEAD DATA
export const headData = {
  title: 'Robin | Web Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Web Developer',
  name: 'Robin',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up (https://www.resumemaker.online/es.php)
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'portfolio.png',
    title: 'freeCodeCamp Portfolio',
    info: 'This is the portfolio project from freeCodeCamp required for the "Responsive Web Design" certification.  The portfolio highlights the other projects required for certification.  All of the projects are hosted through GitHub Pages.',
    info2: '',
    url: 'https://robinpunn.github.io/fcc-portfolio/',
    repo: 'https://github.com/robinpunn/fcc-portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'background.png',
    title: 'Background Generator',
    info: 'This project is from the ZeroToMastery Complete Web Developer Course.  The Background Generator project tied all the concepts presented at this point in the course: HTML, CSS, and JavaScript. The project is hosted through GitHub Pages.',
    info2: '',
    url: 'https://robinpunn.github.io/Background-Generator/',
    repo: 'https://github.com/robinpunn/Background-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robo.png',
    title: 'RoboFriends',
    info: 'This ZTM project introduced React.  This project also taught the concept of pulling information from a database.  The project is hosted through GitHub Pages.',
    info2: '',
    url: 'https://robinpunn.github.io/robo-friends/',
    repo: 'https://github.com/robinpunn/robo-friends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart.png',
    title: 'Smart Brain',
    info: 'The final project in the ZTM Complete Web Developer Course.  This is a React project that incorporates both front-end and back-end.  A database was created with SQL which stores log in data.  The Clarifai API is used to apply facial recognition to images.  The project is hosted through Heroku.',
    info2: '',
    url: 'https://sm4rt-br41n.herokuapp.com/',
    repo: 'https://github.com/robinpunn/smartbrain', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wordpress.png',
    title: 'WordPress Blog',
    info: "I created a WordPress blog to document important concepts I've learned on my web development journey.  I am also interested in blockchain devlopment.  The blog includes information related to the basics required to understand blockchain technology and the concept of Web3.",
    info2: '',
    url: 'https://robinpunn.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I would love to be a part of your team',
  btn: 'E-mail Me',
  email: 'robin.punnoose@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/robin-punnoose-251633164',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/robinpunn',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
