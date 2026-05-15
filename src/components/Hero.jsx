import "../styles/Hero.css";
import image from "../assets/image.jpg"; // Updated to the new profile image
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="massive-bg-text" aria-hidden="true">
        <motion.div
           initial={{ opacity: 0, x: -100 }}
           animate={{ opacity: 0.05, x: 0 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
        >
          DEVELOPER
        </motion.div>
      </div>
      
      <div className="hero-container container">
        <div className="hero-grid">
          
          <motion.div 
            className="hero-text-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="pulse-dot"></span> Available for work
            </motion.div>
            
            <h1 className="hero-hi">
              Crafting <span className="text-gradient hover-trigger">Digital</span><br/>
              Experiences.
            </h1>
            
            <p className="hero-subtitle">
              Hi, I'm <strong className="text-white">Mithun M. Nair</strong>. A passionate MERN Stack Developer transforming ideas into visually stunning and highly functional web applications.
            </p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a href="#projects" className="btn-primary">Explore Works</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </motion.div>

            <div className="hero-stats">
               <div className="stat-item">
                  <h4 className="stat-number">5+</h4>
                  <p className="stat-label">Projects</p>
               </div>
               <div className="stat-divider"></div>
               <div className="stat-item">
                  <h4 className="stat-number">MERN</h4>
                  <p className="stat-label">Expertise</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual-col"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="aesthetic-wrapper">
              <div className="aesthetic-blob blob-1"></div>
              <div className="aesthetic-blob blob-2"></div>
              <motion.div 
                className="hero-image-frame"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                 <div className="glass-overlay"></div>
                 {/* Applied specific framing class for the uploaded image */}
                 <div className="image-wrapper-inner">
                    <img src={image} alt="Mithun M Nair" className="hero-image-new framed-profile" />
                 </div>
              </motion.div>
              
              <motion.div 
                className="floating-card mern-card"
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              >
                  React / Node.js
              </motion.div>
              
              <motion.div 
                className="floating-card design-card"
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              >
                  UI / UX
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
