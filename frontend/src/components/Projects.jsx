const projects = [
  {
    title: "StreamFlex",
    description:
      "A Netflix-inspired full-stack authentication application.",
    tech: ["React", "Node.js", "Express"],
  },
  {
    title: "Bulk Mail App",
    description:
      "A full-stack application for sending bulk emails and managing mail history.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "WareFlow",
    description:
      "A responsive warehouse and logistics management website.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

function Projects() {
  return (
    <section className="section" id="projects">

      <div className="section-heading">
        <span>03.</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.title}>

            <div className="project-top">
              <span className="project-number">
                0{projects.indexOf(project) + 1}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;