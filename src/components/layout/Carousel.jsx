import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css";

const images = [
  {
    src: process.env.PUBLIC_URL + "/carusal-img-3.png",
    title: "Connect Integrated Services",
    subtitle: "Complete Telecom & Network Infrastructure Solutions",
    page: "telecom",
  },
  {
    src: process.env.PUBLIC_URL + "/carusal-img-4.png",
    title: "Digital Connectivity & AI Network",
    subtitle: "High-Speed Global Optical & Wireless Connectivity",
    page: "telecom",
  },
  {
    src: process.env.PUBLIC_URL + "/carusal-img-1.jpeg",
    title: "Enterprise Technology Team",
    subtitle: "Professional Engineering & Infrastructure Services",
    page: "engineering",
  },
  {
    src: process.env.PUBLIC_URL + "/carusal-img-2.png",
    title: "Global Broadband Delivery",
    subtitle: "Dark Fiber & High-Bandwidth Solutions",
    page: "telecom",
  },
  {
    src: process.env.PUBLIC_URL + "/carusal-img-5.jpeg",
    title: "Corporate Management & AMC",
    subtitle: "Reliable & Trusted Business Solutions",
    page: "business",
  },
];

const Carousel = ({ setCurrentPage }) => {
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

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const mainIndex = currentIndex;
  const nextIndex = (currentIndex + 1) % images.length;

  const handleCardClick = (page) => {
    if (setCurrentPage && page) {
      setCurrentPage(page);
    }
  };

  return (
    <div
      className="circular-carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="circular-carousel-container">
        {/* Previous Button */}
        <button
          className="circular-btn prev-btn"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={36} strokeWidth={2.5} />
        </button>

        {/* 3-Card Stage: Left Small (Prev) | Center Big (Main) | Right Small (Next) */}
        <div className="circular-carousel-stage">
          {/* Left Small Card (Previous Image) */}
          <div
            className="circular-card side-card prev-card-side"
            onClick={prevSlide}
            role="button"
            tabIndex={0}
            aria-label="View Previous Slide"
          >
            <img
              src={images[prevIndex].src}
              alt={images[prevIndex].title}
              className="circular-img"
            />
          </div>

          {/* Center Big Card (Main Active Reading Image) */}
          <div
            className="circular-card main-card-center"
            onClick={() => handleCardClick(images[mainIndex].page)}
            role="button"
            tabIndex={0}
            style={{ cursor: setCurrentPage ? "pointer" : "default" }}
          >
            <img
              src={images[mainIndex].src}
              alt={images[mainIndex].title}
              className="circular-img"
            />
          </div>

          {/* Right Small Card (Upcoming Next Image) */}
          <div
            className="circular-card side-card next-card-side"
            onClick={nextSlide}
            role="button"
            tabIndex={0}
            aria-label="View Next Slide"
          >
            <img
              src={images[nextIndex].src}
              alt={images[nextIndex].title}
              className="circular-img"
            />
          </div>
        </div>

        {/* Next Button */}
        <button
          className="circular-btn next-btn"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <ChevronRight size={36} strokeWidth={2.5} />
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


