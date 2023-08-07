import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:ring-2
       focus:ring-blue-600 focus:ring-opacity-50 transition-colors duration-200"
    >
      &#8592; Back
    </button>
  );
}

export default BackButton;
