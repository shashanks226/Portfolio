import "./About.css";
import { motion } from "framer-motion";
import profile from "../../assets/images/profile.jpeg";

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <div className="about-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src={profile} alt="profile" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3>Hi, I'm Shashank 👋</h3>

          <p>
            I am a passionate Full Stack Developer with strong skills in building
            modern web applications. I specialize in React, Node.js, and backend
            development using Java and Spring Boot.
          </p>

          <p>
            I love solving real-world problems through technology and have worked
            on projects involving AI, IoT, and scalable systems.
          </p>

          <button className="about-btn">Download CV</button>
        </motion.div>

      </div>
    </section>
  );
}