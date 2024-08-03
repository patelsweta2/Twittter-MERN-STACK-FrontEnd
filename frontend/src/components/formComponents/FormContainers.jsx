import React from "react";

const FormContainers = ({ children }) => {
  return (
    <div className="flex flex-col items-start justify-center">{children}</div>
  );
};

export default FormContainers;
