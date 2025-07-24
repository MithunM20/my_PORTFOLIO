import "../styles/Contact.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-icon-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="icon-contact-box">
          <a
            href="mailto:mithunmnair103@gmail.com"
            className="contact-icon email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" />
            <span>mithunmnair103@gmail.com</span>
          </a>

          <a
            href="https://wa.me/9188330760"
            className="contact-icon phone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPhoneAlt className="icon" />
            <span>+91 9188330760</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
