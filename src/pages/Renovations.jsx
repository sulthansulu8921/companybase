import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Renovations.css";

const Renovations = ({ setCurrentPage }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="renovations-container text-light text-center">
      <div className="content" data-aos="fade-up">
        <h1 className="title">CONNECT HOME RENOVATIONS</h1>
        <p className="subtitle">
         COMING SOON...
        </p>
      </div>


      {/* ✅ Back Button */}
      <div className="back-btn-container" data-aos="fade-up">
      <div className="back-btn-container" data-aos="fade-up">
  <button
    className="back-btn"
    onClick={() => setCurrentPage("production-services")}
  >
    ← Back to Product Services
  </button>
</div>

      </div>
    </section>
  );
};

export default Renovations;
