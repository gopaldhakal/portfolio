// src/data/data.js
export const skills = [
  {
    category: "Programming & Web Development",
    items: [
      { name: "JavaScript (ES6+)", icon: "🚀" },
      { name: "React + Redux", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "HTML5/CSS3", icon: "🎨" },
      { name: "Tailwind CSS", icon: "🌀" },
    ],
  },
  {
    category: "Databases & Backend",
    items: [
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🗃️" },
      { name: "Express.js", icon: "📡" },
      { name: "REST APIs", icon: "🔌" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git/GitHub", icon: "🐙" },
      { name: "Vite", icon: "⚡" },
      { name: "Docker", icon: "🐳" },
      { name: "Postman", icon: "📬" },
    ],
  },
];

export const projects = [
  {
    title: "PetShop Platform",
    description:
      "Full-stack pet adoption marketplace with admin dashboard and user authentication",
    image: "/images/projects/petshop.png",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    links: {
      live: "#",
      github: "https://github.com/gopaldhakal/PetShop",
    },
  },
  {
    title: "Shoppy E-Commerce",
    description:
      "Feature-rich e-commerce platform with cart/checkout system and product management",
    image: "/images/projects/shoppy.png",
    tech: ["MERN Stack", "Redux", "Stripe API"],
    links: {
      live: "#",
      github: "https://github.com/gopaldhakal/Shoppy/tree/shopy",
    },
  },
  {
    title: "CodePlayer IDE",
    description:
      "Real-time code editor with live preview and console output functionality",
    image: "/images/projects/CodePlayer.png",
    tech: ["React", "Tailwind CSS", "CodeMirror"],
    links: {
      live: "#",
      github:
        "https://github.com/gopaldhakal/CodePlayer/tree/main/Desktop/taskbin",
    },
  },
  {
    title: "AI Summarization Tool",
    description:
      "Web application utilizing NLP algorithms for text summarization",
    image: "/images/projects/Summarization.png",
    tech: ["React", "Python", "Flask", "Auth0"],
    links: {
      live: "#",
      github: "https://github.com/gopaldhakal/SummarizationTool/tree/master",
    },
  },
];

export const certifications = [
  {
    name: "MERN Stack Certification",
    issuer: "Mindrisers Institute of Technology",
    date: "2022",
    verifyUrl: "https://www.mindrisers.com.np/certificate/validate/MR-81004-MS",
  },
];

export const languages = [
  { name: "Nepali", level: "Native" },
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Conversational" },
];

export const socialLinks = {
  github: "https://github.com/gopaldhakal",
  linkedin: "https://www.linkedin.com/in/gopal-dhakal-060326197",
  email: "mailto:gopaldhakal2056@gmail.com",
  phone: "tel:+9779860278913",
};
