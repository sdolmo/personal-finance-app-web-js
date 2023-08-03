import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";

import PropTypes from "prop-types";

Distribution.propTypes = {
  transactions: PropTypes.array,
};

class Category {
  constructor(category, percent) {
    this.category = category;
    this.percent = percent;
  }
}

export default function Distribution({ transactions }) {
  const totalSpend = Number(
    transactions
      .reduce((accum, transaction) => accum + transaction.amount, 0)
      .toFixed(2)
  );

  const allCategories = transactions.map((t) => t.category);
  const categories = Array.from(new Set(allCategories));

  const calculatePercent = (spend) => {
    const calc = (spend / totalSpend) * 100;
    return Number(calc.toFixed(2));
  };

  const calculateBudget = (category) => {
    const categoryList = transactions.filter(
      (transaction) => transaction.category === category
    );

    const categorySpend = Number(
      categoryList
        .reduce((accum, transaction) => accum + transaction.amount, 0)
        .toFixed(2)
    );

    return categorySpend;
  };

  const optionData = categories.map((category) => {
    const categorySpend = calculateBudget(category);
    const percentage = calculatePercent(categorySpend);

    return new Category(category, percentage);
  });

  const [options] = useState({
    data: optionData,
    series: [
      {
        type: "pie",
        calloutLabelKey: "category",
        angleKey: "percent",
        innerRadiusOffset: -70,
      },
    ],
  });

  return (
    <section id="distribution">
      <AgChartsReact options={options} />
    </section>
  );
}
