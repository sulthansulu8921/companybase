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
        <button
          onClick={() => setCurrentPage("connect-groups")}
          style={{
            background: "black",
            color: "whilte",
            border: "none",
            padding: "15px 30px",
            borderRadius: "30px",
            fontWeight: "bold",
            // cursor: "pointer",
            // transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#ddd")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
        >
          ← Back to Connect Groups
        </button>
      </div>
    </div>
  );
};

export default Telecom;
