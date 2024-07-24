import React, { useState, useEffect } from "react";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header id="home" className={menuOpen ? "menu-open" : ""}>
      <nav id="nav-wrap" className={menuOpen ? "open" : ""}>
        <button className="mobile-btn" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </button>
        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume" onClick={closeMenu}>
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={0.5}>{name ? `I'm ${name}.` : null}</TypeWriter>
          </h1>
          <h3>
            {/* Based in {city}. <span>{occupation}</span>. {description}. */}
            Turning coffee into code, <span>one line at a time</span>. Passionate about building the future with Code.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
