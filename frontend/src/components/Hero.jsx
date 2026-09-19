import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <p className="hero-small">HELLO, I'M</p>

        <h1>
          Kavi <span>Arasu</span>
        </h1>

        <h2>Full Stack Web Developer</h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web
          applications using modern web technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View My Work
            <ArrowDown size={18} />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            GH &nbsp; GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            in &nbsp; LinkedIn
          </a>

        </div>
      </div>

      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>
    </section>
  );
}

export default Hero;