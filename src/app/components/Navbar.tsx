"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./style/Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">Portfolio</div>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`navbar-menu ${isMobileMenuOpen ? "mobile-active" : ""}`}>
          <li className="menu-link">
            <a href="#hero">Home</a>
          </li>
          <li className="menu-link">
            <a href="#about">About</a>
          </li>
          <li className="menu-link">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-link">
            <a href="#skills">Skills</a>
          </li>
          <li className="menu-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
