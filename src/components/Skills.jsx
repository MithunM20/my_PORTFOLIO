import "../styles/Skills.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiTailwindcss, SiBootstrap, SiGithub, SiRedux, SiNextdotjs, SiTypescript } from "react-icons/si";

const skillsRow1 = [
  { name: "React", icon: <FaReact className="icon" style={{color: "#61DAFB"}} /> },
  { name: "Node.js", icon: <FaNodeJs className="icon" style={{color: "#339933"}} /> },
  { name: "MongoDB", icon: <SiMongodb className="icon" style={{color: "#47A248"}} /> },
  { name: "Express", icon: <SiExpress className="icon" style={{color: "#f8fafc"}} /> },
  { name: "JavaScript", icon: <FaJs className="icon" style={{color: "#F7DF1E"}} /> },
  { name: "Next.js", icon: <SiNextdotjs className="icon" style={{color: "#ffffff"}} /> },
  { name: "HTML5", icon: <FaHtml5 className="icon" style={{color: "#E34F26"}} /> },
  { name: "CSS3", icon: <FaCss3Alt className="icon" style={{color: "#1572B6"}} /> },
];

const skillsRow2 = [
  { name: "TypeScript", icon: <SiTypescript className="icon" style={{color: "#3178C6"}} /> },
  { name: "Tailwind", icon: <SiTailwindcss className="icon" style={{color: "#06B6D4"}} /> },
  { name: "Redux", icon: <SiRedux className="icon" style={{color: "#764ABC"}} /> },
  { name: "Bootstrap", icon: <SiBootstrap className="icon" style={{color: "#7952B3"}} /> },
  { name: "MySQL", icon: <SiMysql className="icon" style={{color: "#4479A1"}} /> },
  { name: "Git", icon: <FaGitAlt className="icon" style={{color: "#F05032"}} /> },
  { name: "GitHub", icon: <SiGithub className="icon" style={{color: "#f8fafc"}} /> },
  { name: "Mongoose", icon: <SiMongodb className="icon" style={{color: "#800000"}} /> },
];

const SkillCard = ({ skill }) => (
  <div className="skill-card-modern glass">
    <div className="icon-wrapper-modern">
      {skill.icon}
    </div>
    <span className="skill-name-modern">{skill.name}</span>
  </div>
);

function Skills() {
  return (
    <section className="skills-section-modern" id="skills">
      <div className="container" style={{ paddingBottom: '2rem' }}>
        <motion.h2 
          className="section-title-modern text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          My Technical <span className="text-outline">Arsenal</span>
        </motion.h2>
      </div>

      <div className="marquee-container">
        {/* Top Row - Scrolls Left */}
        <div className="marquee-row">
          <div className="marquee-content scroll-left">
            {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Right */}
        <div className="marquee-row mt-4">
          <div className="marquee-content scroll-right">
            {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual gradients for fading edges of marquee */}
      <div className="marquee-gradient-left"></div>
      <div className="marquee-gradient-right"></div>
    </section>
  );
}

export default Skills;
