import React, { useState } from "react";
import "./Navbar.css";

const projects = [
  { label: "Connect Integrated Telecom Services", page: "telecom" },
  { label: "Vibes Business Solution", page: "business" },
  { label: "Connect Engineering and Infrastructure", page: "engineering" },
  { label: "Suraksha Doors and Windows", page: "suraksha" },
  { label: "Connect Bin Care Solutions", page: "bincare" },
  { label: "Connect Home Renovations", page: "renovations" },
];

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
        return process.env.PUBLIC_URL + "/groups.jpeg";
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
        <div className="navbar-logo" onClick={() => handleNavClick("home")}>
          <img src={getLogo()} alt="Logo" className="logo" />
        </div>
      </div>

      <div className="nav-menu">
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li onClick={() => handleNavClick("home")}>Home</li>
          <li onClick={() => handleNavClick("about")}>About</li>

          {/* Projects — hover dropdown */}
          <li className="dropdown-parent">
            <span className="dropdown-toggle">
              Projects <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu">
              {projects.map((p) => (
                <li key={p.page} onClick={() => handleNavClick(p.page)}>
                  {p.label}
                </li>
              ))}
            </ul>
          </li>

          <li onClick={() => handleNavClick("reviews")}>Reviews</li>
          <li onClick={() => handleNavClick("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
