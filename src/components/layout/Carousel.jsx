import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css";

const images = [
  {
    src: process.env.PUBLIC_URL + "/carusal-img-3.png",
    title: "Connect Integrated Services",
    subtitle: "Complete Telecom & Network Infrastructure Solutions",
  },
  {
    src: process.env.PUBLIC_URL + "/carusal-img-4.png",
    title: "Digital Connectivity & AI Network",
    subtitle: "High-Speed Global Optical & Wireless Connectivity",
  },
  {
    src: process.env.PUBLIC_URL + "/carusal-img-1.jpeg",
    title: "Enterprise Technology Team",
    subtitle: "Professional Engineering & Infrastructure Services",
  },
  {
    src: process.env.PUBLIC_URL + "/carusal-img-2.png",
    title: "Global Broadband Delivery",
    subtitle: "Dark Fiber & High-Bandwidth Solutions",
  },
  {
    src: process.env.PUBLIC_URL + "/carusal-img-5.jpeg",
    title: "Corporate Management & AMC",
    subtitle: "Reliable & Trusted Business Solutions",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const mainIndex = currentIndex;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div
      className="focus-carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="focus-carousel-container">
        {/* Previous Button */}
        <button
          className="focus-btn prev-btn"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Big Main Image (Left) + Small Preview Image (Right) */}
        <div className="focus-carousel-stage">
          {/* Featured Big Card */}
          <div className="focus-card main-card">
            <img
              src={images[mainIndex].src}
              alt={images[mainIndex].title}
              className="focus-img"
            />
            <div className="focus-card-overlay">
              <span className="focus-badge">Featured</span>
              <h3 className="focus-card-title">{images[mainIndex].title}</h3>
            </div>
          </div>

          {/* Small Preview Next Card (Circulation Peek) */}
          <div
            className="focus-card preview-card"
            onClick={nextSlide}
            role="button"
            tabIndex={0}
            aria-label="View Next Slide"
          >
            <img
              src={images[nextIndex].src}
              alt={images[nextIndex].title}
              className="focus-img"
            />
            <div className="preview-card-overlay">
              <span className="preview-label">Next Up →</span>
              <h4 className="preview-card-title">{images[nextIndex].title}</h4>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          className="focus-btn next-btn"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Navigation Indicators */}
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;


