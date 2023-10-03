import React from "react";

const Date = ({ days, months, years }) => {
  return (
    <div className="flex flex-col font-extrabold italic lowercase text-5xl md:text-7xl mb-8 text-age-calc-off-black max-w-fit mx-auto">
      <h1>
        <span className="text-age-calc-clr-primary text-7xl md:text-9xl">
          {years ? years : "--"}
        </span>{" "}
        years
      </h1>
      <h1>
        <span className="text-age-calc-clr-primary text-7xl md:text-9xl">
          {months ? months : "--"}
        </span>{" "}
        months
      </h1>
      <h1>
        <span className="text-age-calc-clr-primary text-7xl md:text-9xl ">
          {days ? days : "--"}
        </span>{" "}
        days
      </h1>
    </div>
  );
};

export default Date;
