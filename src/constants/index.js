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
  p7
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
    name: "Cactus Shop Web Application",
    description:
      "Ornamental Plant Design Web Application brings a fresh and personalized approach to home decor. Users can explore custom-designed ornamental plants tailored to their space, ensuring a unique blend of beauty and functionality. The platform combines expert design techniques and user preferences to deliver one-of-a-kind plant arrangements that enhance any home environment.",
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
    description:
      "AI Text Summarization Web Application is designed to streamline information consumption by providing concise summaries of web pages. Users can input the URL of any web page containing readable content, and the application utilizes integrated AI APIs to generate a summary. This summary captures the essence of the original content.",
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
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: p2,
    source_code_link: "https://github.com/malmiwithanage/Y1S2-Project",
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
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: p4,
    source_code_link: "https://github.com/malmiwithanage/Portfolio_",
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
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: p5,
    source_code_link: "https://github.com/malmiwithanage/Y2S1-Project/tree/main",
  },
  {
    name: "Travel & Tourism Management System",
    description:
      "Travel and Tourism Management System tailored for Hotel Kaya Hikkaduwa offers a sophisticated platform designed to elevate guest experiences and streamline operations. This integrated system encompasses hotel bookings, restaurant reservations, curated travel packages, vehicle rentals, and event management, providing comprehensive services to guests and enhancing operational efficiency for the hotel.",
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
