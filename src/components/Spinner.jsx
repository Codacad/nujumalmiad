// components/Spinner.jsx
import React from "react";
import "../css/Spinner.css";

const Spinner = () => (
  <div className="spinner">
    <div className="bullet-container">
      <div className="bullet"></div>
      <div className="bullet"></div>
      <div className="bullet"></div>
    </div>
  </div>
);

export default Spinner;
