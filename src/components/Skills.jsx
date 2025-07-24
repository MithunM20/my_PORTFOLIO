import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython, FaLinux } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiBootstrap, SiC, SiJavascript, SiGithub } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
  { name: "JavaScript", icon: <FaJs className="icon js" /> },
  { name: "React", icon: <FaReact className="icon react" /> },
  { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
  { name: "Express.js", icon: <SiExpress className="icon express" /> },
  { name: "MongoDB", icon: <SiMongodb className="icon mongo" /> },
  { name: "Git", icon: <FaGitAlt className="icon git" /> },
  { name: "GitHub", icon: <SiGithub className="icon github" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="icon bootstrap" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="icon tailwind" /> },
  { name: "MySQL", icon: <SiMysql className="icon mysql" /> },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
