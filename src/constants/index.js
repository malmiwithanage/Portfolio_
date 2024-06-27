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
  p3,
  p4,
  p5
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "AI Text Summarize Web Application",
    description:
    "AI Text Summarization Web Application is designed to streamline information consumption by providing concise summaries of web pages. Users can input the URL of any web page containing readable content, and the application utilizes integrated AI APIs to generate a summary. This summary captures the essence of the original content.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: p3,
    source_code_link: "https://github.com/malmiwithanage/ai_summerizer",
  },
  {
    name: "Hotel & Events Management System",
    description:
    "The Hotel & Events Management System is tailored to facilitate customer wedding planning and organization. This comprehensive system enables users to effortlessly reserve venues, select from diverse wedding packages, and coordinate related services from catering to decorations and guest accommodations.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      
    ],
    image: carrent,
    source_code_link: "https://github.com/malmiwithanage/Y1S2-Project",
  },
  {
    name: "Hospital Management System",
    description:
"The Hospital Management System is designed to streamline operations and enhance patient care by providing a comprehensive platform for healthcare professionals and patients. This system securely stores and manages detailed patient information, including medical history, treatments, prescriptions, and appointments.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      
    ],
    image: jobit,
    source_code_link: "https://github.com/malmiwithanage/Y2S1-Project/tree/main",
  },
  {
    name: "Task Management Android Application",
    description:
"The Task Management Android Application is designed to streamline task organization and enhance productivity. This intuitive application allows users to efficiently manage tasks with essential functions such as adding, editing, deleting, reading, and searching tasks. It features a visually appealing and user-friendly interface to ensure a seamless user experience.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      
    ],
    image: p4,
    source_code_link: "https://github.com/malmiwithanage/ToDo-Android-Application",
  },
  {
    name: "3D Portfolio Web Application",
    description:
"The 3D Portfolio Web Application is a showcase of my work using immersive 3D elements to engage visitors. It presents my projects, personal information, and includes contact functionality through Email.js. The application aims to provide an interactive experience that highlights my skills and projects effectively.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Email JS",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
      
    ],
    image: p5,
    source_code_link: "https://github.com/malmiwithanage/Portfolio_",
  },

  {
    name: "Travel & Tourism Management System",
    description:
" Travel and Tourism Management System tailored for Hotel Kaya Hikkaduwa offers a sophisticated platform designed to elevate guest experiences and streamline operations. This integrated system encompasses hotel bookings, restaurant reservations, curated travel packages, vehicle rentals, and event management, providing comprehensive services to guests and enhancing operational efficiency for the hotel.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      
    ],
    image: "",
    source_code_link: "https://github.com/malmiwithanage/ITP-MalmiWithanage",
  },
];

export { services, technologies, experiences, testimonials, projects };
