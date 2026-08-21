import React from "react";
import "../../Footer.css";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = ({ setCurrentPage, currentPage }) => {
  const isNanoRays = (currentPage || "").toLowerCase() === "business";

  const handleNav = (page) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <img
            src={process.env.PUBLIC_URL + (isNanoRays ? "/nanorays.png" : "/vibe.jpeg")}
            alt="Logo"
            className="footer-logo"
          />
          <p className="footer-text">
            Perfection | Trust | Quality
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li onClick={() => handleNav("home")}>Home</li>
            <li onClick={() => handleNav("about")}>About Us</li>
            <li onClick={() => handleNav("reviews")}>Reviews</li>
            <li onClick={() => handleNav("contact")}>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <ul className="footer-contact">
            <li className="footer-line">
              <Phone size={18} />
              {isNanoRays ? (
                <span>
                  <a href="tel:+918921624007" className="footer-contact-link">+91 89216 24007</a>
                </span>
              ) : (
                <span>
                  <a href="tel:+919946229098" className="footer-contact-link">+91 99462 29098</a>
                  <br />
                  <a href="tel:+919895029756" className="footer-contact-link">+91 98950 29756</a>
                </span>
              )}
            </li>
            <li className="footer-line">
              <Mail size={18} />
              <span>
                {isNanoRays ? (
                  <a href="mailto:nanorayssolution@gmail.com" className="footer-contact-link">nanorayssolution@gmail.com</a>
                ) : (
                  <a href="mailto:Connect.ktn@gmail.com" className="footer-contact-link">Connect.ktn@gmail.com</a>
                )}
              </span>
            </li>

            {/* Address Block */}
            <li className="footer-line address-block">
              <MapPin size={22} className="address-icon" />
              <div className="address-text">
                <strong>
                  Managed By <br /> {isNanoRays ? "NanoRays Solutions" : "Vibes Solutions"}
                </strong>
                <span>Second Floor, Parangath Tower</span>
                <span>Kunnathurmedu Post, Kalmandapam</span>
                <span>Palakkad, Kerala 678013</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-socials">
            <a
              href={
                isNanoRays
                  ? "https://www.facebook.com/profile.php?id=61589731255947"
                  : "https://www.facebook.com/profile.php?id=61574164016612"
              }
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href={
                isNanoRays
                  ? "https://www.linkedin.com/company/109660526/admin/dashboard/"
                  : "https://www.linkedin.com/in/vibes-solutions-b898481b2"
              }
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={
                isNanoRays
                  ? "https://www.instagram.com/nanorays_/"
                  : "https://www.instagram.com/connectvibes.in/"
              }
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ConnectGroups. All rights reserved.</p>
      </div>

      {/* Floating Action Buttons */}
      <a
        href={isNanoRays ? "https://wa.me/919497669317" : "https://wa.me/919946229098"}
        target="_blank"
        rel="noreferrer"
        className="floating-icon left-icon icon-whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>

      <a
        href={isNanoRays ? "tel:+918921624007" : "tel:+919946229098"}
        className="floating-icon right-icon call-icon"
        aria-label="Call"
      >
        <FaPhoneAlt size={24} />
      </a>
    </footer>
  );
};

export default Footer;

