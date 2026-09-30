/* 
  PORTFOLIO CONFIGURATION FILE
  Edit this file to quickly update your portfolio content, personal info, projects, and skills.
*/

const PORTFOLIO_DATA = {
  personal: {
    name: "Mubtasim Ariyan",
    headline: "Computer Science Student @ BRAC University & Software Developer",
    bio: "Computer Science & Engineering student at BRAC University. Passionate about object-oriented design, algorithmic problem solving, Python, Java development, and building robust software solutions.",
    location: "Dhaka, Bangladesh",
    email: "ariyanmubtasim@gmail.com",
    github: "https://github.com/ari-yan7",
    linkedin: "https://www.linkedin.com/in/mubtasimariyan",
    twitter: "https://x.com/ari_yan7",
    resumeUrl: "#", // Add link to your PDF resume or Google Drive link
    availability: "Available for Internships & Collaborations"
  },

  hero: {
    badge: "🎓 BRAC University CSE Student",
    titlePrefix: "Hi, I'm ",
    titleName: "Mubtasim Ariyan",
    titleSuffix: ".",
    typedRoles: [
      "Computer Science Student @ BRAC University",
      "Python & Java Developer",
      "Software Engineering Explorer",
      "Problem Solver & Tech Enthusiast"
    ],
    description: "Building reliable software applications, exploring object-oriented systems, and solving algorithmic problems with Python & Java."
  },

  stats: [
    { label: "Completed Projects", value: "10+" },
    { label: "Languages Mastered", value: "5+" },
    { label: "GitHub Commits", value: "300+" },
    { label: "Years Coding", value: "2+" }
  ],

  skills: {
    languages: [
      { name: "Python", icon: "fab fa-python", level: "90%" },
      { name: "Java", icon: "fab fa-java", level: "88%" },
      { name: "C++", icon: "fas fa-code", level: "80%" },
      { name: "JavaScript / ES6+", icon: "fab fa-js-square", level: "82%" },
      { name: "HTML5 & CSS3", icon: "fab fa-html5", level: "85%" },
      { name: "SQL", icon: "fas fa-database", level: "78%" }
    ],
    frameworks: [
      { name: "Django / FastAPI (Python)", icon: "fas fa-server", level: "82%" },
      { name: "Spring Boot / Java Tech", icon: "fas fa-cubes", level: "75%" },
      { name: "Node.js & Express", icon: "fab fa-node-js", level: "75%" },
      { name: "React.js", icon: "fab fa-react", level: "75%" }
    ],
    tools: [
      { name: "Git & GitHub", icon: "fab fa-github", level: "90%" },
      { name: "VS Code & IntelliJ IDEA", icon: "fas fa-terminal", level: "92%" },
      { name: "MySQL / PostgreSQL", icon: "fas fa-database", level: "80%" },
      { name: "Postman / REST APIs", icon: "fas fa-paper-plane", level: "85%" },
      { name: "Linux / Bash", icon: "fab fa-linux", level: "78%" }
    ]
  },

  projects: [
    {
      id: "python-data-analytics",
      title: "PyStream Analytics Engine",
      category: "web",
      image: "assets/images/project1.jpg",
      description: "A Python-powered data processing & visualization dashboard built with FastAPI, Pandas, and interactive glassmorphic metrics.",
      tags: ["Python", "FastAPI", "Pandas", "JavaScript"],
      demoUrl: "https://github.com/ari-yan7",
      githubUrl: "https://github.com/ari-yan7",
      featured: true,
      highlights: [
        "Data stream processing pipeline in Python",
        "Automated statistical analytics generation",
        "Clean REST API integration and dashboard UI"
      ]
    },
    {
      id: "java-omnitask-system",
      title: "OmniTask Management System",
      category: "tools",
      image: "assets/images/project2.jpg",
      description: "Object-oriented task & resource management application developed using Java, OOP design patterns, and SQL relational database.",
      tags: ["Java", "OOP", "MySQL", "GUI"],
      demoUrl: "https://github.com/ari-yan7",
      githubUrl: "https://github.com/ari-yan7",
      featured: true,
      highlights: [
        "Clean Object-Oriented architecture & SOLID principles",
        "Relational database CRUD operations",
        "User authentication and role management"
      ]
    },
    {
      id: "algorithm-visualizer",
      title: "Graph Algorithm Visualizer",
      category: "tools",
      image: "assets/images/project3.jpg",
      description: "Interactive pathfinding & graph search algorithm visualizer implementing Dijkstra's, A*, BFS, and DFS algorithms.",
      tags: ["Python", "Algorithms", "Graph Theory", "GUI"],
      demoUrl: "https://github.com/ari-yan7",
      githubUrl: "https://github.com/ari-yan7",
      featured: true,
      highlights: [
        "Real-time visual node search execution",
        "Customizable graph obstacle grids",
        "Algorithm complexity step comparison"
      ]
    }
  ],

  experience: [
    {
      period: "2023 - Present",
      role: "B.Sc. in Computer Science & Engineering",
      organization: "BRAC University",
      description: "Studying Object-Oriented Programming (Java/Python), Data Structures, Algorithms, Database Management Systems, System Design, and Web Technologies.",
      highlights: ["Dean's List Candidate", "Active Member of Computer Club / Programming Club"]
    },
    {
      period: "2024",
      role: "Software Engineering & Academic Projects",
      organization: "BRAC University Coursework & Independent Dev",
      description: "Designed OOP software applications, relational database schemas, and Python automation scripts for academic and personal projects.",
      highlights: ["Implemented 10+ core algorithm projects", "Maintained 90%+ test coverage in Java/Python projects"]
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = PORTFOLIO_DATA;
}
