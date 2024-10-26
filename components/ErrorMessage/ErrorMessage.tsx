import React from "react";

const ErrorMessage = ({ message }: { message: any }) => {
  return <p className="text-red-400 text-[1.2rem] font-semibold">{message}</p>;
};

export default ErrorMessage;
