import React from "react";

const Button = ({ label }) => {
  return (
    <button className="px-4 py-2 rounded-md bg-[#132332] text-[#F5F5F5] m-10">
      {label}
    </button>
  );
};

export default Button;
