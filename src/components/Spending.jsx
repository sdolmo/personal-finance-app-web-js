import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";

import PropTypes from "prop-types";

Spending.propTypes = {
  transactions: PropTypes.array,
};

export default function Spending({ transactions }) {
  const dates = transactions.map((t) => t.date);
  const years = dates.map((date) => date.substring(0, 4));
  const latestYear = Array.from(new Set(years)).sort().at(-1);
  const latestYearData = transactions.filter(
    (t) => t.date.substring(0, 4) === latestYear
  );
  const latestYearMonths = latestYearData.map((t) => t.date.substring(5, 7));
  const sortedMonths = Array.from(new Set(latestYearMonths)).sort();
  const latestSortedMonths = sortedMonths.slice(sortedMonths.length - 4);
  const currentYearMonth = latestSortedMonths.map(
    (mth) => `${latestYear}-${mth}`
  );
  const result = [];
  for (const prefix of currentYearMonth) {
    const data = latestYearData.filter((t) => t.date.includes(prefix));
    const totalMthAmt = data.reduce((acc, t) => acc + t.amount, 0);
    result.push({ prefix, amount: totalMthAmt });
  }

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
