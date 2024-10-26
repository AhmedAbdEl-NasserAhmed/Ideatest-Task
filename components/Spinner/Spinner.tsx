import "./Spinner.scss";

import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
