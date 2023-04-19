import React, { useState } from "react";
import YearMonthSelector from "../components/YearMonthSelector";
import Distribution from "../components/Distribution";
import Spending from "../components/Spending";
import { BasicTable } from "../components/BasicTable";

import { DataContext } from "../Context";

import mockData from "../data/MOCK_DATA2.json";

export default function Transactions() {
  const [data, setData] = useState(mockData);

  return (
    <DataContext.Provider value={data}>
      <h2>Transactions</h2>
      <YearMonthSelector setData={setData} />
      <Distribution />
      <Spending />
      <BasicTable filteredData={data} />
    </DataContext.Provider>
  );
}
