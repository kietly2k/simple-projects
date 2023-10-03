import { useState } from "react";
import React from "react";

const Input = (props) => {
  const [data, setData] = useState("");

  return (
    <div className="max-w-[6rem] md:max-w-[8.2rem]">
      <label
        className={`text-xs font-bold text-age-calc-smokey-grey uppercase p-2 ${
          props.errorMessage !== "" && "text-age-calc-clr-light-red"
        }`}
      >
        {props.title}
      </label>
      <input
        type="number"
        className={`text-xl lg:text-2xl 
        font-bold
        outline-none
         uppercase w-full 
         border
         calc-hide-arrow-number
        border-age-calc-light-grey rounded-lg py-2 px-2 
        hover:border-age-calc-clr-primary 
        target:border-age-calc-clr-primary
          hover:cursor-pointer
         ${
           data !== "" ? "text-age-calc-off-black" : "text-age-calc-smokey-grey"
         }  ${
           props.errorMessage !== "" ? "border-age-calc-clr-light-red" : ""
         }`}
        onChange={(e) => {
          const value = e.target.value;
          setData(value);
          props.pushData(value);
        }}
        placeholder={props.placeholder}
        value={data}
      />
      <span
        className={`font-normal italic text-xs text-age-calc-clr-light-red ${
          props.errorMessage !== "" ? "block" : "hidden"
        }`}
      >
        {props.errorMessage}
      </span>
    </div>
  );
};

export default Input;
