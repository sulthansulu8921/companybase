// src/pages/Home.jsx
import React from "react";
import Carousel from "../components/layout/Carousel";

const Home = ({ setCurrentPage }) => {
  return (
    <div>
      <Carousel setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
