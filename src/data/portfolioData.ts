export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
  image: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details: string;
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  verifyUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "I. Nikhil Reddy",
    fullName: "Idamakanti Nikhil Reddy",
    title: "Computer Science Engineering Student",
    subtitles: [
      "AI & Machine Learning Enthusiast",
      "Python & Data Science Developer",
      "Full Stack Web Creator",
      "Problem Solver & Tech Explorer"
    ],
    bio: "Passionate about Artificial Intelligence, Machine Learning, Data Science, and Full Stack Development. I enjoy solving real-world problems through technology, clean code, and intelligent systems.",
    aboutDetailed: [
      "I am a final-year B.Tech student in Computer Science Engineering (specializing in AI & Machine Learning) at Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai.",
      "My primary technical domains span Artificial Intelligence, Machine Learning algorithms (LSTM, CNN, Random Forest, XGBoost), Python development, SQL database design, and modern Web Application building.",
      "As a quick learner and proactive team player, I thrive in collaborative environments focused on translating complex data into impactful software solutions."
    ],
    contact: {
      email: "2706nikhil@gmail.com",
      phone: "+91 9346977100",
      location: "Chennai / Andhra Pradesh, India",
      linkedin: "https://linkedin.com/in/nikhil-reddy-idamakanti",
      github: "https://github.com/Nikhil2706-hue",
      codingPlatform: "https://leetcode.com/Nikhil2728",
      resumePdf: "/resume.pdf"
    },
    stats: [
      { label: "B.Tech CGPA", value: "8.01", suffix: "/ 10" },
      { label: "AI & Web Projects", value: "6+", suffix: "" },
      { label: "Certifications", value: "3+", suffix: "" },
      { label: "High School Grade", value: "100", suffix: "%" }
    ]
  },

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai",
      period: "Aug 2022 – May 2026",
      score: "GPA: 8.01 / 10",
      details: "Specialized curriculum focusing on Artificial Intelligence, Deep Learning, Machine Learning Algorithms, Data Structures, Relational Databases, and Full Stack Software Engineering.",
      highlights: [
        "Final year AI & ML specialization with active practical project work.",
        "Engineered predictive maintenance & e-commerce fraud detection models.",
        "Active contributor to departmental research and technical events."
      ]
    },
    {
      degree: "Intermediate (MPC) - Class XII",
      institution: "Sri Chaitanya Boys JR College, Nidamanuru, AP",
      period: "Completed Jun 2022",
      score: "Percentage: 72%",
      details: "Focus on Mathematics, Physics, and Chemistry (MPC) building a strong mathematical foundation for computer science.",
      highlights: [
        "Advanced Mathematics and Calculus problem solving.",
        "Analytical physics modeling and logical reasoning."
      ]
    },
    {
      degree: "Secondary Education - Class X",
      institution: "Sri Chaitanya High School, Punadipadu, AP",
      period: "Completed Mar 2020",
      score: "Percentage: 100% (GPA 10.0)",
      details: "Completed secondary education with top honors across science, mathematics, and analytical subjects.",
      highlights: [
        "Achieved perfect 100% grade distinction.",
        "School topper with distinction in science and mathematics."
      ]
    }
  ] as EducationItem[],

  skillCategories: [
    {
      title: "Programming",
      iconName: "Code2",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 75 },
        { name: "C", level: 70 },
        { name: "Data Structures & Algorithms", level: 80 }
      ]
    },
    {
      title: "Web Development",
      iconName: "Globe",
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 88 },
        { name: "React.js", level: 82 },
        { name: "Next.js 15", level: 80 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Machine Learning & AI",
      iconName: "BrainCircuit",
      skills: [
        { name: "TensorFlow & Keras", level: 85 },
        { name: "Scikit-learn", level: 88 },
        { name: "Pandas & NumPy", level: 90 },
        { name: "CNN & LSTM Architectures", level: 82 },
        { name: "OpenCV (Computer Vision)", level: 75 }
      ]
    },
    {
      title: "Databases & Tools",
      iconName: "Database",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 92 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "Google Colab", level: 90 }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "rul-prediction",
      title: "AI-Based Remaining Useful Life Prediction for Industrial Machines",
      category: "AI & Machine Learning",
      description: "Engineered an AI predictive maintenance model forecasting the remaining operational lifespan of industrial machinery using sensor telemetry data. Benchmarked LSTM, Random Forest, Linear Regression, and XGBoost algorithms.",
      tech: ["Python", "TensorFlow", "Flask", "LSTM", "XGBoost", "MySQL", "Scikit-Learn"],
      github: "https://github.com/Nikhil2706-hue",
      live: "https://github.com/Nikhil2706-hue",
      featured: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fraud-detection",
      title: "Adaptive Fraud Detection in E-Commerce Using Machine Learning",
      category: "Machine Learning",
      description: "Developed an adaptive fraud detection pipeline using supervised learning algorithms with real-time feedback loops to analyze e-commerce transaction streams and trigger automated risk flags.",
      tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Google Colab"],
      github: "https://github.com/Nikhil2706-hue",
      live: "https://github.com/Nikhil2706-hue",
      featured: true,
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "face-expression",
      title: "Face Expression Recognition System Using Machine Learning",
      category: "Deep Learning",
      description: "Built a Deep Convolutional Neural Network (CNN) to classify facial images into distinct emotion categories using data augmentation, batch normalization, and dropout regularization techniques.",
      tech: ["Python", "Keras", "TensorFlow", "OpenCV", "Deep Learning"],
      github: "https://github.com/Nikhil2706-hue",
      live: "https://github.com/Nikhil2706-hue",
      featured: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hotel-management",
      title: "Web & Mobile Application – Hotel Management System",
      category: "Web Development",
      description: "Created an interactive responsive hotel application for managing room reservations, customer check-in/out, billing calculations, and administrative staff management.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      github: "https://github.com/Nikhil2706-hue",
      live: "https://github.com/Nikhil2706-hue",
      featured: false,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "customer-management",
      title: "Customer Management System",
      category: "Software Development",
      description: "A complete CRUD application built with Python and MySQL database for storing, querying, modifying, and managing enterprise customer directory records efficiently.",
      tech: ["Python", "MySQL", "SQL Database", "CRUD"],
      github: "https://github.com/Nikhil2706-hue",
      live: "https://github.com/Nikhil2706-hue",
      featured: false,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sql-projects",
      title: "SQL Relational Database Projects Collection",
      category: "Database",
      description: "A comprehensive collection of database design projects showcasing advanced multi-table JOIN operations, 3NF normalization, stored procedures, triggers, views, and execution query optimization.",
      tech: ["MySQL", "SQL Queries", "Database Normalization", "Stored Procedures"],
      github: "https://github.com/Nikhil2706-hue",
      live: "https://github.com/Nikhil2706-hue",
      featured: false,
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
    }
  ] as Project[],

  certifications: [
    {
      title: "CCNA 1 – Introduction to Networks",
      issuer: "Cisco Networking Academy",
      date: "March 2024",
      badge: "Network Architecture & Protocols"
    },
    {
      title: "Ensemble Machine Learning Techniques",
      issuer: "Infosys Springboard",
      date: "March 2025",
      badge: "Bagging, Boosting & Random Forests"
    },
    {
      title: "Software Testing - Testing Techniques",
      issuer: "Infosys Springboard",
      date: "March 2025",
      badge: "QA, Functional & Automation Testing"
    }
  ] as Certification[],

  achievements: [
    {
      title: "IEEE Conference Paper",
      description: "Co-authored and presented research on AI/ML application paradigms in engineering.",
      tag: "Research & Publication"
    },
    {
      title: "AI & Machine Learning Innovation",
      description: "Built end-to-end predictive machine maintenance and e-commerce fraud defense applications.",
      tag: "Applied AI"
    },
    {
      title: "Academic Excellence Distinction",
      description: "Scored 100% (GPA 10.0) in Secondary Education and maintained a strong 8.01 CGPA in B.Tech.",
      tag: "Academic Honors"
    }
  ] as Achievement[]
};
