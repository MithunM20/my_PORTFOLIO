import '../styles/About.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="about-section-bento" id="about">
      <div className="container">
        
        <div className="bento-header">
          <motion.h2 
            className="section-title-modern"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The <span className="text-outline">Person</span>
          </motion.h2>
          <motion.p
             className="section-subtitle"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
          >
             Passionate about creating digital experiences that leave a lasting impression.
          </motion.p>
        </div>
        
        <div className="bento-grid">
          
          {/* Main Bio Card */}
          <motion.div 
            className="bento-item bento-bio glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Who I Am</h3>
            <p className="about-text-bento">
              I'm <span className="highlight-bento">Mithun M Nair</span>, a driven Full Stack Developer focused on the MERN ecosystem. Currently pursuing a BCA from IGNOU after completing my Computer Engineering diploma, I live at the intersection of clean architecture and stunning front-end design.
            </p>
          </motion.div>

          {/* Location/Time Card */}
          <motion.div 
            className="bento-item bento-location glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             <div className="globe-icon">🌍</div>
             <div className="location-text">
                <p className="loc-title">Based In</p>
                <h4>India</h4>
             </div>
             <div className="pulsing-radar"></div>
          </motion.div>

          {/* Stats Mini Cards */}
          <motion.div 
            className="bento-item bento-stat glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <h2>1+</h2>
             <p>Years Dev Exp</p>
          </motion.div>

          <motion.div 
            className="bento-item bento-stat glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
             <h2>5+</h2>
             <p>Real-World Projects</p>
          </motion.div>

          {/* Code Showcase Card */}
          <motion.div 
            className="bento-item bento-code glass code-window-bento"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
             <div className="window-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="window-body">
                <pre><code>
<span className="code-keyword">const</span> developer = {'{'}
  <span className="code-key">name</span>: <span className="code-string">"Mithun"</span>,
  <span className="code-key">role</span>: <span className="code-string">"Full Stack"</span>,
  <span className="code-key">coffee_level</span>: <span className="code-keyword">Infinity</span>
{'}'};
                </code></pre>
              </div>
          </motion.div>

          {/* Passion Card */}
          <motion.div 
            className="bento-item bento-passion glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="passion-visual">
              <div className="bar-chart">
                <div className="bar fill-1"></div>
                <div className="bar fill-2"></div>
                <div className="bar fill-3"></div>
                <div className="bar fill-4"></div>
              </div>
            </div>
            <div className="passion-text">
               <h3>Always Optimizing</h3>
               <p>Dedicated to writing highly performant and scalable code.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
