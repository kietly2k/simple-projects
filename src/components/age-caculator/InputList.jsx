import React from "react";
import Input from "./Input";
import { useState, useEffect, useRef } from "react";

const InputList = (props) => {
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isFirstRender = useRef(true);
  const [date, setDate] = useState({
    days: 0,
    months: 0,
    years: 0,
  });

  const validateAndPushData = () => {
    // Return in form load
    if (
      date.days === 0 &&
      dayError === "" &&
      date.months === 0 &&
      monthError === "" &&
      date.years === 0 &&
      yearError === ""
    )
      return;

    setErrorMessage("");
    const currentDate = new Date();
    const dateInput = new Date(date.years, date.months, date.days);

    if (dateInput > currentDate) {
      setErrorMessage("Date input cannot greater than current date");
      return;
    }

    if (
      (["4", "6", "9", "11"].indexOf(date.months) > -1 && date.days > 30) ||
      (date.months == 4 && date.days > 29) ||
      (date.months == 4 && isLeapYear(date.years) == false && date.days > 28)
    ) {
      setErrorMessage(
        `month ${date.months} does not contains day ${date.days}`
      );
      return;
    }

    props.handleBirthDate(date);
  };

  const isLeapYear = (year) => {
    return (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
  };

  const getDay = (value) => {
    setDayError("");
    if (value === "") {
      setDayError("This field is required");
      return;
    }

    if (value > 31 || value < 1) {
      setDayError("Day value is invalid");
      return;
    }

    setDate((prev) => {
      let date = { ...prev };
      date.days = value;
      return date;
    });
  };

  const getMonth = (value) => {
    setMonthError("");
    if (value === "") {
      setMonthError("This field is required");
      return;
    }
    if (value > 12 || value < 1) {
      setMonthError("Month value is invalid");
      return;
    }

    setDate((prev) => {
      let data = { ...prev };
      data.months = value;
      return data;
    });
  };

  const getYear = (value) => {
    setYearError("");
    if (value === "") {
      setYearError("This field is required");
      return;
    }

    if (value > 9999 || value < 1753) {
      setYearError("Year value is invalid");
      return;
    }

    setDate((prev) => {
      let date = { ...prev };
      date.years = value;
      return date;
    });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    validateAndPushData();
  }, [date]);

  return (
    <>
      <div className="flex mb-6 gap-3 justify-center">
        <Input
          title="day"
          placeholder="DD"
          maxLength="31"
          pushData={getDay}
          errorMessage={dayError}
        />
        <Input
          title="month"
          placeholder="MM"
          maxLength="12"
          pushData={getMonth}
          errorMessage={monthError}
        />
        <Input
          title="year"
          placeholder="YYYY"
          maxLength="9999"
          pushData={getYear}
          errorMessage={yearError}
        />
      </div>
      <span
        className={`font-normal italic text-xs text-age-calc-clr-light-red text-center ${
          errorMessage !== "" ? "block" : "hidden"
        }`}
      >
        {errorMessage}
      </span>
    </>
  );
};

export default InputList;
