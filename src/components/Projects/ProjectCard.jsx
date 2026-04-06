import "./Projects.css";

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="card project-card" onClick={() => onClick(project)}>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>

      <div className="tech-stack">
        {project.tech.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}