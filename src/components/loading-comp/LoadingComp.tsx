import React from "react";
import "./loading-comp.css"

const LoadingComp = () => {
  return (
    <div className="spinner-border text-light loading-cont" role="status">
      <span className="visually-hidden fs">Loading...</span>
    </div>
  );
};

export default LoadingComp;
