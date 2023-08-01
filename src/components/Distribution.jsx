import React, { useState } from "react";
import { AgChartsReact } from "ag-charts-react";
import Data from "../data/MOCK_DATA_726.json";

class Catgory {
  constructor(category) {
    this.category = category;
    this.budget = this.calculateBudget();
    this.percent = this.calculatePercent(this.budget);
  }

  calculateBudget() {
    const categoryList = Data.filter(
      (transaction) => transaction.category === this.category
    );

    const categorySpend = Number(
      categoryList
        .reduce((accum, transaction) => accum + transaction.amount, 0)
        .toFixed(2)
    );

    return categorySpend;
  }

  calculatePercent(spend) {
    const calc = (spend / totalSpend) * 100;
    return Number(calc.toFixed(2));
  }
}

const totalSpend = Number(
  Data.reduce((accum, transaction) => accum + transaction.amount, 0).toFixed(2)
);
const allCategories = Data.map((t) => t.category);
const categories = Array.from(new Set(allCategories));
const optionData = categories.map((c) => new Catgory(c));

export default function Distribution() {
  const [options, setOptions] = useState({
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

  console.log(categories);
  console.log(optionData);

  return (
    <section id="distribution">
      <AgChartsReact options={options} />
    </section>
  );
}
