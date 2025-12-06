import React from "react";
import "./ConnectGroups.css";

const ConnectGroups = ({ setCurrentPage }) => {
  return (
    <div className="company-grid">

      <div className="company-card" onClick={() => setCurrentPage("telecom")}>
        <h3>CONNECT INTEGRATED TELECOM SERVICES</h3>
        <p>Advanced telecommunication solutions connecting the world.</p>
      </div>

      <div className="company-card" onClick={() => setCurrentPage("business")}>
        <h3>CONNECT BUSINESS LAUNCH SYSTEMS</h3>
        <p>Comprehensive business growth strategies.</p>
      </div>

      <div className="company-card" onClick={() => setCurrentPage("engineering")}>
        <h3>CONNECT ENGINEERING AND INFRASTRUCTURE</h3>
        <p>Building innovation with precision and excellence.</p>
      </div>

      <div className="company-card" onClick={() => setCurrentPage("suraksha")}>
        <h3>SURAKSHA DOORS AND WINDOWS</h3>
        <p>Premium, secure, and aesthetic home protection systems.</p>
      </div>

      <div className="company-card" onClick={() => setCurrentPage("bincare")}>
        <h3>CONNECT BIN CARE SOLUTIONS</h3>
        <p>Smart and sustainable waste management.</p>
      </div>

      <div className="company-card" onClick={() => setCurrentPage("renovations")}>
        <h3>CONNECT HOME RENOVATIONS</h3>
        <p>Transforming living spaces with modern design.</p>
      </div>

    </div>
  );
};

export default ConnectGroups;
