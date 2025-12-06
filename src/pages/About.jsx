import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="bg-white text-black py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h1
          data-aos="fade-up"
          className="about text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          About CompanyBase
        </h1>

        <h2>COMING SOON.....</h2>

      </div>
    </section>
  );
};

export default About;
