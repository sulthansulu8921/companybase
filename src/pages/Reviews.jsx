import React from "react";
import "../Reviews.css";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container" data-aos="fade-up">
        <h2 className="reviews-heading">
          Share your experience to improve our service quality
        </h2>

        <button
          className="review-btn"
          onClick={() =>
            window.open(
              " https://g.page/r/CRez92IdVlKeEBM/review ", 
              "_blank"
            )
          }
        >
          Write a Review
        </button>

        <h3 className="reviews-subheading">Exciting future is ready</h3>

        <div className="google-card">
          <h4>Google</h4>
          <p>Check us out on Google</p>
          <img
            src="/googlereview.png"
            alt="Google QR"
            className="google-qr"
          />
          <p className="google-info">
          Connect Group</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
