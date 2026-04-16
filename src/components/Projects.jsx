import { useRef, useEffect, useState } from "react";
import "../styles/Projects.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Spotify Clone UI",
    category: "Frontend Development",
    description: "A meticulously crafted music player interface inspired by Spotify. Features responsive layouts, custom audio controls, and an immersive dark theme.",
    github: "https://github.com/MithunM20/SPOTIFY_frontend",
    live: "https://stellular-macaron-ff5fad.netlify.app/",
    tags: ["React", "CSS3", "UI/UX", "Audio API"],
    color: "#1DB954"
  },
  {
    name: "Contact Manager",
    category: "Full Stack Application",
    description: "A robust MERN stack application allowing seamless contact management. Implements JWT authentication, RESTful APIs, and state-of-the-art security practices.",
    github: "https://github.com/MithunM20/CONTACTapp_MERN",
    live: "https://lucent-zabaione-2abf11.netlify.app/",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    color: "#4F46E5"
  },
  {
    name: "Food Ordering Platform",
    category: "E-Commerce",
    description: "An end-to-end food delivery solution with dedicated customer and admin panels. Handles real-time cart updates, order tracking, and dynamic menu management.",
    github: "https://github.com/MithunM20/Food_delivery_app",
    live: "https://foodie-hub-website.netlify.app/",
    tags: ["React", "Redux", "Node.js", "MongoDB"],
    color: "#F59E0B"
  },
  {
    name: "Admission System",
    category: "Enterprise System",
    description: "A comprehensive institutional platform streamlining the student enrollment process. Features automated fee calculation, document verification, and analytics dashboards.",
    github: "https://github.com/MithunM20/ADMISSION_MANAGEMENT_SYSTEM",
    live: "https://admission-management-system-jade.vercel.app/",
    tags: ["MERN", "Tailwind", "Analytics", "PDFGen"],
    color: "#06B6D4"
  },
  {
    name: "Gym Fitness Platform",
    category: "Fitness Web Application",
    description: "A modern, high-performance gym website featuring dynamic class schedules, animated components, and a fully responsive design tailored for fitness enthusiasts.",
    github: "https://github.com/MithunM20/Gym_website_react",
    live: "https://gym-website-react-zeta.vercel.app/",
    tags: ["React", "CSS3", "Animations", "Responsive"],
    color: "#EF4444"
  },
];

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);

  return (
    <div className="card-sticky-wrapper">
      <motion.div
        ref={cardRef}
        className="stacked-card glass"
        style={{
          top: `calc(12vh + ${index * 40}px)`,
          zIndex: index,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="stacked-card-inner">
          <div className="card-content-left">
            <span className="project-category" style={{ color: project.color }}>
              {project.category}
            </span>
            <h3 className="project-title-massive">{project.name}</h3>
            <p className="project-desc-detailed">{project.description}</p>

            <div className="project-tags-modern">
              {project.tags.map(tag => (
                <span key={tag} className="tag-modern">{tag}</span>
              ))}
            </div>

            <div className="project-actions-modern">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-modern-outline">
                <FaGithub /> Source Code
              </a>
              {project.live && project.live !== "#" ? (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-modern-solid" style={{ backgroundColor: project.color }}>
                  <FaExternalLinkAlt /> Live Preview
                </a>
              ) : (
                <a href={project.live} className="btn-modern-solid" style={{ backgroundColor: project.color }}>
                  <FaExternalLinkAlt /> Live Preview
                </a>
              )}
            </div>
          </div>

          <div className="card-visual-right" style={{ '--card-accent': project.color }}>
            <div className="visual-number">0{index + 1}</div>
            <div className="abstract-shape">
              <div className="shape-inner" style={{ background: `linear-gradient(135deg, ${project.color} 0%, transparent 100%)` }}></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

function Projects() {
  return (
    <section className="projects-section-modern" id="projects">
      <div className="container">

        <div className="section-header-modern">
          <motion.h2
            className="section-title-modern"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Selected <span className="text-outline">Works</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of my best projects, demonstrating my expertise in modern web technologies, scalable architectures, and beautiful UI/UX. Scroll to explore.
          </motion.p>
        </div>

        <div className="stacked-cards-container">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
