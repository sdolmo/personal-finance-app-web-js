import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import Data from "../data/MOCK_DATA_726.json";

// Get the latest year of the data
//  string value (0-3)
const dates = Data.map((t) => t.date);
// console.log(dates);
const years = dates.map((date) => date.substring(0, 4));
// console.log(Array.from(new Set(years)).sort());
const latestYear = Array.from(new Set(years)).sort().at(-1);
// console.log(latestYear);
const latestYearData = Data.filter(
  (t) => t.date.substring(0, 4) === latestYear
);
console.log(latestYearData);

// const years = dates.
// Get the latest 4 months of that year
//  string value (5-6)
const latestYearMonths = latestYearData.map((t) => t.date.substring(5, 7));
const sortedMonths = Array.from(new Set(latestYearMonths)).sort();
const latestSortedMonths = sortedMonths.slice(sortedMonths.length - 4);
// console.log(latestSortedMonths);
// Get all amounts and add for same month
const currentYearMonth = latestSortedMonths.map(
  (mth) => `${latestYear}-${mth}`
);
console.log(currentYearMonth);
const result = [];
for (const prefix of currentYearMonth) {
  const data = latestYearData.filter((t) => t.date.includes(prefix));
  console.log(data);
  const totalMthAmt = data.reduce((acc, t) => acc + t.amount, 0);
  console.log(totalMthAmt);
  console.log(result.push({ prefix, amount: totalMthAmt }));
  console.log(result);
}
console.log(result);

// xKey = months
// yKey = Spend in month

export default function Spending() {
  const [options] = useState({
    title: {
      text: "Spending",
    },
    subtitle: {
      text: "in the last four months",
    },
    data: result,
    series: [
      {
        type: "column",
        xKey: "prefix",
        yKey: "amount",
      },
    ],
  });

  return (
    <section id="spending">
      <AgChartsReact options={options} />
    </section>
  );
}
