import React from "react";

const BinCare = ({ setCurrentPage }) => {
  return (
    <section
      style={{
        background: "#fffff",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          // background: "white",
          padding: "40px",
          borderRadius: "18px",
        
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#111",
            fontSize: "2.6rem",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Connect Bin Care Solutions
        </h1>

        <p
          style={{
            color: "#444",
            fontSize: "1.25rem",
            marginBottom: "18px",
            lineHeight: "1.7",
          }}
        > 
        COMING SOON...
        </p>

        {/* <p
          style={{
            color: "#555",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          Our solutions include automated bin tracking, fill-level
          monitoring, optimized route planning, and eco-friendly disposal
          solutions to support a greener environment.
          <br />
          <br />
          <strong>More details coming soon…</strong>
        </p> */}

        {/* Back Button */}
        <button
          onClick={() => setCurrentPage("home")}
          style={{
            padding: "10px 26px",
            background: "#fff",
            borderRadius: "30px",
            border: "1px solid #ddd",
            cursor: "pointer",
            fontSize: "1rem",
            boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
          }}
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
};

export default BinCare;
