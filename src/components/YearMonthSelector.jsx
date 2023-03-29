import React from "react";
import MOCK_DATA from "../data/MOCK_DATA2.json";

export default function YearMonthSelector() {
  const data = MOCK_DATA;

  const years = data.map((transaction) => transaction.date.slice(-4));
  const uniqueYears = years.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  return (
    <section id="date-selector">
      <label htmlFor="year">Year</label>
      <select name="year" id="year">
        <option value="">--Please select an year</option>
        {uniqueYears.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
      <label htmlFor="month">Month</label>
      <select name="month" id="month">
        <option value="">--Please select an month</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </section>
  );
}
