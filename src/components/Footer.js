import React from "react";
import "../css/footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        
        <div className="footer-social">
          <h3>Connect</h3>

          <a href="https://github.com/SURENDAR-DHARMALINGAM" target="_blank" rel="noreferrer" className="social-item github">
            <FaGithub /> GitHub
          </a>

          <a href="https://www.linkedin.com/in/surea" target="_blank" rel="noreferrer" className="social-item linkedin">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="mailto:dharmalingamsure007@gmail.com" className="social-item email">
            <FaEnvelope /> Email
          </a>

          
          <a href="https://wa.me/919943583433"
            target="_blank"
            rel="noreferrer"
            className="social-item whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>

        </div>

      </div>

      
      <div className="footer-bottom">
        <p>© 2026 Surendar Dharmalingam | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;