/* 
  PORTFOLIO CONFIGURATION FILE
  Edit this file to quickly update your portfolio content, personal info, projects, and skills.
*/

const PORTFOLIO_DATA = {
  personal: {
    name: "Ariyan Rahman", // Your name
    headline: "Full Stack Developer & Computer Science Student",
    bio: "Computer Science & Engineering student at BRAC University. Passionate about crafting high-performance web applications, intelligent systems, and visually engaging digital experiences.",
    location: "Dhaka, Bangladesh",
    email: "ariyan.rahman@example.com", // Replace with your real email address
    github: "https://github.com/ari-yan7", // Your GitHub profile
    linkedin: "https://linkedin.com/in/ariyan-rahman", // Replace with your LinkedIn URL
    twitter: "https://x.com/",
    resumeUrl: "#", // Replace with link to your PDF resume or Google Drive link
    availability: "Available for Internships & Projects"
  },

  hero: {
    badge: "🚀 Welcome to my portfolio",
    titlePrefix: "Hi, I'm ",
    titleName: "Ariyan",
    titleSuffix: ".",
    typedRoles: [
      "Full-Stack Web Developer",
      "BRAC University CSE Student",
      "UI/UX & Frontend Designer",
      "Software Engineering Explorer"
    ],
    description: "Building modern web applications, scalable backends, and beautiful user interfaces with clean architecture."
  },

  stats: [
    { label: "Completed Projects", value: "15+" },
    { label: "Technologies Mastered", value: "12+" },
    { label: "GitHub Commits", value: "450+" },
    { label: "Years Coding", value: "3+" }
  ],

  skills: {
    languages: [
      { name: "JavaScript / ES6+", icon: "fab fa-js-square", level: "90%" },
      { name: "Python", icon: "fab fa-python", level: "85%" },
      { name: "C++", icon: "fas fa-code", level: "80%" },
      { name: "HTML5 & CSS3", icon: "fab fa-html5", level: "95%" },
      { name: "SQL", icon: "fas fa-database", level: "75%" }
    ],
    frameworks: [
      { name: "React.js / Next.js", icon: "fab fa-react", level: "88%" },
      { name: "Node.js & Express", icon: "fab fa-node-js", level: "82%" },
      { name: "Tailwind CSS / Vanilla CSS", icon: "fab fa-css3-alt", level: "90%" },
      { name: "FastAPI / Django", icon: "fas fa-server", level: "70%" }
    ],
    tools: [
      { name: "Git & GitHub", icon: "fab fa-github", level: "92%" },
      { name: "VS Code", icon: "fas fa-terminal", level: "95%" },
      { name: "Postman / REST APIs", icon: "fas fa-paper-plane", level: "85%" },
      { name: "Docker / Linux", icon: "fab fa-docker", level: "70%" },
      { name: "Figma", icon: "fab fa-figma", level: "78%" }
    ]
  },

  projects: [
    {
      id: "synapse-ai",
      title: "Synapse Analytics Platform",
      category: "web",
      image: "assets/images/project1.jpg",
      description: "An AI-powered data visualization and predictive dashboard with real-time model accuracy metrics and glassmorphic UI.",
      tags: ["React", "Node.js", "Python", "Chart.js"],
      demoUrl: "https://github.com/ari-yan7",
      githubUrl: "https://github.com/ari-yan7",
      featured: true,
      highlights: [
        "Interactive real-time data charts",
        "Responsive dark/light glassmorphic UI",
        "REST API integration with custom backend"
      ]
    },
    {
      id: "smart-home-hub",
      title: "NEXUS Smart Home Automation",
      category: "mobile",
      image: "assets/images/project2.jpg",
      description: "Mobile-first smart home ecosystem controller allowing real-time device tracking, routine creation, and energy analytics.",
      tags: ["JavaScript", "WebSockets", "CSS3", "PWA"],
      demoUrl: "https://github.com/ari-yan7",
      githubUrl: "https://github.com/ari-yan7",
      featured: true,
      highlights: [
        "Real-time WebSocket telemetry updates",
        "Custom SVG charts & touch-friendly sliders",
        "Offline-first PWA caching capabilities"
      ]
    },
    {
      id: "codeverse-ide",
      title: "CodeVerse Visual Dev Tool",
      category: "tools",
      image: "assets/images/project3.jpg",
      description: "Interactive visual code explorer and dependency graph generator for JavaScript and Python repositories.",
      tags: ["JavaScript", "Canvas API", "Graph Theory", "Monaco Editor"],
      demoUrl: "https://github.com/ari-yan7",
      githubUrl: "https://github.com/ari-yan7",
      featured: true,
      highlights: [
        "Dynamic node-graph renderer",
        "In-browser code parser & syntax highlighter",
        "Exportable architecture diagrams"
      ]
    }
  ],

  experience: [
    {
      period: "2023 - Present",
      role: "B.Sc. in Computer Science & Engineering",
      organization: "BRAC University",
      description: "Studying Data Structures, Algorithms, Software Engineering, Database Systems, Web Technologies, and Artificial Intelligence.",
      highlights: ["Dean's List Candidate", "Active Member of Computer Club / Programming Club"]
    },
    {
      period: "2024",
      role: "Frontend Developer Intern / Contributor",
      organization: "Tech Innovation Lab",
      description: "Developed responsive web components, optimized web application performance, and collaborated on modern UI/UX design implementations.",
      highlights: ["Built 10+ reusable UI components", "Improved page load speed by 35%"]
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = PORTFOLIO_DATA;
}
