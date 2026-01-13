import React from "react";
import "../Business.css";

const Business = ({ setCurrentPage }) => (
  <section
    className="business-section"
    style={{
      minHeight: "100vh",
      padding: "80px 20px",
      textAlign: "center",
      animation: "fadeIn 1s ease-in-out",
    }}
  >
    <div className="business-content">
      <h1 className="business-title">Connect Business Solutions</h1>
      <p className="business-text">COMING SOON...</p>

      <div className="business-image" data-aos="fade-in"></div>

      {/* Exit / Back Button */}
      <div style={{ marginTop: "50px" }}>
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
  </section>
);

export default Business;
