import React from "react";
import ComingSoonPage from "../components/layout/ComingSoonPage";
import telecomBg from "../assets/images/telecom-bg.png";

const Telecom = ({ setCurrentPage }) => {
  return (
    <ComingSoonPage
      title="Connect Integrated Telecom Services"
      bgImage={telecomBg}
      pdfFile="/telecom-brochure.pdf"
      pdfName="Connect_Telecom_Brochure.pdf"
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Telecom;
