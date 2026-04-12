import React from "react";
import ComingSoonPage from "../components/layout/ComingSoonPage";
import surakshaBg from "../assets/images/suraksha-bg.png";

const Suraksha = ({ setCurrentPage }) => {
  return (
    <ComingSoonPage
      title="Suraksha Doors and Windows"
      bgImage={surakshaBg}
      pdfFile="/suraksha-brochure.pdf"
      pdfName="Suraksha_Doors_Brochure.pdf"
      setCurrentPage={setCurrentPage}
    />
  );
};

export default Suraksha;
