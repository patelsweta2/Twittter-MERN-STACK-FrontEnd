import React from "react";
import { useNavigate } from "react-router-dom";

const FormNavigationButtons = ({ text, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/auth/${path}`);
  };
  return (
    <div className="flex w-full items-start">
      <button
        className="w-44 rounded-md border border-black bg-green-300 font-medium p-2 hover:shadow-lg transition-shadow ease-in-out duration-200"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default FormNavigationButtons;
