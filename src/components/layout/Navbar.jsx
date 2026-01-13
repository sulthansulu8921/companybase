

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };
const getLogo = () => {
  switch ((currentPage || "").toLowerCase()) {
    case "telecom":
      return process.env.PUBLIC_URL + "/telecom.jpeg";

    case "business":
      return process.env.PUBLIC_URL + "/vibes.jpeg";

    case "engineering":
      return process.env.PUBLIC_URL + "/engineer.jpeg";

    case "suraksha":
      return process.env.PUBLIC_URL + "/groups.jpeg"; // if you have a Suraksha logo later, replace here

    case "bincare":
      return process.env.PUBLIC_URL + "/bincare.jpeg";

    case "renovations":
      return process.env.PUBLIC_URL + "/home.jpeg";

    default:
      return process.env.PUBLIC_URL + "/Groups.png";
  }
};

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* ✅ DYNAMIC LOGO */}
        <div className="navbar-logo" onClick={() => handleNavClick("home")}>
          <img src={getLogo()} alt="Logo" className="logo" />
        </div>
</div>

      {/* MENU */}
      <div className="nav-menu">

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li onClick={() => handleNavClick("home")}>Home</li>
          <li onClick={() => handleNavClick("about")}>About</li>
          <li onClick={() => handleNavClick("production-services")}>
            Product & Services
          </li>
          <li onClick={() => handleNavClick("reviews")}>Reviews</li>
          <li onClick={() => handleNavClick("contact")}>Contact</li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
