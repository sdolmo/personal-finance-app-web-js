import React from "react";
import Distribution from "../components/Distribution";
import Spending from "../components/Spending";
import { TransactionsTable } from "../components/TransactionsTable";

export default function Transactions() {
  return (
    <>
      <h2>Transactions Page</h2>
      <Distribution />
      <Spending />
      <TransactionsTable />
    </>
  );
}
