
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa"; // ✅ Use FaLinkedinIn instead of FaLinkedin

import { useEffect, useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-name">Mithun M Nair</h3>

        <div className="social-links">
            <a href="https://github.com/MithunM20" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mithun-m-nair-94933b255/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>


        <p className="footer-copy">© 2025 Mithun M Nair. All rights reserved.</p>
      </div>

      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
}

export default Footer;
