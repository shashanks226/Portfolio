import "./Skills.css";
import skills from "../../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            className="skills-card"
            whileHover={{ y: -10 }}
          >
            <h3>{group.category}</h3>

            <div className="skill-items">
              {group.items.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}