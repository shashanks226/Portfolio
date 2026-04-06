export default function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal card" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p>{project.details}</p>

        <div className="buttons">
          <a href={project.live} className="btn">Live</a>
          <a href={project.github} className="btn-outline">GitHub</a>
        </div>
      </div>
    </div>
  );
}