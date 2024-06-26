import {
    SiPython,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiMysql,
    SiGithub,
    SiAdobexd,
    SiExpo,
    SiGit,
    SiGitkraken,
    SiNodedotjs,
    SiNpm,
    SiReact,
    SiTypescript,
    SiFlask,
    SiMqtt,
    SiRaspberrypi,
    SiJson,
    SiCsharp,
    SiDotnet,
    SiMicrosoftazure,
    SiPostman,
    SiXamarin,
    SiSocketdotio,
  } from 'react-icons/si'
  import { IProject } from '../interfaces/IProject'
  
  export const projectsData: IProject[] = [
    {
      id: 999,
      name: 'Coming Soon',
      tag: 'More',
      image: '/Coming_Soon.webp',
      link: '/',
      date: new Date('2000-01-01'),
      imgs: [], // No images
      technologies: [], // No technologies
      externalLinks: {}, // No external links
    },
  
    {
      id: 1,
      name: 'ShareCar',
      tag: 'Project One',
      image: 'https://firebasestorage.googleapis.com/v0/b/firestore-fa445.appspot.com/o/shareCar_1.webp?alt=media&token=31a8a7ef-024c-421e-a14e-a632ac88e376',
      link: '/projects/shareCar',
      date: new Date('2022-06-01'),
      imgs: [
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/firestore-fa445.appspot.com/o/shareCar_2.webp?alt=media&token=1bc8d276-ebe3-4aa2-aff0-d52be9804590',
          alt: 'shareCar Photo',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/firestore-fa445.appspot.com/o/shareCar_3.webp?alt=media&token=8db1bec6-6722-4ea6-ba9a-953cfa855df1',
          alt: 'shareCar Photo',
        },
        {
          src: 'https://firebasestorage.googleapis.com/v0/b/firestore-fa445.appspot.com/o/shareCar_4.webp?alt=media&token=f7284d81-997d-4284-ad03-cd270e4d7492',
          alt: 'shareCar Photo',
        },
      ],
      technologies: [
        { icon: SiPython, title: 'Python', color: '#3776AB' },
        { icon: SiHtml5, title: 'HTML', color: '#E34F26' },
        { icon: SiCss3, title: 'CSS', color: '#1572B6' },
        { icon: SiJavascript, title: 'JavaScript', color: '#F7DF1E' },
        { icon: SiMysql, title: 'MySQL', color: '#4479A1' },
        { icon: SiGithub, title: 'GitHub', color: '#181717' },
        { icon: SiGit, title: 'Git', color: '#F05032' },
        { icon: SiFlask, title: 'Flask', color: '#000' },
        { icon: SiJson, title: 'JSON', color: '#000' },
        { icon: SiAdobexd, title: 'Adobe XD', color: '#FF61F6' },
        { title: 'UI/UX', color: '#000' },
        { icon: SiRaspberrypi, title: 'Raspberry Pi', color: '#C51A4A' },
        { icon: SiSocketdotio, title: 'Socket.io', color: '#010101' },
      ],
      externalLinks: {
        instructables: 'https://www.instructables.com/Sharecar/',
        github: 'https://github.com/howest-mct/2021-2022-projectone-WoutBl',
      },
  
      study: 'MCT',
      school: 'Howest Kortrijk',
    },
    {
      id: 2,
      name: 'Expo 50 Years E17',
      tag: 'Industry Project',
      image: 'https://firebasestorage.googleapis.com/v0/b/firestore-fa445.appspot.com/o/Expo_E17_1.png?alt=media&token=a570064b-dcc4-42fa-b5a1-5f7a6f6cc4b5',
      link: '/projects/oncolor',
      featured: true,
      date: new Date('2022-08-01'),
      imgs: [
        // {
        //   src: '/public/Expo_E17_1.png',
        //   alt: 'Expo E17 Photo',
        // },
        // {
        //     src: '/public/Expo_E17_1.png',
        //     alt: 'Expo E17 Photo',
        // },
      ],
      technologies: [
        { icon: SiHtml5, title: 'HTML', color: '#E34F26' },
        { icon: SiCss3, title: 'CSS', color: '#1572B6' },
        { icon: SiJavascript, title: 'JavaScript', color: '#F7DF1E' },
        { icon: SiGithub, title: 'GitHub', color: '#181717' },
        { icon: SiGit, title: 'Git', color: '#F05032' },
        { icon: SiJson, title: 'JSON', color: '#000' },
        { icon: SiAdobexd, title: 'Adobe XD', color: '#FF61F6' },
        { title: 'UI/UX', color: '#000' },
        { icon: SiPostman, title: 'Postman', color: '#FF6C37' },
      ],
      externalLinks: {
        github: 'https://github.com/Jinlei2000/ProjectOnColor',
        website: 'https://oncolor.leijin.be',
      },
  
      study: 'MCT',
      school: 'Howest Kortrijk',
    },
    // {
    //   id: 3,
    //   name: 'Anime/Manga App',
    //   tag: 'Project One',
    //   image: 'anime-app/1',
    //   link: '/projects/anime-app',
    //   date: new Date('2022-10-01'),
    //   imgs: [],
    //   technologies: [
    //     { icon: SiGithub, title: 'GitHub', color: '#181717' },
    //     { icon: SiGit, title: 'Git', color: '#F05032' },
    //     { icon: SiJson, title: 'JSON', color: '#000' },
    //     { icon: SiDotnet, title: '.NET', color: '#512BD4' },
    //     { icon: SiMicrosoftazure, title: 'Azure', color: '#0089D6' },
    //     { icon: SiXamarin, title: 'Xamarin', color: '#3498DB' },
    //     { icon: SiPostman, title: 'Postman', color: '#FF6C37' },
    //     { icon: SiCsharp, title: 'C#', color: '#239120' },
    //   ],
    //   externalLinks: {
    //     github: 'https://github.com/Jinlei2000/ProjectOnColor',
    //   },
    //   study: 'MCT',
    //   school: 'Howest Kortrijk',
    // },
    // {
    //   id: 4,
    //   name: 'Interactive Bollards',
    //   tag: 'Team Project',
    //   image: 'interactive-poles/5',
    //   link: '/projects/interactive-poles',
    //   featured: true,
    //   date: new Date('2023-01-01'),
    //   imgs: [
    //     {
    //       src: '/interactive-poles/2',
    //       alt: 'Flyer interactive poles',
    //     },
    //     {
    //       src: '/interactive-poles/3',
    //       alt: 'Illustration interactive pole design',
    //     },
    //     {
    //       src: '/interactive-poles/4',
    //       alt: 'Men holding phone with interactive poles app',
    //     },
    //     {
    //       src: '/interactive-poles/1',
    //       alt: 'Photo interactive poles on the field',
    //     },
    //   ],
    //   technologies: [
    //     { icon: SiPython, title: 'Python', color: '#3776AB' },
    //     { icon: SiHtml5, title: 'HTML', color: '#E34F26' },
    //     { icon: SiCss3, title: 'CSS', color: '#1572B6' },
    //     { icon: SiJavascript, title: 'JavaScript', color: '#F7DF1E' },
    //     { icon: SiGithub, title: 'GitHub', color: '#181717' },
    //     { icon: SiGit, title: 'Git', color: '#F05032' },
    //     { icon: SiFlask, title: 'Flask', color: '#000' },
    //     { icon: SiAdobexd, title: 'Adobe XD', color: '#FF61F6' },
    //     { title: 'UI/UX', color: '#000' },
    //     { icon: SiRaspberrypi, title: 'Raspberry Pi', color: '#C51A4A' },
    //     { icon: SiGitkraken, title: 'GitKraken', color: '#179287' },
    //     { icon: SiMqtt, title: 'MQTT', color: '#660066' },
    //   ],
    //   externalLinks: {
    //     github: 'https://github.com/Bart-Roels/teamproject-groep5',
    //   },
    //   study: 'MCT',
    //   school: 'Howest Kortrijk',
    //   client: 'Sports innovation campus',
    // },
  
    // {
    //   id: 5,
    //   name: 'Movie Zone',
    //   tag: 'Smart App Development',
    //   image: 'movie-zone/1',
    //   link: '/projects/movie-zone',
    //   featured: true,
    //   date: new Date('2023-05-01'),
    //   imgs: [
    //     {
    //       src: '/movie-zone/2',
    //       alt: 'Login screen',
    //     },
    //     {
    //       src: '/movie-zone/3',
    //       alt: 'Detail screen The Super Mario Bros Movie',
    //     },
    //     {
    //       src: '/movie-zone/4',
    //       alt: 'Detail screen & Rating The Super Mario Bros Movie',
    //     },
    //     {
    //       src: '/movie-zone/5',
    //       alt: 'Search screen & Profile screen',
    //     },
    //     {
    //       src: '/movie-zone/6',
    //       alt: 'Home screen & Watchlist screen & Random movie screen',
    //     },
    //   ],
    //   technologies: [
    //     { icon: SiJavascript, title: 'JavaScript', color: '#F7DF1E' },
    //     { icon: SiGithub, title: 'GitHub', color: '#181717' },
    //     { icon: SiGit, title: 'Git', color: '#F05032' },
    //     { icon: SiAdobexd, title: 'Adobe XD', color: '#FF61F6' },
    //     { title: 'UI/UX', color: '#000' },
    //     { icon: SiReact, title: 'React Native', color: '#61DAFB' },
    //     { icon: SiGitkraken, title: 'GitKraken', color: '#179287' },
    //     { icon: SiExpo, title: 'Expo', color: '#000020' },
    //     { icon: SiTypescript, title: 'TypeScript', color: '#3178C6' },
    //     { icon: SiNodedotjs, title: 'Node.js', color: '#339933' },
    //     { icon: SiNpm, title: 'NPM', color: '#CB3837' },
    //   ],
    //   externalLinks: {
    //     github: 'https://github.com/Jinlei2000/project-smart-app',
    //     expo: 'https://expo.dev/@leix3/movie-zone',
    //     tmdb: 'https://www.themoviedb.org/',
    //   },
    //   study: 'MCT',
    //   school: 'Howest Kortrijk',
    // },
  
    // {
    //   id: 6,
    //   name: 'Portfolio',
    //   tag: 'Frontend Development',
    //   image: '/img/portfolio-1.jpg',
    //   link: '/projects/portfolio',
    //   date: '2023-05-01',
    // },
  
    // {
    //   id: 7,
    //   name: 'Trello Animation',
    //   tag: 'Motion Design',
    //   image: '/img/trello-1.jpg',
    //   link: '/projects/trello',
    //   date: '2023-05-01',
    // },
  
    // {
    //   id: 8,
    //   name: 'Slack Onboarding',
    //   tag: 'Motion Design',
    //   image: '/img/slack-1.jpg',
    //   link: '/projects/slack',
    //   date: '2023-05-01',
    // },
  
    // {
    //   id: 9,
    //   name: 'Expo 50 Years E17',
    //   tag: 'Industry Project',
    //   image: '/img/expo-1.jpg',
    //   link: '/projects/expo',
    //   date: '2023-05-01',
    // },
  ]
  