import React from "react";

const FormBodys = ({ children, handleSubmit, onFormSubmit }) => {
  return (
    <form className="w-full" onSubmit={handleSubmit(onFormSubmit)}>
      {children}
    </form>
  );
};

export default FormBodys;
