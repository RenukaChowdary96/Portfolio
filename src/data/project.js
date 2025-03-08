const projects = [
    {
      title: "University Feedback and Analysis Portal",
      image: require("../data/university_portal.png"), // Correct relative path
      github: "https://github.com/yourusername/university-feedback-portal",
      description: "A portal that collects and analyzes university feedback from different locations.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], // Changed key name to `tech`
    },
    {
      title: "Paytm Clone",
      image: require("../data/paytm.png"),
      github: "https://github.com/yourusername/paytm-clone",
      description: "A Paytm clone with authentication, transactions, and balance checking.",
      tech: ["MERN", "MongoDB", "Express.js", "React", "Node.js", "JWT"],
    }, 
    {
      title: "Smart Task Management System",
      image: require("../data/smart task.jpg"),
      github: "https://github.com/yourusername/task-management-system",
      description: "A task management system with authentication and admin dashboard.",
      tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    },
    {
      title: "3D Gaming Project",
      image: require("../data/3d-gaming.png"),
      github: "https://github.com/yourusername/3d-gaming",
      description: "A 3D game project built using Unity and C#.",
      tech: ["Unity", "C#", "Blender"],
    },
    {
      title: "Weather API",
      image: require("../data/Weather.png"),
      github: "https://github.com/yourusername/weather-api",
      description: "A weather application fetching live data from APIs.",
      tech: ["React", "API", "CSS"],
    },
    {
      title: "Aqualogica Clone",
      image: require("../data/Aqalogica.png"),
      github: "https://github.com/yourusername/aqualogica-clone",
      description: "A clone of the Aqualogica website featuring a responsive UI.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
];

export default projects;
