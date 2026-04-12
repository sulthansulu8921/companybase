import React from "react";
import ComingSoonPage from "../components/layout/ComingSoonPage";
import engineeringBg from "../assets/images/engineering-bg.png";

const Engineering = ({ setCurrentPage }) => {
  return (
    <ComingSoonPage
      title="Connect Engineering and Infrastructure"
      bgImage={engineeringBg}
      pdfFile="/engineering-brochure.pdf"
      pdfName="Connect_Engineering_Brochure.pdf"
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Engineering;
