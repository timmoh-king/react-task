import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[#0083ce] text-white text-[18px] text-font-semibold h-[42px] w-[136px] rounded-[5px]"
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
