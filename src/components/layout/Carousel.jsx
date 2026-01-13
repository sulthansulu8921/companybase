import React, { useEffect, useState } from "react";
import "./Carousel.css";

const images = [
  process.env.PUBLIC_URL + "/carusal-img-1.jpeg",
  process.env.PUBLIC_URL + "/carusal-img-2.png",
  process.env.PUBLIC_URL + "/carusal-img-3.jpeg",
  process.env.PUBLIC_URL + "/carusal-img-4.png",
  process.env.PUBLIC_URL + "/carusal-img-5.jpeg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((img, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentIndex ? "active" : ""
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
};

export default Carousel;
