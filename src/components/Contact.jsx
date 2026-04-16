import "../styles/Contact.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaPlane, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section-modern" id="contact">
      <div className="container">
        
        <div className="contact-split">
          <motion.div 
            className="contact-left-massive"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <h2 className="massive-talk">
               LET'S<br/>
               <span className="text-outline-talk">TALK</span>
             </h2>
             <p className="contact-subtitle-modern">
               Ready to start your next big project? Drop me a message and let's craft something beautiful together.
             </p>
             
             <div className="social-pills">
                <a href="https://github.com/MithunM20" target="_blank" rel="noopener noreferrer" className="social-pill">
                  <FaGithub /> GitHub
                </a>
                <a href="#" className="social-pill">
                  <FaLinkedinIn /> LinkedIn
                </a>
             </div>
          </motion.div>

          <motion.div 
             className="contact-right-panel"
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-card-premium glass">
              <div className="card-glare"></div>
              <h3 className="card-heading-premium">Get In Touch</h3>
              
              <div className="contact-methods-premium">
                <a href="mailto:mithunmnair103@gmail.com" className="contact-row">
                  <div className="icon-box bg-gradient-purple">
                    <FaEnvelope />
                  </div>
                  <div className="row-text">
                    <span className="row-label">Write an Email</span>
                    <span className="row-value">mithunmnair103@gmail.com</span>
                  </div>
                </a>

                <a href="https://wa.me/9188330760" target="_blank" rel="noopener noreferrer" className="contact-row">
                  <div className="icon-box bg-gradient-green">
                    <FaWhatsapp />
                  </div>
                  <div className="row-text">
                    <span className="row-label">WhatsApp Me</span>
                    <span className="row-value">+91 9188330760</span>
                  </div>
                </a>
              </div>
              
              <button className="premium-submit-btn">
                <span>Start Conversation</span>
                <FaPlane className="btn-icon-fly" />
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
