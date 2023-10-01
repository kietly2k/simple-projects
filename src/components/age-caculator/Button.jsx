import React from "react";
import iconArrow from "./assets/images/icon-arrow.svg";

const Button = (props) => {
  return (
    <div className="relative mb-8">
      <hr className="absolute top-1/2 left-0 w-full" />
      <button
        onClick={() => {
          props.calculate();
        }}
        className="bg-age-calc-clr-primary rounded-full p-2 w-12 h-12 relative left-[44%] md:w-20 md:h-20 md:p-6 md:left-[86%] hover:bg-age-calc-off-black"
      >
        <img src={iconArrow} className="w-full h-full object-contain" />
      </button>
    </div>
  );
};

export default Button;
