const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "REST API",
];

function Skills() {
  return (
    <section className="section" id="skills">

      <div className="section-heading">
        <span>02.</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <div className="skill-icon">
              {skill.charAt(0)}
            </div>

            <h3>{skill}</h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;