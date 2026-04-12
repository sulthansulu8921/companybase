import React from "react";
import ComingSoonPage from "../components/layout/ComingSoonPage";
import businessBg from "../assets/images/business-bg.png";

const Business = ({ setCurrentPage }) => {
  return (
    <ComingSoonPage
      title="Vibes Business Solution"
      bgImage={businessBg}
      pdfFile="/vibes-brochure.pdf"
      pdfName="Vibes_Business_Brochure.pdf"
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Business;
