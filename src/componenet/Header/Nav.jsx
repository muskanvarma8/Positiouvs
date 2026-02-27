import React, { useState } from "react";
import "./../Header/Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(false);
  };
    


  return (
    <header className="navbar">

      <div className="logo">
        <span className="star">★</span>
        <span>Positivus</span>
      </div>

      {/* Hamburger */}
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`} >
        <li><a href="#about" onClick={handleClick}>About us</a></li>
        <li><a href="#services" onClick={handleClick}>Services</a></li>
        <li><a href="#usecases" onClick={handleClick}>Use Cases</a></li>
        <li><a href="#pricing" onClick={handleClick}>Pricing</a></li>
        <li><a href="#blog" onClick={handleClick}>Blog</a></li>
        <li>
          <a href="#contact" onClick={handleClick}>Request a quote</a>
        </li>
      </ul>

    </header>
  );
};

export default Nav;