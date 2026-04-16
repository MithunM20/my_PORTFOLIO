import { FaGithub, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Footer.css";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-modern">
      <div className="footer-content-wrapper">
        <div className="footer-massive-text-container">
          <h2 className="footer-huge-text">MITHUN</h2>
        </div>
        
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <h4 className="footer-col-title">About</h4>
            <p className="footer-desc">
              MERN Stack Developer focused on crafting premium, scalable, and immersive digital experiences. Let's create something extraordinary together.
            </p>
          </div>
          
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-modern">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-col social-col">
            <h4 className="footer-col-title">Socials</h4>
            <div className="footer-social-links">
              <a href="https://github.com/MithunM20" target="_blank" rel="noopener noreferrer" className="social-pill-sm">
                  <FaGithub /> Github
              </a>
              <a href="https://www.linkedin.com/in/mithun-m-nair-94933b255/" target="_blank" rel="noopener noreferrer" className="social-pill-sm">
                  <FaLinkedinIn /> LinkedIn
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-pill-sm">
                  <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Mithun M Nair. All rights reserved.</p>
          <div className="footer-status">
            <span className="pulse-dot-sm"></span> Available for new opportunities
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showButton && (
          <motion.button 
            className="scroll-to-top-modern" 
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;
