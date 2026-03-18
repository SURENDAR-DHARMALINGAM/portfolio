import React from "react";
import { motion } from "framer-motion";
import "../css/home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="home-container">


      <motion.div
        className="home-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/profile.jpg"   
          alt="profile"
          className="profile-img"
        />
      </motion.div>


      <motion.div
        className="home-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h3 className="hi">Hi, I'm</h3>

        <h3 className="name">SURENDAR D</h3>

        <h3 className="python">Python</h3>

        <h3 className="developer">Full Stack Developer</h3>


        <div className="home-buttons">

          <Link to="/projects">
            <button className="btn primary">View Projects</button>
          </Link>

          <a href="/resume.pdf" download>
            <button className="btn secondary">Download Resume</button>
          </a>

        </div>

      </motion.div>

    </div>
  );
}

export default Home;