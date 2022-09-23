import React from "react";

const Placards = ({label, src, alt}) => {
  return (
    <div>
      <p>{label}</p>
      <img
        className="h-[376px] w-[306px] rounded-[5px]"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Placards;
