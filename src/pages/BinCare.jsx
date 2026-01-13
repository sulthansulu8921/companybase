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
       <div className="back-btn-container" data-aos="fade-up">
  <button
    className="exit-btn"
    onClick={() => setCurrentPage("production-services")}
  >
    ← Back to Product Services
  </button>
</div>

      </div>
    </section>
  );
};

export default BinCare;
