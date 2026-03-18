import React from "react";
import { motion } from "framer-motion";
import "../css/projects.css";

function Projects() {

  const projects = [
    {
      title: "Food Ordering System",
      description: "React + Django online food ordering application",
      github: "https://github.com/SURENDAR-DHARMALINGAM/smartbite"
    },
    {
      title: "Online Examination System",
      description: "Python Tkinter based online examination platform",
      github: "https://github.com/SURENDAR-DHARMALINGAM/online_exam_system"
    },
    {
      title: "2d Chess Game",
      description: "Chess game developed using Python pygame package",
      github: "https://github.com/SURENDAR-DHARMALINGAM/2d_chess_game"
    },
    {
      title: "Portfolio",
      description: "Fully responsive portfolio developed using React.js",
      github: "https://github.com/SURENDAR-DHARMALINGAM/portfolio"
    },
  ];

  return (

    <div className="projects-container">

      <h1 className="projects-title">My Projects</h1>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="project-card"

            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span className="view-link">View on GitHub →</span>

          </motion.a>

        ))}

      </div>

    </div>

  );
}

export default Projects;