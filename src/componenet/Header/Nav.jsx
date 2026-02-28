import React, { useRef, useState } from "react";
import "./../Header/Nav.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  const menuRef = useRef(null);
  const [menu, setMenu] = useState("close");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setMenu("close");
    }
  };

  useGSAP(() => {
    if (menu === "open") {
      gsap.to(menuRef.current, {
        height: "100%",
        duration: 0.8,
      });
    } else {
      gsap.to(menuRef.current, {
        height: "0%",
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, [menu]);

  return (
    <header className="navbar">

      <div className="logo">
        <span className="star">★</span>
        <span>Positivus</span>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links desktop">
        <li onClick={() => scrollToSection("about")}>About us</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("usecases")}>Use Cases</li>
        <li onClick={() => scrollToSection("pricing")}>Pricing</li>
        <li onClick={() => scrollToSection("blog")}>Blog</li>
        <li className="quote-btn" onClick={() => scrollToSection("contact")}>
          Request a quote
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="menu-btn" onClick={() => setMenu("open")}>
        ☰
      </div>

      {/* GSAP Mobile Full Screen Menu */}
      <div ref={menuRef} className="gsap-menu">

        <div className="close-btn" onClick={() => setMenu("close")}>
          ✕
        </div>

        <div className="menu-links">
          <div onClick={() => scrollToSection("about")}>About us</div>
          <div onClick={() => scrollToSection("services")}>Services</div>
          <div onClick={() => scrollToSection("usecases")}>Use Cases</div>
          <div onClick={() => scrollToSection("pricing")}>Pricing</div>
          <div onClick={() => scrollToSection("blog")}>Blog</div>
          <div  onClick={() => scrollToSection("contact")}>
            Request a quote
          </div>
        </div>

      </div>

    </header>
  );
};

export default Nav;