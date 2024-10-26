import Spinner from "@/components/Spinner/Spinner";
import React from "react";

const loading = () => {
  return (
    <div className="h-screen bg-secondary">
      <Spinner />
    </div>
  );
};

export default loading;
