// src/pages/Home.jsx
import React from "react";
import Carousel from "../components/layout/Carousel";
import ProductServices from "./Productservices";

const Home = ({ setCurrentPage }) => {
  return (
    <div>
      <Carousel setCurrentPage={setCurrentPage} />
      <ProductServices setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Home;
