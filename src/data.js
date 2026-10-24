// Your content lives here. Change text here, not inside components.
export const ME = {
  name: "Govindhamma",
  role: "Software Engineer", // static line in the hero
  typed: [ "Full-stack Developer", "React Developer","Node Developer"], // typing animation
  location: "Chennai, India",
  intro:
    "2 years building web apps with React, Node.js and MongoDB/PostgreSQL. Open to full-time roles in Chennai, Bangalore or remote.",
  email: "govindhamma81@gmail.com", // TODO
    phone: "+91 9943029268",

  github: "https://github.com/govindhamma003", // TODO
  linkedin: "https://www.linkedin.com/in/govindhamma82/", // TODO
  resume: "/GovindhammaResume.pdf", // file goes in public/resume.pdf
  stack: ["React", "Node.js", "Express", "MongoDB"],
};

// Everything for the About section
export const ABOUT = {
  // Each string = one paragraph. **double stars** = bold white text.
  paragraphs: [
   "Full Stack Developer with **2 years** of experience building web apps using **React**, **Next.js**,**Node.js, Express, MongoDB, and PostgreSQL**, covering both frontend and backend at a product startup.",
   "I write clean, maintainable code and turn ideas into reliable products. Based in Chennai, open to full-time roles in Chennai, Bangalore, or remote."
  ],
 // TODO
  // icon can be "check" or "team"
  achievements: [
    {
      icon: "check",
      title: "Shipped Production Features",
      text: "Built and shipped features for a France-based product using React, Node.js and MongoDB/PostgreSQL.",
    },
    {
      icon: "team",
      title: "Intern to Full-time",
      text: "Joined as an intern and was converted to a full-time developer.",
    },
  ],
};

// Skills section: one card per category, one bar per skill.
// percent = 0 to 100. Be honest: interviewers will ask about whatever you put high.
export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", percent: 95},
      { name: "Next.js", percent: 90 },
      { name: "Redux", percent: 90 },
      { name: "TypeScript", percent: 85 },
      { name: "Tailwind CSS", percent: 80 },
      { name: "Material UI", percent: 75 },
      { name: "AG Grid", percent: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", percent: 95 },
      { name: "Express.js", percent: 90 },
      { name: "REST APIs", percent: 90 },
      { name: "GraphQL", percent: 80 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", percent: 95 },
      { name: "PostgreSQL", percent: 90 },
      { name: "MySQL", percent: 90 },
      { name: "Redis", percent: 80 },
    ],
  },
  
 
 {
  category: "Cloud & DevOps",
  items: [
     { name: "CI/CD", percent: 75 },
    { name: "Vercel", percent: 90 },
     { name: "OVHcloud VPS", percent: 75 },
    { name: "Render", percent: 50 },
    { name: "AWS", percent: 50 },
  ],
},
{
  category: "Languages",
  items: [
    { name: "JavaScript", percent: 90 },
    { name: "TypeScript", percent: 75 },
    { name: "C Programming", percent: 85 },
    { name: "Java", percent: 40 },
  ],
},
{
  category: "Tools & AI",
  items: [
    { name: "Git", percent: 90 },
    { name: "GitHub", percent: 90 },
    { name: "Postman", percent: 90 },
    { name: "VS Code", percent: 95 },
    { name: "MongoDB Compass", percent: 85 },
    { name: "GitHub Copilot", percent: 90 },
    { name: "Cursor", percent: 80 },
    { name: "Claude Code", percent: 75 },
    
  ],
},

];

// Experience section: newest first. One { } block per job.
// type = small badge on the card ("Full-time" / "Internship")
export const EXPERIENCE = [
  {
    company: "Geeo Technologies",
    role: "Full-stack Developer",
    type: "Full-time",
    period: "August 2024 - Month 2026", // TODO: real start year and your last month
    location: "Puduchery (France-based startup)", // TODO: add Remote / Chennai if you like
   
    points: [
      "Worked on a multi-tenant e-commerce platform, enabling businesses to manage online stores, products, and customer orders.",
      "Developed full-stack features using React.js, Node.js, and Express.js, including product management, authentication, and order workflows.",
      "Built reusable UI components and managed application state using Redux, Material UI, and Tailwind CSS.",
      "Designed and integrated REST APIs and worked with MongoDB, PostgreSQL, and MySQL for application data management.",
      "Contributed to other product features and projects, handling frontend development, backend integrations, bug fixes, and ongoing enhancements."
      // TODO: add 1-2 real results with numbers, e.g. "Reduced page load time by 30%"
    ],
    tech: ["React", "Next.js","Node.js", "Express", "MongoDB", "PostgreSQL", "Redux", "Tailwind CSS"],
  },
  {
    company: "Geeo Technologies",
    role: "Intern - Frontend Developer",
    type: "Internship",
    period: "May - July 2024", // TODO: real year
    location: "Puduchery (France-based startup)",
    note: "", // empty = no note shown
    points: [
      "Built dynamic and responsive Angular user interfaces for an educational Matrimonial platform.",
      "Integrated frontend with backend APIs and handled API responses efficiently",
      "Participated in debugging and resolving issues in both development and production environments"
      
    ],
    tech: ["React", "JavaScript", "Git"],
  },
];

// Projects section: one { } block per project.
// icon = "code" | "database" | "chat"   (the icon in the amber box)
// live / code = links. Leave "" and that button hides.
export const PROJECTS = [
  {
    icon: "code",
    title: "Hotel Room Booking",
    subtitle: "Full-stack MERN Application",
    description:
      "A web app where users can browse hotels and book rooms. Built with a React frontend and a Node.js, Express and MongoDB backend.", // TODO: edit
   features: [
     "Browse rooms and view room details",
  "AI-powered room search based on budget and preferences",
  "Room booking with email confirmations",
    
  ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: "Completed",
    category: "Portfolio Project",
    live: "",
    code: "",
  },
  {
    icon: "database",
    title: "Book Management System",
    subtitle: "CRUD Application",
    description:
      "An app to add, edit, search and delete books, with a REST API built on Express and MongoDB.", // TODO: edit
    features: [
      "Add, edit and delete books", // TODO: replace with real features
      "Search and list books",
      "REST API with MongoDB",
    ],
    tech: ["React", "Express", "MongoDB"],
    status: "Completed",
    category: "Portfolio Project",
    live: "",
    code: "",
  },
  {
    icon: "chat",
    title: "AI Chatbot",
    subtitle: "AI-powered Web App",
    description:
      "A chatbot web app built on free AI APIs, with a React chat interface and a Node.js backend.", // TODO: edit
    features: [
      "Chat interface in React", // TODO: replace with real features
      "Connected to a free AI API",
      "Node.js backend",
    ],
    tech: ["React", "Node.js", "AI API"],
    status: "In Progress",
    category: "Portfolio Project",
    live: "",
    code: "",
  },
];

// Resume section: Academic Education. One { } block per degree (newest first).
export const EDUCATION = [
  {
    period: "2020 - 2024",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Electrical and Electronics Engineering",
    college: "Puducherry Technological University",
    location: "Puducherry",
    description:
      "Completed B.Tech in Electrical and Electronics Engineering, then moved into software development.",
    highlights: [
      "Graduated with a CGPA of 8.3",
    "Joint Secretary - EEE Department Association",
    "Coordinated departmental activities and events",
    "Active participation in technical workshops and seminars"
      // TODO: add real ones only, e.g. final year project, workshops, association roles
    ],
    score: "8.3", // number inside the circle
    scoreLabel: "CGPA", // small text under the number
    outOf: "Out of 10.0", // text under the circle
  },
];