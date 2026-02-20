import React, { useState } from "react";
import "./header.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking a link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://cdn.dribbble.com/userupload/32592888/file/original-9d0fc7a615862fd15cb6f56100439022.jpg?format=webp&resize=400x300&vertical=center"
          alt="logo"
        />
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

      {/* Menu */}
      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <HashLink smooth to="/#hero" onClick={handleLinkClick}>Home</HashLink>
        <HashLink smooth to="/#about" onClick={handleLinkClick}>About</HashLink>
        <HashLink smooth to="/#skill" onClick={handleLinkClick}>Skills</HashLink>
        <HashLink smooth to="/#education" onClick={handleLinkClick}>Education</HashLink>
        <HashLink smooth to="/#contact" onClick={handleLinkClick}>Contact</HashLink>
      </nav>
    </header>
  );
};

export default Header;