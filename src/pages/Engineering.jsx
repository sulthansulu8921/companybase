import React from "react";

const Engineering = ({ setCurrentPage }) => {
  return (
    <div
      className="engineering-page"
      style={{
        background: "whilte",
        color: "black",
        minHeight: "100vh",
        padding: "80px 20px",
        textAlign: "center",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
         Connect Engineering
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "800px",
          margin: "0 auto 40px",
          color: "#ccc",
        }}
      >
        COMING SOON...
      </p>
{/* 
      <img
        src="https://source.unsplash.com/800x400/?engineering,construction"
        alt="Engineering"
        style={{
          width: "80%",
          maxWidth: "700px",
          borderRadius: "15px",
          boxShadow: "0 0 25px rgba(255,255,255,0.2)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      /> */}

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
  );
};

export default Engineering;
