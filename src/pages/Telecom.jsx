import React from "react";

const Telecom = ({ setCurrentPage }) => {
  return (
    <div
      className="telecom-page"
      style={{
        background:"whilte",
        color: "black",
        minHeight: "100vh",
        padding: "80px 20px",
        textAlign: "center",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        Connect Telecom
      </h1>

      <h1>Coming Soon...</h1>

      {/* Back Button */}
      <div style={{ marginTop: "60px" }}>
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
  );
};

export default Telecom;
