import React from "react";
import YearMonthSelector from "../components/YearMonthSelector";
import Distribution from "../components/Distribution";
import Spending from "../components/Spending";
import { BasicTable } from "../components/BasicTable";

export default function Transactions() {
  return (
    <>
      <h2>Transactions Page</h2>
      <YearMonthSelector />
      <Distribution />
      <Spending />
      <BasicTable />
    </>
  );
}
