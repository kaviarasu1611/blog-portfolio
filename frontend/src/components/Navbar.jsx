import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          KAVI<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <div className="nav-social">
            <a href="https://github.com/" target="_blank">
              <span>GH</span>
            </a>

            <a href="https://linkedin.com/" target="_blank">
              <span>in</span>
            </a>
          </div>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;