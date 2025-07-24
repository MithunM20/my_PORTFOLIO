import "../styles/Projects.css";

const projects = [
  {
    name: "Spotify Clone UI",
    description: "A React-based music player UI inspired by Spotify's design.",
    github: "https://github.com/MithunM20/SPOTIFY_frontend",
  },
  {
    name: "Contact Manager",
    description: "A MERN stack app to manage contacts with full CRUD operations.",
    github: "https://github.com/MithunM20/CONTACTapp_MERN",
  },
  {
    name: "Food Ordering Website",
    description: "A full-stack food ordering platform with admin and customer portals.",
    github: "https://github.com/MithunM20/Food_delivery_app",
  },
  {
    name: "Admission Management System",
    description: "A MERN-based platform for managing student admissions and payments.",
    github: "https://github.com/MithunM20/ADMISSION_MANAGEMENT_SYSTEM",
  },
  {
    name: "Burger King Frontend",
    description: "Recreated Burger King's homepage using HTML5 and CSS3.",
    github: "https://github.com/MithunM20/bking",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn github"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
