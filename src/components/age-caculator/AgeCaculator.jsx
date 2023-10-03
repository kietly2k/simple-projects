import React from "react";
import InputList from "./InputList";
import Button from "./Button";
import "./AgeCaculator.css";
import DateNumbers from "./Date";
import { useState } from "react";

const AgeCaculator = () => {
  const [date, setDate] = useState({});
  const [age, setAge] = useState({
    days: 0,
    months: 0,
    years: 0,
  });

  const calculateAge = () => {
    if (date.years == 0 || date.months == 0 || date.days == 0) return;

    const currentDate = new Date();
    const birthDate = new Date(date.years, date.months, date.days);

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      let previousMonth = new Date(currentDate.getFullYear(),currentDate.getMonth(),0);
      days += previousMonth.getDate();
    }

    setAge({
      years: years,
      months: months,
      days: days,
    });
  };

  const handleDateInput = (date) => {
    setDate(date);
  };

  return (
    <section className="h-screen w-screen bg-age-calc-light-grey flex justify-center items-center font-poppins">
      <div className="bg-age-calc-white rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-[5rem] md:rounded-br-[8rem] p-5 mx-4 w-full max-w-2xl md:p-14">
        <InputList handleBirthDate={handleDateInput} />
        <Button calculate={calculateAge} />
        <DateNumbers days={age.days} months={age.months} years={age.years} />
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
