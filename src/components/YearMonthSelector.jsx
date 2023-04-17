import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import MOCK_DATA from "../data/MOCK_DATA2.json";

YearMonthSelector.propTypes = {
  setData: PropTypes.func,
};

export default function YearMonthSelector({ setData }) {
  const [yearChosen, setYearChosen] = useState(0);
  const [monthRange, setMonthRange] = useState([]);
  const [monthChosen, setMonthChosen] = useState(0);
  const data = MOCK_DATA;

  const years = data.map((transaction) => transaction.date.slice(-4)).sort();
  const uniqueYears = years.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  function handleYearChange(year) {
    setYearChosen(year);

    const filteredDataByYear = data.filter((transaction) => {
      const dataYear = transaction.date.slice(-4);
      return dataYear === year;
    });
    const allMonthRange = filteredDataByYear.map((transaction) =>
      transaction.date.slice(0, 2)
    );

    const newMonthRange = Array.from(new Set(allMonthRange)).sort();
    setMonthRange([...newMonthRange]);

    if (!newMonthRange.includes(monthChosen)) {
      setMonthChosen(0);
    }
  }

  function handleDataChange() {
    const filteredData = data.filter((transaction) => {
      const transactionMonth = transaction.date.slice(0, 2);
      const transactionYear = transaction.date.slice(-4);
      const transactionDate = transactionMonth + "/" + transactionYear;
      return transactionDate === monthChosen + "/" + yearChosen;
    });
    const newData = [...filteredData];
    setData(newData);
  }

  useEffect(() => {
    if (yearChosen !== 0 && monthChosen !== 0) {
      handleDataChange();
    }
  }, [yearChosen, monthChosen]);

  return (
    <section id="date-selector">
      <label htmlFor="year">Year</label>
      <select
        name="year"
        id="year"
        value={yearChosen}
        onChange={(e) => handleYearChange(e.target.value)}
      >
        <option value="">--Please select a year</option>
        {uniqueYears.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
      <label htmlFor="month">Month</label>
      <select
        name="month"
        id="month"
        value={monthChosen}
        onChange={(e) => setMonthChosen(e.target.value)}
      >
        <option value="">--Please select a month</option>
        {monthRange.map((month) => {
          return (
            <option key={month} value={month}>
              {month}
            </option>
          );
        })}
      </select>
    </section>
  );
}
