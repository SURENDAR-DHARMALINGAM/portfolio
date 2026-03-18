import React, { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <h1 className="logo">P O R T F O L I O</h1>

      
      <div
      className={`hamburger ${menuOpen ? "active" : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
      >
      ☰
      </div>
      
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/" onClick={() => setMenuOpen(false)}><h2>Home</h2></Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}><h2>About</h2></Link>

        <Link to="/projects" onClick={() => setMenuOpen(false)}><h2>Projects</h2></Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}><h2>Contact</h2></Link>

      </div>

    </motion.nav>
  );
}

export default Navbar;