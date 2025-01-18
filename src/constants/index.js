import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur Web Fullstack",
      icon: web,
    },
    {
      title: "Développeur Backend",
      icon: backend,
    },
    {
      title: "Concepteur d'application web",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Développeur Full-Stack Symfony Twig",
      company_name: "BCM - Banque Centrale de Madagascar",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Juillet 2024 - Novembre 2024",
      points: [
        "Développement d'une application de generation de rapport financier avec Symfony PHP, Twig Template et Oracle Database.",
        "Collaboration avec une développeuse pour la réalisation pour assurer une développement rapide des fonctionnalitées.",
        "Implementation d'une authentification avec LDAP pour l'access sur Active Directory de la banque.",
        "Mise en place de Symfony Security pour la sècurisation.",
        "Méthodologie agile pour la gestion de projet et la réalisation de l'application.",
      ],
    },
    {
      title: "Développeur Web CodeIgniter PHP",
      company_name: "BMOI - Banque Malgache de l'Océan Indien",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aout 2023 - Octobre 2023",
      points: [
        "Conception d'une base de donnnees avec PostgreSQL et dévelopement d'application web avec PHP CodeIgniter et utilisation de Bootstrap 5.",
        "Application web pour le suivi de la validité des cartes bancaires des clients de la banque.",
      ],
    },
    {
      title: "Développeur Full-Stack",
      company_name: "IT UNIVERSITY - Projet d'évaluation",
      icon: shopify,
      iconBg: "#383E56",
      date: "",
      points: [
        "Développement d'une systeme de gestion des devis pour la construction de batiment.",
        "J'ai utilisé comme stack: CodeIgniter PHP en suivant le design pattern MVC, et PostgreSQL pour assurer la conception et stockage des données.",
        "Gestion de versionning des codes avec GitHub.",
      ],
    },
    {
      title: "Développeur d'application web et mobile",
      company_name: "IT UNIVERSITY - Cloud Project",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Systeme complet et plateforme de vente de véhicule d'occasion avec JAVA Spring Boot pour le développement d'API Restful, ReactJS pour l'interface utilisateur et IONIC REACT pour le developpement d'application mobile.",
        "J'ai collaborer avec un Developpeur Back-End et deux Developpeur Front-End, mais j'ai surtout effectué la conception d'une SGBR.",
        "Gestion de versionning des codes avec GitHub pour l'équipe",
        "Et j'ai assuré le le deploiement du back-end avec RailWay et GitHub.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };