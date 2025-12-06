import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Suraksha.css";

const Suraksha = ({ setCurrentPage }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="suraksha-container text-center">
      <div className="content" data-aos="fade-up">
        <h1 className="title">SUREKSHA DOORS & WINDOWS</h1>
        <p className="subtitle">
          Premium-quality security doors and modern window systems — crafted for
          durability, safety, and style.
        </p>
      </div>

      {/* Back Button */}
      <div style={{ marginTop: "60px" }}>
        <button
          onClick={() => setCurrentPage("connect-groups")}
          className="back-btn"
        >
          ← Back to Connect Groups
        </button>
      </div>
    </section>
  );
};

export default Suraksha;
