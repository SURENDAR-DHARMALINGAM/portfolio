import React from "react";
import "../css/contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container">

      
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Feel free to reach out through any platform below
      </motion.p>

      <div className="contact-grid">

        
        <motion.a
          href="mailto:dharmalingamsure007@gmail.com"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FaEnvelope />
          <h3>Email</h3>
          <p>dharmalingamsure007@gmail.com</p>
        </motion.a>

       
        <motion.a
          href="tel:+919943583433"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <FaPhoneAlt />
          <h3>Phone</h3>
          <p>+91 99435 83433</p>
        </motion.a>

        
        <motion.a
          href="https://wa.me/919943583433"
          target="_blank"
          rel="noreferrer"
          className="contact-card whatsapp"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <FaWhatsapp />
          <h3>WhatsApp</h3>
          <p>Chat with me</p>
        </motion.a>

        
        <motion.a
          href="https://github.com/SURENDAR-DHARMALINGAM"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FaGithub />
          <h3>GitHub</h3>
          <p>View my projects</p>
        </motion.a>

       
        <motion.a
          href="https://linkedin.com/in/surea"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <FaLinkedin />
          <h3>LinkedIn</h3>
          <p>Connect professionally</p>
        </motion.a>

      </div>

    </div>
  );
}

export default Contact;