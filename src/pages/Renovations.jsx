import React from "react";
import ComingSoonPage from "../components/layout/ComingSoonPage";
import renovationBg from "../assets/images/renovation-bg.png";

const Renovations = ({ setCurrentPage }) => {
  return (
    <ComingSoonPage
      title="Connect Home Renovations"
      bgImage={renovationBg}
      pdfFile="/renovations-brochure.pdf"
      pdfName="Connect_Renovations_Brochure.pdf"
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Renovations;
