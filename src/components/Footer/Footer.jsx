import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2>Shashank</h2>
          <p>Building modern web apps with clean UI & scalable backend.</p>
        </div>

        {/* CENTER */}
        <div className="footer-links">
          <a href="#intro">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer-socials">
          <a href="https://github.com/yourusername" target="_blank">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/yourusername" target="_blank">
            <FaLinkedin />
          </a>

          <a href="mailto:youremail@gmail.com">
            <FaEnvelope />
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shashank. All rights reserved.</p>
      </div>

    </footer>
  );
}