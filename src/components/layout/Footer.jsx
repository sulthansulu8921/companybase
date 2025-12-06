import React from "react";
import "../../Footer.css";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">
          <h3 className="footer-title">ConnectGroups</h3>
          <p className="footer-text">
            Your gateway to premium business solutions and partnerships.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li onClick={() => setCurrentPage("home")}>Home</li>
            <li onClick={() => setCurrentPage("reviews")}>Reviews</li>
            <li onClick={() => setCurrentPage("about")}>About Us</li>
            <li onClick={() => setCurrentPage("contact")}>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Info</h4>
          <ul className="footer-contact">

            <li className="footer-line">
              <Phone size={18} /> <span>+91 9895029756</span>
            </li>

            <li className="footer-line">
              <Mail size={18} /> <span>Connect.ktn@gmail.com</span>
            </li>

            {/* Address Block */}
            <li className="footer-line address-block">
              <MapPin size={22} className="address-icon" />
              <div className="address-text">
                <strong>Vibes Solutions</strong>
                <span>21/648 Second Floor</span>
                <span>Parangath Tower</span>
                <span>Kunnathurmedu Post</span>
                <span>Kalmandapam Palakkad</span>
                <span>Kerala 678013</span>
              </div>
            </li>

          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="footer-socials">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 ConnectGroups. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
