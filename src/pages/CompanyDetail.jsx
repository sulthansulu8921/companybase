// src/pages/CompanyDetail.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../CompanyDetail.css";

const CompanyDetail = ({ setCurrentPage, company }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // You can pass 'company' data as a prop or fetch dynamically
  const details = {
    name: company?.name || "Connect Group Company",
    description:
      company?.description ||
      "We specialize in providing innovative business and engineering solutions that connect people and technology seamlessly.",
    image:
      company?.image ||
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
    contact: company?.contact || "info@connectgroups.co.in",
    phone: company?.phone || "+91 98765 43210",
    location: company?.location || "Cochin, Kerala, India",
  };

  return (
    <div className="company-detail-container">
      <div className="company-header" data-aos="fade-down">
        <h1>{details.name}</h1>
        <p>www.connectgroups.co.in</p>
      </div>

      <div className="company-content">
        <div className="image-wrapper" data-aos="fade-right">
          <img src={details.image} alt={details.name} />
        </div>
        <div className="info-wrapper" data-aos="fade-left">
          <h2>About {details.name}</h2>
          <p>{details.description}</p>
          <div className="contact-box">
            <p>
              <strong>Email:</strong> {details.contact}
            </p>
            <p>
              <strong>Phone:</strong> {details.phone}
            </p>
            <p>
              <strong>Location:</strong> {details.location}
            </p>
          </div>
          <div className="back-btn-container" data-aos="fade-up">
  <button
    className="back-btn"
    onClick={() => setCurrentPage("production-services")}
  >
    ← Back to Product Services
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
