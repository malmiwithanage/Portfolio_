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
  xdev,
  tesla,
  shopify,
  carrent,
  p3,
  threejs,
  p1,
  p2,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "3D Visual Developer",
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
    title: "Software Developer Intern",
    company_name: "2xDev Pvt Ltd",
    icon: xdev,
    iconBg: "#383E56",
    date: "Jun 2024 – Dec 2024",
    points: [
      "Assisted in multiple stages of the development process, from initial design to final product delivery.",
      "Collaborated with senior developers to build efficient and scalable web applications.",
      "Contributed to debugging, testing, and ensuring the quality of the codebase.",
      "Worked with React.js and Node.js technologies to support project development."
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "2xDev Pvt Ltd",
    icon: xdev,
    iconBg: "#383E56",
    date: " From March 2025",
    points: [
      "Contributed to the development and maintenance of core company products across the full stack.",
      "Followed software best practices, focusing on clean, scalable, and secure code",
      "Collaborated with cross-functional teams and reported directly to supervisors",
      "Improved application reliability by debugging, testing, and optimizing performance"


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
    name: "SkillNexus – Skill Sharing & Learning Platform",
    description: "SkillNexus is a collaborative web-based platform that enables users to share their skills and learn from a community of like-minded individuals.",
        tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "React ",
        color: "green-text-gradient",
      },
     
      
    ],
    image: p9,
    source_code_link: "https://github.com/malmiwithanage/SkillNexusX",
  },

  {
    name: "Digital Vehicle Fine Payment System",
    description: "A cross-platform solution for managing and paying vehicle fines with secure QR code verification, real-time alerts, and blacklist tracking.",
        tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
     
      
    ],
    image: p10,
    source_code_link: "https://github.com/malmiwithanage/digital-vehicle-fine-management-system",
  },

{
    name: "Zentry Inspired Animated Website",
    description:
      "This is a visually-rich, animated website I built for learning and exploring advanced UI/UX techniques, inspired by Zentry.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
      
    ],
    image: p8,
    source_code_link: "https://animated-website-coral.vercel.app/",
  },

  {
    name: "Cactus Shop Web Application",
    description: "The platform combines expert design techniques and user preferences to deliver one-of-a-kind plant arrangements that enhance any home environment.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: p7,
    source_code_link: "https://cacti-mei.netlify.app/", 
  },
  {
    name: "AI Text Summarize Web Application",
    description: "AI Text Summarization Web Application is designed to streamline information consumption by providing concise summaries of web pages.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://github.com/malmiwithanage/ai_summerizer",
  },
  
  {
    name: "Task Management Android Application",
    description: "The Task Management Android Application is designed to streamline task organization and enhance productivity.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "Android",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/malmiwithanage/ToDo-Android-Application",
  },
  
  
  
  {
    name: "Travel & Tourism Management System",
    description: "Travel and Tourism Management System tailored for Hotel Kaya Hikkaduwa offers a sophisticated platform designed to elevate guest experiences and streamline operations.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      
    ],
    image: p6,
    source_code_link: "https://github.com/malmiwithanage/ITP-MalmiWithanage",
  },
];

export { services, technologies, experiences, testimonials, projects };
