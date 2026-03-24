import React, { useState } from "react";
import "./header.css";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

  // Framer Motion variants for menu
  const menuVariants = {
    closed: { x: "-100%" },
    open: { x: 0, transition: { type: "tween", duration: 0.3 } },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  const links = [
    { to: "/#hero", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/#skill", label: "Skills" },
    { to: "/#education", label: "Education" },
    { to: "/#contact", label: "Contact" },
  ];

  return (
    <header className="header">
      {/* Hamburger on Left */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Logo */}
      <div className="logo">
        <img
          src="https://cdn.dribbble.com/userupload/32592888/file/original-9d0fc7a615862fd15cb6f56100439022.jpg?format=webp&resize=400x300&vertical=center"
          alt="logo"
        />
      </div>

      {/* Menu with Framer Motion */}
      <motion.nav
        className="menu"
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        {links.map((link, i) => (
          <motion.div
            key={link.label}
            custom={i}
            variants={linkVariants}
            onClick={handleLinkClick}
          >
            <HashLink smooth to={link.to}>
              {link.label}
            </HashLink>
          </motion.div>
        ))}
      </motion.nav>
    </header>
  );
};

export default Header;