import "./Projects.css";
import projects from "../../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <motion.div
            className="project-card"
            key={i}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <img src={p.image} alt={p.title} />

            <div className="card-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="tech">
                {p.tech.map((t, index) => (
                  <span key={index}>{t}</span>
                ))}
              </div>

              <div className="buttons">
                <a href={p.github}>GitHub</a>
                <a href={p.demo}>Live</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}