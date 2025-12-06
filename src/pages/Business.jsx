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
        <button
          onClick={() => setCurrentPage("connect-groups")}
          style={{
            background: "white",
            color: "black",
            border: "none",
            padding: "15px 30px",
            borderRadius: "30px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#ddd")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
        >
          ← Back to Connect Groups
        </button>
      </div>
    </div>
  </section>
);

export default Business;
