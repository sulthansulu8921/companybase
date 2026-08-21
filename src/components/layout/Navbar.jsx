import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const projects = [
  { label: "Connect Integrated Telecom Services", page: "telecom" },
  { label: "NanoRays Solutions", page: "business" },
  { label: "Connect Engineering and Infrastructure", page: "engineering" },
  { label: "Suraksha Doors and Windows", page: "suraksha" },
  { label: "Connect Home Renovations", page: "renovations" },
];

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (e, page) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsMobileProjectsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleDropdown = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleMobileProjects = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
    setIsMobileProjectsOpen((prev) => !prev);
  };

  const getLogo = () => {
    switch ((currentPage || "").toLowerCase()) {
      case "telecom": return process.env.PUBLIC_URL + "/telecom.jpeg";
      case "business": return process.env.PUBLIC_URL + "/nanorays.png";
      case "engineering": return process.env.PUBLIC_URL + "/engineer.jpeg";
      case "suraksha": return process.env.PUBLIC_URL + "/groups.jpeg";
      case "renovations": return process.env.PUBLIC_URL + "/home.jpeg";
      default: return process.env.PUBLIC_URL + "/Groups.png";
    }
  };

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo — extreme left */}
        <div className="navbar-logo" onClick={(e) => handleNavClick(e, "home")} role="button" aria-label="Go to home">
          <img src={getLogo()} alt="Logo" className="logo-img" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu" aria-label="Main navigation">
          <ul className="navbar-links">
            <li className={currentPage === "home" ? "active" : ""} onClick={(e) => handleNavClick(e, "home")}>Home</li>
            <li className={currentPage === "about" ? "active" : ""} onClick={(e) => handleNavClick(e, "about")}>About</li>

            {/* Projects with dropdown */}
            <li
              className={`dropdown-parent${isDropdownOpen ? " mobile-open" : ""}${projects.some(p => p.page === currentPage) || currentPage === "production-services" ? " active" : ""}`}
              ref={dropdownRef}
              onMouseEnter={() => window.innerWidth > 768 && setIsDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth > 768 && setIsDropdownOpen(false)}
            >
              <span
                className="dropdown-toggle"
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    toggleDropdown(e);
                  } else {
                    handleNavClick(e, "production-services");
                  }
                }}
              >
                Projects
              </span>
              <ul className={`dropdown-menu${isDropdownOpen ? " show" : ""}`}>
                <li
                  className={currentPage === "production-services" ? "active-sub" : ""}
                  onClick={(e) => handleNavClick(e, "production-services")}
                >
                  All Projects Overview
                </li>
                {projects.map((p) => (
                  <li
                    key={p.page}
                    className={currentPage === p.page ? "active-sub" : ""}
                    onClick={(e) => handleNavClick(e, p.page)}
                  >
                    {p.label}
                  </li>
                ))}
              </ul>
            </li>

            <li className={currentPage === "reviews" ? "active" : ""} onClick={(e) => handleNavClick(e, "reviews")}>Reviews</li>
            <li className={`nav-contact-btn${currentPage === "contact" ? " active" : ""}`} onClick={(e) => handleNavClick(e, "contact")}>Contact</li>
          </ul>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className={`menu-toggle${isMenuOpen ? " open" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen((prev) => !prev);
          }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer${isMenuOpen ? " open" : ""}`} aria-hidden={!isMenuOpen}>
        <ul className="mobile-links">
          <li onClick={(e) => handleNavClick(e, "home")} className={currentPage === "home" ? "active" : ""}>Home</li>
          <li onClick={(e) => handleNavClick(e, "about")} className={currentPage === "about" ? "active" : ""}>About</li>

          {/* Mobile Projects Accordion */}
          <li className={`mobile-dropdown${isMobileProjectsOpen ? " open" : ""}`}>
            <div className="mobile-dropdown-header" onClick={toggleMobileProjects}>
              Projects <span className="mobile-arrow">&#8964;</span>
            </div>
            {isMobileProjectsOpen && (
              <ul className="mobile-dropdown-list">
                <li
                  onClick={(e) => handleNavClick(e, "production-services")}
                  className={currentPage === "production-services" ? "active-sub" : ""}
                >
                  All Projects Overview
                </li>
                {projects.map((p) => (
                  <li
                    key={p.page}
                    onClick={(e) => handleNavClick(e, p.page)}
                    className={currentPage === p.page ? "active-sub" : ""}
                  >
                    {p.label}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li onClick={(e) => handleNavClick(e, "reviews")} className={currentPage === "reviews" ? "active" : ""}>Reviews</li>
          <li onClick={(e) => handleNavClick(e, "contact")} className={`contact-mobile${currentPage === "contact" ? " active" : ""}`}>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
