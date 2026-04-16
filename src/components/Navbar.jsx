import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`navbar-modern ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="nav-pill glass">
          <a href="#hero" className="logo-modern">
            <span className="logo-dot"></span>
            Mithun
          </a>
          
          <ul className="nav-links-modern desktop-only">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Work</a></li>
          </ul>

          <div className="nav-actions">
            <a href="#contact" className="nav-contact-btn-modern desktop-only">Let's Talk</a>
            <div className="hamburger-modern mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className={`bar-m ${mobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`bar-m ${mobileMenuOpen ? 'open' : ''}`}></span>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-links">
              <li><a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Work</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mobile-contact-highlight">Let's Talk</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
