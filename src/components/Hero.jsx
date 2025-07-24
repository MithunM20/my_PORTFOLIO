import "../styles/Hero.css";
import image from "../assets/image.jpg"; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-hi">Hi!</h1>
          <h2 className="hero-name">I'm Mithun M. Nair</h2>
          <p className="hero-subtitle">MERN Stack Developer | Passionate Coder</p>
        </div>
        <div className="hero-image">
          <img src={image} alt="Developer Avatar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
