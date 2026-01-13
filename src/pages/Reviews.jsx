import React from "react";
import "../Reviews.css";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-heading">

          Share your experience to improve our service quality
        </h2>

        <button
          className="review-btn"
          onClick={() =>
            window.open(
              "https://g.page/r/CRez92IdVlKeEBM/review",
              "_blank"
            )
          }
        >
          Write a Review
        </button>

        <h3 className="reviews-subheading">
          Exciting future is ready
        </h3>

         <img
            src={`${process.env.PUBLIC_URL}/googlereview..jpeg`}
            alt="Google QR"
            className="google-qr"
          />


        
      </div>
    </section>
  );
};

export default Reviews;
