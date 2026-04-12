import React from "react";
import ComingSoonPage from "../components/layout/ComingSoonPage";
import bincareBg from "../assets/images/bincare-bg.png";

const BinCare = ({ setCurrentPage }) => {
  return (
    <ComingSoonPage
      title="Connect Bin Care Solutions"
      bgImage={bincareBg}
      pdfFile="/bincare-brochure.pdf"
      pdfName="Connect_BinCare_Brochure.pdf"
      setCurrentPage={setCurrentPage}
    />
  );
};

export default BinCare;
