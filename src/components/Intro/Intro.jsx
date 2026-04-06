import { motion } from "framer-motion";
import "./Intro.css";
import profile from "../../assets/images/profile.jpeg";
import { useState, useEffect } from "react";

export default function Intro() {
  const roles = ["Web Developer", "Frontend Developer", "React Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  // ⌨️ Typing animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(roles[index].slice(0, char + 1));
      setChar(char + 1);

      if (char === roles[index].length) {
        setTimeout(() => {
          setChar(0);
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1000);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [char, index]);

  return (
    <section id="intro" className="intro">
      <div className="intro-container">

        {/* LEFT CONTENT */}
        <div className="intro-left">
          <h1>Hey!</h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            It's Me Shashank
          </motion.h1>

          <h2>
            I am a <span className="typing">{text}</span>
          </h2>

          <p>
            I build scalable web apps and modern UI experiences that solve real-world problems.
          </p>

          <button className="btn">Download CV</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="intro-right">
          <div className="circle-bg">
            <img src={profile} alt="profile" />
          </div>
        </div>

      </div>
    </section>
  );
}