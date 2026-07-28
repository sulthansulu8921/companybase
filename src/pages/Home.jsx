

// src/pages/Home.jsx
import React from "react";
import Carousel from "../components/layout/Carousel";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Carousel />
       {/* WhatsApp Icon - Left */}
            <a
              href="https://wa.me/919946229098"
              target="_blank"
              rel="noreferrer"
              className="floating-icon left-icon icon-whatsapp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={30} />
            </a>
      
            {/* Call Icon - Right */}
            <a
              href="tel:+919946229098"
              className="floating-icon right-icon call-icon"
              aria-label="Call"
            >
              <FaPhoneAlt size={28} />
            </a>
    </div>
  );
};

export default Home;
