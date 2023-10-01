import React from "react";
import InputList from "./InputList";
import Button from "./Button";
import "./AgeCaculator.css";
import DateNumbers from "./Date";
import { useState } from "react";

const AgeCaculator = () => {
  const [birthDate, setBirthDate] = useState({});
  const [date, setDate] = useState({
    days: 0,
    months: 0,
    years: 0,
  });

  const calculate = () => {
    const date = new Date(birthDate.years, birthDate.months, birthDate.days);
    const currentDate = new Date();
    const newDate = new Date(currentDate - date);

    setDate((prev) => {
      const data = {
        days: newDate.getDay(),
        months: newDate.getMonth(),
        years: currentDate.getFullYear() - date.getFullYear(),
      };
      return data;
    });
  };

  const handleBirthDate = (date) => {
    setBirthDate(date);
  };

  return (
    <section className="h-screen w-screen bg-age-calc-light-grey flex justify-center items-center font-poppins">
      <div className="bg-age-calc-white rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-[5rem] md:rounded-br-[8rem] p-5 mx-4 w-full max-w-2xl md:p-14">
        <InputList handleBirthDate={handleBirthDate} />
        <Button calculate={calculate} />
        <DateNumbers days={date.days} months={date.months} years={date.years} />
      </div>
    </section>
  );
};

export default AgeCaculator;

// ### Body Copy

// - Font size (inputs): 32px

// ### Font

// - Family: [Poppins](https://fonts.google.com/specimen/Poppins)
// - Weights: 400i, 700, 800i
