

// // src/components/layout/Navbar.jsx
// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = ({ currentPage, setCurrentPage }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   const handleNavClick = (page) => {
//     setCurrentPage(page);
//     setIsMenuOpen(false);
//   };

//   // Normalise page name to avoid case mismatch
//   const pageKey = (currentPage || "").toString().toLowerCase();

//   // Return logo path based on current page
//   const getLogo = () => {
//     switch (pageKey) {
//       case "telecom":
//         return "/telelogo.png";
//       case "engineering":
//         return "/engilogo.png";
//       case "suraksha":
//         return "/surakshalogo.png";
//       case "renovations":
//         return "/renologo.png";
//       case "bincare":           // <-- matches your page key
//         return "/Binlogo.png";  // file in public/ (or /assets/Binlogo.png)
//       case "business":
//         return "/business.png";
//       default:
//         return "/Groups.png";
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* LOGO */}
//         <div
//           className="navbar-logo"
//           onClick={() => handleNavClick("home")}
//           role="button"
//           aria-label="Go to home"
//         >
//           <img src={getLogo()} alt="Logo" className="logo nav-logo-fade" />
//         </div>

//         {/* LINKS */}
//         <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
//           <li className={pageKey === "home" ? "active" : ""} onClick={() => handleNavClick("home")}>Home</li>
//           <li className={pageKey === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>About</li>
//           <li className={pageKey === "reviews" ? "active" : ""} onClick={() => handleNavClick("reviews")}>Reviews</li>
//           <li className={pageKey === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>Contact</li>
//         </ul>

//         {/* HAMBURGER */}
//         <div className="menu-toggle" onClick={toggleMenu} aria-hidden>
//           <div className={`bar ${isMenuOpen ? "open" : ""}`} />
//           <div className={`bar ${isMenuOpen ? "open" : ""}`} />
//           <div className={`bar ${isMenuOpen ? "open" : ""}`} />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// src/components/layout/Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  // Normalize page name to avoid case mismatch
  const pageKey = (currentPage || "").toString().toLowerCase();

  // Return logo path based on current page (deployment-safe)
  const getLogo = () => {
    switch (pageKey) {
      case "telecom":
        return process.env.PUBLIC_URL + "/telecom.jpeg";
      case "engineering":
        return process.env.PUBLIC_URL + "/engineer.jpeg";
      case "suraksha":
        return process.env.PUBLIC_URL + "/surakshalogo.png";
      case "renovations":
        return process.env.PUBLIC_URL + "/home.jpeg";
      case "bincare":
        return process.env.PUBLIC_URL + "/bincare.jpeg";
      case "business":
        return process.env.PUBLIC_URL + "/vibes.jpeg";
      default:
        return process.env.PUBLIC_URL + "/Groupws.png";
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div
          className="navbar-logo"
          onClick={() => handleNavClick("home")}
          role="button"
          aria-label="Go to home"
        >
          <img src={getLogo()} alt="Coming Soon.." className="logo nav-logo-fade" />
        </div>

        {/* LINKS */}
      
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li
            className={pageKey === "home" ? "active" : ""}
            onClick={() => handleNavClick("home")}
          >
            Home
          </li>
          <li
            className={pageKey === "about" ? "active" : ""}
            onClick={() => handleNavClick("about")}
          >
            About
          </li>
          <li
            className={pageKey === "reviews" ? "active" : ""}
            onClick={() => handleNavClick("reviews")}
          >
            Reviews
          </li>
          <li
            className={pageKey === "contact" ? "active" : ""}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </li>
        </ul>
     
        {/* HAMBURGER */}
        <div className="menu-toggle" onClick={toggleMenu} aria-hidden>
          <div className={`bar ${isMenuOpen ? "open" : ""}`} />
          <div className={`bar ${isMenuOpen ? "open" : ""}`} />
          <div className={`bar ${isMenuOpen ? "open" : ""}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
