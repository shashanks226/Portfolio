import { motion } from "framer-motion";
import "./Navbar.css";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <div className="logo">Shashank Kumar</div>

      {/* Menu */}
      <ul className="nav-links">
        <li><a href="#intro">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right Button */}
      <button className="hire-btn">Hey</button>
    </motion.nav>
  );
}